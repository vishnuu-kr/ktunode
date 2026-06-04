---
title: "Common Emitter Amplifier  – AC concepts ––Role of coupling capacitors and emitter bypass capacitor- Common Emitter AC equivalent circuit-Amplifier Gain - Calculation of amplifier gains and impedances using h parameter equivalent circuit."
subject: "ANALOG ELECTRONICS"
module: "Module 1: Review of Bipolar Junction Transistor "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b59"
status: "completed"
scrapedAt: "2026-05-23T16:10:49.331Z"
---
# ANALOG ELECTRONICS - Module 1: Review of Bipolar Junction Transistor

## Topic: Common Emitter Amplifier – AC Concepts and Analysis

This module focuses on understanding the operation of a common emitter (CE) BJT amplifier, particularly its behavior under AC signals. We will explore the role of essential passive components in shaping the amplifier's AC performance and delve into the analysis techniques using the h-parameter equivalent circuit.

**Learning Outcomes:**

*   Understand the AC operation of a common emitter (CE) BJT amplifier.
*   Explain the function of coupling capacitors and the emitter bypass capacitor.
*   Draw and interpret the AC equivalent circuit of a CE amplifier.
*   Define and calculate amplifier gain (voltage, current, and power).
*   Calculate amplifier input and output impedances using the h-parameter equivalent circuit.

**Course Outcomes Addressed:**

*   **CO1: Design BJT and FET amplifier circuits (Knowledge Level: K3)**
    *   This topic directly contributes to understanding the fundamental building blocks for designing BJT amplifier circuits. By grasping AC analysis, students can predict and optimize amplifier performance.

---

### 1. Introduction to the Common Emitter (CE) Amplifier

The common emitter configuration is one of the most widely used amplifier configurations for BJTs due to its high voltage and current gain. It provides a phase inversion between the input and output signals.

*   **Key Concept:** Amplification is the process of increasing the amplitude of a signal.
*   **BJT Biasing:** For an amplifier to function correctly, the BJT must be properly biased in the active region. This is achieved through DC biasing circuits, which are often considered separately from the AC analysis.
*   **AC Signal Superposition:** When an AC signal is applied to a biased BJT, the total current and voltage at any point in the circuit are the sum of the DC bias values and the AC variations. AC analysis focuses on these variations.

---

### 2. Role of Coupling Capacitors

Coupling capacitors are used to block the DC component of a signal from passing to the next stage or the output, while allowing the AC signal to pass through.

*   **Function:**
    *   **Input Coupling Capacitor ($C_{in}$):** Connects the AC input signal source to the base of the transistor. It prevents the DC bias voltage of the source from affecting the transistor's DC bias.
    *   **Output Coupling Capacitor ($C_{out}$):** Connects the collector of the transistor to the load. It prevents the DC collector voltage from reaching the load, allowing only the amplified AC signal.
*   **Impedance Consideration:** For effective coupling, the reactance of the coupling capacitor at the lowest frequency of interest ($X_C$) must be significantly smaller than the input impedance of the stage it is coupling to.
    *   $X_{C_{in}} \ll Z_{in}$ (at the base)
    *   $X_{C_{out}} \ll R_L$ (where $R_L$ is the load resistance)
*   **Frequency Response:** Coupling capacitors introduce a lower cutoff frequency for the amplifier. Below this frequency, their impedance increases, attenuating the AC signal.
    *   *Reference:* "Electronic Devices and Circuit Theory" by Boylestad and Nashelsky provides detailed explanations of coupling and bypass capacitors and their impact on the frequency response.

---

### 3. Role of Emitter Bypass Capacitor ($C_E$)

The emitter bypass capacitor is placed in parallel with the emitter resistor ($R_E$) in a CE amplifier. Its primary role is to increase the AC voltage gain.

*   **Function:**
    *   **Bypassing AC Signals:** At AC frequencies, the emitter bypass capacitor presents a very low impedance, effectively short-circuiting the emitter resistor ($R_E$). This means that the AC emitter current is primarily shunted through $C_E$ rather than flowing through $R_E$.
    *   **Increasing Voltage Gain:** Without $C_E$, a portion of the AC signal appears across $R_E$, leading to negative feedback that reduces the AC voltage gain. With $C_E$, this feedback is minimized, resulting in a higher AC voltage gain.
*   **Impedance Consideration:** Similar to coupling capacitors, for effective bypassing, the reactance of the emitter bypass capacitor at the lowest frequency of interest ($X_{C_E}$) must be significantly smaller than the emitter resistance ($R_E$).
    *   $X_{C_E} \ll R_E$
*   **Impact on Output Impedance:** When $C_E$ is present and acts as a short circuit to AC, the output impedance of the amplifier is primarily determined by the collector resistor ($R_C$). If $C_E$ is absent, the output impedance is affected by $R_C$ in parallel with $(1+\beta)R_E$.
*   **Frequency Response:** The emitter bypass capacitor also contributes to the lower cutoff frequency of the amplifier. Below this frequency, its impedance is too high to effectively bypass $R_E$, and the gain begins to decrease.
    *   *Reference:* "Introductory Electronic Devices and Circuits" by Robert T. Paynter elaborates on how emitter resistance affects gain and the role of the bypass capacitor in mitigating this effect.

---

### 4. Common Emitter AC Equivalent Circuit

The AC equivalent circuit of a CE amplifier is derived by:

1.  **Replacing DC Voltage Sources with Short Circuits:** All DC voltage sources (like power supplies) are replaced by their internal resistance, which is assumed to be zero for ideal voltage sources.
2.  **Replacing DC Current Sources with Open Circuits:** Ideal DC current sources are replaced by open circuits.
3.  **Replacing Capacitors with Short Circuits (for mid-band frequencies):** For AC analysis in the mid-band frequency range (where coupling and bypass capacitors have very low impedance), they are treated as short circuits.
4.  **Replacing Inductors with Open Circuits (for mid-band frequencies):** For AC analysis in the mid-band frequency range, inductors (if present) have very high impedance and are treated as open circuits.
5.  **Replacing the Transistor with its AC Equivalent Model:** This is typically done using either the hybrid-pi model or the simpler h-parameter model.

**h-Parameter Equivalent Circuit Model for BJT:**

The h-parameter model is a widely used small-signal model for BJTs. It relates the input and output currents and voltages of the transistor using four parameters:

| Parameter      | Definition                                                                                                 | Typical Units | Description                                                                                                    |
| :------------- | :----------------------------------------------------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------- |
| $h_{ie}$       | $\frac{v_{be}}{i_b}$ (with $v_{ce}=0$)                                                                       | Ohms ($\Omega$) | Input impedance (base-emitter voltage to base current ratio at constant collector-emitter voltage).               |
| $h_{re}$       | $\frac{v_{be}}{v_{ce}}$ (with $i_b=0$)                                                                       | Dimensionless | Reverse voltage transfer ratio (base-emitter voltage to collector-emitter voltage ratio at constant base current). |
| $h_{fe}$       | $\frac{i_c}{i_b}$ (with $v_{ce}=0$)                                                                          | Dimensionless | Forward current transfer ratio (common-emitter current gain, $\beta$).                                          |
| $h_{oe}$       | $\frac{i_c}{v_{ce}}$ (with $i_b=0$)                                                                          | Siemens (S)   | Output admittance (collector current to collector-emitter voltage ratio at constant base current).                |

**For the common-emitter configuration:**

The general h-parameter equations are:
$v_{in} = h_{ie} i_{in} + h_{re} v_{out}$
$i_{out} = h_{fe} i_{in} + h_{oe} v_{out}$

For a CE amplifier, this translates to:
$v_{be} = h_{ie} i_b + h_{re} v_{ce}$
$i_c = h_{fe} i_b + h_{oe} v_{ce}$

**Circuit Representation of h-parameters:**

*   $h_{ie}$: Input resistance in series with the base.
*   $h_{re}v_{ce}$: Voltage source in series with the base, dependent on the output voltage.
*   $h_{fe}i_b$: Current-controlled current source in the collector, dependent on the input current.
*   $h_{oe}$: Conductance in parallel with the collector current source.

**AC Equivalent Circuit Diagram (using h-parameters):**

Consider a CE amplifier biased with a voltage divider and having a collector resistor ($R_C$) and an emitter resistor ($R_E$) bypassed by $C_E$.

1.  **Input Side:**
    *   Input signal source ($v_s$) in series with source resistance ($R_s$).
    *   Input coupling capacitor ($C_{in}$) connects the source to the base.
    *   The base is connected to the voltage divider resistors ($R_1$, $R_2$). For AC analysis, these resistors are connected from the base to ground.
    *   The h-parameter model for the transistor starts at the base.

2.  **Transistor Model:**
    *   Input: $h_{ie}$ in series with the base.
    *   Output: A current source of $h_{fe}i_b$ in the collector, in parallel with $h_{oe}$.

3.  **Output Side:**
    *   The collector resistor ($R_C$) is connected from the collector to the DC supply. In AC, the DC supply is a short to ground, so $R_C$ is effectively connected from the collector to ground.
    *   The emitter resistor ($R_E$) is bypassed by $C_E$, so it appears as a short to ground for AC.
    *   The output coupling capacitor ($C_{out}$) connects the collector to the load resistor ($R_L$).

**AC Equivalent Circuit Diagram (with $C_E$ bypassing $R_E$):**

```
     Rs ---+--- Cin ---+----o Base -----+----o Collector -----+--- Cout ---o Output
           |           |                |                    |            |
           Vs          R1               h_ie i_b ----->      h_fe i_b     RL
                       |                |             ||     |
                       R2               +--- v_be ----> h_re v_ce   h_oe      |
                       |                                 ||                   |
                      GND                                GND                 GND
                                                         |
                                                         +----o Emitter ----> GND (due to CE)
```

**Important Considerations for Drawing the AC Equivalent Circuit:**

*   **Emitter:** If $R_E$ is present and bypassed by $C_E$, the emitter is connected directly to AC ground.
*   **Collector:** The collector resistor ($R_C$) is connected between the collector and AC ground.
*   **Base:** The biasing resistors ($R_1$ and $R_2$) are connected from the base to AC ground. The input signal source ($v_s$) with its source resistance ($R_s$) is coupled through $C_{in}$ to the base.
*   **Load:** The load resistor ($R_L$) is connected from the collector to AC ground, through $C_{out}$.

*   *Reference:* "Electronic Circuits: Analysis and Design" by Donald A. Neaman provides excellent illustrations and step-by-step guidance on constructing AC equivalent circuits.

---

### 5. Amplifier Gain

Amplifier gain quantifies how much the amplifier increases the input signal. For a CE amplifier, we are typically interested in three types of gain:

*   **Voltage Gain ($A_v$):** The ratio of the AC output voltage to the AC input voltage.
    *   $A_v = \frac{v_{out}}{v_{in}}$
*   **Current Gain ($A_i$):** The ratio of the AC output current to the AC input current.
    *   $A_i = \frac{i_{out}}{i_{in}}$
*   **Power Gain ($A_p$):** The ratio of the output AC power to the input AC power.
    *   $A_p = A_v \times A_i$

---

### 6. Calculation of Amplifier Gains and Impedances using h-parameter Equivalent Circuit

Let's derive the expressions for voltage gain, current gain, input impedance, and output impedance for a CE amplifier using the h-parameter model.

**Assumptions for Mid-band Frequency Analysis:**

*   Coupling capacitors ($C_{in}, C_{out}$) act as short circuits.
*   Emitter bypass capacitor ($C_E$) acts as a short circuit.
*   External load resistor ($R_L$) is connected.
*   Source resistance ($R_s$) is present.
*   The transistor is biased in the active region.

**Circuit Diagram for Analysis:**

Consider a common-emitter amplifier with voltage divider biasing ($R_1, R_2$), collector resistor ($R_C$), emitter resistor ($R_E$) bypassed by $C_E$, load resistor ($R_L$) coupled by $C_{out}$, and input signal ($v_s$) from a source with resistance ($R_s$) coupled by $C_{in}$.

```
     Rs ---+--- Cin ---+----o Base (B) -----+----o Collector (C) -----+--- Cout ---o Output (vo)
           |           |                |                    |            |
           Vs          R1               h_ie i_b ---->      h_fe i_b     RC (to AC ground)
                       |                |             ||     |
                       R2               +--- v_be ----> h_re v_ce   h_oe      |
                       |                                 ||                   |
                      GND                                GND                 GND
                                                         |
                                                         +----o Emitter ----> GND (due to CE)
```

**Definitions:**

*   $v_{in}$: AC voltage at the base of the transistor ($v_{be}$).
*   $i_{in}$: AC current entering the base of the transistor ($i_b$).
*   $v_{out}$: AC voltage across the load resistor ($R_L$).
*   $i_{out}$: AC current through the load resistor ($R_L$).

**Analysis:**

**a) Input Impedance ($Z_{in}$):**

The input impedance of the amplifier is the impedance seen by the signal source at the input terminals (after $C_{in}$).

*   From the h-parameter equations: $v_{be} = h_{ie} i_b + h_{re} v_{ce}$
*   The input impedance of the transistor stage itself ($Z_{in, stage}$) is the ratio of $v_{be}$ to $i_b$, with the output terminated.
    $Z_{in, stage} = \frac{v_{be}}{i_b} = h_{ie} + h_{re} \frac{v_{ce}}{i_b}$

    Now, let's find $\frac{v_{ce}}{i_b}$:
    The collector circuit consists of $R_C$ and $R_L$ in parallel, connected from collector to AC ground. Let $R_{out\_collector} = R_C || R_L$.
    The current from the current source ($h_{fe}i_b$) flows into the parallel combination of $h_{oe}^{-1}$ and $R_{out\_collector}$.
    The collector-emitter voltage is $v_{ce} = -(h_{fe}i_b - i_{out}) R_{out\_collector}$ where $i_{out}$ is the current through $R_{out\_collector}$.
    Alternatively, using the current source and parallel admittance:
    $i_c = h_{fe}i_b + h_{oe}v_{ce}$
    The collector current flows through $R_{out\_collector}$. So, $v_{ce} = i_c \times R_{out\_collector}$ (assuming $h_{oe}$ is small or ignored for simplicity initially, or treated as parallel admittance).
    Let's use the parallel admittance approach: The output current from the transistor is $i_c = h_{fe}i_b + h_{oe}v_{ce}$. This current flows through the effective load resistance $R_{ext} = R_C || R_L$.
    So, $v_{ce} = i_c \times R_{ext}$ is not entirely correct. It's better to consider the total admittance at the collector.
    The total admittance at the collector is $Y_{out} = h_{oe} + \frac{1}{R_C} + \frac{1}{R_L}$.
    The voltage $v_{ce}$ is related to the current source $h_{fe}i_b$ by: $v_{ce} = \frac{h_{fe}i_b}{Y_{out}}$.
    Substituting this back into the input impedance equation:
    $Z_{in, stage} = h_{ie} + h_{re} \frac{h_{fe}i_b}{Y_{out} i_b} = h_{ie} + \frac{h_{re}h_{fe}}{Y_{out}}$
    $Z_{in, stage} = h_{ie} + \frac{h_{re}h_{fe}}{h_{oe} + \frac{1}{R_C} + \frac{1}{R_L}}$

*   **Effective Input Impedance:** The actual input impedance seen by the source is affected by the biasing resistors $R_1$ and $R_2$.
    *   $R_{in} = R_1 || R_2 || Z_{in, stage}$

    *   *Important Point:* When calculating $Z_{in}$, we consider the impedance looking into the base, which is $Z_{in, stage}$. Then, we account for the parallel combination with the biasing resistors.

**b) Current Gain ($A_i$):**

Current gain is the ratio of the load current ($i_L$) to the base current ($i_b$).
*   The current $i_b$ flows into the transistor base.
*   The collector current from the transistor is $i_c = h_{fe} i_b + h_{oe} v_{ce}$.
*   This collector current splits between $R_C$ and the load $R_L$ (through $C_{out}$).
*   The voltage across $R_C$ and $R_L$ is $v_{ce}$.
*   $i_c = i_{R_C} + i_L$
*   $v_{ce} = i_c R_C = i_L R_L$ (assuming $R_C$ is connected to AC ground)
*   So, $i_c = \frac{v_{ce}}{R_C} + \frac{v_{ce}}{R_L} = v_{ce} (\frac{1}{R_C} + \frac{1}{R_L}) = v_{ce} \frac{R_C || R_L}{R_C R_L}$
*   Let $R_{ext} = R_C || R_L$. Then $i_c = \frac{v_{ce}}{R_{ext}}$. This is consistent with $v_{ce} = i_c R_{ext}$.
*   From the h-parameter equations: $i_c = h_{fe}i_b + h_{oe}v_{ce}$.
*   Substitute $v_{ce} = i_c R_{ext}$: $i_c = h_{fe}i_b + h_{oe} i_c R_{ext}$
*   $i_c (1 - h_{oe} R_{ext}) = h_{fe}i_b$
*   $i_c = \frac{h_{fe}i_b}{1 - h_{oe} R_{ext}}$

*   Now, the load current $i_L$ is the portion of $i_c$ that flows through $R_L$. Using current division:
    $i_L = i_c \frac{R_C}{R_C + R_L} = i_c \frac{R_C || R_L}{R_L} = i_c \frac{R_{ext}}{R_L}$
*   Substitute the expression for $i_c$:
    $i_L = \frac{h_{fe}i_b}{1 - h_{oe} R_{ext}} \times \frac{R_{ext}}{R_L}$

*   Therefore, the current gain $A_i = \frac{i_L}{i_b} = \frac{h_{fe}}{1 - h_{oe} R_{ext}} \times \frac{R_{ext}}{R_L}$
    $A_i = \frac{h_{fe} R_{ext}}{R_L (1 - h_{oe} R_{ext})}$

    *   *Approximation:* If $h_{oe}$ is small, $1 - h_{oe} R_{ext} \approx 1$. Then $A_i \approx \frac{h_{fe} R_{ext}}{R_L}$.
        Since $R_{ext} = R_C || R_L = \frac{R_C R_L}{R_C + R_L}$,
        $A_i \approx \frac{h_{fe}}{R_L} \times \frac{R_C R_L}{R_C + R_L} = \frac{h_{fe} R_C}{R_C + R_L}$

**c) Voltage Gain ($A_v$):**

Voltage gain is the ratio of the output voltage ($v_{out}$) to the input voltage ($v_{in}$).
*   $v_{out} = i_L R_L$
*   $v_{in} = v_{be}$
*   $A_v = \frac{v_{out}}{v_{in}} = \frac{i_L R_L}{v_{be}} = \frac{i_L}{i_b} \times \frac{i_b R_L}{v_{be}} = A_i \times \frac{R_L}{Z_{in, stage}}$
*   Alternatively, using the AC equivalent circuit directly:
    $v_{out} = i_L R_L$
    $v_{in} = v_{be} = h_{ie} i_b + h_{re} v_{ce}$
    $v_{ce} = i_c \times R_{ext} = (h_{fe}i_b + h_{oe}v_{ce}) R_{ext}$
    $v_{ce}(1 - h_{oe} R_{ext}) = h_{fe} i_b R_{ext}$
    $v_{ce} = \frac{h_{fe} i_b R_{ext}}{1 - h_{oe} R_{ext}}$

    Now, $v_{in} = v_{be} = h_{ie}i_b + h_{re} \frac{h_{fe} i_b R_{ext}}{1 - h_{oe} R_{ext}}$
    $v_{in} = i_b \left( h_{ie} + \frac{h_{re} h_{fe} R_{ext}}{1 - h_{oe} R_{ext}} \right)$

    $i_L = i_c \frac{R_{ext}}{R_L} = (h_{fe}i_b + h_{oe}v_{ce}) \frac{R_{ext}}{R_L}$
    $i_L = (h_{fe}i_b + h_{oe} \frac{h_{fe} i_b R_{ext}}{1 - h_{oe} R_{ext}}) \frac{R_{ext}}{R_L}$
    $i_L = h_{fe}i_b (1 + \frac{h_{oe} R_{ext}}{1 - h_{oe} R_{ext}}) \frac{R_{ext}}{R_L}$
    $i_L = h_{fe}i_b (\frac{1 - h_{oe} R_{ext} + h_{oe} R_{ext}}{1 - h_{oe} R_{ext}}) \frac{R_{ext}}{R_L}$
    $i_L = h_{fe}i_b \frac{1}{1 - h_{oe} R_{ext}} \frac{R_{ext}}{R_L}$

    $v_{out} = i_L R_L = h_{fe}i_b \frac{R_{ext}}{1 - h_{oe} R_{ext}}$

    $A_v = \frac{v_{out}}{v_{in}} = \frac{h_{fe}i_b \frac{R_{ext}}{1 - h_{oe} R_{ext}}}{i_b \left( h_{ie} + \frac{h_{re} h_{fe} R_{ext}}{1 - h_{oe} R_{ext}} \right)}$
    $A_v = \frac{\frac{h_{fe} R_{ext}}{1 - h_{oe} R_{ext}}}{h_{ie} + \frac{h_{re} h_{fe} R_{ext}}{1 - h_{oe} R_{ext}}}$
    $A_v = \frac{h_{fe} R_{ext}}{h_{ie}(1 - h_{oe} R_{ext}) + h_{re} h_{fe} R_{ext}}$

    *   *Approximation (when $h_{re}$ is small and $h_{oe}$ is small):*
        $Z_{in, stage} \approx h_{ie}$
        $R_{ext} = R_C || R_L \approx R_C$ (if $R_L \gg R_C$) or $R_L$ (if $R_C \gg R_L$). Let's use $R_C$ for simplicity in some approximations.
        $A_v \approx \frac{-h_{fe} R_C}{h_{ie}}$ (The negative sign indicates phase inversion).
        This approximation is valid when the emitter resistor is bypassed, and $R_C$ is the primary collector load.

    *   *More practical approximation:*
        $A_v \approx -\frac{h_{fe} (R_C || R_L)}{h_{ie}}$
        The negative sign arises because of the phase inversion in the common-emitter configuration. The h-parameter model implicitly includes this.

**d) Output Impedance ($Z_{out}$):**

The output impedance is the impedance seen looking back into the collector terminal of the transistor when the input is made zero (i.e., $i_b = 0$).

*   Set $i_b = 0$. The h-parameter equations become:
    $v_{be} = h_{re} v_{ce}$
    $i_c = h_{oe} v_{ce}$
*   We are looking into the collector. The collector circuit contains $R_C$ and $R_L$ in parallel. The output impedance of the transistor itself is the reciprocal of the admittance $h_{oe}$.
*   When looking from the collector to the output terminals, we see $R_C$ and $R_L$ in parallel.
    $Z_{out, stage} = R_C || R_L = \frac{R_C R_L}{R_C + R_L}$.
    The $h_{oe}$ parameter is the parallel admittance at the collector. So, the output impedance contributed by the transistor is $1/h_{oe}$.
*   Therefore, the total output impedance seen looking back into the collector is the parallel combination of the transistor's output impedance and the external collector circuitry.
    $Z_{out} = R_C || R_L || \frac{1}{h_{oe}}$

    *   *Important Point:* If $R_C$ and $R_L$ are significantly smaller than $1/h_{oe}$, then $Z_{out} \approx R_C || R_L$. This is often the case.
    *   *Reference:* "Electronic devices and Circuit Theory" by Boylestad and Nashelsky provides a good overview of how to derive output impedance from the h-parameter model.

---

### 7. Power Gain ($A_p$)

Power gain is the product of voltage gain and current gain.
$A_p = A_v \times A_i$

It can also be calculated as:
$A_p = \frac{\text{Output Power}}{\text{Input Power}} = \frac{v_{out} i_L}{v_{in} i_b}$

*   **Calculation Example:**
    Let's use the approximate formulas for simplicity.
    $A_i \approx h_{fe}$ (if $R_L \gg R_C$)
    $A_v \approx -\frac{h_{fe} R_C}{h_{ie}}$
    $A_p = A_v \times A_i \approx (-\frac{h_{fe} R_C}{h_{ie}}) \times h_{fe} = -\frac{h_{fe}^2 R_C}{h_{ie}}$
    The negative sign in $A_v$ is usually ignored for power gain magnitude.
    $A_p \approx \frac{h_{fe}^2 R_C}{h_{ie}}$ (in dB, $10 \log_{10}(A_p)$)

---

### 8. Example Calculation

Let's consider a CE amplifier with the following h-parameters and circuit components:
*   $h_{ie} = 1 \, k\Omega$
*   $h_{re} = 2 \times 10^{-4}$
*   $h_{fe} = 100$
*   $h_{oe} = 20 \, \mu S = \frac{1}{50 \, k\Omega}$
*   $R_C = 4.7 \, k\Omega$
*   $R_L = 10 \, k\Omega$
*   $R_1 = 100 \, k\Omega$
*   $R_2 = 10 \, k\Omega$
*   $R_s = 600 \, \Omega$

**Calculations:**

1.  **Effective Collector Resistance ($R_{ext}$):**
    $R_{ext} = R_C || R_L = 4.7 \, k\Omega || 10 \, k\Omega = \frac{4.7 \times 10}{4.7 + 10} \, k\Omega = \frac{47}{14.7} \, k\Omega \approx 3.197 \, k\Omega$

2.  **Stage Input Impedance ($Z_{in, stage}$):**
    $Z_{in, stage} = h_{ie} + \frac{h_{re} h_{fe}}{h_{oe} + \frac{1}{R_{ext}}}$
    $h_{oe} = 20 \times 10^{-6} \, S$
    $\frac{1}{R_{ext}} = \frac{1}{3.197 \times 10^3} \approx 0.3128 \times 10^{-3} \, S$
    $h_{oe} + \frac{1}{R_{ext}} = 20 \times 10^{-6} + 0.3128 \times 10^{-3} = 0.02 \times 10^{-3} + 0.3128 \times 10^{-3} = 0.3328 \times 10^{-3} \, S$
    $\frac{h_{re} h_{fe}}{h_{oe} + \frac{1}{R_{ext}}} = \frac{(2 \times 10^{-4}) \times 100}{0.3328 \times 10^{-3}} = \frac{20 \times 10^{-3}}{0.3328 \times 10^{-3}} \approx 60.10 \Omega$
    $Z_{in, stage} = 1000 \, \Omega + 60.10 \, \Omega \approx 1060.10 \, \Omega$

3.  **Amplifier Input Impedance ($R_{in}$):**
    $R_{in} = R_1 || R_2 || Z_{in, stage}$
    $R_1 || R_2 = 100 \, k\Omega || 10 \, k\Omega = \frac{100 \times 10}{100 + 10} \, k\Omega = \frac{1000}{110} \, k\Omega \approx 9.09 \, k\Omega$
    $R_{in} = 9.09 \, k\Omega || 1060.10 \, \Omega \approx 0.909 \, k\Omega || 1.060 \, k\Omega$
    $R_{in} = \frac{0.909 \times 1.060}{0.909 + 1.060} \, k\Omega = \frac{0.96354}{1.969} \, k\Omega \approx 0.489 \, k\Omega = 489 \, \Omega$

4.  **Current Gain ($A_i$):**
    $A_i = \frac{h_{fe} R_{ext}}{R_L (1 - h_{oe} R_{ext})}$
    $h_{oe} R_{ext} = (20 \times 10^{-6}) \times (3.197 \times 10^3) = 63.94 \times 10^{-3} = 0.06394$
    $1 - h_{oe} R_{ext} = 1 - 0.06394 = 0.93606$
    $A_i = \frac{100 \times 3.197 \times 10^3}{10 \times 10^3 \times 0.93606} = \frac{319.7}{936.06} \approx 0.3415$

    *This result seems low. Let's recheck the definition of current gain. It is usually $i_c/i_b$ (transistor current gain) or $i_L/i_b$ (load current to base current gain). The calculated $A_i$ is $i_L/i_b$. Let's use the simpler approximation.*

    *Approximation for $A_i$:*
    $A_i \approx \frac{h_{fe} R_C}{R_C + R_L}$ (this assumes $h_{oe}$ is negligible)
    $A_i \approx \frac{100 \times 4.7}{4.7 + 10} = \frac{470}{14.7} \approx 31.97$

    *Let's use the more accurate formula for $i_L$ and $v_{be}$ to find $A_v$ and $A_i$ properly.*

    $i_L = i_c \frac{R_{ext}}{R_L}$
    $i_c = h_{fe}i_b + h_{oe}v_{ce}$
    $v_{ce} = i_c R_{ext}$
    $i_c = h_{fe}i_b + h_{oe}i_c R_{ext} \implies i_c = \frac{h_{fe}i_b}{1 - h_{oe}R_{ext}}$
    $i_L = \frac{h_{fe}i_b}{1 - h_{oe}R_{ext}} \frac{R_{ext}}{R_L} = i_b \frac{h_{fe} R_{ext}}{R_L (1 - h_{oe}R_{ext})}$
    $A_i = \frac{i_L}{i_b} = \frac{h_{fe} R_{ext}}{R_L (1 - h_{oe}R_{ext})} = \frac{100 \times 3197}{10000 \times (1 - 0.06394)} = \frac{319700}{10000 \times 0.93606} = \frac{31.97}{0.93606} \approx 34.15$
    So the previous calculation was correct.

5.  **Voltage Gain ($A_v$):**
    $A_v = \frac{v_{out}}{v_{in}}$
    $v_{out} = i_L R_L$
    $v_{in} = v_{be} = h_{ie}i_b + h_{re}v_{ce}$
    $v_{ce} = i_c R_{ext} = \frac{h_{fe}i_b}{1 - h_{oe}R_{ext}} R_{ext}$
    $v_{in} = h_{ie}i_b + h_{re} \left( \frac{h_{fe}i_b}{1 - h_{oe}R_{ext}} R_{ext} \right)$
    $v_{in} = i_b \left( h_{ie} + \frac{h_{re}h_{fe}R_{ext}}{1 - h_{oe}R_{ext}} \right)$
    $h_{ie} = 1000 \, \Omega$
    $\frac{h_{re}h_{fe}R_{ext}}{1 - h_{oe}R_{ext}} = \frac{(2 \times 10^{-4})(100)(3197)}{0.93606} = \frac{639.4}{0.93606} \approx 682.98 \, \Omega$
    $v_{in} = i_b (1000 + 682.98) = 1682.98 i_b$

    $v_{out} = i_L R_L = (i_b \times A_i) \times R_L = (i_b \times 34.15) \times 10000 = 341500 i_b$

    $A_v = \frac{341500 i_b}{1682.98 i_b} \approx 202.9$

    *Approximation for $A_v$ (ignoring $h_{re}, h_{oe}$ and assuming $R_L$ is part of $R_C$):*
    $A_v \approx -\frac{h_{fe} R_C}{h_{ie}} = -\frac{100 \times 4700}{1000} = -470$. This is a large difference.

    *Approximation for $A_v$ (using $R_{ext}$):*
    $A_v \approx -\frac{h_{fe} (R_C || R_L)}{h_{ie}} = -\frac{100 \times 3197}{1000} = -319.7$. This is closer.

    Let's check the formula again: $A_v = \frac{h_{fe} R_{ext}}{h_{ie}(1 - h_{oe} R_{ext}) + h_{re} h_{fe} R_{ext}}$
    Numerator: $h_{fe} R_{ext} = 100 \times 3197 = 319700$
    Denominator: $1000(0.93606) + (2 \times 10^{-4})(100)(3197) = 936.06 + 639.4 = 1575.46$
    $A_v = \frac{319700}{1575.46} \approx 202.9$. This matches our derived $v_{out}/v_{in}$.

6.  **Output Impedance ($Z_{out}$):**
    $Z_{out} = R_C || R_L || \frac{1}{h_{oe}}$
    $\frac{1}{h_{oe}} = \frac{1}{20 \times 10^{-6}} = 50 \times 10^3 \, \Omega = 50 \, k\Omega$
    $Z_{out} = 4.7 \, k\Omega || 10 \, k\Omega || 50 \, k\Omega$
    $Z_{out} = 3.197 \, k\Omega || 50 \, k\Omega \approx 3.197 \, k\Omega$

**Summary of Results (Example):**

*   Stage Input Impedance ($Z_{in, stage}$) $\approx 1.06 \, k\Omega$
*   Amplifier Input Impedance ($R_{in}$) $\approx 489 \, \Omega$
*   Current Gain ($A_i$) $\approx 34.15$
*   Voltage Gain ($A_v$) $\approx 202.9$
*   Output Impedance ($Z_{out}$) $\approx 3.2 \, k\Omega$

---

### 9. Practice Questions

1.  **Explain the fundamental role of coupling capacitors and the emitter bypass capacitor in a common emitter amplifier circuit. How do they affect the AC performance of the amplifier?**
    *   **Answer:** Coupling capacitors block DC and pass AC signals between stages or to the load. They prevent DC bias shifts. The emitter bypass capacitor provides a low impedance path for AC signals in the emitter circuit, effectively removing the stabilizing effect of the emitter resistor on AC signals, thereby increasing the AC voltage gain. Both introduce lower cutoff frequencies.

2.  **Draw the AC equivalent circuit for a common emitter amplifier with voltage divider biasing, collector resistor $R_C$, and emitter resistor $R_E$ bypassed by $C_E$. Use the h-parameter model for the BJT.**
    *   **(Sketch a circuit diagram similar to the one presented in Section 4, showing Rs, Cin, R1||R2 to base, h_ie, h_re*vce, h_fe*ib, h_oe, RC||RL to collector, and emitter to ground).**

3.  **For a common emitter amplifier with $R_C = 1k\Omega$, $R_L = 2k\Omega$, and $h_{fe} = 50$, $h_{ie} = 1k\Omega$, $h_{re} = 0$, $h_{oe} = 0$. Calculate the approximate voltage gain ($A_v$) and current gain ($A_i$) in the mid-band frequency range.**
    *   **Solution:**
        *   $R_{ext} = R_C || R_L = 1k\Omega || 2k\Omega = \frac{1 \times 2}{1 + 2} k\Omega = \frac{2}{3} k\Omega \approx 0.667 \, k\Omega$
        *   Approximate Voltage Gain: $A_v \approx -\frac{h_{fe} R_{ext}}{h_{ie}} = -\frac{50 \times 0.667 \, k\Omega}{1 \, k\Omega} = -33.35$
        *   Approximate Current Gain: $A_i \approx \frac{h_{fe} R_{ext}}{R_L} = \frac{50 \times 0.667 \, k\Omega}{2 \, k\Omega} = \frac{33.35}{2} = 16.675$

4.  **If the h-parameters in Question 3 were $h_{re} = 2 \times 10^{-4}$ and $h_{oe} = 20 \mu S$, would the voltage gain and current gain increase or decrease? Briefly explain why.**
    *   **Answer:**
        *   **Voltage Gain:** The term $h_{re}h_{fe}R_{ext}$ in the denominator of the precise voltage gain formula is positive. This increases the denominator, thus **decreasing** the voltage gain. The presence of $h_{oe}$ also modifies the gain.
        *   **Current Gain:** The term $1 - h_{oe}R_{ext}$ in the denominator of the precise current gain formula is less than 1 (since $h_{oe}R_{ext}$ is positive). This **increases** the current gain compared to the case where $h_{oe}$ is zero.

5.  **What is the output impedance of a CE amplifier stage if $R_C = 2.2k\Omega$, $R_L = 4.7k\Omega$, and the transistor's $h_{oe} = 10\mu S$?**
    *   **Solution:**
        *   Output impedance of the transistor alone = $1/h_{oe} = 1/(10 \times 10^{-6} S) = 100 k\Omega$.
        *   $Z_{out} = R_C || R_L || (1/h_{oe})$
        *   $R_C || R_L = 2.2k\Omega || 4.7k\Omega = \frac{2.2 \times 4.7}{2.2 + 4.7} k\Omega = \frac{10.34}{6.9} k\Omega \approx 1.498 \, k\Omega$.
        *   $Z_{out} = 1.498 \, k\Omega || 100 \, k\Omega \approx 1.478 \, k\Omega$.

---

### 10. Important Points to Remember

*   **AC Equivalent Circuit:** Always simplify the circuit by replacing DC sources with shorts and capacitors with shorts (in mid-band).
*   **h-Parameter Model:** Understand the meaning of each h-parameter and how they are represented in the circuit.
*   **Input Impedance:** The input impedance seen by the source is the parallel combination of the transistor's base impedance and the biasing resistors.
*   **Output Impedance:** The output impedance seen looking back into the collector is the parallel combination of the collector resistor, the load resistor, and the reciprocal of the output admittance ($1/h_{oe}$).
*   **Voltage Gain:** The voltage gain is typically high in CE configuration, and a negative sign indicates phase inversion.
*   **Current Gain:** The current gain is also high, and it's the ratio of load current to base current.
*   **Approximations:** For quick analysis, approximations can be used by assuming $h_{re}$ and $h_{oe}$ are small. However, for accurate analysis, the full formulas should be used.
*   **Frequency Dependence:** Coupling and bypass capacitors introduce frequency limitations. Their reactance must be considered at the operating frequencies.

---
