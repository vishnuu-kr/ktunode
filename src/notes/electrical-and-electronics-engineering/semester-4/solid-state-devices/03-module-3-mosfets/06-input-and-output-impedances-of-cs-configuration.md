---
title: "input and output impedances of CS configuration"
subject: "SOLID STATE DEVICES"
module: "Module 3: MOSFETs "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f8f"
status: "completed"
scrapedAt: "2026-05-23T16:18:49.963Z"
---
# SOLID STATE DEVICES - Module 3: MOSFETs - Input and Output Impedances of CS Configuration

## 1. Introduction to Common Source (CS) MOSFET Configuration

The Common Source (CS) configuration is the most fundamental MOSFET amplifier configuration, analogous to the Common Emitter configuration in BJTs. It utilizes a MOSFET where the source terminal is common to both the input and output circuits. This configuration is widely used for voltage amplification.

**Key Concepts:**

*   **MOSFET:** Metal-Oxide-Semiconductor Field-Effect Transistor, a voltage-controlled device where the drain current is controlled by the gate-source voltage ($V_{GS}$).
*   **Common Source (CS) Configuration:** The source terminal of the MOSFET is connected to a common reference point (ground or AC ground). The input signal is applied to the gate terminal, and the output signal is taken from the drain terminal.
*   **Amplifier:** A circuit that increases the amplitude of an input signal.
*   **Input Impedance ($Z_{in}$):** The opposition presented to the signal source at the input terminals of the amplifier. It determines how much current is drawn from the source.
*   **Output Impedance ($Z_{out}$):** The opposition presented by the amplifier to the load connected at the output terminals. It determines how much voltage is dropped across the amplifier when driving a load.

**Learning Outcome Alignment:**

*   This topic directly contributes to **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)** by providing the fundamental parameters needed for amplifier analysis and design.

**Textbook References:**

*   **Boylested & Nashelsky:** Chapter 13 (MOSFETs) will provide foundational understanding of MOSFET operation and basic amplifier configurations.
*   **Sedra & Smith:** Chapter 4 (MOSFETs) will offer a more in-depth treatment of MOSFET characteristics, including small-signal models essential for impedance analysis.
*   **Bell:** Chapter 13 (MOSFETs) will likely cover the basic amplifier configurations and their characteristics.

## 2. Small-Signal Equivalent Circuit of a MOSFET

To analyze the input and output impedances of a CS configuration, we need to use the small-signal equivalent circuit of the MOSFET operating in its saturation region.

**Key Concepts:**

*   **Saturation Region:** The operating region of a MOSFET where it acts as a voltage-controlled current source.
*   **Transconductance ($g_m$):** The ratio of the change in drain current to the change in gate-source voltage, with the drain-source voltage held constant.
    *   For an NMOSFET in saturation: $g_m = \frac{\partial I_D}{\partial V_{GS}} = K_n (V_{GS} - V_{TN})$, where $K_n$ is the process transconductance parameter and $V_{TN}$ is the threshold voltage.
    *   It can also be expressed as: $g_m = 2K_n(V_{GS} - V_{TN}) = \frac{2I_D}{V_{GS} - V_{TN}}$ or $g_m = \frac{I_D}{V_{GS} - V_{TN}}$.
    *   Another common expression relates $g_m$ to the DC drain current ($I_D$) and the overdrive voltage ($V_{GS} - V_{TN}$): $g_m = \frac{2I_D}{V_{GS} - V_{TN}}$.
    *   If the overdrive voltage is not directly known, a common approximation derived from $I_D = \frac{1}{2}K_n(V_{GS} - V_{TN})^2$ is $g_m = \frac{2I_D}{V_{GS} - V_{TN}}$.
*   **Output Resistance ($r_o$):** The resistance seen looking into the drain terminal, accounting for channel-length modulation.
    *   $r_o = \frac{V_A + V_{DS}}{I_D}$, where $V_A = V_{DD}L$ is the Early voltage and $L$ is the channel length. A common approximation is $r_o \approx \frac{V_A}{I_D}$.
    *   For NMOSFETs: $r_o = \frac{1}{\lambda I_D} = \frac{V_A}{I_D}$, where $\lambda = \frac{1}{V_A}$ is the channel-length modulation parameter.
*   **Channel-Length Modulation:** The effect where the effective channel length decreases with increasing drain-source voltage, leading to an increase in drain current. This is modeled by the $r_o$ parameter.

**Small-Signal Equivalent Circuit Components:**

The small-signal equivalent circuit of a MOSFET in saturation consists of:

1.  **Current Source:** A voltage-controlled current source between drain and source, with value $g_m v_{gs}$, where $v_{gs}$ is the small-signal gate-source voltage.
2.  **Output Resistance ($r_o$):** A resistor in parallel with the current source, connected between drain and source.

**Example:**

Consider an NMOSFET with $V_{TN} = 1V$, $K_n = 2mA/V^2$, and biased at $V_{GS} = 3V$.
The DC drain current $I_D = \frac{1}{2} K_n (V_{GS} - V_{TN})^2 = \frac{1}{2} (2mA/V^2) (3V - 1V)^2 = 4mA$.
The transconductance $g_m = 2K_n (V_{GS} - V_{TN}) = 2 (2mA/V^2) (3V - 1V) = 8mA/V$.
If $V_A = 50V$, then $r_o = \frac{V_A}{I_D} = \frac{50V}{4mA} = 12.5 k\Omega$.

**Textbook References:**

*   **Sedra & Smith:** Chapter 4.3 (Small-Signal Models for the MOSFET) will be crucial for understanding the derivation and application of these parameters.
*   **Boylested & Nashelsky:** Chapter 13.9 (MOSFET Small-Signal Models) will also cover these concepts.
*   **Razavi:** Chapter 4 (MOSFETs) provides a thorough treatment of MOSFET device physics and small-signal models.

## 3. Input Impedance of the CS Configuration

The input impedance of the CS configuration is determined by the impedance seen at the gate terminal of the MOSFET.

**Key Concepts:**

*   **Input Terminal:** The gate terminal of the MOSFET.
*   **DC Biasing:** The DC gate-source voltage ($V_{GS}$) is set by the biasing circuit.
*   **AC Signal:** The small-signal voltage applied to the gate.

**Analysis:**

In a basic CS configuration, the gate terminal is typically connected to a signal source through a biasing network.

*   **Ideal Case (No Biasing Resistors):** If the gate is directly connected to the signal source without any series resistors, the input impedance is ideally infinite for DC and very high for AC signals. This is because the gate-source junction is reverse-biased (or non-conducting for practical purposes) in the saturation region, and there's an insulating oxide layer between the gate and the channel.

*   **Practical Case (with Biasing Resistors):** In most practical circuits, resistors are used for DC biasing. Let's consider a common biasing scheme where a gate resistor ($R_G$) is used to set the DC gate voltage.

    *   **To find the input impedance ($Z_{in}$), we look into the gate terminal.**
    *   We apply a small-signal voltage at the input and find the resulting small-signal current.
    *   The small-signal equivalent circuit shows that the gate is connected to the source terminal through $R_G$.
    *   The impedance seen at the gate terminal is the parallel combination of the gate-source capacitance ($C_{gs}$) and the biasing resistor ($R_G$).
    *   For **DC analysis**, the capacitors are open circuits, so the input impedance is dominated by $R_G$.
    *   For **AC analysis**, the input impedance is the parallel combination of $R_G$ and the input impedance of the MOSFET itself (which is very high due to the gate capacitance).

    **Circuit Diagram Consideration:**
    When analyzing AC input impedance, we consider the impedance looking into the gate. If there are gate resistors ($R_{G1}$, $R_{G2}$) for voltage division biasing, the total equivalent resistance seen by the gate will be the parallel combination of these resistors.

    Let's assume a simple CS amplifier with a single gate resistor $R_G$ to ground. The small-signal equivalent circuit shows $R_G$ connected between the gate and the source (which is often AC grounded). The gate-source capacitance ($C_{gs}$) is also connected between the gate and source.

    Therefore, the input impedance seen by the AC signal source will be the parallel combination of $R_G$ and the impedance of $C_{gs}$.

    $Z_{in(AC)} = R_G || \frac{1}{j\omega C_{gs}}$

    At mid-band frequencies (where the effect of parasitic capacitances is negligible), $Z_{in(AC)} \approx R_G$.

    **Important Consideration:**
    The primary contribution to the input impedance of a MOSFET CS amplifier comes from the gate biasing resistors. The intrinsic impedance of the MOSFET itself at the gate terminal is extremely high, limited by the gate oxide capacitance.

**Formula for Input Impedance:**

*   **DC Input Impedance:** $Z_{in(DC)} = R_G$ (where $R_G$ is the equivalent parallel resistance connected to the gate).
*   **AC Input Impedance (Mid-band):** $Z_{in(AC)} \approx R_G$ (assuming $\omega C_{gs}$ is large compared to $R_G$). If $R_G$ is very large, the input impedance is dominated by the MOSFET's intrinsic gate resistance, which is very high.

**Example:**

Consider a CS amplifier biased with a single gate resistor $R_G = 1M\Omega$.
*   The DC input impedance is $Z_{in(DC)} = 1M\Omega$.
*   At mid-band frequencies, the AC input impedance is approximately $Z_{in(AC)} \approx 1M\Omega$.

**Highlight:** The high input impedance is a significant advantage of MOSFET amplifiers over BJT amplifiers.

**Textbook References:**

*   **Boylested & Nashelsky:** Chapter 13.10 (Common-Source Amplifier) will discuss the input impedance characteristics.
*   **Sedra & Smith:** Chapter 7.3 (The Common-Source Amplifier) will provide detailed analysis of input impedance, including the effect of biasing resistors and parasitic capacitances.

## 4. Output Impedance of the CS Configuration

The output impedance of the CS configuration is the impedance seen looking back into the drain terminal when the input signal is set to zero.

**Key Concepts:**

*   **Output Terminal:** The drain terminal of the MOSFET.
*   **Signal Source:** The input signal source (gate) is set to its DC bias point (shorted for AC analysis).
*   **Load:** The circuit connected to the output.

**Analysis:**

To find the output impedance ($Z_{out}$), we deactivate the independent source (which is the input voltage source $v_{gs}$ at the gate). This means $v_{gs} = 0$.

*   When $v_{gs} = 0$, the voltage-controlled current source $g_m v_{gs}$ becomes zero, effectively becoming an open circuit.
*   The only component remaining connected between the drain and source (assuming the source is AC grounded) is the output resistance $r_o$.
*   Therefore, the impedance seen looking into the drain terminal is simply $r_o$.

**Circuit Diagram Consideration:**

In a typical CS amplifier circuit, the drain terminal is connected to the MOSFET's drain, and then usually to a drain resistor ($R_D$) connected to the power supply ($V_{DD}$). The output signal is taken from the drain.

*   **When analyzing $Z_{out}$:**
    *   The input (gate) is AC grounded ($v_{gs} = 0$).
    *   The MOSFET's small-signal model now presents $r_o$ between drain and source.
    *   The drain resistor $R_D$ is connected between the drain and $V_{DD}$. Since $V_{DD}$ is a DC supply, it acts as an AC ground.
    *   Thus, $r_o$ and $R_D$ are in parallel, connected between the output terminal (drain) and AC ground.

**Formula for Output Impedance:**

*   $Z_{out} = R_D || r_o$

**Example:**

Consider a CS amplifier with $R_D = 10 k\Omega$ and a MOSFET with $r_o = 20 k\Omega$.
The output impedance is $Z_{out} = 10 k\Omega || 20 k\Omega = \frac{10k \times 20k}{10k + 20k} = \frac{200}{30} k\Omega = 6.67 k\Omega$.

**Highlight:** The output impedance is determined by the parallel combination of the drain resistor and the MOSFET's intrinsic output resistance ($r_o$).

**Textbook References:**

*   **Boylested & Nashelsky:** Chapter 13.10 (Common-Source Amplifier) will cover the calculation of output impedance.
*   **Sedra & Smith:** Chapter 7.3 (The Common-Source Amplifier) will provide a detailed analysis of output impedance.
*   **Bell:** Chapter 13 (MOSFETs) will also explain the output impedance of CS amplifiers.

## 5. Impact of Biasing and Load on Impedances

The specific biasing configuration and the presence of a load resistor will affect the calculated input and output impedances.

**Key Concepts:**

*   **Biasing Circuit:** The resistors and capacitors used to establish the DC operating point of the MOSFET.
*   **Load Resistor ($R_L$):** The external resistor connected to the output of the amplifier.
*   **Bypass Capacitor ($C_S$):** Often used in series with the source resistor ($R_S$) to provide AC bypass, grounding the source for AC signals and increasing gain.

**Analysis:**

*   **Input Impedance ($Z_{in}$):**
    *   The input impedance is primarily determined by the resistance connected to the gate.
    *   If a voltage divider biasing scheme is used (e.g., $R_{G1}$ and $R_{G2}$), the effective gate resistance is $R_G = R_{G1} || R_{G2}$.
    *   The parasitic gate-source capacitance ($C_{gs}$) will limit the input impedance at higher frequencies, forming a low-pass filter with $R_G$.
    *   **Formula (Mid-band):** $Z_{in} \approx R_{G1} || R_{G2}$

*   **Output Impedance ($Z_{out}$):**
    *   The output impedance of the amplifier *stage itself* is $R_D || r_o$.
    *   However, if a load resistor ($R_L$) is connected to the output, the *total* output impedance presented to the next stage or load is the parallel combination of the amplifier's output impedance and the load resistor.
    *   **Total Output Impedance:** $Z_{out(total)} = (R_D || r_o) || R_L$

**Impact of Bypass Capacitor ($C_S$):**

*   If a source resistor ($R_S$) is used for biasing and a bypass capacitor ($C_S$) is placed in parallel with $R_S$, the source terminal is effectively AC grounded. This significantly increases the voltage gain of the amplifier.
*   The presence of $C_S$ does not directly affect the input impedance as seen at the gate.
*   The bypass capacitor does not affect the output impedance calculation as seen from the drain.

**Example:**

Consider a CS amplifier with voltage divider biasing ($R_{G1} = 100k\Omega$, $R_{G2} = 100k\Omega$), $R_D = 10k\Omega$, $r_o = 20k\Omega$, and a load resistor $R_L = 5k\Omega$.

*   **Input Impedance:** $Z_{in} = R_{G1} || R_{G2} = 100k\Omega || 100k\Omega = 50k\Omega$. (At mid-band)
*   **Output Impedance of the Stage:** $Z_{out(stage)} = R_D || r_o = 10k\Omega || 20k\Omega = 6.67k\Omega$.
*   **Total Output Impedance with Load:** $Z_{out(total)} = Z_{out(stage)} || R_L = 6.67k\Omega || 5k\Omega = \frac{6.67k \times 5k}{6.67k + 5k} \approx 2.86k\Omega$.

**Highlight:** The input impedance is primarily determined by gate resistors, while the output impedance is influenced by the drain resistor, MOSFET's $r_o$, and the external load.

**Textbook References:**

*   **Sedra & Smith:** Chapter 7.3.3 (The Common-Source Amplifier with a Source Resistor) will detail the impact of $R_S$ and $C_S$.
*   **Boylested & Nashelsky:** Chapter 13.10 will cover different biasing methods and their impact on amplifier characteristics.

## 6. Practical Considerations and High-Frequency Response

At high frequencies, parasitic capacitances within the MOSFET and the external circuit start to affect the input and output impedances.

**Key Concepts:**

*   **Parasitic Capacitances:**
    *   $C_{gs}$: Gate-source capacitance.
    *   $C_{gd}$: Gate-drain capacitance (Miller capacitance).
    *   $C_{ds}$: Drain-source capacitance.
    *   $C_{sb}$: Source-body capacitance.
    *   $C_{db}$: Drain-body capacitance.
*   **Miller Effect:** The apparent increase in capacitance at the input due to the capacitance ($C_{gd}$) between the input and output terminals of an inverting amplifier. The effective input capacitance becomes $C_{in(eff)} = C_{gs} + C_{gd}(1+A_v)$, where $A_v$ is the voltage gain.
*   **High-Frequency Cutoff ($f_H$):** The frequency at which the amplifier's gain drops by 3 dB from its mid-band value.

**Impact on Input Impedance:**

*   At high frequencies, the reactance of $C_{gs}$ becomes comparable to $R_G$, causing the input impedance to decrease.
*   The Miller effect due to $C_{gd}$ significantly increases the effective input capacitance. This creates a low-pass filter with the equivalent input resistance, limiting the upper frequency response.
*   $Z_{in(high-freq)} \approx R_G || \frac{1}{j\omega(C_{gs} + C_{gd}(1+A_v))}$

**Impact on Output Impedance:**

*   The parasitic capacitances ($C_{ds}$, $C_{db}$) connected to the output terminal will affect the output impedance at high frequencies.
*   The output impedance will decrease as these capacitances offer low-impedance paths to AC ground.
*   The exact calculation of output impedance at high frequencies becomes more complex and usually involves analyzing the circuit using a more complete small-signal model.

**Example:**

If an amplifier has a voltage gain ($A_v$) of -10 and $C_{gd} = 2pF$, then the effective input capacitance due to the Miller effect is $C_{gd}(1+|A_v|) = 2pF(1+10) = 22pF$. This is in addition to $C_{gs}$.

**Highlight:** The Miller effect is a critical factor in determining the high-frequency input impedance and limiting the bandwidth of CS amplifiers.

**Textbook References:**

*   **Sedra & Smith:** Chapter 7.5 (Frequency Response of the Common-Source Amplifier) provides a comprehensive analysis of the impact of parasitic capacitances on impedance and bandwidth.
*   **Bell:** Chapter 13.13 (MOSFET High-Frequency Models) will discuss parasitic capacitances.
*   **Razavi:** Chapter 6 (Frequency Response) offers detailed explanations of Miller effect and high-frequency analysis.

## 7. Practice Questions and Answers

**Question 1:**

For a CS MOSFET amplifier with a gate resistor $R_G = 1 M\Omega$, what is the approximate mid-band input impedance?

**Answer 1:**
The mid-band input impedance is approximately equal to the gate resistor $R_G$.
$Z_{in(AC)} \approx R_G = 1 M\Omega$.

---

**Question 2:**

A CS amplifier uses a MOSFET with $r_o = 15 k\Omega$ and a drain resistor $R_D = 12 k\Omega$. What is the output impedance of the amplifier stage?

**Answer 2:**
The output impedance is the parallel combination of $R_D$ and $r_o$.
$Z_{out} = R_D || r_o = 12 k\Omega || 15 k\Omega = \frac{12k \times 15k}{12k + 15k} = \frac{180}{27} k\Omega \approx 6.67 k\Omega$.

---

**Question 3:**

A CS amplifier is biased using voltage division with $R_{G1} = 200 k\Omega$ and $R_{G2} = 100 k\Omega$. If the MOSFET has a very high intrinsic gate resistance, what is the DC input impedance of the amplifier?

**Answer 3:**
The DC input impedance is determined by the parallel combination of the gate resistors.
$Z_{in(DC)} = R_{G1} || R_{G2} = 200 k\Omega || 100 k\Omega = \frac{200k \times 100k}{200k + 100k} = \frac{20000}{300} k\Omega \approx 66.67 k\Omega$.

---

**Question 4:**

Consider a CS amplifier with $A_v = -8$, $C_{gs} = 5pF$, and $C_{gd} = 1pF$. If the equivalent input resistance at the gate is $R_{in(gate)} = 50 k\Omega$, what is the approximate effective input capacitance at high frequencies?

**Answer 4:**
The effective input capacitance is $C_{in(eff)} = C_{gs} + C_{gd}(1+|A_v|)$.
$C_{in(eff)} = 5pF + 1pF(1+|-8|) = 5pF + 1pF(9) = 5pF + 9pF = 14pF$.

---

**Question 5:**

For a CS amplifier with $R_D = 8k\Omega$, $r_o = 25k\Omega$, and a load resistor $R_L = 10k\Omega$, calculate the total output impedance seen by the load.

**Answer 5:**
First, calculate the output impedance of the stage:
$Z_{out(stage)} = R_D || r_o = 8k\Omega || 25k\Omega = \frac{8k \times 25k}{8k + 25k} = \frac{200}{33} k\Omega \approx 6.06 k\Omega$.
Then, combine this with the load resistor:
$Z_{out(total)} = Z_{out(stage)} || R_L = 6.06 k\Omega || 10k\Omega = \frac{6.06k \times 10k}{6.06k + 10k} = \frac{60.6}{16.06} k\Omega \approx 3.77 k\Omega$.

---

## 8. Summary and Key Takeaways

*   **Input Impedance ($Z_{in}$):**
    *   Primarily determined by the gate biasing resistors ($R_{G1} || R_{G2}$).
    *   Ideally very high for DC and mid-band frequencies.
    *   At high frequencies, parasitic capacitances ($C_{gs}$ and especially $C_{gd}$ due to Miller effect) significantly reduce the input impedance.
*   **Output Impedance ($Z_{out}$):**
    *   Determined by the parallel combination of the drain resistor ($R_D$) and the MOSFET's intrinsic output resistance ($r_o$).
    *   The presence of an external load resistor ($R_L$) further reduces the total output impedance.
    *   Parasitic capacitances at the output can also affect $Z_{out}$ at high frequencies.
*   **Advantages of CS Configuration:** High input impedance is a key advantage.
*   **Design Implications:** The choice of biasing resistors and drain resistor are crucial for setting the input and output impedances, respectively, and thus for matching to the source and load for maximum power transfer or desired signal integrity.

**Alignment with Course Outcomes:**

*   **CO3 (Design and analyze MOSFET amplifier circuits):** This topic directly supports CO3 by providing the fundamental parameters ($Z_{in}$, $Z_{out}$) necessary for the analysis and design of MOSFET amplifiers. Understanding these impedances allows for proper biasing, gain calculations, and frequency response considerations.

This comprehensive study material should provide a solid foundation for understanding the input and output impedances of the Common Source MOSFET configuration. Remember to refer to the provided textbooks for more detailed derivations and examples.
