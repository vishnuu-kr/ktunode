---
title: "CS MOSFET amplifier - Design for a specific voltage gain and plot frequency response characteristics"
subject: "ANALOG CIRCUITS LAB"
module: "Module 1: RC Integrating and Differentiating Circuits – (Transient analysis with different inputs and frequency response)"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe428"
status: "completed"
scrapedAt: "2026-05-23T17:44:30.105Z"
---
# ANALOG CIRCUITS LAB - Module 1: RC Integrating and Differentiating Circuits

## Topic: CS MOSFET Amplifier - Design for a Specific Voltage Gain and Plot Frequency Response Characteristics

This topic focuses on understanding and designing a Common Source (CS) MOSFET amplifier, a fundamental building block in analog electronics. We will delve into designing for a desired voltage gain and then explore its behavior across different frequencies.

---

### 1. Introduction to CS MOSFET Amplifier

The Common Source (CS) MOSFET amplifier is a voltage amplifier where the input signal is applied to the gate, the output is taken from the drain, and the source is common to both input and output circuits. It provides voltage gain and is widely used due to its high input impedance.

**Key Components:**

*   **MOSFET:** Metal-Oxide-Semiconductor Field-Effect Transistor. In this context, we'll assume an N-channel enhancement mode MOSFET.
*   **Resistors:**
    *   $R_D$: Drain resistor, critical for setting the output voltage swing and gain.
    *   $R_S$: Source resistor, used for biasing and stability.
    *   $R_G$: Gate resistor, typically very large to ensure high input impedance.
*   **Capacitors:**
    *   $C_{in}$: Input coupling capacitor, blocks DC from the input signal source.
    *   $C_{out}$: Output coupling capacitor, blocks DC from the load.
    *   $C_S$: Source bypass capacitor, used to improve AC gain by effectively shorting the source resistor at AC frequencies.

**Basic CS Amplifier Configuration:**

```
      Vdd
       |
       RD
       |
Output o-----\ /----- Drain
             | |
             | |  MOSFET (N-channel)
             | |
Source o-----| |----- Source
             | |
             -----
               |
               RS
               |
              GND

Input o----Cin----- Gate --- RG ----- Vdd (DC bias path)
              |
              Ground
```

**(Refer to David A. Bell, Chapter 8: Field-Effect Transistors, for detailed explanations of MOSFET operation and basic amplifier configurations.)**

---

### 2. Design for a Specific Voltage Gain

The voltage gain ($A_v$) of a CS amplifier is primarily determined by the ratio of the drain resistor ($R_D$) to the effective source resistance.

**DC Analysis (Biasing):**

Before analyzing AC behavior, we need to bias the MOSFET into its saturation region. This involves setting appropriate DC voltages and currents.

*   **Gate-Source Voltage ($V_{GS}$):** Determines the drain current ($I_D$).
*   **Drain-Source Voltage ($V_{DS}$):** Must be greater than the saturation voltage ($V_{DS(sat)}$) for the MOSFET to operate in the saturation region. $V_{DS(sat)} \approx V_{GS} - V_{th}$, where $V_{th}$ is the threshold voltage.
*   **Drain Current ($I_D$):** For a MOSFET in saturation, $I_D = \frac{1}{2} k_n (V_{GS} - V_{th})^2$, where $k_n$ is the transconductance parameter.

**A common biasing method is voltage divider biasing:**

```
      Vdd
       |
       RD
       |
Output o-----\ /----- Drain
             | |
             | |  MOSFET (N-channel)
             | |
Source o-----| |----- Source
             | |
             -----
               |
               RS
               |
              GND

Input o----Cin----- Gate -- R1 --|
              |                   |
              Ground              R2 -- GND
```

*   $V_{GS} = V_{DS} \frac{R_2}{R_1 + R_2}$
*   $I_D \approx \frac{V_{GS} - V_{th}}{R_S}$ (if $R_S$ is unbypassed)
*   $V_{DS} = V_{DD} - I_D R_D - I_D R_S$

**(Refer to D. Meganathan, Chapter 5: Field Effect Transistors, for detailed biasing techniques and DC analysis.)**

**AC Analysis (Small-Signal Model):**

For AC analysis, we use the small-signal model of the MOSFET. The key parameter is the **transconductance ($g_m$)**:

$g_m = \frac{\partial I_D}{\partial V_{GS}} = k_n (V_{GS} - V_{th})$

For a CS amplifier with a bypassed source resistor ($C_S$ is present and acts as a short circuit at AC frequencies), the voltage gain is approximately:

$A_v = \frac{v_{out}}{v_{in}} \approx -g_m R_D$

**If the source resistor ($R_S$) is unbypassed:**

$A_v = \frac{v_{out}}{v_{in}} \approx -\frac{g_m R_D}{1 + g_m R_S}$

**Design Steps for a Specific Voltage Gain:**

1.  **Choose a MOSFET:** Select a MOSFET with known $V_{th}$ and $k_n$ (from its datasheet).
2.  **Determine Operating Point (Biasing):**
    *   Choose a desired $I_D$ and $V_{GS}$ to operate in the saturation region. This usually involves setting $V_{GS}$ comfortably above $V_{th}$.
    *   Calculate the required $R_S$ to achieve the chosen $I_D$ for the chosen $V_{GS}$.
    *   Choose $V_{DS}$ such that $V_{DS} > V_{GS} - V_{th}$ to ensure saturation.
    *   Calculate $R_D$ using the voltage divider biasing equations and the chosen $V_{DD}$ and $V_{DS}$.
3.  **Calculate Required $g_m$:** From the desired voltage gain ($A_v$) and the chosen $R_D$ (assuming a bypassed source for maximum gain):
    $g_m = -\frac{A_v}{R_D}$
    (Note: The negative sign indicates a phase inversion).
4.  **Calculate Required $V_{GS}$:** Using the calculated $g_m$ and the MOSFET equation:
    $V_{GS} = V_{th} + \sqrt{\frac{2 I_D}{k_n}}$
    Ensure this $V_{GS}$ is consistent with the biasing network.
5.  **Select Coupling and Bypass Capacitors:**
    *   $C_{in}$ and $C_{out}$ should have a low reactance at the lowest frequency of interest ($X_C \ll R_{in}$ for $C_{in}$ and $X_C \ll R_{load}$ for $C_{out}$), where $R_{in}$ is the input impedance of the amplifier.
    *   $C_S$ should have a low reactance at the lowest frequency of interest ($X_{C_S} \ll R_S'$), where $R_S'$ is the effective AC resistance in the source path (often $R_S$ if unbypassed, or significantly less if bypassed).

**Example:**

Design a CS MOSFET amplifier for a voltage gain of $-10$. Assume a $2N3797$ N-channel MOSFET with $V_{th} = 2V$ and $k_n = 0.5 mA/V^2$. Use a $V_{DD} = 12V$.

1.  **Choose Operating Point:** Let's aim for $I_D \approx 2mA$ and $V_{GS} \approx 4V$.
    *   Check saturation: $V_{GS(sat)} = V_{GS} - V_{th} = 4V - 2V = 2V$.
    *   Calculate required $R_S$: $R_S = \frac{V_{GS} - V_{th}}{I_D} = \frac{4V - 2V}{2mA} = \frac{2V}{2mA} = 1k\Omega$.
    *   Choose $V_{DS}$: Let $V_{DS} = 6V$ (which is $> V_{GS} - V_{th} = 2V$).
    *   Calculate $R_D$: $V_{DS} = V_{DD} - I_D R_D - I_D R_S$.
        $6V = 12V - (2mA) R_D - (2mA)(1k\Omega)$
        $6V = 12V - 2mA R_D - 2V$
        $6V = 10V - 2mA R_D$
        $2mA R_D = 4V$
        $R_D = \frac{4V}{2mA} = 2k\Omega$.

2.  **Calculate required $g_m$ for $A_v = -10$ and $R_D = 2k\Omega$ (assuming bypassed source):**
    $g_m = -\frac{A_v}{R_D} = -\frac{-10}{2k\Omega} = 5 mS$.

3.  **Verify $V_{GS}$ for calculated $g_m$:**
    $g_m = k_n (V_{GS} - V_{th})$
    $5mS = 0.5mS/V^2 (V_{GS} - 2V)$
    $\frac{5mS}{0.5mS/V^2} = V_{GS} - 2V$
    $10V = V_{GS} - 2V$
    $V_{GS} = 12V$.

    **Wait!** Our initial assumption of $V_{GS} = 4V$ is incorrect if we want a gain of -10. This highlights the iterative nature of design. Let's re-evaluate.

**Revised Design Approach (More practical):**

Let's start with the desired gain and MOSFET parameters.

1.  **Choose Operating Point:**
    *   Assume $V_{GS} = 4V$ for the $2N3797$ ($V_{th} = 2V, k_n = 0.5 mA/V^2$).
    *   $I_D = \frac{1}{2} k_n (V_{GS} - V_{th})^2 = \frac{1}{2} (0.5 mA/V^2) (4V - 2V)^2 = \frac{1}{2} (0.5 mA/V^2) (4V^2) = 1 mA$.
    *   This $I_D$ is quite low. Let's aim for a higher $I_D$, say $4mA$.
    *   For $I_D = 4mA$, $4mA = \frac{1}{2} (0.5 mA/V^2) (V_{GS} - 2V)^2$.
        $8mA = 0.5mA/V^2 (V_{GS} - 2V)^2$.
        $16V^2 = (V_{GS} - 2V)^2$.
        $4V = V_{GS} - 2V$.
        $V_{GS} = 6V$.

2.  **Biasing with $V_{GS} = 6V$ and $I_D = 4mA$:**
    *   $R_S = \frac{V_{GS} - V_{th}}{I_D} = \frac{6V - 2V}{4mA} = \frac{4V}{4mA} = 1k\Omega$.
    *   Let's choose $V_{DD} = 12V$ and $V_{DS} = 6V$ (to be in saturation, $V_{GS} - V_{th} = 4V$).
    *   $V_{DS} = V_{DD} - I_D R_D - I_D R_S$.
        $6V = 12V - (4mA) R_D - (4mA)(1k\Omega)$.
        $6V = 12V - 4mA R_D - 4V$.
        $6V = 8V - 4mA R_D$.
        $4mA R_D = 2V$.
        $R_D = \frac{2V}{4mA} = 0.5k\Omega = 500\Omega$.

3.  **Calculate $g_m$ at this operating point:**
    $g_m = k_n (V_{GS} - V_{th}) = 0.5mS/V^2 (6V - 2V) = 0.5mS/V^2 (4V) = 2 mS$.

4.  **Calculate Voltage Gain (with bypassed source):**
    $A_v = -g_m R_D = -(2mS)(0.5k\Omega) = -1$.

    This gain is very low. To achieve a gain of -10, we need a larger $R_D$ or a higher $g_m$. Let's prioritize gain by increasing $R_D$ and adjusting $V_{DS}$.

**Let's target a gain of -10 with $V_{DD} = 12V$ and the $2N3797$ ($V_{th} = 2V, k_n = 0.5 mA/V^2$).**

1.  **Assume a reasonable $I_D$ and $V_{GS}$ for good gain and saturation.** Let's try $V_{GS} = 5V$.
    *   $I_D = \frac{1}{2} (0.5 mS/V^2) (5V - 2V)^2 = \frac{1}{2} (0.5 mS/V^2) (9V^2) = 2.25 mA$.
    *   $g_m = k_n (V_{GS} - V_{th}) = 0.5 mS/V^2 (5V - 2V) = 0.5 mS/V^2 (3V) = 1.5 mS$.

2.  **To get $A_v = -10$ with $g_m = 1.5 mS$:**
    $A_v = -g_m R_D \implies -10 = -(1.5 mS) R_D$.
    $R_D = \frac{10}{1.5 mS} = \frac{10}{0.0015} \Omega \approx 6.67 k\Omega$.

3.  **Biasing with $V_{GS} = 5V, I_D = 2.25 mA, R_D = 6.67 k\Omega$:**
    *   $R_S = \frac{V_{GS} - V_{th}}{I_D} = \frac{5V - 2V}{2.25mA} = \frac{3V}{2.25mA} \approx 1.33 k\Omega$.
    *   Let's choose $V_{DS} = 7V$ to ensure saturation.
    *   $V_{DS} = V_{DD} - I_D R_D - I_D R_S$.
        $7V = 12V - (2.25mA)(6.67k\Omega) - (2.25mA)(1.33k\Omega)$.
        $7V \approx 12V - 15V - 3V$. This is incorrect! The $I_D R_D$ drop is too large.

    **Important Consideration:** A higher $R_D$ requires a lower $I_D$ for a given $V_{DD}$ to maintain proper saturation, or a higher $V_{DD}$.

    Let's try a different approach, starting with desired $R_D$ and then adjusting the operating point.

    **Let's use $R_D = 10k\Omega$ (a common value) and aim for $A_v = -10$.**
    *   This implies $g_m = 1 mS$ (for $A_v = -g_m R_D$).
    *   For $g_m = 1 mS$, $1 mS = 0.5 mS/V^2 (V_{GS} - 2V) \implies V_{GS} = 4V$.
    *   With $V_{GS} = 4V$, $I_D = \frac{1}{2} (0.5 mS/V^2) (4V - 2V)^2 = 1 mA$.

    **Biasing with $V_{GS} = 4V, I_D = 1 mA, R_D = 10k\Omega$:**
    *   $R_S = \frac{V_{GS} - V_{th}}{I_D} = \frac{4V - 2V}{1mA} = 2k\Omega$.
    *   Check $V_{DS}$: Let's choose $V_{DS} = 6V$ (safe for saturation as $V_{GS}-V_{th}=2V$).
    *   $V_{DS} = V_{DD} - I_D R_D - I_D R_S$.
        $6V = 12V - (1mA)(10k\Omega) - (1mA)(2k\Omega)$.
        $6V = 12V - 10V - 2V$.
        $6V = 0V$. This is wrong! The voltage drops are too high.

    **Conclusion:** Achieving a high gain (like -10) with standard $V_{DD}$ and a simple voltage divider biasing can be challenging with a MOSFET that has moderate $V_{th}$ and $k_n$.

    **Let's revisit the example from David A. Bell (or adapt it for MOSFETs):** Often, for high gain, a different biasing or a different amplifier topology (like a cascode) is used. However, for this lab, we focus on the CS configuration.

    **Practical Design Strategy for Lab:**
    1.  Choose $R_D$ (e.g., $10k\Omega$).
    2.  Calculate the required $g_m$ for the target gain.
    3.  Determine the $V_{GS}$ needed for that $g_m$.
    4.  Calculate the $I_D$ for that $V_{GS}$.
    5.  Calculate $R_S$ using $I_D$ and $V_{GS}$.
    6.  Choose $V_{DD}$ and a target $V_{DS}$ to satisfy the voltage drops. If the voltage drops across $R_D$ and $R_S$ are too high for the chosen $V_{DD}$, you might need to:
        *   Reduce $R_D$.
        *   Reduce $I_D$ (which might require a higher $V_{GS}$ and hence higher bias voltages).
        *   Increase $V_{DD}$.
        *   Use a MOSFET with higher $k_n$ or lower $V_{th}$.

    **Let's try again, aiming for a gain of -5.**
    *   $R_D = 10k\Omega$.
    *   $g_m = -A_v / R_D = -(-5) / 10k\Omega = 0.5 mS$.
    *   $V_{GS} = V_{th} + g_m / k_n = 2V + 0.5mS / 0.5mS/V^2 = 2V + 1V = 3V$.
    *   $I_D = \frac{1}{2} k_n (V_{GS} - V_{th})^2 = \frac{1}{2} (0.5 mS/V^2) (3V - 2V)^2 = \frac{1}{2} (0.5 mS/V^2) (1V^2) = 0.25 mA$.
    *   $R_S = (V_{GS} - V_{th}) / I_D = (3V - 2V) / 0.25mA = 1V / 0.25mA = 4k\Omega$.

    **Biasing with $V_{GS} = 3V, I_D = 0.25 mA, R_D = 10k\Omega, R_S = 4k\Omega$.**
    *   $V_{DD} = 12V$. Target $V_{DS} = 5V$ (safe for saturation, $V_{GS}-V_{th}=1V$).
    *   $V_{DD} = V_{DS} + I_D R_D + I_D R_S$.
        $12V = 5V + (0.25mA)(10k\Omega) + (0.25mA)(4k\Omega)$.
        $12V = 5V + 2.5V + 1V$.
        $12V = 8.5V$. **This is incorrect, $V_{DD}$ needs to be higher or other values adjusted.**

    **Let's adjust $V_{DD}$ to satisfy the drops:**
    *   $V_{DD} = V_{DS} + I_D R_D + I_D R_S = 5V + 2.5V + 1V = 8.5V$.
    *   So, with $V_{DD} = 8.5V$, $R_D = 10k\Omega$, $R_S = 4k\Omega$, and voltage divider resistors to set $V_{GS} = 3V$, we can achieve a gain of approximately -5.

    **Designing for a specific gain is an iterative process, often involving simulation to verify.**

**Course Outcome Alignment:**
*   **CO1 (K3):** This section requires knowledge of MOSFET operation and small-signal analysis to design for a specific gain.
*   **CO2 (K3):** The design process leads to values that can be used in simulation.

---

### 3. Frequency Response Characteristics

A CS MOSFET amplifier's gain is not constant over all frequencies. It is affected by the coupling capacitors ($C_{in}$, $C_{out}$), the bypass capacitor ($C_S$), and parasitic capacitances within the MOSFET itself.

**Low-Frequency Response:**

At low frequencies, the reactances of $C_{in}$, $C_{out}$, and $C_S$ become significant.

*   **Input Coupling Capacitor ($C_{in}$):** Forms a high-pass filter with the input resistance of the amplifier ($R_{in}$). The $-3dB$ cutoff frequency is $f_{cL} = \frac{1}{2\pi R_{in} C_{in}}$.
    *   $R_{in} \approx R_{G1} || R_{G2}$ (if using voltage divider biasing with $R_{G1}$ and $R_{G2}$ from gate to Vdd and GND respectively). For simple $R_G$, it's $R_G$. In a practical MOSFET circuit, the gate is AC grounded through $C_{in}$ to the signal source. The input resistance seen by the signal source is the parallel combination of $R_G$ and the input impedance of the amplifier itself, which is very high due to the MOSFET's gate. So, $R_{in}$ is dominated by $R_G$.
*   **Source Bypass Capacitor ($C_S$):** If $R_S$ is present and bypassed by $C_S$, it forms a high-pass filter with the effective resistance in the source path. The $-3dB$ cutoff frequency is $f_{cS} = \frac{1}{2\pi R_{source\_eff} C_S}$. $R_{source\_eff}$ is approximately $R_S || (r_o || R_D || R_{load})$ where $r_o$ is the output resistance of the MOSFET. A simpler approximation for $R_{source\_eff}$ for calculating the low-frequency cutoff is $R_S || (1/g_m)$.
*   **Output Coupling Capacitor ($C_{out}$):** Forms a high-pass filter with the load resistance ($R_{load}$) and the output resistance of the amplifier ($R_{out}$). The $-3dB$ cutoff frequency is $f_{cR} = \frac{1}{2\pi (R_{out} + R_{load}) C_{out}}$.
    *   $R_{out} \approx R_D$ (if considering only the drain resistor) or $R_{out} \approx R_D || r_o$, where $r_o$ is the MOSFET's output resistance.

The overall low-frequency response is determined by the highest of these cutoff frequencies.

**High-Frequency Response:**

At high frequencies, parasitic capacitances become significant.

*   **MOSFET Parasitic Capacitances:**
    *   $C_{gs}$ (Gate-Source Capacitance): Connects the gate to the source.
    *   $C_{gd}$ (Gate-Drain Capacitance or Miller Capacitance): Connects the gate to the drain. This is the most significant one due to the Miller effect.
    *   $C_{ds}$ (Drain-Source Capacitance): Connects the drain to the source.
    *   $C_{in}$ and $C_{out}$ also have their own parasitic capacitances.

*   **Miller Effect:** The $C_{gd}$ capacitance is amplified by the voltage gain of the amplifier. The effective capacitance between gate and source becomes:
    $C_{gs(eff)} = C_{gs} + C_{gd}(1 - A_v)$
    Since $A_v$ is negative, $(1 - A_v)$ is greater than 1, significantly increasing the effective input capacitance.

*   **High-Frequency Cutoff ($f_{cH}$):** The amplifier's gain starts to roll off at high frequencies due to these parasitic capacitances. The $-3dB$ high-frequency cutoff is approximately given by:
    $f_{cH} \approx \frac{1}{2\pi R_{in(ac)} C_{in(eff)}}$
    where $R_{in(ac)}$ is the AC input resistance of the amplifier (primarily $R_G$), and $C_{in(eff)}$ is the effective input capacitance including the Miller effect. A more precise formula involves the various parasitic capacitances and resistances.

**(Refer to David A. Bell, Chapter 11: Frequency Response, for detailed analysis of frequency response and cutoff frequencies.)**

**Frequency Response Curve:**

The frequency response of a CS amplifier typically looks like this:

*   **Low-Frequency Region:** Gain starts from zero and increases as frequency increases, until it reaches the mid-band gain. This is due to the high-pass filtering effect of coupling and bypass capacitors.
*   **Mid-band Region:** The gain is relatively constant. This is the region where the amplifier is designed to operate.
*   **High-Frequency Region:** Gain decreases as frequency increases, due to the low-pass filtering effect of parasitic capacitances.

**Plotting Frequency Response Characteristics:**

1.  **Set up the circuit:** Design the CS amplifier for a desired mid-band gain, including biasing resistors and capacitors.
2.  **Apply a small sinusoidal input signal:** Vary the frequency of the input signal over a wide range (e.g., from 10 Hz to 1 MHz).
3.  **Measure the output voltage:** For each frequency, measure the amplitude of the output voltage.
4.  **Calculate the gain:** $A_v(f) = \frac{V_{out}(f)}{V_{in}(f)}$.
5.  **Convert to dB:** Gain in dB = $20 \log_{10} |A_v(f)|$.
6.  **Plot the frequency response:** Plot Gain (in dB) on the y-axis against frequency (on a logarithmic scale) on the x-axis.

**Key Parameters to Observe:**

*   **Mid-band Gain ($A_{v,mid}$):** The maximum constant gain achieved.
*   **Low-Frequency Cutoff ($f_L$):** The frequency at which the gain drops by $3dB$ from the mid-band gain in the low-frequency region.
*   **High-Frequency Cutoff ($f_H$):** The frequency at which the gain drops by $3dB$ from the mid-band gain in the high-frequency region.
*   **Bandwidth (BW):** $BW = f_H - f_L$. For most amplifiers, $f_L \ll f_H$, so $BW \approx f_H$.
*   **Gain-Bandwidth Product (GBWP):** $GBWP = A_{v,mid} \times BW$. This is a figure of merit for amplifiers.

**Course Outcome Alignment:**
*   **CO1 (K3):** Designing the circuit and then observing its frequency response in the lab.
*   **CO2 (K3):** Simulating the frequency response using SPICE or similar tools.
*   **CO3 (K3):** Analyzing the resulting frequency response plot and identifying the reasons for the gain variations.

---

### 4. Practice Questions and Exercises

**Question 1:**
A CS MOSFET amplifier uses an N-channel MOSFET with $V_{th} = 1.5V$ and $k_n = 2 mA/V^2$. The amplifier is biased with $V_{DD} = 15V$, $R_D = 4.7k\Omega$, and a voltage divider bias network ($R_1 = 47k\Omega, R_2 = 10k\Omega$) with $R_S = 2.2k\Omega$. The source resistor $R_S$ is bypassed with a capacitor $C_S$.

**(a)** Calculate the DC operating point ($V_{GS}, I_D, V_{DS}$).
**(b)** Calculate the transconductance ($g_m$) at this operating point.
**(c)** Calculate the mid-band voltage gain ($A_v$).
**(d)** If $C_{in}$ is chosen such that its reactance is $1/10$ of the input resistance at $100 Hz$, and $R_{in} \approx R_1 || R_2$, what is the minimum value of $C_{in}$?
**(e)** If $C_S$ needs to bypass $R_S$ effectively such that the gain at $100 Hz$ is only $10\%$ less than the mid-band gain, estimate $C_S$. (Hint: For low frequencies, $A_v(f) \approx -g_m R_D / (1 + R_S/R_{input\_impedance\_to\_source\_path}))$. A simpler approach is to consider the ratio of the reactances.

**Answer 1:**

**(a) DC Operating Point:**
*   $V_{GS} = V_{DD} \frac{R_2}{R_1 + R_2} = 15V \frac{10k\Omega}{47k\Omega + 10k\Omega} = 15V \frac{10}{57} \approx 2.63V$.
*   Check if in saturation: $V_{GS} = 2.63V$, $V_{th} = 1.5V$. $V_{GS} > V_{th}$, so likely in saturation.
*   $I_D = \frac{V_{GS} - V_{th}}{R_S} = \frac{2.63V - 1.5V}{2.2k\Omega} = \frac{1.13V}{2.2k\Omega} \approx 0.514 mA$.
*   $V_{DS} = V_{DD} - I_D R_D - I_D R_S = 15V - (0.514mA)(4.7k\Omega) - (0.514mA)(2.2k\Omega)$
    $V_{DS} = 15V - 2.416V - 1.131V \approx 11.45V$.
*   Check saturation: $V_{DS(sat)} = V_{GS} - V_{th} = 2.63V - 1.5V = 1.13V$. Since $V_{DS} = 11.45V > 1.13V$, it is in saturation.
*   **Operating Point:** $V_{GS} \approx 2.63V$, $I_D \approx 0.514 mA$, $V_{DS} \approx 11.45V$.

**(b) Transconductance ($g_m$):**
*   $g_m = k_n (V_{GS} - V_{th}) = (2 mA/V^2) (2.63V - 1.5V) = (2 mA/V^2) (1.13V) = 2.26 mS$.

**(c) Mid-band Voltage Gain ($A_v$):**
*   $A_v = -g_m R_D = -(2.26 mS) (4.7k\Omega) = -10.62$.

**(d) Minimum $C_{in}$:**
*   $R_{in} = R_1 || R_2 = 47k\Omega || 10k\Omega = \frac{47 \times 10}{47 + 10} k\Omega = \frac{470}{57} k\Omega \approx 8.25k\Omega$.
*   For $X_{C_{in}} = R_{in} / 10 = 8.25k\Omega / 10 = 825\Omega$ at $100 Hz$.
*   $C_{in} = \frac{1}{2\pi f X_{C_{in}}} = \frac{1}{2\pi (100 Hz) (825\Omega)} \approx \frac{1}{518364} F \approx 1.93 \mu F$.
*   **Minimum $C_{in} \approx 1.93 \mu F$**. (A standard value like $2.2 \mu F$ or $10 \mu F$ would be used).

**(e) Estimate $C_S$:**
*   For ideal bypass, $X_{C_S} \ll R_S$. If $X_{C_S} = R_S / 10 = 2.2k\Omega / 10 = 220\Omega$ at $100 Hz$.
*   $C_S = \frac{1}{2\pi f X_{C_S}} = \frac{1}{2\pi (100 Hz) (220\Omega)} \approx \frac{1}{138230} F \approx 7.23 \mu F$.
*   **Estimate $C_S \approx 7.23 \mu F$**. (A standard value like $10 \mu F$ or $22 \mu F$ would be used).

**Question 2:**
How does the Miller effect influence the high-frequency response of a CS MOSFET amplifier?

**Answer 2:**
The Miller effect refers to the increase in effective capacitance between the gate and source of a transistor due to the amplification of the gate-drain capacitance ($C_{gd}$) by the voltage gain ($A_v$) of the amplifier. The effective capacitance becomes $C_{gs(eff)} = C_{gs} + C_{gd}(1 - A_v)$. Since $A_v$ for a CS amplifier is negative, $(1 - A_v)$ is greater than 1, significantly boosting the capacitance seen at the input. This increased input capacitance acts as a low-pass filter with the input resistance, causing the gain to roll off at higher frequencies.

**Question 3:**
Describe the steps to plot the frequency response of a CS MOSFET amplifier in the lab.

**Answer 3:**
1.  **Circuit Setup:** Construct the designed CS MOSFET amplifier circuit.
2.  **Signal Source:** Connect a function generator to the input of the amplifier, passing through the input coupling capacitor ($C_{in}$).
3.  **Frequency Sweep:** Set the function generator to output a small sinusoidal signal (e.g., 10mV peak-to-peak to stay in the linear region) and sweep its frequency over a wide range (e.g., 10 Hz to 1 MHz).
4.  **Measurement:** Use an oscilloscope to measure the amplitude of the input voltage ($V_{in}$) and the output voltage ($V_{out}$) at each frequency. Ensure the grounds are common.
5.  **Gain Calculation:** Calculate the voltage gain at each frequency: $A_v(f) = V_{out}(f) / V_{in}(f)$.
6.  **dB Conversion:** Convert the gain to decibels: $Gain_{dB}(f) = 20 \log_{10} |A_v(f)|$.
7.  **Plotting:** Plot $Gain_{dB}$ on the y-axis (logarithmic scale is often used for frequency) against frequency on the x-axis (logarithmic scale). This will reveal the low-frequency rise, the mid-band plateau, and the high-frequency fall-off.

---

### 5. Important Points to Remember

*   **Biasing is Crucial:** The operating point ($V_{GS}, I_D$) is critical for MOSFET amplifier performance, especially for gain and ensuring operation in the saturation region.
*   **Gain Formula:** For a CS amplifier with a bypassed source resistor, $A_v \approx -g_m R_D$.
*   **$g_m$ Dependence:** Transconductance ($g_m$) is dependent on $V_{GS}$, which is set by the biasing circuit.
*   **Capacitor Roles:**
    *   $C_{in}$ and $C_{out}$ block DC and allow AC signals to pass, forming high-pass filters at low frequencies.
    *   $C_S$ bypasses the source resistor ($R_S$) at AC frequencies to increase gain. If it fails or is omitted, the gain is reduced.
*   **Frequency Response:** Amplifiers have limited bandwidth due to coupling/bypass capacitors (low-frequency roll-off) and parasitic capacitances (high-frequency roll-off).
*   **Miller Effect:** The dominant factor in high-frequency limitations of a CS amplifier is the Miller effect due to $C_{gd}$.
*   **Design Iteration:** Designing for a specific gain often requires an iterative process of calculation, potentially simulation, and adjustment of component values.
*   **Parasitic Effects:** In practical circuits and simulations, parasitic resistances and capacitances of components and PCB traces can also affect performance.

---

This comprehensive study note covers the design of a CS MOSFET amplifier for a specific voltage gain and the understanding of its frequency response characteristics, aligning with the learning outcomes and course objectives. Remember to always refer to your lab manuals and textbooks for specific experimental procedures and further details.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
