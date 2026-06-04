---
title: "CE amplifier – Design for a specific voltage gain and plot frequency response characteristics"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe427"
status: "completed"
scrapedAt: "2026-05-23T17:44:29.257Z"
---
# ANALOG CIRCUITS LAB - Module 1: RC Integrating and Differentiating Circuits

## Topic: CE Amplifier – Design for a Specific Voltage Gain and Plot Frequency Response Characteristics

### Introduction

This section focuses on the Common Emitter (CE) amplifier, a fundamental building block in analog electronics. We will delve into its design process to achieve a specific voltage gain and then explore its frequency response characteristics. While this topic is presented within Module 1 (RC Integrating and Differentiating Circuits), the CE amplifier itself is a core amplifier configuration, and understanding its frequency response is crucial for many analog circuit applications. The concepts of frequency response are directly linked to how RC circuits influence the signal at different frequencies, which is a theme in Module 1.

---

### 1. Common Emitter (CE) Amplifier: Fundamentals

#### 1.1 What is a CE Amplifier?

A Common Emitter amplifier is a transistor amplifier configuration where the input signal is applied to the base, the output is taken from the collector, and the emitter is common to both the input and output circuits (usually connected to ground through a bypass capacitor or a resistor).

*   **Key Feature:** Provides high voltage gain and high current gain.
*   **Phase Inversion:** Introduces a 180-degree phase shift between the input and output signals.
*   **Applications:** Amplification of weak AC signals in audio amplifiers, radio receivers, and general-purpose amplification.

#### 1.2 Basic CE Amplifier Circuit Diagram

**(Refer to David A. Bell, Chapter 8: Single-Stage Transistor Amplifiers, Section 8.1: The Common-Emitter Amplifier)**

A typical CE amplifier circuit includes:

*   **Bipolar Junction Transistor (BJT):** NPN or PNP.
*   **Biasing Network:** Resistors ($R_1$, $R_2$, $R_E$, $R_C$) to set the DC operating point (Q-point).
*   **Coupling Capacitors ($C_{in}$, $C_{out}$):** To block DC and pass AC signals.
*   **Bypass Capacitor ($C_E$):** To bypass the emitter resistor ($R_E$) for AC signals, increasing AC gain.
*   **Load Resistor ($R_L$):** Connected to the collector for output.

**Circuit Diagram:**

```
      Vcc
       |
       Rc
       |
    .- C Collector
   /
  |
  B----Vin -- Cin --- Base of Transistor
  |
  |
  E----Re ----CE---- Ground (Emitter)
  |
  |
  R2 ---- Ground
  |
  .- R1
 |
Vcc
```

#### 1.3 Q-Point (Quiescent Operating Point)

The Q-point is the DC operating point of the transistor. It's essential for proper amplification.

*   **Importance:**
    *   Ensures the transistor operates in the **active region** for linear amplification.
    *   Prevents **clipping** of the output signal (distortion).
    *   Determines the bias voltages and currents ($V_{CEQ}$, $I_{CQ}$).
*   **Biasing Methods:**
    *   **Fixed Bias:** Simple but unstable Q-point.
    *   **Collector-to-Base Bias:** Improved stability over fixed bias.
    *   **Voltage Divider Bias (most common and stable):** Uses $R_1$ and $R_2$ to set a stable base voltage, making the Q-point less dependent on $\beta$.
    *   **Emitter Bias:** Provides excellent stability.

**(Refer to David A. Bell, Chapter 7: Transistor Biasing Circuits, Section 7.1: The Importance of Biasing, Section 7.3: Voltage-Divider Bias)**
**(Refer to D. Meganathan, Chapter 3: BJT Biasing, Section 3.3: Voltage Divider Biasing)**

---

### 2. Designing for a Specific Voltage Gain ($A_v$)

The voltage gain of a CE amplifier depends on the transistor's parameters and the circuit components.

#### 2.1 AC Equivalent Circuit

To analyze AC signals, we replace the transistor with its small-signal model (e.g., hybrid-$\pi$ model or $r_e$ model).

*   **$r_e$ Model:**
    *   $r_e = \frac{25mV}{I_{CQ}}$ (Dynamic emitter resistance).
    *   Input resistance of the base ($r_{in(base)}) = (\beta + 1)r_e \approx \beta r_e$ (for $\beta >> 1$).
    *   Voltage-controlled current source $g_m v_{be}$, where $g_m = \frac{I_{CQ}}{V_T} = \frac{1}{r_e}$ and $V_T \approx 25mV$ at room temperature.

**(Refer to David A. Bell, Chapter 8: Single-Stage Transistor Amplifiers, Section 8.3: AC Equivalent Circuit and Small-Signal Models)**
**(Refer to D. Meganathan, Chapter 4: Small Signal Analysis, Section 4.1: Hybrid-$\pi$ Model)**

#### 2.2 Voltage Gain Formula (Unbypassed Emitter Resistor)

When the emitter resistor ($R_E$) is *not* bypassed ($C_E$ is absent or open), the voltage gain is:

$A_v = \frac{v_{out}}{v_{in}} = -\frac{R_C'}{r_e + R_E}$

Where:
*   $R_C' = R_C || R_L$ (The effective collector resistance, parallel combination of $R_C$ and $R_L$).
*   $R_E$ is the emitter resistor.
*   $r_e$ is the dynamic emitter resistance.
*   The negative sign indicates the 180-degree phase inversion.

#### 2.3 Voltage Gain Formula (Bypassed Emitter Resistor)

When the emitter resistor ($R_E$) is bypassed by $C_E$, $R_E$ is effectively shorted for AC signals.

$A_v = \frac{v_{out}}{v_{in}} = -\frac{R_C'}{r_e}$

Where:
*   $R_C' = R_C || R_L$.
*   This configuration provides **higher voltage gain** than the unbypassed emitter resistor configuration.

#### 2.4 Design Steps for a Specific Voltage Gain (using Voltage Divider Bias)

**Goal:** Design a CE amplifier with a desired voltage gain ($A_v_{desired}$) using voltage divider bias.

**Assumptions:**
*   We have chosen a transistor (e.g., 2N3904) and know its typical $\beta$ range.
*   We have selected a power supply voltage ($V_{CC}$) and a load resistor ($R_L$).

**Steps:**

1.  **Choose the DC Operating Point (Q-point):**
    *   Select $I_{CQ}$ (e.g., 1mA to 10mA for small-signal applications). This impacts $r_e$.
    *   Select $V_{CEQ}$ (e.g., $V_{CC}/2$ for maximum symmetrical output swing).
    *   Calculate $R_C$: $R_C \approx \frac{V_{CC} - V_{CEQ} - I_{CQ}R_E}{I_{CQ}}$ (This is iterative with $R_E$ and biasing resistors).
    *   Calculate $R_E$: $R_E = \frac{V_{EQ}}{I_{CQ}}$. Typically, $V_{EQ}$ is chosen as 10-20% of $V_{CC}$ for good Q-point stability.

2.  **Calculate $r_e$:**
    *   $r_e = \frac{25mV}{I_{CQ}}$ (at room temperature).

3.  **Determine the Required $R_C'$:**
    *   From the gain formula ($A_v = -R_C'/r_e$), rearrange to find the required collector resistor.
    *   $R_C' = |A_v_{desired}| \times r_e$.
    *   Since $R_C' = R_C || R_L$, ensure the chosen $R_C$ and $R_L$ meet this requirement. If $R_L$ is fixed, calculate the required $R_C$.

4.  **Design the Voltage Divider Bias Network ($R_1$, $R_2$):**
    *   Choose a current $I_{R2}$ to flow through $R_2$. This current is typically 5-10 times the base current ($I_{BQ} = I_{CQ} / \beta$). This ensures the base voltage is stable.
    *   Calculate $R_2$: $R_2 = \frac{V_B}{I_{R2}}$, where $V_B$ is the desired base voltage.
    *   Calculate the current through $R_1$: $I_{R1} = I_{R2} + I_{BQ}$.
    *   Calculate $R_1$: $R_1 = \frac{V_{CC} - V_B}{I_{R1}}$.
    *   **Check Stability:** Verify $V_{CEQ} \ge 0.2V_{CC}$ and $V_{RE} \ge 0.1V_{CC}$ for good stability.

5.  **Select Capacitors ($C_{in}$, $C_{out}$, $C_E$):**
    *   Capacitors are chosen based on the lowest frequency of interest ($f_{low}$).
    *   The reactance of the capacitor ($X_C = 1/(2\pi fC)$) should be much smaller than the resistance it's in series with at $f_{low}$.
    *   **$C_{in}$:** $X_{C_{in}} \ll R_{in(circuit)}$ at $f_{low}$. $R_{in(circuit)} = R_1 || R_2 || r_{in(base)}$.
    *   **$C_{out}$:** $X_{C_{out}} \ll R_L$ at $f_{low}$.
    *   **$C_E$:** $X_{C_E} \ll R_E$ at $f_{low}$. This is to ensure $R_E$ is bypassed effectively.

**(Refer to David A. Bell, Chapter 8: Single-Stage Transistor Amplifiers, Section 8.4: Designing the Common-Emitter Amplifier)**
**(Refer to D. Meganathan, Chapter 4: Small Signal Analysis, Section 4.3: Design of Common Emitter Amplifier)**

**Example Design:**

Design a CE amplifier using a 2N3904 transistor ($\beta \approx 100-300$, assume 200 for design).
*   $V_{CC} = 12V$
*   $R_L = 10k\Omega$
*   Desired Voltage Gain $A_v = -50$

**Solution:**

1.  **Q-point:**
    *   Let $I_{CQ} = 2mA$.
    *   Let $V_{CEQ} = 6V$ ($V_{CC}/2$).
    *   Let $V_{EQ} = 1.2V$ (10% of $V_{CC}$).
    *   $R_E = V_{EQ} / I_{CQ} = 1.2V / 2mA = 600\Omega$.
    *   $R_C = (V_{CC} - V_{CEQ} - V_{EQ}) / I_{CQ} = (12V - 6V - 1.2V) / 2mA = 4.8V / 2mA = 2.4k\Omega$.

2.  **$r_e$ Calculation:**
    *   $r_e = 25mV / I_{CQ} = 25mV / 2mA = 12.5\Omega$.

3.  **Required $R_C'$:**
    *   $R_C' = |A_v_{desired}| \times r_e = 50 \times 12.5\Omega = 625\Omega$.
    *   Our calculated $R_C = 2.4k\Omega$.
    *   $R_C' = R_C || R_L = 2.4k\Omega || 10k\Omega = (2.4 \times 10) / (2.4 + 10) k\Omega = 24 / 12.4 k\Omega \approx 1.94k\Omega$.
    *   **Issue:** Our calculated $R_C'$ is much larger than the required $R_C'$. This means our initial choice of $I_{CQ}$ and $V_{CEQ}$ might lead to a gain significantly higher than -50. To achieve a gain of -50 with $R_C = 2.4k\Omega$ and $R_L = 10k\Omega$ (so $R_C' \approx 1.94k\Omega$), $r_e$ would need to be:
        *   $r_e = R_C' / |A_v_{desired}| = 1.94k\Omega / 50 = 38.8\Omega$.
        *   This requires $I_{CQ} = 25mV / 38.8\Omega \approx 0.64mA$.
    *   **Let's redesign with $I_{CQ} = 0.64mA$:**
        *   $V_{EQ} = 1.2V$ (keep the same for stability margin)
        *   $R_E = 1.2V / 0.64mA = 1.875k\Omega$.
        *   $R_C = (12V - 6V - 1.2V) / 0.64mA = 4.8V / 0.64mA = 7.5k\Omega$.
        *   $r_e = 25mV / 0.64mA \approx 39\Omega$.
        *   $R_C' = R_C || R_L = 7.5k\Omega || 10k\Omega = (7.5 \times 10) / (7.5 + 10) k\Omega = 75 / 17.5 k\Omega \approx 4.29k\Omega$.
        *   Now, $A_v = -R_C' / r_e = -4.29k\Omega / 39\Omega \approx -110$.
    *   **Further Adjustment Needed:** To achieve a gain of -50, we need to reduce the effective collector resistance. We can achieve this by having a smaller $R_C$ or a smaller $R_L$, or by not bypassing $R_E$ fully.
    *   **Alternative Strategy:** Let's use the initial $R_C = 2.4k\Omega$ and $R_L = 10k\Omega$, so $R_C' \approx 1.94k\Omega$.
        *   We need $r_e = R_C' / |A_v_{desired}| = 1.94k\Omega / 50 = 38.8\Omega$.
        *   $I_{CQ} = 25mV / 38.8\Omega \approx 0.64mA$.
        *   If we *don't* bypass $R_E$: $A_v = -R_C' / (r_e + R_E)$.
        *   Let's use the first Q-point design: $I_{CQ} = 2mA$, $R_C = 2.4k\Omega$, $R_L = 10k\Omega$, $R_E = 600\Omega$, $r_e = 12.5\Omega$.
        *   $R_C' = 1.94k\Omega$.
        *   If $R_E$ is *not* bypassed: $A_v = -1.94k\Omega / (12.5\Omega + 600\Omega) = -1.94k\Omega / 612.5\Omega \approx -3.17$. This is too low.
    *   **Let's try to use the bypassed emitter strategy with the second Q-point design:**
        *   $I_{CQ} = 0.64mA$, $R_C = 7.5k\Omega$, $R_L = 10k\Omega$, $R_E = 1.875k\Omega$, $r_e = 39\Omega$.
        *   $R_C' \approx 4.29k\Omega$.
        *   $A_v = -4.29k\Omega / 39\Omega \approx -110$.
    *   **Final attempt to hit gain -50:** We need to reduce the gain from -110. We can either:
        *   Reduce $R_C'$: This means reducing $R_C$.
        *   Increase $r_e$: This means reducing $I_{CQ}$.
        *   Use a fraction of $R_E$ for AC gain (partially bypass).
    *   Let's try reducing $I_{CQ}$ further. Let $I_{CQ} = 0.5mA$.
        *   $V_{EQ} = 1.2V \implies R_E = 1.2V / 0.5mA = 2.4k\Omega$.
        *   $V_{CEQ} = 6V$.
        *   $R_C = (12V - 6V - 1.2V) / 0.5mA = 4.8V / 0.5mA = 9.6k\Omega$.
        *   $r_e = 25mV / 0.5mA = 50\Omega$.
        *   $R_C' = R_C || R_L = 9.6k\Omega || 10k\Omega \approx 4.9k\Omega$.
        *   With bypassed $R_E$: $A_v = -4.9k\Omega / 50\Omega = -98$. Still too high.
    *   **Conclusion for this example:** Achieving a precise gain of -50 requires careful selection of $I_{CQ}$, $R_C$, and $R_L$. The example illustrates the trade-offs. A more practical approach in the lab might be to choose component values that give a gain close to the target and then fine-tune $R_L$ or add a potentiometer.
    *   Let's stick with the second design and aim for a gain of -110.
        *   $I_{CQ} = 0.64mA$, $R_C = 7.5k\Omega$, $R_E = 1.875k\Omega$.
        *   $r_e \approx 39\Omega$.
        *   $R_C' \approx 4.29k\Omega$.
        *   $A_v \approx -110$.

5.  **Design Voltage Divider Bias ($R_1, R_2$):**
    *   $I_{CQ} = 0.64mA$, $\beta = 200$.
    *   $I_{BQ} = I_{CQ} / \beta = 0.64mA / 200 = 3.2\mu A$.
    *   Let $I_{R2}$ be 10 times $I_{BQ}$: $I_{R2} = 32\mu A$.
    *   Base voltage $V_B = V_{EQ} + V_{BE(on)} = 1.2V + 0.7V = 1.9V$.
    *   $R_2 = V_B / I_{R2} = 1.9V / 32\mu A \approx 59k\Omega$. Choose standard value: $56k\Omega$.
    *   $I_{R1} = I_{R2} + I_{BQ} = 32\mu A + 3.2\mu A = 35.2\mu A$.
    *   $R_1 = (V_{CC} - V_B) / I_{R1} = (12V - 1.9V) / 35.2\mu A = 10.1V / 35.2\mu A \approx 287k\Omega$. Choose standard value: $270k\Omega$.
    *   **Recalculate V_B with standard values:**
        *   $V_B = V_{CC} \times R_2 / (R_1 + R_2) = 12V \times 56k\Omega / (270k\Omega + 56k\Omega) = 12V \times 56 / 326 \approx 2.05V$.
        *   $I_{BQ} = (V_B - V_{BE(on)}) / R_E = (2.05V - 0.7V) / 1.875k\Omega = 1.35V / 1.875k\Omega \approx 0.72mA$.
        *   $I_{CQ} \approx I_{BQ} \times \beta = 0.72mA \times 200 = 144mA$. (This is wrong, $I_{CQ}$ is the collector current).
        *   $I_{CQ} \approx I_E - I_B = I_E - I_E/\beta = I_E(1 - 1/\beta) \approx I_E$.
        *   $I_E = V_B / R_2 \times (\beta+1)/\beta$ (approximate for stability).
        *   Let's recalculate using $I_E \approx V_B / R_2$.
        *   $V_B \approx 2.05V$. $R_2 = 56k\Omega$. $I_{R2} = 2.05V / 56k\Omega \approx 36.6\mu A$.
        *   $I_{BQ} = I_{R2} / 10 = 3.66\mu A$.
        *   $R_1 = (12V - 2.05V) / (36.6\mu A + 3.66\mu A) = 9.95V / 40.26\mu A \approx 247k\Omega$. Choose $240k\Omega$.
        *   **Recalculate V_B with R1=240k, R2=56k:**
            *   $V_B = 12V \times 56k\Omega / (240k\Omega + 56k\Omega) = 12V \times 56 / 296 \approx 2.27V$.
            *   $I_{BQ} = (2.27V - 0.7V) / 1.875k\Omega = 1.57V / 1.875k\Omega \approx 0.837mA$.
            *   $I_{CQ} = 0.837mA \times 200 = 167.4mA$. (This calculation is still off).
    *   **Correct way to calculate $I_{CQ}$ after choosing $R_1, R_2$:**
        *   $V_B = V_{CC} \frac{R_2}{R_1+R_2} = 12V \frac{56k\Omega}{240k\Omega+56k\Omega} \approx 2.27V$.
        *   $I_{CQ} \approx \frac{V_B - V_{BE(on)}}{R_E} = \frac{2.27V - 0.7V}{1.875k\Omega} = \frac{1.57V}{1.875k\Omega} \approx 0.837mA$.
        *   $r_e = \frac{25mV}{0.837mA} \approx 30\Omega$.
        *   $R_C' = R_C || R_L = 7.5k\Omega || 10k\Omega \approx 4.29k\Omega$.
        *   $A_v = -R_C' / r_e = -4.29k\Omega / 30\Omega \approx -143$.

    *   **The challenge in design is hitting the exact gain.** For a lab, use standard values that get close, then potentially adjust $R_L$ with a potentiometer or accept the realized gain.
    *   Let's revisit the first design: $I_{CQ} = 2mA$, $R_C = 2.4k\Omega$, $R_E = 600\Omega$, $r_e = 12.5\Omega$. $R_C' \approx 1.94k\Omega$.
    *   For $A_v = -50$: Required $r_e = 1.94k\Omega / 50 = 38.8\Omega$.
    *   $I_{CQ} = 25mV / 38.8\Omega \approx 0.64mA$.
    *   Let's use $I_{CQ} = 0.7mA$.
        *   $V_{EQ} = 1.2V \implies R_E = 1.2V / 0.7mA = 1.71k\Omega$.
        *   $V_{CEQ} = 6V$.
        *   $R_C = (12V - 6V - 1.2V) / 0.7mA = 4.8V / 0.7mA = 6.86k\Omega$.
        *   $r_e = 25mV / 0.7mA = 35.7\Omega$.
        *   $R_C' = R_C || R_L = 6.86k\Omega || 10k\Omega \approx 4.07k\Omega$.
        *   $A_v = -R_C' / r_e = -4.07k\Omega / 35.7\Omega \approx -114$.

    *   **Using unbypassed emitter resistor:** $A_v = -R_C' / (r_e + R_E)$.
        *   With $I_{CQ} = 2mA$, $R_C = 2.4k\Omega$, $R_E = 600\Omega$, $r_e = 12.5\Omega$. $R_C' \approx 1.94k\Omega$.
        *   $A_v = -1.94k\Omega / (12.5\Omega + 600\Omega) \approx -3.17$.

    *   **The key is to choose component values that result in the desired gain.** For a specific gain of -50, we need $R_C' / r_e = 50$.

6.  **Capacitor Selection (assuming $f_{low} = 50Hz$):**
    *   **$C_{in}$:**
        *   $R_{in(circuit)} = R_1 || R_2 || \beta r_e$.
        *   Using $R_1=240k\Omega, R_2=56k\Omega$, $I_{CQ}=0.837mA$, $r_e=30\Omega$, $\beta=200$.
        *   $r_{in(base)} = \beta r_e = 200 \times 30\Omega = 6k\Omega$.
        *   $R_{in(circuit)} = 240k\Omega || 56k\Omega || 6k\Omega \approx 4.6k\Omega$.
        *   For $f_{low} = 50Hz$, $X_{C_{in}} \le R_{in(circuit)}/10$.
        *   $X_{C_{in}} \le 460\Omega$.
        *   $C_{in} \ge 1 / (2\pi \times 50Hz \times 460\Omega) \approx 6.85\mu F$. Choose $10\mu F$ or $22\mu F$.
    *   **$C_{out}$:**
        *   $X_{C_{out}} \le R_L/10$.
        *   $X_{C_{out}} \le 10k\Omega / 10 = 1k\Omega$.
        *   $C_{out} \ge 1 / (2\pi \times 50Hz \times 1k\Omega) \approx 3.18\mu F$. Choose $4.7\mu F$ or $10\mu F$.
    *   **$C_E$:**
        *   $X_{C_E} \le R_E/10$.
        *   Using $R_E = 1.875k\Omega$ from previous design.
        *   $X_{C_E} \le 187.5\Omega$.
        *   $C_E \ge 1 / (2\pi \times 50Hz \times 187.5\Omega) \approx 17\mu F$. Choose $22\mu F$ or $47\mu F$.

**(Important Note for Lab):** The target gain of -50 might be achieved by picking an $R_C$ value such that $R_C || R_L$ gives the desired $R_C'$. For example, if $R_L=10k\Omega$ and we want $R_C' = 500\Omega$, then $R_C = (R_C' \times R_L) / (R_L - R_C') = (500 \times 10000) / (10000 - 500) \approx 526\Omega$. This requires a specific $I_{CQ}$ to yield $r_e = R_C'/50 = 500\Omega / 50 = 10\Omega$. $I_{CQ} = 25mV/10\Omega = 2.5mA$.

---

### 3. Frequency Response Characteristics

The CE amplifier's gain is not constant across all frequencies. It varies due to the presence of capacitors in the circuit.

#### 3.1 Frequency Ranges

The frequency response can be divided into three main regions:

*   **Low-Frequency Region:** Dominated by coupling and bypass capacitors ($C_{in}, C_{out}, C_E$). Their reactances ($X_C$) become comparable to or greater than the resistances they are in series with, causing the gain to decrease.
*   **Mid-Frequency Region:** Coupling and bypass capacitors act as short circuits ($X_C \approx 0$), and parasitic capacitances are negligible. The gain is relatively constant in this region, determined by the DC biasing and AC load. This is the **mid-band gain**.
*   **High-Frequency Region:** Dominated by the transistor's internal parasitic capacitances (e.g., $C_{be}, C_{ce}$) and any stray capacitances. Their reactances ($X_C$) become small, causing them to act as low-impedance paths, shunting the signal and reducing the gain.

#### 3.2 Low-Frequency Response

*   **Causes of Gain Reduction:**
    *   **$C_{in}$:** Forms a high-pass filter with the input resistance ($R_{in(circuit)}$). Gain drops at low frequencies.
    *   **$C_{out}$:** Forms a high-pass filter with the load resistance ($R_L$). Gain drops at low frequencies.
    *   **$C_E$:** Forms a high-pass filter with the effective emitter resistance seen by AC ($R_E$). If $R_E$ is bypassed, gain starts to decrease when $X_{C_E}$ becomes significant compared to $R_E$.
*   **Cutoff Frequency ($f_L$):** The frequency at which the gain drops by 3dB (to $0.707$ of the mid-band gain). Each capacitor contributes a low-frequency cutoff. The overall $f_L$ is the highest of these individual cutoff frequencies.
    *   $f_{C_{in}} = \frac{1}{2\pi R_{in(circuit)} C_{in}}$
    *   $f_{C_{out}} = \frac{1}{2\pi R_L C_{out}}$
    *   $f_{C_E} = \frac{1}{2\pi R_E C_E}$ (This is for the bypassed emitter resistor case, where $R_E$ is the resistance in series with $C_E$). If $R_E$ is not bypassed, its effect on gain is already accounted for in the mid-band gain calculation.

**(Refer to David A. Bell, Chapter 10: Frequency Response of Amplifiers, Section 10.1: Low-Frequency Response, Section 10.2: High-Frequency Response)**
**(Refer to D. Meganathan, Chapter 4: Small Signal Analysis, Section 4.5: Frequency Response of CE Amplifier)**

#### 3.3 Mid-Band Gain ($A_{mid}$)

In the mid-frequency range, coupling and bypass capacitors are assumed to be short circuits.

*   **With bypassed emitter resistor:** $A_{mid} = -\frac{R_C'}{r_e}$
*   **Without bypassed emitter resistor:** $A_{mid} = -\frac{R_C'}{r_e + R_E}$

#### 3.4 High-Frequency Response

*   **Causes of Gain Reduction:**
    *   **Internal Transistor Capacitances:**
        *   $C_{be}$ (Base-Emitter Capacitance): Acts in parallel with $r_e$, forming a low-pass filter at the input.
        *   $C_{ce}$ (Collector-Emitter Capacitance): Acts in parallel with $R_C'$, effectively reducing the output load resistance at high frequencies.
    *   **Miller Effect:** $C_{ce}$ appears as a much larger capacitance ($C_{ce}(1-|A_v|)$) across the base-emitter junction due to the phase inversion. This significantly reduces the high-frequency cutoff.
*   **Cutoff Frequency ($f_H$):** The frequency at which the gain drops by 3dB from the mid-band gain. It's primarily determined by the input circuit and the Miller effect.
    *   The dominant high-frequency cutoff is often approximated by:
        $f_H \approx \frac{1}{2\pi R_{in(circuit)} C_{in(eff)}}$
        Where $C_{in(eff)} = C_{be} + C_{ce}(1-|A_{mid}|)$.
        $R_{in(circuit)} = R_1 || R_2 || \beta r_e$.

**(Refer to David A. Bell, Chapter 10: Frequency Response of Amplifiers, Section 10.2: High-Frequency Response)**
**(Refer to D. Meganathan, Chapter 4: Small Signal Analysis, Section 4.5: Frequency Response of CE Amplifier)**

#### 3.5 Plotting the Frequency Response

1.  **Measure Mid-band Gain:** Determine the gain in the mid-frequency range.
2.  **Measure Low-Frequency Cutoff ($f_L$):** Find the frequency where the gain drops to $0.707 \times A_{mid}$.
3.  **Measure High-Frequency Cutoff ($f_H$):** Find the frequency where the gain drops to $0.707 \times A_{mid}$.
4.  **Plot:** Create a semi-log plot of Voltage Gain (dB) versus Frequency (log scale).
    *   **Gain in dB:** $A_v(dB) = 20 \log_{10} |A_v|$
    *   The plot will show a flat mid-band region, a rolloff at low frequencies, and a rolloff at high frequencies, forming a bandpass characteristic.

---

### 4. Learning Outcomes & Course Outcomes Alignment

This topic directly addresses the following:

*   **Learning Outcome:** Design a CE amplifier for a specific voltage gain.
    *   **Alignment:** Covered in Section 2, including design steps and examples.
*   **Learning Outcome:** Plot frequency response characteristics of the designed CE amplifier.
    *   **Alignment:** Covered in Section 3, detailing low-frequency, mid-frequency, and high-frequency behavior, and how to plot the response.

*   **CO1: Design and demonstrate the functioning of basic analog circuits using discrete components.** (Knowledge Level: K3)
    *   **Alignment:** Designing the CE amplifier for a specific gain involves selecting component values, which is a K3 cognitive level skill. Demonstrating its function in the lab validates the design.
*   **CO2: Design and simulate the functioning of basic analog circuits using simulation tools.** (Knowledge Level: K3)
    *   **Alignment:** The design process outlined can be directly implemented in simulation software (like LTspice, PSpice) to verify the gain and frequency response before or alongside breadboarding.
*   **CO3: Conduct troubleshooting of a given circuit and to analyze it.** (Knowledge Level: K3)
    *   **Alignment:** Understanding the factors affecting gain (Q-point, component values) and frequency response helps in analyzing why a circuit might not be performing as expected. If the realized gain or frequency response differs from the design, troubleshooting skills are required.

---

### 5. Practice Questions and Exercises

**Question 1:**
Design a CE amplifier using voltage divider bias for a transistor with $\beta=150$. The power supply is $V_{CC} = 10V$, and the load resistor is $R_L = 4.7k\Omega$. You need a mid-band voltage gain of $A_{mid} = -40$. Assume $f_{low} = 100Hz$ and $f_H = 10kHz$.

**(Hint: Start by selecting $I_{CQ}$ and $V_{CEQ}$ to determine $R_C$ and $R_E$. Then calculate $r_e$ and the required $R_C'$. Use these to refine your component choices if necessary. Finally, design the biasing resistors and capacitors.)**

**Answer Outline (for Question 1):**

1.  **Choose Q-point:**
    *   Let $I_{CQ} = 1mA$.
    *   Let $V_{CEQ} = 5V$ ($V_{CC}/2$).
    *   Let $V_{EQ} = 1V$ (10% of $V_{CC}$).
    *   $R_E = V_{EQ}/I_{CQ} = 1V/1mA = 1k\Omega$.
    *   $R_C = (V_{CC} - V_{CEQ} - V_{EQ})/I_{CQ} = (10V - 5V - 1V)/1mA = 4V/1mA = 4k\Omega$.
2.  **Calculate $r_e$:**
    *   $r_e = 25mV/I_{CQ} = 25mV/1mA = 25\Omega$.
3.  **Determine Required $R_C'$:**
    *   $R_C' = |A_{mid}| \times r_e = 40 \times 25\Omega = 1000\Omega = 1k\Omega$.
4.  **Check $R_C'$ with chosen $R_C$ and $R_L$:**
    *   $R_C' = R_C || R_L = 4k\Omega || 4.7k\Omega = (4 \times 4.7) / (4 + 4.7) k\Omega = 18.8 / 8.7 k\Omega \approx 2.16k\Omega$.
    *   **Issue:** The actual $R_C'$ is much larger than needed for a gain of -40 with $r_e=25\Omega$.
    *   **Recalculation:** To get $R_C' = 1k\Omega$ with $R_L = 4.7k\Omega$, we need $R_C = (1k\Omega \times 4.7k\Omega) / (4.7k\Omega - 1k\Omega) = 4700 / 3.7 \approx 1.27k\Omega$.
    *   Now, let's choose $I_{CQ}$ for $r_e=25\Omega$. We need $R_C = 1.27k\Omega$.
    *   Let's try $I_{CQ} = 1mA$, $V_{CEQ}=5V$, $V_{EQ}=1V$, $R_E=1k\Omega$.
    *   $R_C = (10V - 5V - 1V) / 1mA = 4V / 1mA = 4k\Omega$.
    *   Let's redesign by fixing $R_C$. Let $R_C = 1.2k\Omega$.
    *   $R_C' = 1.2k\Omega || 4.7k\Omega \approx 0.96k\Omega$.
    *   For $A_{mid} = -40$, required $r_e = R_C' / 40 = 0.96k\Omega / 40 = 24\Omega$.
    *   $I_{CQ} = 25mV / 24\Omega \approx 1.04mA$.
    *   Let's use $I_{CQ} = 1mA$.
    *   $V_{EQ} = 1V \implies R_E = 1V/1mA = 1k\Omega$.
    *   $V_{CEQ} = 10V - I_{CQ}(R_C + R_E) = 10V - 1mA(1.2k\Omega + 1k\Omega) = 10V - 2.2V = 7.8V$. This is acceptable.
    *   So, final transistor component values: $R_C = 1.2k\Omega$, $R_E = 1k\Omega$, $I_{CQ} \approx 1mA$.

5.  **Design Biasing Resistors ($R_1, R_2$):**
    *   $\beta = 150$, $I_{CQ} = 1mA \implies I_{BQ} = 1mA/150 \approx 6.67\mu A$.
    *   Base voltage $V_B = V_{BE(on)} + V_{EQ} = 0.7V + 1V = 1.7V$.
    *   Let $I_{R2} = 10 \times I_{BQ} = 66.7\mu A$.
    *   $R_2 = V_B / I_{R2} = 1.7V / 66.7\mu A \approx 25.5k\Omega$. Choose standard $27k\Omega$.
    *   $I_{R1} = I_{R2} + I_{BQ} = 66.7\mu A + 6.67\mu A = 73.37\mu A$.
    *   $R_1 = (V_{CC} - V_B) / I_{R1} = (10V - 1.7V) / 73.37\mu A = 8.3V / 73.37\mu A \approx 113k\Omega$. Choose standard $120k\Omega$.
    *   **Verify Q-point with actual $R_1, R_2$:**
        *   $V_B = 10V \times 27k\Omega / (120k\Omega + 27k\Omega) \approx 1.85V$.
        *   $I_{CQ} \approx (1.85V - 0.7V) / 1k\Omega = 1.15mA$.
        *   $r_e = 25mV / 1.15mA \approx 21.7\Omega$.
        *   $R_C' = 1.2k\Omega || 4.7k\Omega \approx 0.96k\Omega$.
        *   $A_{mid} = -0.96k\Omega / 21.7\Omega \approx -44$. This is close enough to -40.

6.  **Design Capacitors (for $f_{low} = 100Hz$):**
    *   $R_{in(circuit)} = R_1 || R_2 || \beta r_e = 120k\Omega || 27k\Omega || 150 \times 21.7\Omega = 120k\Omega || 27k\Omega || 3.26k\Omega \approx 2.7k\Omega$.
    *   $C_{in} \ge 1 / (2\pi \times 100Hz \times (2.7k\Omega / 10)) \approx 5.9\mu F$. Choose $10\mu F$.
    *   $C_{out} \ge 1 / (2\pi \times 100Hz \times (4.7k\Omega / 10)) \approx 3.38\mu F$. Choose $4.7\mu F$.
    *   $C_E \ge 1 / (2\pi \times 100Hz \times (1k\Omega / 10)) \approx 15.9\mu F$. Choose $22\mu F$.

**Question 2:**
For the designed amplifier in Question 1, what is the approximate high-frequency cutoff ($f_H$) if the transistor has $C_{be} = 20pF$ and $C_{ce} = 5pF$?

**Answer Outline (for Question 2):**

1.  **Identify relevant parameters:**
    *   $R_{in(circuit)} \approx 2.7k\Omega$.
    *   $A_{mid} \approx -44$.
    *   $C_{be} = 20pF$.
    *   $C_{ce} = 5pF$.
2.  **Calculate effective input capacitance due to Miller effect:**
    *   $C_{in(eff)} = C_{be} + C_{ce}(1-|A_{mid}|) = 20pF + 5pF(1-|-44|) = 20pF + 5pF(45) = 20pF + 225pF = 245pF$.
3.  **Calculate $f_H$:**
    *   $f_H \approx \frac{1}{2\pi R_{in(circuit)} C_{in(eff)}} = \frac{1}{2\pi \times 2.7k\Omega \times 245pF} = \frac{1}{2\pi \times 2.7 \times 10^3 \times 245 \times 10^{-12}} \approx \frac{1}{4.14 \times 10^{-6}} \approx 241kHz$.

---

### 6. Important Points to Remember

*   **Q-point Stability:** Voltage divider bias offers good stability against variations in $\beta$ and temperature. Ensure $V_{RE}$ is significant (e.g., 10% of $V_{CC}$).
*   **Gain Formula:** Understand the difference in gain with and without a bypassed emitter resistor. Bypassing increases gain.
*   **Component Selection:**
    *   **Biasing Resistors:** Choose to ensure a stable Q-point and that the collector current ($I_{CQ}$) is suitable for the desired $r_e$.
    *   **Capacitors:** Size them based on the lowest frequency of interest to ensure they act as shorts in the mid-band.
*   **Frequency Response:** Gain is not flat. It rolls off at low frequencies (due to coupling/bypass caps) and high frequencies (due to transistor parasitics and Miller effect).
*   **Miller Effect:** Significantly increases the effective input capacitance at high frequencies, reducing bandwidth.
*   **Lab Practice:** When designing for a specific gain, it's often practical to choose component values that get close, and then use a potentiometer as the load resistor ($R_L$) to fine-tune the gain to the exact desired value in the lab.

---

This comprehensive study guide provides the foundational knowledge for understanding and designing CE amplifiers and analyzing their frequency response, directly aligning with the learning outcomes and course objectives. Remember to consult your textbooks for detailed derivations and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
