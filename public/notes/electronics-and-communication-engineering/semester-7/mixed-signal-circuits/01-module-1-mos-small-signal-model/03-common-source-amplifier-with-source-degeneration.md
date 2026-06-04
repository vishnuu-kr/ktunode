---
title: "Common source amplifier with source degeneration"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 1: MOS small signal model:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff41c"
status: "completed"
scrapedAt: "2026-05-23T18:08:04.162Z"
---
# MIXED SIGNAL CIRCUITS - Module 1: MOS Small Signal Model
## Topic: Common Source Amplifier with Source Degeneration

This document provides comprehensive study notes on the Common Source Amplifier with Source Degeneration, a fundamental building block in analog circuit design. These notes are structured to cover the learning outcomes of Module 1, referencing key concepts and information from the provided textbooks and reference books.

---

### **1. Introduction to Common Source Amplifier with Source Degeneration**

The common source (CS) amplifier is a fundamental amplifier configuration in MOS circuits, analogous to the common-emitter amplifier in BJT circuits. Source degeneration involves adding a small impedance ($R_S$ or $C_S$) in the source path of the MOSFET. This technique is crucial for improving linearity, increasing input impedance, and controlling the voltage gain, albeit at the cost of reduced gain.

**Key Concepts:**

*   **Common Source (CS) Amplifier:** An amplifier where the input signal is applied to the gate, the output is taken from the drain, and the source is common to both input and output.
*   **Source Degeneration:** The intentional introduction of a passive element (resistor or capacitor) in the source path of the MOSFET.
*   **Small Signal Model:** A linear approximation of the MOSFET's behavior around its DC operating point, used for AC analysis.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the CS amplifier with source degeneration directly contributes to explaining single-stage amplifiers.

**Textbook References:**

*   **Razavi, "Design of Analog CMOS Integrated Circuits" (2/e):** Chapter 4 (CS Amplifier) provides the foundational analysis of the CS amplifier. Source degeneration is often discussed as a method to improve performance.
*   **Sedra & Smith, "Microelectronic Circuits" (6/e):** Chapter 7 (MOSFET Amplifiers) thoroughly covers CS amplifier configurations, including variations with source degeneration.

---

### **2. Small Signal Equivalent Circuit**

To analyze the AC behavior of the CS amplifier with source degeneration, we use its small-signal equivalent circuit.

**Circuit Diagram (CS Amplifier with Source Resistor $R_S$):**

```
      VDD
       |
      |
     ---
     | | RD
     ---
      |
      o-------> Vout
      |
    ----- M1
   G| /
  ---/------ Vin
   S| \
    -----
      |
      | RS
     ---
      |
     GND
```

**Small-Signal Equivalent Circuit:**

The small-signal equivalent circuit is derived by replacing the MOSFET with its small-signal model (gm, ro) and replacing DC sources with their AC equivalents (short circuits).

*   **MOSFET:** Replaced by a current source $g_m V_{gs}$ between drain and source, and a parallel resistor $r_o$ between drain and source.
*   **DC Voltage Sources (VDD):** Replaced by short circuits to AC ground.
*   **Capacitors (Cgs, Cgd, Cds, Cs):** If included in the analysis, they are represented by their impedances ($1/j\omega C$). For mid-band analysis, they are typically ignored (open circuits).
*   **Source Degeneration Resistor ($R_S$):** Remains as a resistor in the source path.

**Derivation of Small-Signal Parameters:**

*   $v_{gs} = v_{in} - v_s$
*   $v_{ds} = v_{out} - v_{s}$
*   $v_s = i_s R_S = (g_m v_{gs} + v_{ds}/r_o) R_S$

**Key Concepts:**

*   **Small-Signal Parameters:** $g_m$ (transconductance), $r_o$ (output resistance).
*   **AC Ground:** A node connected to a DC voltage source, which acts as a zero-impedance path for AC signals.

**Textbook References:**

*   **Razavi (2/e):** Chapter 4.2 (Small-Signal Model of the MOSFET) and Chapter 4.3 (Common-Source Amplifier) will be crucial for understanding the construction of the equivalent circuit.
*   **Sedra & Smith (6/e):** Chapter 7.1 (The MOSFET in Amplification) and Chapter 7.2 (The Common-Source Amplifier) detail the small-signal model and equivalent circuit derivation.

---

### **3. Analysis of Voltage Gain ($A_v$)**

The voltage gain is defined as the ratio of output small-signal voltage to input small-signal voltage ($A_v = v_{out}/v_{in}$).

**Analysis with Source Resistor ($R_S$):**

Let's analyze the circuit to derive the voltage gain. From the small-signal equivalent circuit:

1.  The input voltage is $v_{in}$.
2.  The voltage at the source is $v_s$.
3.  The gate-source voltage is $v_{gs} = v_{in} - v_s$.
4.  The drain current is $i_d = g_m v_{gs} + v_{ds}/r_o$.
5.  The voltage across $R_S$ is $v_s = i_d R_S$ (assuming $r_o$ is very large, or $R_S \gg r_o$). More accurately, $v_s = (g_m v_{gs} + v_{ds}/r_o) R_S$.
6.  The output voltage is $v_{out} = -i_d R_D + v_{ds}$. Since $i_d$ flows *out* of the drain terminal in the equivalent circuit, we have $v_{out} = v_{ds} - i_d R_D$. In our diagram, the drain current flows from drain to source, so $v_{out} = -i_d R_D$.

Substituting $v_s$ in the $v_{gs}$ equation:
$v_{gs} = v_{in} - (g_m v_{gs} + v_{ds}/r_o) R_S$
$v_{gs} (1 + g_m R_S) = v_{in} - (v_{ds}/r_o) R_S$
$v_{gs} = \frac{v_{in} - (v_{ds}/r_o) R_S}{1 + g_m R_S}$

Now, consider the output:
$v_{out} = -i_d R_D$
$i_d = g_m v_{gs} + v_{ds}/r_o$
$v_{out} = -(g_m v_{gs} + v_{ds}/r_o) R_D$

Substitute $v_{gs}$:
$v_{out} = -\left(g_m \frac{v_{in} - (v_{ds}/r_o) R_S}{1 + g_m R_S} + \frac{v_{ds}}{r_o}\right) R_D$
$v_{out} = -\left(\frac{g_m v_{in}}{1 + g_m R_S} - \frac{g_m R_S v_{ds}}{r_o (1 + g_m R_S)} + \frac{v_{ds}}{r_o}\right) R_D$
$v_{out} = -\left(\frac{g_m v_{in}}{1 + g_m R_S} + v_{ds} \left(\frac{1}{r_o} - \frac{g_m R_S}{r_o (1 + g_m R_S)}\right)\right) R_D$
$v_{out} = -\left(\frac{g_m v_{in}}{1 + g_m R_S} + v_{ds} \frac{1 + g_m R_S - g_m R_S}{r_o (1 + g_m R_S)}\right) R_D$
$v_{out} = -\left(\frac{g_m v_{in}}{1 + g_m R_S} + \frac{v_{ds}}{r_o (1 + g_m R_S)}\right) R_D$

We know that $v_{ds} = v_{out} - v_s = v_{out} - i_d R_S$. However, a simpler approach is often used by assuming $r_o$ is large or focusing on the dominant pole contribution.

**Simplified Analysis (Assuming $r_o$ is large, i.e., $r_o \to \infty$):**

In this case, the current source $v_{ds}/r_o$ is removed.
$i_d = g_m v_{gs} = g_m (v_{in} - v_s)$
$v_s = i_d R_S = g_m (v_{in} - v_s) R_S$
$v_s (1 + g_m R_S) = g_m v_{in} R_S$
$v_s = \frac{g_m R_S}{1 + g_m R_S} v_{in}$

Now, calculate $v_{gs}$:
$v_{gs} = v_{in} - v_s = v_{in} - \frac{g_m R_S}{1 + g_m R_S} v_{in} = v_{in} \left(1 - \frac{g_m R_S}{1 + g_m R_S}\right) = \frac{v_{in}}{1 + g_m R_S}$

The output voltage is:
$v_{out} = -i_d R_D = -(g_m v_{gs}) R_D = -g_m \left(\frac{v_{in}}{1 + g_m R_S}\right) R_D$

Therefore, the voltage gain is:
$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_m R_D}{1 + g_m R_S}$

**Analysis with Source Capacitor ($C_S$) and Resistor ($R_S$):**

If a capacitor $C_S$ is placed in series with $R_S$, the impedance in the source path becomes $Z_S = R_S + 1/(sC_S)$.

The gain formula generalizes to:
$A_v = -\frac{g_m R_D}{1 + g_m Z_S}$

In the mid-band frequency range (where $C_S$ is a short circuit), $Z_S \approx 0$, and the gain approaches $-g_m R_D$, the gain of a CS amplifier without degeneration.

At low frequencies, the impedance $Z_S$ is dominated by $R_S$, and the gain is approximately $-g_m R_D / (1 + g_m R_S)$.

**Effect of Source Degeneration on Gain:**

The term $(1 + g_m R_S)$ in the denominator significantly reduces the magnitude of the voltage gain compared to a CS amplifier without degeneration (where $A_v = -g_m R_D$).

**Key Concepts:**

*   **Voltage Gain:** Ratio of output voltage to input voltage.
*   **Transconductance ($g_m$):** The fundamental parameter determining the current amplification of the MOSFET.
*   **Output Resistance ($r_o$):** The parallel resistance at the drain, representing the output impedance of the MOSFET.
*   **Mid-band Frequency:** The frequency range where capacitive effects are negligible.

**Textbook References:**

*   **Razavi (2/e):** Chapter 4.3.2 (Voltage Gain) will show the derivation. The impact of source impedance on gain is a common topic.
*   **Sedra & Smith (6/e):** Chapter 7.2.1 (Voltage Gain) will provide the detailed steps. They often analyze the gain in terms of $R_L$ if a load resistor is present.

**Example 1:**

Consider a CS amplifier with $R_D = 10 \text{ k}\Omega$, $R_S = 1 \text{ k}\Omega$. The MOSFET has $g_m = 5 \text{ mS}$ and $r_o = 50 \text{ k}\Omega$. Calculate the voltage gain, neglecting $r_o$.

*   $A_v = -\frac{g_m R_D}{1 + g_m R_S} = -\frac{5 \text{ mS} \times 10 \text{ k}\Omega}{1 + 5 \text{ mS} \times 1 \text{ k}\Omega} = -\frac{50}{1 + 5} = -\frac{50}{6} \approx -8.33$

Compare this to the gain without degeneration: $A_v = -g_m R_D = -5 \text{ mS} \times 10 \text{ k}\Omega = -50$. The gain is significantly reduced due to source degeneration.

---

### **4. Input and Output Impedances ($Z_{in}$, $Z_{out}$)**

**Input Impedance ($Z_{in}$):**

The input impedance is the impedance seen at the gate terminal.

*   **With $R_S$:**
    The gate is directly connected to the input signal. The intrinsic input impedance of the MOSFET itself (due to $C_{gs}$) is typically very high in mid-band. The presence of $R_S$ does not directly affect the impedance looking into the gate *itself*, which is essentially infinite in the small-signal model if we ignore gate leakage current.
    However, if we consider the *effective* input impedance of the *circuit* to the source, it's related to $R_S$ and the MOSFET's parameters.
    From our gain derivation: $v_{gs} = \frac{v_{in}}{1 + g_m R_S}$. If we define input impedance as $Z_{in} = v_{in} / i_{in}$, where $i_{in}$ is the current entering the gate. In the ideal small-signal model, $i_{in} = 0$ (assuming no $C_{gd}$).

    **Important Note:** In many practical contexts, especially when considering the load connected to the output, the input impedance is often characterized by the impedance seen by the *source* driving the gate. If the gate itself is the input terminal, the impedance is very high. However, the impedance seen by an external signal source connected to the gate will be affected by any parasitic capacitances ($C_{gs}$, $C_{gd}$).

    For mid-band analysis (ignoring capacitors), the input impedance seen at the gate is essentially infinite due to the gate's isolation in the MOSFET structure.

*   **With $C_S$ in parallel with $R_S$:**
    In mid-band, $C_S$ is a short, and $Z_S \approx 0$. The input impedance remains very high.
    At lower frequencies, $Z_S$ increases, but the input impedance at the gate terminal itself remains unaffected by $Z_S$.

**Output Impedance ($Z_{out}$):**

The output impedance is the impedance seen looking into the drain terminal when the input signal is set to zero.

*   **To find $Z_{out}$:** Set $v_{in} = 0$. This means $v_{gs} = -v_s$.
    The small-signal equivalent circuit is analyzed by applying a test voltage $v_x$ at the output and calculating the resulting current $i_x$ flowing into the drain. $Z_{out} = v_x / i_x$.

    In the equivalent circuit:
    $v_{gs} = -v_s$
    $v_s = i_d R_S$ (assuming $r_o \to \infty$)
    $i_d = g_m v_{gs} + v_{ds}/r_o = g_m (-v_s) + v_x/r_o = -g_m (i_d R_S) + v_x/r_o$
    $i_d (1 + g_m R_S) = v_x/r_o$
    $i_d = \frac{v_x}{r_o (1 + g_m R_S)}$

    The output current $i_x$ is the current flowing *out* of the drain node. In our analysis, $i_d$ is the current flowing *from* drain to source. So, $i_x = -i_d$.
    $i_x = -\frac{v_x}{r_o (1 + g_m R_S)}$

    Therefore, $Z_{out} = \frac{v_x}{i_x} = -r_o (1 + g_m R_S)$.

    **Important Note:** The negative sign indicates the direction of current flow relative to the voltage drop across $r_o$. The impedance magnitude is $r_o(1 + g_m R_S)$.

    **Using the "turn off the independent sources" method:**
    Set $v_{in} = 0$.
    The small-signal equivalent circuit has $R_D$ in series with the drain. The source is connected to $R_S$, and from the source to ground, there's the parallel combination of $g_m v_{gs}$ (current source) and $r_o$ (parallel resistor). Since $v_{in}=0$, $v_{gs} = -v_s$.

    Looking into the drain:
    The impedance from drain to source is $r_o$.
    The impedance from source to ground is $R_S$.
    The voltage at the source is $v_s$. The current through $R_S$ is $v_s/R_S$.
    The current from the MOSFET's current source is $g_m v_{gs} = -g_m v_s$.
    The total current flowing *out* of the source terminal is $i_s = v_s/R_S - g_m v_s = v_s (1/R_S - g_m)$.
    This current $i_s$ must be equal to the current flowing through $r_o$ (assuming $R_D$ is not part of the impedance calculation itself, but the output is taken *after* $R_D$).

    Let's redraw the analysis for $Z_{out}$ by looking into the drain terminal after the load $R_D$.
    Set $v_{in} = 0 \Rightarrow v_{gs} = -v_s$.
    The current into the drain is $i_d = g_m v_{gs} + v_{ds}/r_o = -g_m v_s + v_{ds}/r_o$.
    The voltage at the source is $v_s = i_d R_S$.
    So, $i_d = -g_m (i_d R_S) + v_{ds}/r_o$.
    $i_d (1 + g_m R_S) = v_{ds}/r_o$.
    $i_d = \frac{v_{ds}}{r_o (1 + g_m R_S)}$.

    The output impedance seen looking into the drain (before $R_D$) is $r_o(1 + g_m R_S)$.
    However, $R_D$ is in series with the drain. So, the total output impedance of the amplifier circuit is:
    $Z_{out} = R_D || [r_o (1 + g_m R_S)]$.

    **If we neglect $r_o$ ($r_o \to \infty$):**
    Then $i_d = -g_m v_s = -g_m (i_d R_S)$. This implies $g_m R_S = -1$, which is not possible for positive $g_m$ and $R_S$. This suggests that the approximation needs careful handling when the impedance is dominated by the output resistance.

    **Let's re-evaluate using the current source $g_m V_{gs}$ as the primary driver:**
    Set $v_{in} = 0$, so $v_{gs} = -v_s$.
    The current $i_d = g_m v_{gs} + v_{ds}/r_o = -g_m v_s + v_{ds}/r_o$.
    The voltage at the source is $v_s = i_d R_S$.
    So, $i_d = -g_m (i_d R_S) + v_{ds}/r_o$.
    $i_d (1 + g_m R_S) = v_{ds}/r_o$.

    Now, to find the output impedance, we inject a test voltage $v_x$ at the drain (assuming $R_D$ is part of the load and we are looking into the drain of the MOSFET itself).
    $v_{ds} = v_x$.
    $i_d = \frac{v_x}{r_o (1 + g_m R_S)}$.
    The current *entering* the drain is $i_d$. So, $Z_{out} = v_x / i_d = r_o (1 + g_m R_S)$.

    **If $R_D$ is part of the amplifier's output impedance:**
    The output voltage is taken *after* $R_D$. So, $Z_{out}$ is the impedance seen looking into the drain terminal of the MOSFET *including* $R_D$.
    When $v_{in} = 0$, $v_{gs} = -v_s$.
    The impedance looking into the drain of the MOSFET is $r_o || (R_S + 1/g_m)$. This is the result for a common-gate or common-base configuration.
    For CS with source degeneration:
    Looking into the drain, we see $R_D$ in series with the combination of the MOSFET and $R_S$.
    The impedance looking between drain and source is $r_o$.
    The impedance looking between source and ground is $R_S$.
    The impedance from drain to ground is $R_D$ + (impedance looking into source).
    The impedance looking into the source terminal is $R_S || (1/g_m)$. No, this is wrong.

    Let's go back to the gain derivation where we found $v_s = \frac{g_m R_S}{1 + g_m R_S} v_{in}$.
    If $v_{in} = 0$, then $v_{gs} = -v_s$.
    The current entering the drain is $i_d = g_m v_{gs} + v_{ds}/r_o = -g_m v_s + v_{ds}/r_o$.
    The voltage at the source is $v_s = i_d R_S$.
    $i_d = -g_m (i_d R_S) + v_{ds}/r_o$.
    $i_d (1 + g_m R_S) = v_{ds}/r_o$.
    $i_d = \frac{v_{ds}}{r_o(1 + g_m R_S)}$.

    This is the current flowing *through* the MOSFET. The output impedance is seen by looking into the drain.
    The resistance seen from drain to source is $r_o$.
    The resistance seen from source to ground is $R_S$.
    The effective resistance looking into the source terminal from the drain is $R_S + r_o || (1/g_m)$? No.

    **Let's use a standard method for $Z_{out}$:**
    Turn off input voltage source ($v_{in} = 0$).
    Connect a test voltage $v_x$ to the output (drain).
    Calculate the current $i_x$ flowing *into* the drain.
    $v_{gs} = v_{in} - v_s = 0 - v_s = -v_s$.
    The current flowing through $R_S$ is $i_{Rd} = v_s / R_S$. This is not correct. Current flows *from* drain *to* source.

    The small signal equivalent circuit for $Z_{out}$:
    Input $v_{in}$ is shorted to ground.
    Connect $v_x$ to the drain.
    $v_{gs} = v_{in} - v_s = 0 - v_s = -v_s$.
    The current from $g_m v_{gs}$ flows into the source terminal.
    The source terminal voltage is $v_s$.
    The current through $R_S$ is $v_s/R_S$.
    The current from the MOSFET source is $i_s = g_m v_{gs} + v_{ds}/r_o = -g_m v_s + v_{ds}/r_o$.
    This current $i_s$ flows through $R_S$. So $i_s = v_s/R_S$.
    $v_s/R_S = -g_m v_s + v_{ds}/r_o$.
    $v_s (1/R_S + g_m) = v_{ds}/r_o$.
    $v_s \left(\frac{1 + g_m R_S}{R_S}\right) = v_{ds}/r_o$.
    $v_s = \frac{R_S v_{ds}}{r_o (1 + g_m R_S)}$.

    The current $i_x$ injected at the drain is the sum of the current through $R_D$, the current through $r_o$, and the current through $g_m v_{gs}$.
    Wait, $R_D$ is the load. The output impedance is seen *looking into the drain*. So we consider the impedance from drain to ground.
    The current $i_x$ flows from the test voltage source into the drain.
    $i_x = i_{R_D} + i_{r_o}$.
    $i_{R_D} = (v_{ds} - V_{out})/R_D$. This is confusing if $V_{out}$ is the output.

    Let's consider the impedance seen looking into the drain terminal itself (before $R_D$).
    Connect $v_x$ to the drain. The other end of $v_x$ is ground.
    So, $v_{ds} = v_x$.
    The current delivered by $v_x$ is $i_x$.
    $i_x = i_{r_o} + i_{g_m v_{gs}}$.
    $i_{r_o} = v_x / r_o$.
    $i_{g_m v_{gs}} = g_m v_{gs}$.
    $v_{gs} = v_{in} - v_s = 0 - v_s = -v_s$.
    $i_{source} = g_m v_{gs} + v_{ds}/r_o = -g_m v_s + v_x/r_o$.
    This $i_{source}$ flows through $R_S$. So, $v_s = i_{source} R_S$.
    $v_s = (-g_m v_s + v_x/r_o) R_S$.
    $v_s = -g_m R_S v_s + (v_x/r_o) R_S$.
    $v_s (1 + g_m R_S) = (v_x/r_o) R_S$.
    $v_s = \frac{R_S v_x}{r_o (1 + g_m R_S)}$.

    Now, $i_x = v_x/r_o - g_m v_s = v_x/r_o - g_m \frac{R_S v_x}{r_o (1 + g_m R_S)}$.
    $i_x = \frac{v_x}{r_o} \left(1 - \frac{g_m R_S}{1 + g_m R_S}\right) = \frac{v_x}{r_o} \left(\frac{1 + g_m R_S - g_m R_S}{1 + g_m R_S}\right) = \frac{v_x}{r_o (1 + g_m R_S)}$.

    So, the impedance looking into the drain terminal itself is $Z_{out, MOSFET} = \frac{v_x}{i_x} = r_o (1 + g_m R_S)$.

    When $R_D$ is in the circuit, the output impedance of the entire amplifier is the parallel combination of $R_D$ and the impedance looking into the drain of the MOSFET.
    $Z_{out} = R_D || [r_o (1 + g_m R_S)]$.

    **If $r_o \to \infty$:**
    $Z_{out, MOSFET} \to \infty$.
    $Z_{out} = R_D || \infty = R_D$.
    This matches the gain formula $A_v = -\frac{g_m R_D}{1 + g_m R_S}$, where the output is taken after $R_D$.

**Key Concepts:**

*   **Input Impedance ($Z_{in}$):** Impedance seen by the signal source driving the gate.
*   **Output Impedance ($Z_{out}$):** Impedance seen looking back into the output terminal of the amplifier.

**Textbook References:**

*   **Razavi (2/e):** Chapter 4.3.3 (Input and Output Impedances) will cover these aspects.
*   **Sedra & Smith (6/e):** Chapter 7.2.2 (Input and Output Impedances) will provide the detailed derivations.

**Example 2:**

Using the parameters from Example 1, and assuming $r_o = 50 \text{ k}\Omega$. Calculate the output impedance, neglecting $R_D$ for a moment to find the MOSFET's output impedance.

*   $Z_{out, MOSFET} = r_o (1 + g_m R_S) = 50 \text{ k}\Omega (1 + 5 \text{ mS} \times 1 \text{ k}\Omega) = 50 \text{ k}\Omega (1 + 5) = 50 \text{ k}\Omega \times 6 = 300 \text{ k}\Omega$.
*   If $R_D = 10 \text{ k}\Omega$, then $Z_{out} = R_D || Z_{out, MOSFET} = 10 \text{ k}\Omega || 300 \text{ k}\Omega = \frac{10 \times 300}{10 + 300} \text{ k}\Omega = \frac{3000}{310} \text{ k}\Omega \approx 9.68 \text{ k}\Omega$.

---

### **5. Effect of Source Degeneration on Performance Parameters**

Source degeneration significantly impacts the amplifier's performance.

**a) Voltage Gain:**

*   **Reduction in Gain:** As seen from the gain formula $A_v = -\frac{g_m R_D}{1 + g_m R_S}$, the gain is reduced by the factor $(1 + g_m R_S)$ in the denominator.
*   **Gain Stability:** The gain becomes less dependent on $g_m$ and more dependent on $R_S$ and $R_D$. Since $R_S$ and $R_D$ can be fabricated more accurately than $g_m$ (which varies significantly with process and bias), this makes the gain more predictable and stable.

**b) Linearity:**

*   **Improved Linearity:** Source degeneration significantly improves the linearity of the CS amplifier. Without degeneration, the $i_d$ vs. $v_{gs}$ relationship is quadratic. With degeneration, the effective input voltage driving the MOSFET is $v_{gs} = v_{in} / (1 + g_m R_S)$. This linearizes the relationship between the *circuit's input voltage* ($v_{in}$) and the drain current.
    The drain current is $i_d = g_m v_{gs} = g_m \frac{v_{in}}{1 + g_m R_S}$.
    If we consider the quadratic relation $i_d = I_{DS} + K(v_{gs} - V_{th})^2$, substituting $v_{gs}$ makes the overall relationship more linear with respect to $v_{in}$.

    **Example:** Consider the $i_d$ vs. $v_{gs}$ characteristic.
    $i_d = K(v_{gs} - V_{th})^2$.
    With degeneration, $v_{gs}$ is the actual gate-source voltage. The input voltage is $v_{in}$. We have $v_{gs} = v_{in}/(1 + g_m R_S)$.
    So, $i_d = K \left(\frac{v_{in}}{1 + g_m R_S} - V_{th}\right)^2$.
    If we assume the circuit is biased such that $V_{GS} = V_{th} + \Delta V$, then $i_d = I_{DS} + g_m \Delta V + \frac{1}{2} \frac{\partial g_m}{\partial V_{GS}} (\Delta V)^2$.
    With degeneration, the effective gate-source voltage is $v_{gs} = v_{in} - v_s$.
    $i_d = g_m v_{gs} = g_m(v_{in} - i_d R_S)$.
    $i_d (1 + g_m R_S) = g_m v_{in}$.
    $i_d = \frac{g_m}{1 + g_m R_S} v_{in}$.
    The term $\frac{g_m}{1 + g_m R_S}$ is the effective transconductance of the degenerated amplifier. If $g_m$ is assumed constant, this is linear. However, $g_m$ itself is not constant with respect to $v_{in}$ if the swing is large. The relationship $v_{gs} = v_{in} / (1 + g_m R_S)$ linearizes the input-output relationship because the effective overdrive voltage changes less for a given change in $v_{in}$.

    **Key Point:** The source degeneration resistor acts as a local feedback element, stabilizing the gate-source voltage and hence improving linearity.

**c) Output Resistance ($Z_{out}$):**

*   **Increased Output Resistance:** The output resistance is $Z_{out} = R_D || [r_o (1 + g_m R_S)]$. The presence of the $(1 + g_m R_S)$ term significantly increases the output resistance compared to a CS amplifier without degeneration ($Z_{out} = R_D || r_o \approx R_D$ if $r_o \gg R_D$).

**d) Input Impedance ($Z_{in}$):**

*   **High Input Impedance:** The input impedance at the gate remains very high, as discussed earlier.

**e) Bandwidth:**

*   **Reduced Bandwidth:** The presence of $R_S$ (and $C_S$) can affect the bandwidth. In the context of source degeneration, we often look at the low-frequency pole introduced by $C_S$ if it's used. If only $R_S$ is present, the mid-band gain is reduced, but the pole frequencies are generally shifted to higher frequencies, potentially *increasing* the bandwidth in some scenarios, but the gain-bandwidth product is usually lower due to reduced gain. However, the presence of $C_{gd}$ and other parasitic capacitances can create complex pole structures.

**f) $1/f$ Noise:**

*   **Reduced $1/f$ Noise:** The source degeneration resistor can help reduce the impact of $1/f$ noise from the MOSFET by increasing the effective resistance at the source.

**Key Concepts:**

*   **Linearity:** The degree to which the output signal is proportional to the input signal.
*   **Gain Stability:** The predictability and consistency of the amplifier's gain.
*   **Output Resistance:** Affects the amplifier's ability to drive a load without significant voltage drop.

**Textbook References:**

*   **Razavi (2/e):** Chapter 4.3.4 (Trade-offs) will discuss the impact of source degeneration on various performance metrics.
*   **Baker, Li, Boyce (2000):** This textbook might offer practical insights into the trade-offs in CMOS amplifier design.
*   **Allen & Holbery (3/e):** This reference is likely to have detailed discussions on linearity enhancement techniques.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the impact of source degeneration on gain and linearity directly supports explaining single-stage amplifiers.

---

### **6. Common Source Amplifier with Source Degeneration using Capacitor ($C_S$)**

When a capacitor ($C_S$) is used instead of or in series with $R_S$, the circuit exhibits frequency-dependent behavior.

**Circuit Diagram (CS Amplifier with Source Capacitor $C_S$):**

```
      VDD
       |
      |
     ---
     | | RD
     ---
      |
      o-------> Vout
      |
    ----- M1
   G| /
  ---/------ Vin
   S| \
    -----
      |
      | CS
     ---
      |
     GND
```

**Analysis:**

*   **Mid-band Frequency:** In the mid-band range, the capacitor $C_S$ acts as a short circuit ($Z_{CS} \approx 0$). The circuit behaves like a CS amplifier without source degeneration.
    $A_v \approx -g_m R_D$
    $Z_{in} \approx \infty$
    $Z_{out} \approx R_D$

*   **Low Frequencies:** At very low frequencies, $C_S$ acts as an open circuit ($Z_{CS} \to \infty$). The impedance in the source path becomes very large. The analysis is similar to the case with a large $R_S$, leading to reduced gain.
    $A_v = -\frac{g_m R_D}{1 + g_m Z_{CS}}$. As $Z_{CS} \to \infty$, $A_v \to 0$.

*   **Transition Region:** There is a transition region around a specific frequency where $C_S$ starts to have a significant impedance. This frequency is often related to the time constant formed by the source impedance and the MOSFET parameters.

    Consider the gain formula: $A_v = -\frac{g_m R_D}{1 + g_m Z_{CS}}$, where $Z_{CS} = 1/(sC_S)$.
    $A_v = -\frac{g_m R_D}{1 + g_m/(sC_S)} = -\frac{g_m R_D sC_S}{sC_S + g_m}$
    $A_v = -\frac{g_m R_D s}{s + g_m/(C_S)} = -\frac{g_m R_D}{1 + \frac{1}{sC_S g_m}} = -\frac{g_m R_D}{1 + \frac{1}{j\omega C_S g_m}}$

    This indicates a low-frequency pole at $\omega_p = \frac{g_m}{C_S}$.
    The magnitude of the gain is $|A_v| = \frac{g_m R_D}{\sqrt{1 + (\frac{1}{\omega C_S g_m})^2}}$.

    *   At high frequencies ($\omega \gg \frac{g_m}{C_S}$), $|A_v| \to g_m R_D$.
    *   At low frequencies ($\omega \ll \frac{g_m}{C_S}$), $|A_v| \approx \frac{g_m R_D}{\frac{1}{\omega C_S g_m}} = \omega C_S g_m R_D$. This shows the gain rolls off at low frequencies.

**Use of $C_S$:**

Using a capacitor in the source path allows the amplifier to achieve high gain at mid-band frequencies (like a normal CS amplifier) while providing some degeneration effect at lower frequencies, potentially mitigating the linearity issues caused by low-frequency gain reduction if it were caused by a resistor. It effectively "bypasses" the source degeneration at higher frequencies.

**Trade-offs with $C_S$:**

*   **Achieves high mid-band gain:** Similar to a standard CS amplifier.
*   **Improved low-frequency linearity:** Compared to using a resistor for degeneration, which reduces gain at all frequencies.
*   **Limited bandwidth:** The capacitor introduces a low-frequency pole, limiting the usable bandwidth.
*   **Pole location:** The frequency of the low-frequency pole is $\omega_p = g_m/C_S$. Careful selection of $C_S$ is needed.

**Key Concepts:**

*   **Frequency Response:** How the amplifier's gain and other parameters change with frequency.
*   **Low-Frequency Pole:** A point in the frequency response where the gain starts to decrease.
*   **Bypass Capacitor:** A capacitor used to effectively short out a component at higher frequencies.

**Textbook References:**

*   **Razavi (2/e):** Discusses frequency response in Chapter 10, and techniques for improving gain and linearity.
*   **Sedra & Smith (6/e):** Chapter 7.7 (Frequency Response) and Chapter 14 (Basic Frequency Response) will be relevant.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding the frequency-dependent behavior of the CS amplifier with $C_S$ contributes to explaining single-stage amplifiers.

---

### **7. Advantages and Disadvantages of Source Degeneration**

**Advantages:**

*   **Improved Linearity:** Significantly reduces distortion by linearizing the input-output characteristic.
*   **Gain Stability:** Makes the voltage gain less sensitive to variations in MOSFET parameters ($g_m$) and more dependent on resistors ($R_S, R_D$).
*   **Increased Input Impedance:** For the gate terminal itself, the impedance remains very high (assuming no parasitic loading).
*   **Reduced $1/f$ Noise:** Can help mitigate the impact of low-frequency noise.
*   **Controlled Gain:** Provides a mechanism to reduce gain to desired levels.

**Disadvantages:**

*   **Reduced Voltage Gain:** The primary trade-off is a significant reduction in voltage gain compared to a CS amplifier without degeneration.
*   **Reduced Output Swing:** The reduced gain can sometimes lead to reduced output voltage swing for a given supply voltage.
*   **Increased Area/Power:** Addition of the resistor $R_S$ increases the silicon area and potentially power consumption (if biased with a current).
*   **Reduced Speed:** The extra impedance in the source path can affect the amplifier's speed and bandwidth.

**Key Concepts:**

*   **Trade-offs:** In analog circuit design, there is always a compromise between different performance metrics.

**Textbook References:**

*   **Razavi (2/e):** Chapter 4.3.4 (Trade-offs) explicitly details these.
*   **Meyer Gray, Hurst, Lewis (5/e):** This comprehensive text likely offers in-depth analysis of performance trade-offs in analog circuits.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** A thorough understanding of the advantages and disadvantages is essential for explaining single-stage amplifiers.

---

### **8. Practice Questions and Answers**

**Question 1:**
A common source amplifier with source degeneration using a resistor $R_S$ has the following parameters: $g_m = 10 \text{ mS}$, $R_D = 5 \text{ k}\Omega$, $R_S = 500 \Omega$, and $r_o = \infty$. What is the voltage gain of this amplifier?

**Answer 1:**
The voltage gain of a CS amplifier with source degeneration (neglecting $r_o$) is given by:
$A_v = -\frac{g_m R_D}{1 + g_m R_S}$
$A_v = -\frac{10 \text{ mS} \times 5 \text{ k}\Omega}{1 + 10 \text{ mS} \times 500 \Omega} = -\frac{50}{1 + 10 \times 10^{-3} \times 500} = -\frac{50}{1 + 5} = -\frac{50}{6} \approx -8.33$

**Question 2:**
Compare the linearity of a common source amplifier with and without source degeneration. Explain why source degeneration improves linearity.

**Answer 2:**
A common source amplifier without source degeneration exhibits a quadratic relationship between the drain current ($i_d$) and the gate-source voltage ($v_{gs}$), leading to harmonic distortion.
$i_d \approx K(v_{gs} - V_{th})^2$.

With source degeneration, the effective gate-source voltage driving the MOSFET is $v_{gs}' = v_{in}/(1 + g_m R_S)$. This relationship linearizes the input-output characteristic. The drain current becomes:
$i_d = g_m v_{gs}' = g_m \frac{v_{in}}{1 + g_m R_S}$.
If $g_m$ and $R_S$ are chosen appropriately, the term $\frac{g_m}{1 + g_m R_S}$ acts as an effective, more constant transconductance, leading to reduced distortion. The source degeneration resistor provides a form of local negative feedback, stabilizing the overdrive voltage and thus improving linearity.

**Question 3:**
A common source amplifier uses a source bypass capacitor $C_S$.
a) What is the approximate voltage gain in the mid-band frequency range?
b) What is the approximate voltage gain at very low frequencies?
c) What is the approximate frequency of the dominant low-frequency pole?

**Answer 3:**
a) In the mid-band frequency range, $C_S$ acts as a short circuit. The amplifier behaves like a standard CS amplifier:
   $A_v \approx -g_m R_D$

b) At very low frequencies, $C_S$ acts as an open circuit. The impedance in the source path is very high. The gain is given by $A_v = -\frac{g_m R_D}{1 + g_m Z_{CS}}$. As $Z_{CS} \to \infty$, the gain approaches:
   $A_v \approx 0$ (or very small, depending on the exact low-frequency behavior). More accurately, the gain rolls off as $1/\omega$.

c) The amplifier has a low-frequency pole when $C_S$ starts to impede the AC signal. The frequency of this pole is determined by the impedance of $C_S$ and the effective transconductance. The pole frequency is approximately:
   $\omega_p = \frac{g_m}{C_S}$

**Question 4:**
What is the output impedance of a CS amplifier with source degeneration resistor $R_S$, neglecting $r_o$?

**Answer 4:**
When $r_o$ is neglected ($r_o \to \infty$), the output impedance of the CS amplifier with source degeneration is determined by $R_D$. The impedance looking into the drain of the MOSFET becomes very large.
$Z_{out} = R_D || [\text{impedance looking into MOSFET drain}]$
Since the impedance looking into the MOSFET drain becomes effectively infinite (due to infinite $r_o$),
$Z_{out} = R_D || \infty = R_D$.

---

### **9. Important Points to Remember**

*   **Purpose of Source Degeneration:** Primarily to improve linearity and gain stability.
*   **Gain Reduction:** The main trade-off is a significant reduction in voltage gain.
*   **Linearity Mechanism:** Source degeneration acts as local negative feedback, stabilizing the overdrive voltage.
*   **Output Resistance:** Increases significantly with the presence of $R_S$.
*   **Input Impedance:** Remains high at the gate terminal.
*   **Capacitor Degeneration ($C_S$):** Allows for high mid-band gain while providing some degeneration effect at lower frequencies, but introduces a low-frequency pole.
*   **Trade-offs are Key:** Source degeneration is a design choice that balances gain, linearity, and speed.

---

### **10. Conclusion**

The common source amplifier with source degeneration is a vital circuit configuration in analog IC design. By understanding its small-signal model, gain, input/output impedances, and the impact of degeneration on linearity and stability, designers can effectively utilize this topology to meet specific performance requirements. The choice between using a resistor or capacitor for degeneration depends on the desired frequency response and linearity characteristics. This topic is foundational for understanding more complex analog circuits and forms a key part of achieving CO1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
