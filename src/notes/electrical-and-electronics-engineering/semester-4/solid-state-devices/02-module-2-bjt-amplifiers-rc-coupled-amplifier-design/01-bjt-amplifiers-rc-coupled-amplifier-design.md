---
title: "BJT amplifiers: RC coupled amplifier –Design"
subject: "SOLID STATE DEVICES"
module: "Module 2: BJT amplifiers: RC coupled amplifier –Design"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f81"
status: "completed"
scrapedAt: "2026-05-23T16:18:39.625Z"
---
# SOLID STATE DEVICES - Module 2: BJT Amplifiers: RC Coupled Amplifier – Design

## Table of Contents

1.  Introduction to RC Coupled Amplifiers
2.  Basic Configuration of an RC Coupled Amplifier
3.  Need for Biasing
4.  Design Considerations for RC Coupled Amplifier
    *   Biasing for Stability
    *   Voltage Gain
    *   Frequency Response
    *   Input and Output Impedance
5.  Design Steps for a Common-Emitter RC Coupled Amplifier
    *   Choosing the Transistor
    *   Determining the Q-Point
    *   Designing the Biasing Circuit
    *   Designing the Coupling Capacitors
    *   Designing the Bypass Capacitor
    *   Calculating the Voltage Gain
    *   Calculating Input and Output Impedances
6.  Example Design of an RC Coupled Amplifier
7.  Key Concepts and Definitions
8.  Important Points to Remember
9.  Practice Questions and Answers

---

## 1. Introduction to RC Coupled Amplifiers

RC coupled amplifiers are widely used in various electronic circuits to amplify AC signals. They are characterized by the use of resistors (R) and capacitors (C) for coupling signals between amplifier stages and for providing bias. This type of amplifier is known for its simplicity, low cost, and good mid-band frequency response.

*   **Coupling Capacitors:** These capacitors are used to block any DC component of the signal from passing from one stage to the next, while allowing the AC signal to pass. This prevents the DC operating point of one stage from affecting the DC operating point of the subsequent stage.
*   **Bypass Capacitor:** A bypass capacitor is used to provide a low impedance path to ground for AC signals at specific frequencies, effectively bypassing a resistor. This is crucial for achieving high voltage gain.

**Reference:** Boylested & Nashelsky (11/e), Chapter 7: "Transistor Amplifiers"

## 2. Basic Configuration of an RC Coupled Amplifier

The most common configuration for an RC coupled amplifier is the **Common-Emitter (CE) amplifier**.

**Diagram of a basic CE RC Coupled Amplifier Stage:**

```
      Vcc
       |
       R1 ----|------- R2
       |      |
       C1     |   C2
       |      |   |
     -----    --- ---
    |     |  |     |
    | Vin |  | Vout|
    |     |  |     |
     -----    --- ---
       |      |
      RC      RL
       |      |
      CE      |
       |      |
      C_bypass |
       |      |
      E ----- GND
      |
      RE
      |
     GND
```

**Key Components:**

*   **Vcc:** DC supply voltage.
*   **R1, R2:** Voltage divider resistors for biasing.
*   **RE:** Emitter resistor for biasing and stability.
*   **RC:** Collector resistor, determines the AC collector current and output voltage swing.
*   **C1:** Input coupling capacitor.
*   **C2:** Output coupling capacitor.
*   **C_bypass:** Emitter bypass capacitor.
*   **Vin:** Input AC signal.
*   **Vout:** Output AC signal.
*   **RL:** Load resistor.

**Working Principle:**

1.  The AC input signal is coupled to the base of the transistor through `C1`.
2.  The transistor amplifies the AC signal.
3.  The amplified AC signal at the collector is coupled to the next stage (or load `RL`) through `C2`.
4.  `C_bypass` shunts the AC signal across `RE` to ground, preventing AC degeneration and maximizing voltage gain.
5.  The biasing resistors (R1, R2, RE) establish the DC operating point (Q-point) of the transistor.

## 3. Need for Biasing

**Biasing** is essential to establish a stable DC operating point (Q-point) for the transistor. The Q-point represents the DC values of collector current (IcQ) and collector-emitter voltage (VceQ) when no AC signal is applied.

**Why Biasing is Necessary:**

*   **Active Region Operation:** For amplification, the transistor must operate in the active region. Proper biasing ensures the transistor is always in the active region, even with varying input signals.
*   **Prevent Saturation and Cut-off:** Biasing prevents the transistor from entering the saturation or cut-off regions due to the input signal.
*   **Signal Distortion:** If the transistor operates in cut-off or saturation, the amplified output signal will be distorted.
*   **Stability of Q-point:** The Q-point should be stable against variations in temperature, transistor parameters (like $\beta$ and ICEO), and power supply voltage.

**Common Biasing Methods:**

*   **Fixed Bias:** Simple but provides poor Q-point stability.
*   **Collector to Base Bias:** Better stability than fixed bias.
*   **Voltage Divider Bias:** Offers the best Q-point stability and is the most commonly used method for RC coupled amplifiers.

**Focus for RC Coupled Amplifier Design:** Voltage Divider Bias is preferred due to its superior stability.

**Reference:** Boylested & Nashelsky (11/e), Chapter 6: "Transistor Biasing Circuits"
Sedra & Smith (6/e), Chapter 4: "Bipolar Junction Transistors"

## 4. Design Considerations for RC Coupled Amplifier

Designing an RC coupled amplifier involves several key considerations to ensure optimal performance.

### 4.1 Biasing for Stability

The primary goal of biasing is to establish a stable Q-point. For a voltage divider bias circuit:

*   **Stability Factor (S):** A measure of how much the collector current changes with changes in reverse saturation current (ICEO). Lower S is better.
*   **Stability Factor (S'):** A measure of how much the collector current changes with changes in $\beta$. Lower S' is better.

For voltage divider bias, `RE` plays a crucial role in stabilizing the Q-point. A larger `RE` generally leads to better stability, but it also reduces the AC voltage gain (unless bypassed).

**Rule of Thumb for Stability (Voltage Divider Bias):**
*   `Rth = R1 || R2` (Thevenin equivalent resistance at the base).
*   Aim for `Rth >> RE`. A common guideline is `Rth >= 10 * RE`. This ensures that variations in $\beta$ have less impact on the collector current.

**Reference:** Boylested & Nashelsky (11/e), Chapter 6.5: "Voltage-Divider and Collector-Feedback Bias"

### 4.2 Voltage Gain ($A_v$)

The voltage gain of a CE amplifier is approximately the ratio of the AC collector resistance to the AC emitter resistance.

*   **Mid-band Gain:** In the mid-band frequency range, the capacitors have negligible impedance, and `RE` is bypassed by `C_bypass`.
    $A_v \approx -\frac{R_C}{r_e'}$
    where $R_C$ is the AC collector resistance ($R_C || RC || RL$) and $r_e'$ is the intrinsic emitter resistance ($r_e' = \frac{25mV}{I_{EQ}}$ at room temperature).

*   **Effect of `RE` (Unbypassed):** If `RE` is not bypassed, it causes AC degeneration, reducing the voltage gain:
    $A_v \approx -\frac{R_C}{r_e' + RE}$

*   **Effect of `RE` (Bypassed):** If `RE` is bypassed by `C_bypass`, the gain is higher:
    $A_v \approx -\frac{R_C}{r_e'}$

**Design Goal:** To achieve a desired voltage gain, the value of `RC` and `RE` (if unbypassed) are chosen based on the calculated $r_e'$.

**Reference:** Boylested & Nashelsky (11/e), Chapter 7.4: "The Common-Emitter Amplifier"
Sedra & Smith (6/e), Chapter 4.3.2: "The Common-Emitter Amplifier"

### 4.3 Frequency Response

The frequency response of an RC coupled amplifier is characterized by three regions:

*   **Low-Frequency Region:** Dominated by the coupling capacitors (`C1`, `C2`) and the bypass capacitor (`C_bypass`). Their impedance increases at low frequencies, causing the gain to roll off.
    *   **Low-frequency cutoff ($f_L$):** The frequency at which the gain drops by 3 dB from its mid-band value. This is determined by the time constants formed by the coupling/bypass capacitors and their associated resistances.
        *   $f_{CL1} = \frac{1}{2\pi R_{in1} C1}$ (Input coupling)
        *   $f_{CL2} = \frac{1}{2\pi R_{out1} C2}$ (Output coupling)
        *   $f_{CLE} = \frac{1}{2\pi (r_e' + RE') C_{bypass}}$ (Emitter bypass), where $RE'$ is the resistance seen from the emitter to AC ground. If RE is fully bypassed, $RE' = 0$.

*   **Mid-band Region:** The frequency range where the capacitors' impedance is negligible, and the gain is relatively constant.
*   **High-Frequency Region:** Dominated by the parasitic capacitances of the transistor (e.g., $C_{\pi}$, $C_{\mu}$) and the input/output capacitance of the circuit. Their impedance decreases at high frequencies, causing the gain to roll off.
    *   **High-frequency cutoff ($f_H$):** The frequency at which the gain drops by 3 dB from its mid-band value.
        *   $f_{H} \approx \frac{1}{2\pi R_{th}' C_{ext}}$ where $R_{th}'$ is the Thevenin resistance seen from the transistor base and $C_{ext}$ is the effective external capacitance.
        *   A more accurate calculation involves Miller effect.

**Design Goal:** To achieve a flat mid-band gain over a desired frequency range, the values of coupling and bypass capacitors are chosen to set the lower cutoff frequency ($f_L$) above the minimum desired operating frequency.

**Reference:** Boylested & Nashelsky (11/e), Chapter 7.6: "Frequency Response"
Sedra & Smith (6/e), Chapter 4.3.3: "Frequency Response of the Common-Emitter Amplifier"

### 4.4 Input and Output Impedance

*   **Input Impedance ($Z_{in}$):** The impedance seen by the AC source connected to the input.
    *   $Z_{in} = R1 || R2 || r_{in}'$
    *   where $r_{in}' = \beta (r_e' + R_E')$ (where $R_E'$ is the AC resistance seen from the emitter to ground). If `RE` is fully bypassed, $R_E' = 0$, and $r_{in}' = \beta r_e'$. If `RE` is not bypassed, $R_E' = RE$.

*   **Output Impedance ($Z_{out}$):** The impedance seen by the load connected to the output.
    *   $Z_{out} = RC || R_{load}$ (assuming the transistor's output impedance $r_o$ is much larger than RC and RL). If the transistor is bypassed at the emitter, $Z_{out} \approx RC$.

**Design Goal:** The input impedance should be sufficiently high to avoid loading the preceding stage, and the output impedance should be sufficiently low to effectively drive the subsequent stage or load.

**Reference:** Boylested & Nashelsky (11/e), Chapter 7.5: "Input and Output Impedance"
Sedra & Smith (6/e), Chapter 4.3.1: "Biasing Considerations for the CE Amplifier"

---

## 5. Design Steps for a Common-Emitter RC Coupled Amplifier

Here's a systematic approach to designing a common-emitter RC coupled amplifier.

### 5.1 Choosing the Transistor

*   Select a transistor based on the required operating frequency, voltage/current handling capabilities, and available gain.
*   Obtain the transistor's datasheet to find key parameters like $\beta$ (range), $V_{BE(on)}$, $V_{CE(sat)}$, and junction capacitances.

### 5.2 Determining the Q-Point

*   **Collector Current ($I_{CQ}$):** This is a critical parameter. It affects $r_e'$, power dissipation, and gain. Typically, $I_{CQ}$ is chosen to be around 1-10 mA for small-signal amplifiers. A common practice is to set $I_{CQ}$ to a value that is roughly half of the maximum possible collector current to allow for symmetrical output swing.
*   **Collector-Emitter Voltage ($V_{CEQ}$):** For maximum output voltage swing, $V_{CEQ}$ is often set to approximately half of the supply voltage ($V_{CC}/2$). This ensures that the collector voltage can swing both up and down without clipping.
*   **Emitter Current ($I_{EQ}$):** $I_{EQ} \approx I_{CQ}$ (since $I_C \approx I_E$).

### 5.3 Designing the Biasing Circuit (Voltage Divider Bias)

Given $V_{CC}$, desired $I_{CQ}$, and $V_{CEQ}$:

1.  **Choose `RE`:** For good stability, select `RE` such that $V_{RE}$ is a significant fraction of $V_{CC}$ (e.g., $V_{RE} \approx 0.1 \times V_{CC}$ to $0.2 \times V_{CC}$). This helps in keeping $V_{BE}$ relatively constant.
    *   $RE = \frac{V_{RE}}{I_{EQ}}$

2.  **Calculate $V_{BE}$:** Assume $V_{BE} \approx 0.7V$ for silicon transistors.

3.  **Calculate $V_{CEQ}$ and $V_{RC}$:**
    *   $V_{CEQ} = V_{CC} - I_{CQ} R_C - I_{EQ} RE$
    *   Rearranging for $R_C$: $R_C = \frac{V_{CC} - V_{CEQ} - V_{RE}}{I_{CQ}}$

4.  **Calculate $R1$ and $R2$ (Voltage Divider):**
    *   Thevenin equivalent resistance at the base: $R_{th} = R1 || R2$.
    *   $V_{th} = V_{CC} \frac{R2}{R1+R2}$.
    *   From the base loop: $V_{th} = V_{BE} + I_{EQ} RE$.
    *   We need to satisfy the stability condition, e.g., $R_{th} \ge 10 \times RE$.
    *   Let's choose a value for $R_{th}$ (e.g., $R_{th} = 10 \times RE$).
    *   From $R_{th} = \frac{R1 \times R2}{R1 + R2}$, we have $\frac{1}{R_{th}} = \frac{1}{R1} + \frac{1}{R2}$.
    *   From $V_{th} = V_{CC} \frac{R2}{R1+R2}$, we have $\frac{R2}{R1+R2} = \frac{V_{th}}{V_{CC}}$.
    *   This gives us two equations with two unknowns ($R1, R2$). Solve for $R1$ and $R2$. A common approach is to choose $R2$ first, then calculate $R1$.
        *   Let $R2 = k \times RE$ (e.g., k=10 to 20 for good stability). Then $R_{th} = R1 || R2$.
        *   From $V_{th} = V_{BE} + I_{EQ} RE$, calculate $V_{th}$.
        *   Then, $R1 = R_{th} \frac{R2}{R2 - R_{th}}$.
        *   Alternatively, from $\frac{R2}{R1+R2} = \frac{V_{th}}{V_{CC}}$, we get $R1 + R2 = R2 \frac{V_{CC}}{V_{th}}$, so $R1 = R2 (\frac{V_{CC}}{V_{th}} - 1)$.
        *   Ensure $R_{th} = R1 || R2 \ge 10 \times RE$.

### 5.4 Designing the Coupling Capacitors ($C1$, $C2$)

The coupling capacitors must pass the AC signal with minimal attenuation in the desired frequency range. They are chosen to ensure that the lower cutoff frequency ($f_L$) set by them is below the minimum required operating frequency ($f_{min}$).

*   **Input Coupling Capacitor ($C1$):**
    *   It forms a high-pass filter with the input impedance of the amplifier stage ($Z_{in}$).
    *   $f_{CL1} = \frac{1}{2\pi Z_{in} C1}$
    *   We want $f_{CL1} \le f_{min}$.
    *   $C1 \ge \frac{1}{2\pi Z_{in} f_{min}}$

*   **Output Coupling Capacitor ($C2$):**
    *   It forms a high-pass filter with the load impedance ($RL$) and the input impedance of the next stage ($Z_{in(next)}$). Assuming $RL$ is the dominant load impedance:
    *   $f_{CL2} = \frac{1}{2\pi (RL) C2}$
    *   We want $f_{CL2} \le f_{min}$.
    *   $C2 \ge \frac{1}{2\pi RL f_{min}}$

**Note:** $Z_{in}$ for $C1$ calculation is the AC input impedance of the stage (R1 || R2 || $\beta r_e'$). For $C2$, the load is often $RL$, so the resistance is $RL$.

### 5.5 Designing the Bypass Capacitor ($C_{bypass}$)

The bypass capacitor is used to shunt the emitter resistor `RE` at the desired frequencies, thus maximizing the AC voltage gain.

*   It forms a high-pass filter with the AC resistance in the emitter circuit. The resistance seen by $C_{bypass}$ is primarily $RE$ (if fully bypassed) or $(r_e' + RE)$ if unbypassed, or $(r_e' + RE || RE)$ where $RE$ is the DC emitter resistor and $RE'$ is the parallel combination of DC RE and any AC impedance from emitter to ground (usually just RE if not bypassed).
*   If `RE` is to be bypassed, the impedance of $C_{bypass}$ must be much smaller than `RE` at the lowest operating frequency ($f_{min}$).
*   $X_{C_{bypass}} \ll RE$ at $f_{min}$. A common rule of thumb is $X_{C_{bypass}} \le 0.1 \times RE$ at $f_{min}$.
*   $f_{CLE} = \frac{1}{2\pi (RE) C_{bypass}}$ (assuming $r_e' \ll RE$).
*   We want $f_{CLE} \ge f_{min}$.
*   $C_{bypass} \ge \frac{1}{2\pi RE f_{min}}$

**Important:** If the desired gain is lower, or if stability is paramount, `RE` might be left unbypassed. In that case, no bypass capacitor is needed, but the voltage gain will be significantly reduced.

### 5.6 Calculating the Voltage Gain ($A_v$)

Once the components are chosen and the Q-point is set:

*   Calculate $I_{EQ}$ and $r_e' = \frac{25mV}{I_{EQ}}$.
*   Calculate the AC collector resistance: $R_C = RC || R_{load}$.
*   If `RE` is bypassed: $A_v \approx -\frac{R_C}{r_e'}$.
*   If `RE` is not bypassed: $A_v \approx -\frac{R_C}{r_e' + RE}$.

### 5.7 Calculating Input and Output Impedances

*   **Input Impedance ($Z_{in}$):**
    *   Calculate $r_{in}' = \beta (r_e' + R_E')$ where $R_E'$ is the AC resistance from the emitter to ground (0 if bypassed, RE if unbypassed).
    *   $Z_{in} = R1 || R2 || r_{in}'$.

*   **Output Impedance ($Z_{out}$):**
    *   $Z_{out} = RC || r_o$ (where $r_o$ is the transistor's output resistance).
    *   For small-signal analysis and typical RC values, $Z_{out} \approx RC$.

**Reference:** Bell (5/e), Chapter 7: "Single-Stage Transistor Amplifiers"
Neamen (3/e), Chapter 7: "BJT Amplifiers"

---

## 6. Example Design of an RC Coupled Amplifier

**Problem Statement:** Design a single-stage CE RC coupled amplifier using a general-purpose NPN transistor (assume $\beta = 100$). The amplifier should operate from a $V_{CC} = 12V$ supply. The desired Q-point is $I_{CQ} = 2mA$ and $V_{CEQ} = 6V$. The amplifier should have a voltage gain of approximately -100 and operate down to $50Hz$. The load resistor $RL = 10k\Omega$.

**Design Steps:**

1.  **Choose Transistor:** Assume a general-purpose NPN transistor with $\beta = 100$.

2.  **Determine Q-point:**
    *   $I_{CQ} = 2mA = 0.002A$
    *   $V_{CEQ} = 6V$

3.  **Design Biasing Circuit (Voltage Divider Bias):**
    *   **Choose `RE`:** Let $V_{RE} \approx 0.1 \times V_{CC} = 0.1 \times 12V = 1.2V$.
        *   $RE = \frac{V_{RE}}{I_{EQ}} = \frac{1.2V}{0.002A} = 600\Omega$. Choose a standard value, e.g., $RE = 620\Omega$.
    *   **Calculate $V_{BE}$:** Assume $V_{BE(on)} = 0.7V$.
    *   **Calculate $V_{RC}$:**
        *   $V_{RC} = V_{CC} - V_{CEQ} - V_{RE} = 12V - 6V - 1.2V = 4.8V$.
    *   **Calculate `RC`:**
        *   $RC = \frac{V_{RC}}{I_{CQ}} = \frac{4.8V}{0.002A} = 2.4k\Omega$. Choose a standard value, e.g., $RC = 2.4k\Omega$.
    *   **Calculate $R1$ and $R2$:**
        *   $R_{th} \ge 10 \times RE = 10 \times 620\Omega = 6.2k\Omega$. Let's choose $R_{th} = 10k\Omega$.
        *   $V_{th} = V_{BE} + I_{EQ} RE = 0.7V + (0.002A)(620\Omega) = 0.7V + 1.24V = 1.94V$.
        *   From $V_{th} = V_{CC} \frac{R2}{R1+R2}$: $1.94V = 12V \frac{R2}{R1+R2}$.
        *   $\frac{R2}{R1+R2} = \frac{1.94}{12} \approx 0.1617$.
        *   $R1+R2 = R2 \frac{12}{1.94} \approx 6.186 \times R2$.
        *   $R1 \approx 5.186 \times R2$.
        *   Also, $R_{th} = R1 || R2 = \frac{R1 \times R2}{R1+R2} = 10k\Omega$.
        *   Substitute $R1$: $\frac{5.186 R2 \times R2}{5.186 R2 + R2} = 10k\Omega$.
        *   $\frac{5.186 R2^2}{6.186 R2} = 10k\Omega$.
        *   $R2 \approx \frac{10k\Omega \times 6.186}{5.186} \approx 11.93k\Omega$. Choose a standard value, e.g., $R2 = 12k\Omega$.
        *   $R1 = 5.186 \times 12k\Omega \approx 62.2k\Omega$. Choose a standard value, e.g., $R1 = 62k\Omega$.
        *   **Check Stability:** $R_{th} = R1 || R2 = 62k\Omega || 12k\Omega = \frac{62 \times 12}{62+12} = \frac{744}{74} \approx 10.05k\Omega$.
        *   $10.05k\Omega \ge 10 \times 620\Omega = 6.2k\Omega$. Stability condition is met.

4.  **Design Coupling Capacitors ($C1$, $C2$):**
    *   Minimum operating frequency $f_{min} = 50Hz$.
    *   **Input Impedance ($Z_{in}$):**
        *   $r_e' = \frac{25mV}{I_{CQ}} = \frac{25mV}{2mA} = 12.5\Omega$.
        *   $r_{in}' = \beta (r_e' + RE') = 100 (12.5\Omega + 0\Omega)$ (assuming RE is bypassed for the initial gain calculation, but for Zin, we need to consider the resistance if RE is bypassed). Let's calculate $Z_{in}$ for the input impedance of the stage. With RE bypassed, $r_{in}' = \beta r_e' = 100 \times 12.5\Omega = 1250\Omega$.
        *   $Z_{in} = R1 || R2 || r_{in}' = 62k\Omega || 12k\Omega || 1250\Omega \approx 1k\Omega$.
    *   **$C1$:**
        *   $C1 \ge \frac{1}{2\pi Z_{in} f_{min}} = \frac{1}{2\pi (1k\Omega) (50Hz)} \approx 3.18\mu F$. Choose a standard value, e.g., $C1 = 4.7\mu F$.
    *   **$C2$:** Load is $RL = 10k\Omega$.
        *   $C2 \ge \frac{1}{2\pi RL f_{min}} = \frac{1}{2\pi (10k\Omega) (50Hz)} \approx 0.318\mu F$. Choose a standard value, e.g., $C2 = 0.33\mu F$.

5.  **Design Bypass Capacitor ($C_{bypass}$):**
    *   To maximize gain, bypass `RE` (620$\Omega$).
    *   $C_{bypass} \ge \frac{1}{2\pi RE f_{min}} = \frac{1}{2\pi (620\Omega) (50Hz)} \approx 5.13\mu F$. Choose a standard value, e.g., $C_{bypass} = 10\mu F$.

6.  **Calculate Voltage Gain ($A_v$):**
    *   $r_e' = 12.5\Omega$.
    *   AC collector resistance $R_C = RC || RL = 2.4k\Omega || 10k\Omega = \frac{2.4 \times 10}{2.4 + 10} k\Omega = \frac{24}{12.4} k\Omega \approx 1.935k\Omega$.
    *   Since `RE` is bypassed, $A_v \approx -\frac{R_C}{r_e'} = -\frac{1.935k\Omega}{12.5\Omega} \approx -154.8$.
    *   **Note:** The desired gain was -100. Our calculated gain is -154.8. To reduce gain, we could either increase $r_e'$ (by increasing $I_{CQ}$) or un-bypass `RE` partially or fully.

    *   **Alternative: If `RE` is NOT bypassed:**
        *   $A_v \approx -\frac{R_C}{r_e' + RE} = -\frac{1.935k\Omega}{12.5\Omega + 620\Omega} = -\frac{1.935k\Omega}{632.5\Omega} \approx -3.06$. This is too low.

    *   **Adjusting for desired gain (-100):**
        *   We need $r_e' + RE_{effective} = \frac{R_C}{|A_v|} = \frac{1.935k\Omega}{100} = 19.35\Omega$.
        *   If `RE` is bypassed, we need $r_e' = 19.35\Omega$.
        *   $I_{CQ} = \frac{25mV}{r_e'} = \frac{25mV}{19.35\Omega} \approx 1.29mA$.
        *   Let's re-design with $I_{CQ} = 1.5mA$.
        *   $V_{RE} \approx 0.1 \times 12V = 1.2V \implies RE = \frac{1.2V}{1.5mA} = 800\Omega$. Let's choose $RE = 820\Omega$.
        *   $V_{RC} = 12V - V_{CEQ} - V_{RE}$. To maintain $V_{CEQ} \approx 6V$, let's recalculate $V_{RC}$ if $V_{RE}=1.2V$: $V_{RC} = 12 - 6 - 1.2 = 4.8V$.
        *   $RC = \frac{4.8V}{1.5mA} = 3.2k\Omega$. Choose $RC = 3.3k\Omega$.
        *   $r_e' = \frac{25mV}{1.5mA} \approx 16.7\Omega$.
        *   $R_C = 3.3k\Omega || 10k\Omega = \frac{3.3 \times 10}{3.3+10} k\Omega = \frac{33}{13.3} k\Omega \approx 2.48k\Omega$.
        *   $A_v \approx -\frac{R_C}{r_e'} = -\frac{2.48k\Omega}{16.7\Omega} \approx -148.5$. Still higher than -100.

        *   **To achieve a gain of exactly -100:**
            *   We need $r_e' = \frac{R_C}{100} = \frac{2.48k\Omega}{100} = 24.8\Omega$.
            *   $I_{CQ} = \frac{25mV}{24.8\Omega} \approx 1mA$.
            *   Let's re-design with $I_{CQ} = 1mA$.
            *   $V_{RE} \approx 1.2V \implies RE = \frac{1.2V}{1mA} = 1.2k\Omega$.
            *   $V_{RC} = 12V - 6V - 1.2V = 4.8V$.
            *   $RC = \frac{4.8V}{1mA} = 4.8k\Omega$. Choose $RC = 4.7k\Omega$.
            *   $r_e' = \frac{25mV}{1mA} = 25\Omega$.
            *   $R_C = 4.7k\Omega || 10k\Omega = \frac{4.7 \times 10}{4.7+10} k\Omega = \frac{47}{14.7} k\Omega \approx 3.197k\Omega$.
            *   $A_v \approx -\frac{R_C}{r_e'} = -\frac{3.197k\Omega}{25\Omega} \approx -127.9$. Still not -100.

        *   **Using un-bypassed RE for gain control:** If we partially bypass RE. Let's assume we use the original design parameters ($I_{CQ}=2mA$, $RE=620\Omega$, $RC=2.4k\Omega$).
            *   $r_e' = 12.5\Omega$.
            *   $R_C = 1.935k\Omega$.
            *   If RE is partially bypassed, the effective emitter resistance is $RE || X_{C_{bypass}}$. For gain calculation, we can model this as $r_e' + RE_{eff}$.
            *   If we want $A_v \approx -100$, we need $r_e' + RE_{eff} = \frac{R_C}{100} = \frac{1.935k\Omega}{100} = 19.35\Omega$.
            *   $12.5\Omega + RE_{eff} = 19.35\Omega \implies RE_{eff} = 6.85\Omega$.
            *   This means we need to bypass $RE$ such that the remaining AC impedance is $6.85\Omega$. This is achieved by choosing $C_{bypass}$ carefully.
            *   $X_{C_{bypass}} \approx RE = 620\Omega$ at $f_{min}$ for full bypass to get high gain.
            *   To get $RE_{eff} = 6.85\Omega$, we need $X_{C_{bypass}} \ll RE$. If $X_{C_{bypass}} = 0.1 \times RE = 62\Omega$ at $f_{min}=50Hz$.
            *   $C_{bypass} = \frac{1}{2\pi X_{C_{bypass}} f_{min}} = \frac{1}{2\pi (62\Omega) (50Hz)} \approx 51.3\mu F$. This is a very large capacitor and might not be practical or necessary.

        *   **Let's stick with the design for $I_{CQ} = 2mA$, $RE = 620\Omega$, $RC = 2.4k\Omega$, and accept the higher gain of -154.8.** If a precise gain of -100 is critical, one might need to use an unbypassed portion of RE or adjust the Q-point and component values more carefully.

7.  **Calculate Input and Output Impedances:**
    *   $Z_{in} = R1 || R2 || \beta(r_e' + RE') = 62k\Omega || 12k\Omega || 100(12.5\Omega + 0\Omega) \approx 1k\Omega$.
    *   $Z_{out} = RC || r_o$. Assuming $r_o \gg RC$, $Z_{out} \approx RC = 2.4k\Omega$.

**Final Component Values:**
*   $V_{CC} = 12V$
*   NPN Transistor ($\beta = 100$)
*   $R1 = 62k\Omega$
*   $R2 = 12k\Omega$
*   $RE = 620\Omega$
*   $RC = 2.4k\Omega$
*   $C1 = 4.7\mu F$
*   $C2 = 0.33\mu F$
*   $C_{bypass} = 10\mu F$
*   $RL = 10k\Omega$

---

## 7. Key Concepts and Definitions

*   **Amplifier:** A circuit that increases the amplitude of an AC signal.
*   **Q-point (Quiescent Point):** The DC operating point of a transistor, defined by DC collector current ($I_{CQ}$) and collector-emitter voltage ($V_{CEQ}$).
*   **Active Region:** The region of the transistor's operation where it acts as an amplifier.
*   **Biasing:** The process of establishing the DC operating point.
*   **Voltage Divider Bias:** A biasing method that uses a voltage divider network (R1, R2) to provide a stable base voltage, often with an emitter resistor (RE) for further stabilization.
*   **Coupling Capacitors (C1, C2):** Capacitors used to block DC and pass AC signals between amplifier stages or between the signal source/load and the amplifier.
*   **Bypass Capacitor ($C_{bypass}$):** A capacitor used to shunt AC signals to ground across a resistor (typically RE), preventing AC signal degeneration and increasing voltage gain.
*   **Voltage Gain ($A_v$):** The ratio of the output AC voltage to the input AC voltage. $A_v = \frac{V_{out}}{V_{in}}$.
*   **AC Collector Resistance ($R_C$):** The parallel combination of the collector resistor (RC) and the load resistor (RL) when viewed from the collector terminal.
*   **Intrinsic Emitter Resistance ($r_e'$):** The dynamic resistance of the base-emitter junction, calculated as $r_e' = \frac{25mV}{I_{EQ}}$.
*   **Input Impedance ($Z_{in}$):** The impedance seen by the AC source connected to the input of the amplifier.
*   **Output Impedance ($Z_{out}$):** The impedance seen by the load connected to the output of the amplifier.
*   **Frequency Response:** The variation of amplifier gain with signal frequency.
*   **Low-Frequency Cutoff ($f_L$):** The frequency below which the amplifier gain starts to decrease significantly due to coupling and bypass capacitors.
*   **High-Frequency Cutoff ($f_H$):** The frequency above which the amplifier gain starts to decrease significantly due to parasitic capacitances.
*   **Bandwidth:** The range of frequencies over which the amplifier gain is within 3 dB of its mid-band value ($BW = f_H - f_L$).

## 8. Important Points to Remember

*   **Stability is paramount:** Always prioritize a stable Q-point. Voltage divider bias with a sufficiently large RE is generally preferred.
*   **Trade-offs:** There are trade-offs between gain, stability, input impedance, and frequency response.
    *   Increasing `RE` improves stability but reduces gain (unless bypassed).
    *   Bypassing `RE` increases gain but reduces stability.
    *   Increasing `R1` and `R2` generally reduces input impedance.
    *   Capacitor values depend on the desired low-frequency cutoff.
*   **Mid-band gain:** $A_v \approx -\frac{R_C}{r_e'}$ (for bypassed RE).
*   **Q-point choice:** $V_{CEQ} \approx V_{CC}/2$ and $I_{CQ}$ chosen for desired gain and power.
*   **Bypass condition:** For effective bypassing, $X_{C_{bypass}} \ll RE$ at the lowest desired frequency.
*   **Coupling capacitor condition:** For effective coupling, $X_{C} \ll Z_{load}$ at the lowest desired frequency.
*   **Load:** The output coupling capacitor connects to the load resistor ($RL$). $RL$ affects both AC collector resistance and the calculation of $C2$.
*   **$\beta$ variations:** The design should account for the range of $\beta$ for the chosen transistor, especially if stability is critical.

## 9. Practice Questions and Answers

**Question 1:** What is the primary function of coupling capacitors in an RC coupled amplifier?
**Answer:** To block DC signals from passing between stages while allowing AC signals to pass, preventing DC bias points from shifting.

**Question 2:** Explain why the emitter resistor (RE) is often bypassed with a capacitor in a common-emitter amplifier.
**Answer:** Bypassing RE with a capacitor provides a low impedance path to ground for AC signals at the emitter. This prevents AC degeneration caused by RE, which would otherwise reduce the voltage gain.

**Question 3:** For a voltage divider biased amplifier, what is the typical rule of thumb for the relationship between $R_{th}$ (Thevenin resistance at the base) and $RE$ for good stability?
**Answer:** $R_{th} \ge 10 \times RE$.

**Question 4:** If the desired voltage gain of a CE amplifier stage is $A_v = -50$, and the AC collector resistance ($R_C$) is $2k\Omega$, what should be the approximate intrinsic emitter resistance ($r_e'$) of the transistor? (Assume RE is bypassed).
**Answer:**
$|A_v| = \frac{R_C}{r_e'}$
$50 = \frac{2k\Omega}{r_e'}$
$r_e' = \frac{2k\Omega}{50} = 40\Omega$.

**Question 5:** An RC coupled amplifier needs to operate down to $100Hz$. If the input impedance of the stage is $1.5k\Omega$, what is the minimum value for the input coupling capacitor ($C1$)?
**Answer:**
$f_{min} = 100Hz$
$Z_{in} = 1.5k\Omega$
$C1 \ge \frac{1}{2\pi Z_{in} f_{min}}$
$C1 \ge \frac{1}{2\pi (1.5k\Omega)(100Hz)}$
$C1 \ge \frac{1}{2\pi (1500)(100)} = \frac{1}{942477} \approx 1.06\mu F$.
The minimum value for $C1$ is approximately $1.06\mu F$.

**Question 6:** Describe the main trade-off when choosing the value of the emitter resistor (RE) in a CE amplifier.
**Answer:** A larger RE improves Q-point stability but reduces voltage gain (if unbypassed or partially bypassed). A smaller RE increases voltage gain (if bypassed) but can reduce stability.

---
