---
title: "Small signal analysis of CE configuration - small signal hybrid-pi model for mid and low frequency (Gain, Input and output impedance)"
subject: "SOLID STATE DEVICES"
module: "Module 2: BJT amplifiers: RC coupled amplifier –Design"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f83"
status: "completed"
scrapedAt: "2026-05-23T16:18:41.233Z"
---
# SOLID STATE DEVICES: Module 2: BJT Amplifiers: RC Coupled Amplifier – Design

## Topic: Small Signal Analysis of CE Configuration - Small Signal Hybrid-Pi Model for Mid and Low Frequency (Gain, Input and Output Impedance)

**Course Outcomes Alignment:**

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4)** - This topic builds upon biasing by analyzing the AC performance, which is crucial for amplifier design.
*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3)** - This topic directly addresses the small-signal analysis of BJT amplifiers using the hybrid-pi model.

---

### Introduction to Small-Signal Analysis

Amplifiers are designed to amplify AC signals, while the transistor itself is biased with DC to operate in its active region. Small-signal analysis allows us to analyze the AC behavior of the amplifier circuit separately from its DC behavior. We assume that the AC input signal is "small" enough such that the transistor operates in a linear region around its Q-point.

**Key Concept:** **Superposition Theorem** is implicitly used. We analyze the DC and AC circuits independently and then combine their effects.

**Reference:** Boylested & Nashelsky, Chapter 6: "Small-Signal Operation and Models"

---

### The Hybrid-Pi Model (Mid-Frequency)

The hybrid-pi model is an equivalent circuit model that represents the internal behavior of a BJT when operating with small AC signals. It is derived from the **Ebers-Moll model** by considering the linearized behavior around the Q-point.

**Key Components of the Mid-Frequency Hybrid-Pi Model:**

*   **Voltage-controlled current source ($g_m v_{\pi}$):** This represents the amplification process. The output current is proportional to the voltage across the internal base-emitter junction ($v_{\pi}$).
    *   $g_m$: Transconductance, a measure of how effectively the input voltage controls the output current.
    *   $v_{\pi}$: The small-signal voltage across the internal base-emitter junction.
*   **Internal base resistance ($r_{\pi}$):** This represents the resistance of the base region.
    *   $r_{\pi} = \beta \cdot r_e'$, where $r_e'$ is the internal emitter resistance.
*   **Internal emitter resistance ($r_e'$):** This is the dynamic resistance of the forward-biased base-emitter junction.
    *   $r_e' = \frac{V_T}{I_E}$, where $V_T$ is the thermal voltage ($V_T \approx 26$ mV at room temperature) and $I_E$ is the DC emitter current.
*   **Output resistance ($r_o$):** This represents the Early effect, which causes the collector current to vary with the collector-emitter voltage ($v_{CE}$).
    *   $r_o = \frac{V_A}{I_C} = \frac{\beta V_A}{I_E}$, where $V_A$ is the Early voltage and $I_C$ is the DC collector current.

**Figure:** A typical representation of the hybrid-pi model connected between the internal terminals of the BJT.

**Important Relationships:**

*   $v_{\pi} = v_{be}$ (small-signal base-emitter voltage)
*   $i_b = v_{\pi} / r_{\pi}$ (small-signal base current)
*   $i_c = g_m v_{\pi}$ (small-signal collector current)
*   $g_m = \frac{I_C}{V_T} = \frac{\alpha}{r_e'}$
*   $\beta = g_m r_{\pi}$

**Reference:** Sedra & Smith, Chapter 5.3: "The BJT as an Amplifier: The Hybrid-pi Model"

---

### CE Amplifier Small-Signal Analysis using Hybrid-Pi Model (Mid-Frequency)

Let's analyze a common-emitter (CE) amplifier with a typical biasing and coupling network. We will derive expressions for voltage gain ($A_v$), current gain ($A_i$), input impedance ($Z_{in}$), and output impedance ($Z_{out}$) in the mid-frequency range.

**Typical CE Amplifier Circuit:**

Consider a CE amplifier with:
*   Voltage divider biasing.
*   Emitter resistor ($R_E$) bypassed by a capacitor ($C_{E2}$).
*   Collector resistor ($R_C$).
*   Coupling capacitors ($C_{C1}$, $C_{C2}$).

**Steps for Analysis:**

1.  **DC Analysis:** Determine the Q-point ($I_C$, $V_{CE}$) by analyzing the DC equivalent circuit. This is crucial for calculating $r_e'$ and $g_m$.
2.  **AC Equivalent Circuit:**
    *   Replace DC voltage sources with short circuits.
    *   Replace DC current sources with open circuits.
    *   Replace capacitors ($C_{C1}$, $C_{C2}$, $C_{E2}$) with short circuits (assuming they behave as shorts at mid-frequencies).
    *   Replace transistors with their small-signal hybrid-pi model.
3.  **Analyze the AC Equivalent Circuit:** Solve for the desired parameters (gain, impedance).

**Mid-Frequency Analysis:**

Assuming capacitors are short circuits, the AC equivalent circuit simplifies.

**Example Circuit and Analysis:**

Let's analyze a CE amplifier with voltage divider biasing and an emitter bypass capacitor.

**Circuit Components:**
*   $R_1$, $R_2$: Base resistors.
*   $R_C$: Collector resistor.
*   $R_E$: Emitter resistor.
*   $C_{E2}$: Emitter bypass capacitor.
*   $C_{C1}, C_{C2}$: Coupling capacitors.
*   $V_{in}$: Input voltage source.
*   $R_{s}$: Source resistance.
*   $R_L$: Load resistance.

**AC Equivalent Circuit (Mid-Frequency):**

*   The input signal $v_{in}$ is applied through $C_{C1}$ to the base.
*   The emitter is connected to ground through $C_{E2}$ (acting as a short).
*   The collector is connected to $R_C$ and then to the power supply (ground in AC).
*   The load $R_L$ is connected to the collector through $C_{C2}$.

**Simplified Mid-Frequency Model:**

We can consider the impedance seen by the source. The input signal $v_{s}$ is applied to the amplifier.

**1. Voltage Gain ($A_v = \frac{v_{out}}{v_{in}}$)**

*   In the simplified mid-frequency circuit (with $C_{E2}$ as a short), the emitter is effectively grounded.
*   The voltage across the collector resistor $R_C$ and the load resistance $R_L$ determines the output voltage. These are in parallel.
*   $v_{out} = -i_c (R_C || R_L)$
*   We know $i_c = g_m v_{\pi}$.
*   Since the emitter is bypassed, $v_{\pi} = v_{be} = v_{in}$.
*   Therefore, $v_{out} = -g_m v_{in} (R_C || R_L)$
*   **$A_v = \frac{v_{out}}{v_{in}} = -g_m (R_C || R_L)$**

**Important Note:** The negative sign indicates a 180-degree phase shift, characteristic of CE amplifiers.

**2. Current Gain ($A_i = \frac{i_{out}}{i_{in}}$)**

*   $i_{out}$ is the current flowing into the load $R_L$.
*   $i_{out} = \frac{v_{out}}{R_L} = \frac{-g_m v_{in} (R_C || R_L)}{R_L}$
*   $i_{in}$ is the current flowing into the base of the transistor.
*   $i_{in} = i_b = \frac{v_{in}}{r_{\pi}}$
*   **$A_i = \frac{i_{out}}{i_{in}} = \frac{-g_m v_{in} (R_C || R_L)/R_L}{v_{in}/r_{\pi}} = -g_m \frac{r_{\pi}}{R_L} (R_C || R_L)$**
*   Using $g_m r_{\pi} = \beta$:
*   **$A_i = -\beta \frac{(R_C || R_L)}{R_L}$**

**3. Input Impedance ($Z_{in}$)**

*   The input impedance seen by the source $v_{in}$ is the impedance looking into the base of the transistor, considering any resistors in the base biasing network.
*   Looking into the base, we see $r_{\pi}$.
*   The voltage divider biasing network ($R_1 || R_2$) is connected to the base.
*   Therefore, the input impedance of the amplifier stage ($Z_{in\_stage}$) is:
    *   **$Z_{in\_stage} = r_{\pi}$** (looking directly into the transistor base)
    *   The total input impedance including biasing resistors: **$Z_{in} = R_1 || R_2 || r_{\pi}$**

    **Important:** When calculating the voltage gain, $v_{in}$ is the voltage *after* the coupling capacitor $C_{C1}$ and any source resistance. If we consider the impedance seen by the source $v_s$, it's $R_s + Z_{in\_stage} + Z_{biasing}$. The voltage division between $R_s$ and $Z_{in}$ determines the actual voltage applied to the amplifier stage. For simplicity, we often refer to $Z_{in} = R_1 || R_2 || r_{\pi}$ as the amplifier's input impedance.

**4. Output Impedance ($Z_{out}$)**

*   To find the output impedance, we turn off all independent AC sources ($v_{in}$ becomes 0, i.e., a short circuit) and look into the collector terminal.
*   The output is connected to $R_C$ and $R_L$.
*   The hybrid-pi model between the collector and emitter now has the collector connected to $R_C$ and $r_o$.
*   The emitter is grounded (due to $C_{E2}$ being a short).
*   Therefore, looking into the collector, we see $R_C$ in parallel with the transistor's output resistance $r_o$.
*   **$Z_{out} = R_C || r_o$**

**Reference:** Bell, Chapter 6: "Single-Stage BJT Amplifiers"

---

### Low-Frequency Analysis

At low frequencies, the coupling capacitors ($C_{C1}$, $C_{C2}$) and the bypass capacitor ($C_{E2}$) do not behave as short circuits. Their reactances ($X_C = 1/(2\pi fC)$) become significant, affecting the amplifier's gain.

**Key Concept:** **Frequency-dependent analysis**. The capacitors introduce poles in the frequency response.

**Modification to the Hybrid-Pi Model for Low Frequencies:**

*   The capacitors are replaced by their capacitive reactances.
*   $C_{C1}$ is in series with the input.
*   $C_{C2}$ is in series with the output load.
*   $C_{E2}$ is in parallel with the emitter resistor $R_E$.

**Impact of Capacitors:**

*   **$C_{C1}$ (Input Coupling Capacitor):** This capacitor forms a high-pass filter with the input impedance of the amplifier stage ($Z_{in}$). At low frequencies, its reactance increases, reducing the signal reaching the base.
*   **$C_{C2}$ (Output Coupling Capacitor):** This capacitor forms a high-pass filter with the output impedance of the amplifier ($Z_{out}$) and the load resistor ($R_L$). At low frequencies, its reactance increases, reducing the signal reaching the load.
*   **$C_{E2}$ (Emitter Bypass Capacitor):** This capacitor is used to bypass the emitter resistor $R_E$ at mid-frequencies, maximizing the voltage gain. At low frequencies, its reactance is high, and it no longer effectively bypasses $R_E$. This means $R_E$ is now part of the AC emitter path, which significantly reduces the voltage gain.

**Gain Reduction at Low Frequencies:**

The overall voltage gain at low frequencies is given by:

$A_v(f) = A_{v(mid)} \cdot \frac{1}{1 + j \frac{f_L}{f}}$

where:
*   $A_{v(mid)}$ is the mid-frequency voltage gain.
*   $f_L$ is the lower cutoff frequency, determined by the time constants associated with the coupling and bypass capacitors.

**Impact of $C_{E2}$ on Voltage Gain:**

When $C_{E2}$ is not a short (low frequencies), the emitter is no longer effectively grounded. The AC emitter current flows through $R_E$.

*   $v_{\pi} = v_{be} = v_{in} - i_e R_E$
*   $i_e = i_b + i_c = i_b + \beta i_b = (1+\beta) i_b = \frac{v_{in}}{Z_{in\_stage}} (1+\beta)$
*   $v_{\pi} = v_{in} - \frac{v_{in}(1+\beta)}{Z_{in\_stage}} R_E$
*   $v_{\pi} = v_{in} \left( 1 - \frac{(1+\beta) R_E}{Z_{in\_stage}} \right)$
*   If $Z_{in\_stage} = r_{\pi}$, then $v_{\pi} = v_{in} \left( 1 - \frac{(1+\beta) R_E}{r_{\pi}} \right) = v_{in} \left( 1 - \frac{(1+\beta) R_E}{\beta r_e'} \right)$
*   Since $\beta \gg 1$, $r_{\pi} \approx \beta r_e'$. So, $v_{\pi} \approx v_{in} \left( 1 - \frac{(1+\beta) R_E}{(1+\beta)r_e'} \right) = v_{in} \left( 1 - \frac{R_E}{r_e'} \right)$
*   Also, we know that $g_m = 1/r_e'$. So, $v_{\pi} = v_{in} (1 - g_m R_E)$.
*   The voltage gain becomes: $A_v = \frac{v_{out}}{v_{in}} = \frac{-g_m (R_C || R_L)}{v_{\pi}/v_{in}} = \frac{-g_m (R_C || R_L)}{(1 - g_m R_E)}$
*   This shows a significant reduction in gain if $R_E$ is not bypassed.

**Effect of $C_{E2}$ on Input Impedance:**

When $R_E$ is not bypassed, the input impedance seen from the base is affected. The emitter current flows through $R_E$.

*   $Z_{in\_stage} = r_{\pi} + (\beta+1)R_E$
    *   This is derived by looking into the base: $v_{be} = i_b r_{\pi} + i_e R_E$. Since $i_e = (\beta+1)i_b$, $v_{be} = i_b r_{\pi} + (\beta+1)i_b R_E = i_b (r_{\pi} + (\beta+1)R_E)$. The input impedance is $v_{be}/i_b$.

**Impact of Coupling Capacitors on Gain and Impedance:**

*   **$C_{C1}$ and $R_1||R_2||r_{\pi}$:** Form a high-pass filter with cutoff frequency $f_{L1} = \frac{1}{2\pi (R_1||R_2||r_{\pi}) C_{C1}}$.
*   **$C_{C2}$ and $R_{out}||R_L$:** Form a high-pass filter with cutoff frequency $f_{L2} = \frac{1}{2\pi (R_C||r_o||R_L) C_{C2}}$.
*   **$C_{E2}$ and $R_E$ (when not bypassed):** This interaction is more complex. The effective impedance at the emitter is $r_e' + R_E$. The gain is reduced by the factor $(1 + R_E/r_e')$. The bypass capacitor $C_{E2}$ shunts this impedance. The frequency at which $X_{CE2}$ becomes comparable to $R_E + r_e'$ determines the low-frequency cutoff due to $C_{E2}$. A common approximation for the bypass capacitor is that it provides sufficient bypass when $X_{CE2} \le R_E/10$ at the desired lower cutoff frequency.

**Reference:** Neamen, Chapter 8: "Single-Stage Amplifier Circuits" (specifically sections on frequency response).

---

### Practice Questions and Exercises

**Question 1 (Mid-Frequency Analysis):**

Consider a CE amplifier with the following parameters:
*   $I_C = 1$ mA
*   $\beta = 100$
*   $R_C = 5$ k$\Omega$
*   $R_L = 10$ k$\Omega$
*   $R_1 = 47$ k$\Omega$, $R_2 = 10$ k$\Omega$ (for biasing, assume $r_{\pi}$ is significantly smaller than $R_1 || R_2$)

Calculate:
a) $g_m$
b) $r_{\pi}$
c) Mid-frequency voltage gain ($A_v$)
d) Input impedance ($Z_{in}$)
e) Output impedance ($Z_{out}$)

**Answer 1:**

*   Assume $V_T \approx 26$ mV at room temperature.
*   a) $g_m = \frac{I_C}{V_T} = \frac{1 \times 10^{-3} \text{ A}}{26 \times 10^{-3} \text{ V}} \approx 38.46$ mS
*   b) $r_{\pi} = \beta r_e' = \beta \frac{V_T}{I_E}$. Assuming $I_E \approx I_C$, $r_e' = \frac{26 \text{ mV}}{1 \text{ mA}} = 26 \Omega$.
    $r_{\pi} = 100 \times 26 \Omega = 2.6$ k$\Omega$.
*   c) $A_v = -g_m (R_C || R_L) = -38.46 \times 10^{-3} \text{ S} \times (5 \text{ k}\Omega || 10 \text{ k}\Omega)$
    $R_C || R_L = \frac{5 \times 10}{5 + 10} = \frac{50}{15} = 3.33$ k$\Omega$.
    $A_v = -38.46 \times 10^{-3} \times 3.33 \times 10^3 \approx -128.1$
*   d) $Z_{in} = R_1 || R_2 || r_{\pi} = 47 \text{ k}\Omega || 10 \text{ k}\Omega || 2.6 \text{ k}\Omega$
    $R_1 || R_2 = \frac{47 \times 10}{47 + 10} = \frac{470}{57} \approx 8.25$ k$\Omega$.
    $Z_{in} = 8.25 \text{ k}\Omega || 2.6 \text{ k}\Omega = \frac{8.25 \times 2.6}{8.25 + 2.6} = \frac{21.45}{10.85} \approx 1.98$ k$\Omega$.
*   e) $Z_{out} = R_C || r_o$. We need $r_o$. Assume $V_A = 100$ V.
    $r_o = \frac{V_A}{I_C} = \frac{100 \text{ V}}{1 \text{ mA}} = 100$ k$\Omega$.
    $Z_{out} = 5 \text{ k}\Omega || 100 \text{ k}\Omega \approx 5$ k$\Omega$ (since $r_o \gg R_C$).

**Question 2 (Low-Frequency Consideration):**

For the circuit in Question 1, if $R_E = 1$ k$\Omega$ and $C_{E2}$ is removed (or fails to bypass), how does the voltage gain change? What is the approximate gain if the emitter resistor is not bypassed?

**Answer 2:**

If $R_E$ is not bypassed, the gain formula changes.
The approximate gain without emitter bypass is:
$A_v \approx -\frac{R_C || R_L}{r_e' + R_E}$ (This is a simplified expression for the common-emitter amplifier when $R_E$ is not bypassed. A more rigorous derivation leads to the gain reduction factor.)

Using the more accurate derivation from the notes:
$A_v = \frac{-g_m (R_C || R_L)}{(1 + \frac{R_E}{r_e'})}$.
$A_v \approx \frac{-g_m (R_C || R_L)}{1 + g_m R_E}$ (since $r_e' = 1/g_m$).

Using the values from Question 1:
$g_m = 38.46$ mS, $R_C || R_L = 3.33$ k$\Omega$, $R_E = 1$ k$\Omega$.
$A_v \approx \frac{-38.46 \times 10^{-3} \times 3.33 \times 10^3}{1 + (38.46 \times 10^{-3} \times 1 \times 10^3)}$
$A_v \approx \frac{-128.1}{1 + 38.46} \approx \frac{-128.1}{39.46} \approx -3.25$

**Comparison:** The mid-frequency gain was -128.1. Without the emitter bypass, the gain drops drastically to approximately -3.25. This highlights the importance of the bypass capacitor for achieving high voltage gain in a CE amplifier.

---

### Important Points to Remember

*   **Small-signal analysis** separates AC and DC operations.
*   The **hybrid-pi model** is an AC equivalent circuit for BJT, valid for mid-frequencies.
*   **Mid-frequency:** Capacitors are treated as shorts.
*   **Low-frequency:** Capacitors introduce poles, reducing gain. The bypass capacitor is critical for high CE voltage gain.
*   **$g_m$ and $r_e'$** depend on the DC emitter current $I_E$.
*   **$r_{\pi}$** depends on $\beta$ and $r_e'$.
*   **$r_o$** depends on the Early voltage $V_A$ and $I_C$.
*   The **voltage gain** of a bypassed CE amplifier is approximately $-g_m(R_C || R_L)$.
*   The **input impedance** of a CE amplifier is approximately $R_1 || R_2 || r_{\pi}$.
*   The **output impedance** of a CE amplifier is approximately $R_C || r_o$.
*   Un-bypassed $R_E$ significantly reduces the CE voltage gain by a factor of approximately $1 + R_E/r_e'$ (or $1+g_m R_E$).

---
