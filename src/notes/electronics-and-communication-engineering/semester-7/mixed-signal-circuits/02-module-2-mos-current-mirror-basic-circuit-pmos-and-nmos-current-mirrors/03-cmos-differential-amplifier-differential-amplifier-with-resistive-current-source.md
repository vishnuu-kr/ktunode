---
title: "CMOS Differential Amplifier: Differential Amplifier with resistive, current source and  current mirror loads"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 2: MOS Current Mirror: Basic circuit, PMOS and NMOS current mirrors"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff423"
status: "completed"
scrapedAt: "2026-05-23T18:08:09.016Z"
---
# MIXED SIGNAL CIRCUITS - Module 2: MOS Current Mirror

## Topic: CMOS Differential Amplifier

This module delves into the fundamental building block of many analog integrated circuits: the CMOS Differential Amplifier. We will explore its basic structure and analyze its performance with various load types, including resistive, current source, and current mirror loads. This understanding is crucial for achieving the course outcomes related to single-stage and differential amplifiers (CO1, CO2) and forms the foundation for designing more complex circuits like operational amplifiers (CO3).

---

### 2.1 Introduction to Differential Amplifiers

**Key Concept:** A differential amplifier is an analog circuit that amplifies the *difference* between two input voltages while rejecting any voltage common to both inputs (common-mode voltage). This inherent common-mode rejection is a key advantage over single-ended amplifiers.

**Definition:** A differential amplifier typically consists of two matched transistors (in our case, MOSFETs) biased in their saturation region, with their sources connected. The differential output is usually taken between the drains of these transistors.

**Importance:**
*   **Common-Mode Rejection (CMRR):** Essential for rejecting unwanted noise and interference that appears on both input lines.
*   **Amplification of Differential Signals:** Directly amplifies the desired signal difference.
*   **Foundation for Op-Amps:** The input stage of most operational amplifiers is a differential amplifier.

**Reference:**
*   **Razavi, *Design of Analog CMOS Integrated Circuits*, 2/e, Chapter 5.1: Introduction to Differential Amplifiers** - Provides a foundational overview of differential amplifier operation.
*   **Sedra & Smith, *Microelectronic Circuits*, 6/e, Chapter 7.1: Introduction to Differential Amplifiers** - Offers a historical perspective and basic principles.

---

### 2.2 Basic CMOS Differential Amplifier Structure

**Circuit Diagram:**

```
          VDD
           |
      +----'----'----+
      |             |
     RD            RD
      |             |
   M1 (NMOS)     M2 (NMOS)
  D     G       D     G
  |     |       |     |
  S-----'----'-----S
        |
       Is  (Tail Current)
        |
       GND
```

*   **Input Voltages:** $V_{in1}$ and $V_{in2}$ are applied to the gates of M1 and M2, respectively.
*   **Output Voltages:** $V_{out1}$ and $V_{out2}$ are taken from the drains of M1 and M2.
*   **Tail Current ($I_S$):** The sum of the drain currents of M1 and M2 ($I_{D1} + I_{D2}$). This current is typically set by a current source.
*   **Load Resistors ($R_D$):** Resistive loads are connected from the drains to $V_{DD}$.

**Operation:**
1.  **Differential Mode:** If $V_{in1} = V_{in} + V_{id}/2$ and $V_{in2} = -V_{in} - V_{id}/2$, where $V_{id} = V_{in1} - V_{in2}$ is the differential input voltage and $V_{in}$ is the common-mode voltage.
    *   When $V_{id}$ increases, one transistor conducts more current, and the other conducts less.
    *   The differential output voltage is $V_{out1} - V_{out2} = I_{D1}R_D - I_{D2}R_D = (I_{D1} - I_{D2})R_D$.
2.  **Common Mode:** If $V_{in1} = V_{in2} = V_{cm}$, then ideally $I_{D1} = I_{D2} = I_S/2$. The output voltages $V_{out1}$ and $V_{out2}$ remain constant, and the differential output is zero.

**Important Considerations for Matched Devices:**
*   For optimal performance (high CMRR, predictable behavior), M1 and M2 must be well-matched. This is achieved through careful layout techniques in IC design (e.g., common-centroid layout).

**Learning Outcome Alignment:**
*   **CO1 (K2):** Explains the basic structure of a differential amplifier with resistive loads.
*   **CO2 (K2):** Explains the fundamental operation of a differential amplifier.

---

### 2.3 Differential Amplifier with Resistive Loads

This is the basic structure introduced above.

**Analysis (Small-Signal):**

Let $g_{m1}$ and $g_{m2}$ be the transconductances of M1 and M2. Assume $M_1$ and $M_2$ are matched and biased such that $I_{D1} = I_{D2} = I_S/2$.

*   **Differential Voltage Gain ($A_d$):**
    *   Consider $v_{in1}$ increasing and $v_{in2}$ decreasing by $v_{id}/2$.
    *   The small-signal equivalent circuit shows that a change in $v_{in1}$ causes a change in $i_{d1}$ and $v_{out1}$, and vice-versa for $v_{in2}$ and $v_{out2}$.
    *   $v_{out1} = -g_{m1}R_D (v_{in1} - v_{in2}/2)$ (considering coupling)
    *   A simpler analysis considering the difference: if $v_{in1} - v_{in2} = v_{id}$ and the tail current changes are $\pm i_s$, then the drain currents change by $\pm i_s$.
    *   $v_{out1} = -i_s R_D$, $v_{out2} = +i_s R_D$.
    *   $v_{out1} - v_{out2} = -2i_s R_D$.
    *   From the tail current source, $2i_s = g_{m1} (v_{in1} - v_{in2}) = g_{m1} v_{id}$.
    *   Therefore, $A_d = \frac{v_{out1} - v_{out2}}{v_{id}} = \frac{-2(g_{m1}v_{id}/2)R_D}{v_{id}} = -g_{m1}R_D$.
    *   **Note:** The negative sign indicates phase inversion. For differential gain, we often consider the magnitude $|A_d| = g_m R_D$.

*   **Common-Mode Voltage Gain ($A_{cm}$):**
    *   Consider $v_{in1} = v_{in2} = v_{cm}$. Ideally, $i_{d1} = i_{d2} = 0$, so $v_{out1} = v_{out2} = 0$.
    *   However, the tail current source is not ideal. Let the tail source be modeled by a large resistance $R_{EE}$ (or $R_{tail}$).
    *   If $v_{in1} = v_{in2} = v_{cm}$, both transistors conduct $I_S/2$.
    *   A common-mode input voltage $v_{cm}$ causes a change in the tail voltage and thus a change in the drain currents.
    *   $i_{d1} \approx i_{d2} \approx \frac{g_m v_{cm}}{1 + g_m R_{tail}}$ if we consider the effect of $R_{tail}$ on the source node.
    *   $v_{out1} = -i_{d1} R_D$.
    *   $A_{cm} = \frac{v_{out1} - v_{out2}}{v_{cm}} \approx \frac{-i_{d1}R_D - (-i_{d2}R_D)}{v_{cm}}$. If $i_{d1}=i_{d2}$, $A_{cm}=0$.
    *   With a resistive tail load $R_T$: $A_{cm} = \frac{-g_m R_D}{1 + g_m R_T}$. For NMOS diff amp with resistive load and tail resistance $R_T$, $A_{cm} \approx -R_D/R_T$.
    *   For PMOS diff amp with resistive load and tail resistance $R_T$, $A_{cm} \approx R_D/R_T$.

*   **Common-Mode Rejection Ratio (CMRR):**
    *   $CMRR = |\frac{A_d}{A_{cm}}|$
    *   With resistive loads and an ideal current source ($R_T \rightarrow \infty$), $A_{cm} \rightarrow 0$, so $CMRR \rightarrow \infty$.
    *   With a finite tail resistance $R_T$, $CMRR = |\frac{-g_m R_D}{-g_m R_D / (1+g_m R_T)}| = 1 + g_m R_T$.
    *   **Important Point:** A high $R_T$ is crucial for high CMRR. This motivates the use of active loads (current sources).

*   **Input Resistance ($R_{in}$):**
    *   For differential mode: $R_{in,d} = 2(r_{o1} || \frac{1}{g_{m1}}) \approx 2/g_{m1}$ (assuming $r_o$ is large).
    *   For common mode: $R_{in,cm} = 2(r_{o1} || (1/g_{m1} || R_T))$. If $R_T$ is large, $R_{in,cm} \approx 2(r_{o1} + 1/g_{m1})$.

*   **Output Resistance ($R_{out}$):**
    *   Single-ended output: $R_{out} = R_D || r_{o1}$.
    *   Differential output: $R_{out,d} = 2(R_D || r_{o1})$.

**Advantages:**
*   Simple to implement.
*   Reasonable input resistance.

**Disadvantages:**
*   Low output swing limited by $V_{DS,sat}$.
*   Poor CMRR if the tail current source is not ideal (i.e., has low output impedance).
*   $R_D$ values can be large, limiting speed and requiring significant silicon area.

**Example:** Design a differential amplifier with $V_{DD}=3.3V$, $I_S = 1mA$, and desired differential gain $|A_d| = 20 V/V$. Assume $V_{OV} = 0.2V$ for NMOS devices and the tail current source has $R_T = 100 k\Omega$.

1.  Calculate $g_m$: $|A_d| = g_m R_D \implies 20 = g_m R_D$.
2.  Find bias current: $I_{D1} = I_{D2} = I_S/2 = 0.5mA$.
3.  Calculate $g_m$: Assume $W/L$ is such that $g_m = 2I_D / V_{OV} = 2(0.5mA) / 0.2V = 5 mS$.
4.  Calculate $R_D$: $R_D = |A_d| / g_m = 20V/V / 5mS = 4k\Omega$.
5.  Calculate CMRR: $CMRR = 1 + g_m R_T = 1 + (5mS)(100k\Omega) = 1 + 500 = 501$.
6.  Check $V_{out}$ swing: $V_{out,high} = V_{DD} - I_{D1}R_D = 3.3V - (0.5mA)(4k\Omega) = 3.3V - 2V = 1.3V$. $V_{out,low} = V_{DS,sat} \approx 0.2V$. Output swing $\approx 1.1V$.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Explains the analysis of a differential amplifier with resistive loads (gain, CMRR, output resistance).
*   **CO2 (K2):** Reinforces understanding of differential amplifier operation.

---

### 2.4 Differential Amplifier with Current Source Loads

**Motivation:** To improve the performance (higher gain, better CMRR, larger output swing) compared to resistive loads.

**Circuit Diagram:**

```
          VDD
           |
      +----'----'----+
      |             |
     M3 (PMOS)   M4 (PMOS)
  D     G       D     G
  |     |       |     |
  S-----'----'-----S
        |             |
   M1 (NMOS)     M2 (NMOS)
  D     G       D     G
  |     |       |     |
  S-----'----'-----S
        |
       Is  (Tail Current)
        |
       GND
```

*   **Load Devices (M3, M4):** Act as current sources. Their drain current is ideally constant, independent of the input voltages. In this NMOS input pair configuration, PMOS transistors are used as loads.
*   **Tail Current Source ($I_S$):** Still sets the total current flowing from $V_{DD}$ to $GND$. Often implemented with another current mirror.

**Operation (Small-Signal Analysis):**

Assume M1 and M2 are matched with transconductance $g_{m1}$, output resistance $r_{o1}$.
Assume M3 and M4 are matched with transconductance $g_{m3}$ and output resistance $r_{o3}$.
Assume $I_{D1} = I_{D2} = I_S/2$.
Assume M3 and M4 are biased to conduct $I_{D3} = I_{D4} = I_S/2$. This is a common design choice for maximizing output swing and gain.

*   **Differential Voltage Gain ($A_d$):**
    *   The output signal at $V_{out1}$ (drain of M1) is the voltage developed across the output impedance of M3 (load) due to the signal current from M1.
    *   $v_{out1} = -i_{d1} (r_{o1} || r_{o3})$.
    *   $i_{d1}$ is the signal current from M1, which is related to the differential input: $i_{d1} = g_{m1} (v_{in1} - v_{in2})/2 = g_{m1} v_{id}/2$.
    *   $A_d = \frac{v_{out1} - v_{out2}}{v_{id}} = \frac{-i_{d1}(r_{o1}||r_{o3}) - (-i_{d2}(r_{o1}||r_{o3}))}{v_{id}}$
    *   Since $i_{d1} = -i_{d2}$ in differential mode (if M1 and M2 are perfectly matched), $v_{out2} = -v_{out1}$.
    *   $A_d = \frac{2 v_{out1}}{v_{id}} = \frac{2 (-i_{d1} (r_{o1}||r_{o3}))}{v_{id}} = \frac{2 (-g_{m1} v_{id}/2 (r_{o1}||r_{o3}))}{v_{id}} = -g_{m1} (r_{o1}||r_{o3})$.
    *   If $r_{o1} \gg r_{o3}$ (common in good current sources), $A_d \approx -g_{m1} r_{o3}$.
    *   **Important Point:** The gain is now proportional to the output resistance of the load device, which can be made much larger than a passive resistor.

*   **Common-Mode Voltage Gain ($A_{cm}$):**
    *   Consider $v_{in1} = v_{in2} = v_{cm}$. This causes $i_{d1} = i_{d2}$.
    *   The tail current source has a finite output impedance, say $R_{tail}$.
    *   $i_{d1} \approx i_{d2} \approx \frac{g_{m1} v_{cm}}{1 + g_{m1} R_{tail}}$.
    *   This signal current flows into the load, affecting $V_{out1}$ and $V_{out2}$.
    *   The signal current from M1 flows through M3's output impedance $r_{o3}$. The signal current from M2 flows through M4's output impedance $r_{o3}$.
    *   $v_{out1} = -i_{d1}(r_{o1} || r_{o3})$.
    *   $A_{cm} = \frac{v_{out1} - v_{out2}}{v_{cm}} = \frac{-i_{d1}(r_{o1} || r_{o3}) - (-i_{d2}(r_{o1} || r_{o3}))}{v_{cm}}$
    *   Since $i_{d1} \approx i_{d2}$, $A_{cm} \approx 0$ ideally.
    *   With a non-ideal tail current source ($R_{tail}$) and non-ideal load devices ($r_{o3}$): $A_{cm} \approx \frac{-g_{m1} R_{tail} || r_{o1} || r_{o3}}{R_{tail}}$.
    *   A more detailed analysis considering the tail node: $A_{cm} = \frac{-g_{m1} (r_{o1} || r_{o3})}{1 + g_{m1} R_{tail}}$. (This is simplified, the interaction of load impedance needs careful consideration).
    *   A simpler expression for the common-mode gain using the tail resistance $R_T$: $A_{cm} \approx \frac{-g_m (R_D || r_o)}{1+g_m R_T}$ (where $R_D$ is replaced by the load impedance $Z_L$). For current sources, $Z_L = r_o$. So $A_{cm} \approx \frac{-g_m (r_o || r_o)}{1+g_m R_T} = \frac{-g_m r_o/2}{1+g_m R_T}$.
    *   For PMOS loads M3, M4 acting as current sources, $A_{cm} = \frac{g_{m1}(r_{o1}||r_{o3})}{1+g_{m1}R_{tail}}$ (for NMOS input pair). The sign depends on whether we look at $v_{out1}$ or $v_{out2}$ and the current direction convention. The key is that the magnitude is small if $R_{tail}$ is large.

*   **CMRR:**
    *   $CMRR = |\frac{A_d}{A_{cm}}| = |\frac{-g_{m1} (r_{o1}||r_{o3})}{A_{cm}}|$
    *   If the tail current source is ideal ($R_{tail} \rightarrow \infty$), $A_{cm} \rightarrow 0$, leading to very high CMRR.
    *   A common-mode current is injected into the loads. The output is taken from the drain of M1, which is connected to the source of M3. Any common-mode current from M1 will develop a voltage across $r_{o1}$ and $r_{o3}$.
    *   $A_{cm} = \frac{v_{out1}}{v_{cm}}$ where $v_{in1}=v_{in2}=v_{cm}$. The current flowing from M1's drain is $i_{d1}$. This current flows into $r_{o1}$. The output voltage is $v_{out1} = -i_{d1} r_{o1}$.
    *   $i_{d1} \approx g_{m1} v_{cm}/(1+g_{m1} R_{tail})$.
    *   $v_{out1} \approx \frac{-g_{m1} v_{cm}}{1+g_{m1} R_{tail}} r_{o1}$.
    *   $A_{cm} \approx \frac{-g_{m1} r_{o1}}{1+g_{m1} R_{tail}}$.
    *   $CMRR = |\frac{-g_{m1}(r_{o1}||r_{o3})}{A_{cm}}| = |\frac{-g_{m1}(r_{o1}||r_{o3})}{-g_{m1} r_{o1}/(1+g_{m1} R_{tail})}| = \frac{r_{o1}||r_{o3}}{r_{o1}/(1+g_{m1} R_{tail})} \approx \frac{r_{o1}||r_{o3}}{r_{o1}/(g_{m1} R_{tail})} = \frac{(r_{o1}r_{o3}/(r_{o1}+r_{o3})) g_{m1} R_{tail}}{r_{o1}} = \frac{r_{o3}}{r_{o1}+r_{o3}} g_{m1} R_{tail}$.
    *   If $r_{o1} \gg r_{o3}$, then $CMRR \approx g_{m1}R_{tail}$. This is significantly lower than the ideal resistive load case but depends on $g_m$ and $R_{tail}$.
    *   **Better CMRR is achieved by making $R_{tail}$ large.**

*   **Output Swing:**
    *   Maximum $V_{out}$: Limited by the load device M3 (PMOS) turning off. $V_{out,max} = V_{DD} - V_{SG3,min} - V_{OV3}$ or $V_{DD} - V_{GS3,sat}$. For M3 to remain in saturation, $V_{DS3} \ge V_{OV3}$. So $V_{out,max} \approx V_{DD} - V_{OV3}$. The output voltage cannot go below the threshold voltage needed to keep M3 in saturation.
    *   Minimum $V_{out}$: Limited by the input device M1 (NMOS) turning off. $V_{out,min} = V_{DS1,sat} = V_{OV1}$. The output voltage cannot go below $V_{OV1}$ to keep M1 in saturation.
    *   Output Swing $\approx (V_{DD} - V_{OV3}) - V_{OV1}$. This is generally larger than resistive loads.

*   **Output Resistance:**
    *   Single-ended output: $R_{out} = r_{o1} || r_{o3}$. This is typically much higher than $R_D$.

**Advantages:**
*   Higher differential gain ($g_m r_o$).
*   Improved output swing.
*   Better common-mode rejection (when the tail current is a good current source).

**Disadvantages:**
*   Requires active components (current sources) for loads, which consume static power and can be complex to design.
*   Gain is dependent on the output resistance of the load devices, which are often $pMOS$ transistors.

**Example:** A differential amplifier uses NMOS transistors M1, M2 as the input pair and PMOS transistors M3, M4 as active loads. $I_S = 0.5mA$. M1, M2 have $g_m = 8mS$, $r_o = 200k\Omega$. M3, M4 have $g_m = 6mS$, $r_o = 150k\Omega$. Tail current source has $R_{tail} = 200k\Omega$.

1.  Calculate $A_d$: $A_d = -g_{m1}(r_{o1}||r_{o3}) = -8mS (200k\Omega || 150k\Omega) = -8mS \frac{200k \times 150k}{200k + 150k} = -8mS \frac{30 \times 10^9}{350k} = -8mS \times 85.7k\Omega \approx -685.6 V/V$.
2.  Calculate $A_{cm}$: $A_{cm} \approx \frac{-g_{m1} r_{o1}}{1+g_{m1} R_{tail}} = \frac{-8mS \times 200k\Omega}{1+8mS \times 200k\Omega} = \frac{-1600}{1+1600} \approx -1 V/V$.
3.  Calculate CMRR: $CMRR = |\frac{A_d}{A_{cm}}| = |\frac{-685.6}{-1}| = 685.6$. (Note: This approximation for $A_{cm}$ can be sensitive to the tail current source model). A better approximation for $A_{cm}$ in this configuration leads to $A_{cm} \approx - \frac{g_{m1}r_{o1}}{1+g_{m1}R_{tail}}$. And $A_d = -g_{m1}(r_{o1}||r_{o3})$. Then $CMRR = \frac{g_{m1}(r_{o1}||r_{o3})}{g_{m1}r_{o1}/(1+g_{m1}R_{tail})} = (1+g_{m1}R_{tail})\frac{r_{o1}||r_{o3}}{r_{o1}}$.
    $CMRR = (1+1600) \frac{200k||150k}{200k} = 1601 \frac{85.7k}{200k} \approx 1601 \times 0.4285 \approx 685.6$.

**Reference:**
*   **Razavi, *Design of Analog CMOS Integrated Circuits*, 2/e, Chapter 5.2: Basic Differential Pair with Current Source Loads** - Detailed analysis and design considerations.
*   **Baker et al., *CMOS: Circuits Design, Layout and Simulation*, Chapter 5.3: Differential Amplifiers** - Covers differential amplifiers with various loads.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Explains the analysis of a differential amplifier with current source loads (gain, CMRR, output swing).
*   **CO2 (K2):** Illustrates a practical implementation of a differential amplifier using active loads.

---

### 2.5 Differential Amplifier with Current Mirror Loads

**Motivation:** Current mirror loads offer even higher gain and potentially better CMRR than simple current source loads. They leverage the properties of current mirrors to achieve higher output impedance.

**Circuit Diagram:**

```
          VDD
           |
      +----'----'----+
      |             |
     M3 (PMOS)   M4 (PMOS)
  D     G       D     G
  |     |       |     |
  S-----'----'-----S
  |             |
  |             |
 M5 (PMOS)     M6 (PMOS)  (Current Mirror Load)
  G=G3          G=G4
  D=S3          D=S4
  S             S
  |             |
  R = Mref      R = Mref
  G=Ref         G=Ref
  D=Ref         D=Ref
  S             S
  |             |
 VDD           VDD
```

*   **Current Mirror Load:** M3 and M4 are the output transistors of a current mirror, where M5 and M6 are the reference transistors. The gates of M3 and M4 are connected to the gates of M5 and M6 respectively, thus replicating the current from M5/M6 into M3/M4.
*   **Bias Current:** The bias current for the mirror (e.g., $I_{ref}$ for M5) is set by the reference current source.
*   **Differential Pair:** M1 and M2 form the input differential pair, similar to the previous configurations. The tail current $I_S$ is set by a tail current source.

**Operation (Small-Signal Analysis):**

*   Assume M1, M2 are matched with $g_{m1}$, $r_{o1}$.
*   Assume M3, M4 are matched with $g_{m3}$, $r_{o3}$.
*   Assume M5, M6 (reference transistors) are matched with $g_{m5}$, $r_{o5}$.
*   The output impedance of the current mirror load (at the drain of M3/M4) is approximately $R_{out\_load} = r_{o3} || r_{o5}$. Since $r_{o5}$ is typically designed to be much larger than $r_{o3}$ (using cascoding or longer channel lengths), the effective output impedance is dominated by $r_{o3}$. However, if the mirror transistors M3/M4 have a wider output swing, they might be biased at lower $V_{DS}$, reducing their $r_o$.

*   **Differential Voltage Gain ($A_d$):**
    *   $A_d = -g_{m1} (r_{o1} || R_{out\_load})$
    *   $A_d = -g_{m1} (r_{o1} || (r_{o3} || r_{o5}))$.
    *   If $r_{o3}$ and $r_{o5}$ are made large (e.g., by cascoding the mirror), the gain can be significantly increased compared to simple current sources.
    *   Using cascode current mirrors as loads would yield $R_{out\_load} \approx r_{o3} \cdot g_{m5} r_{o5}$. This leads to extremely high gain.

*   **Common-Mode Voltage Gain ($A_{cm}$):**
    *   Similar to the current source load, $A_{cm}$ is ideally small and depends on the tail current source's output impedance.
    *   The analysis is similar, but the load impedance is now the output impedance of the current mirror.

*   **CMRR:**
    *   $CMRR = |\frac{A_d}{A_{cm}}|$. The CMRR is improved if the output impedance of the current mirror is higher and the tail current source has a high output impedance.

*   **Output Swing:**
    *   Limited by the saturation voltages of the input pair (M1, M2) and the load current mirror transistors (M3, M4).
    *   $V_{out,min} = V_{OV1}$
    *   $V_{out,max} = V_{DD} - V_{SG3,min} - V_{OV3}$ or $V_{DD} - V_{GS3,sat}$ for the PMOS load. The precise value depends on the biasing of the current mirror. If the current mirror is a simple one, $V_{out,max} \approx V_{DD} - V_{OV3}$. If cascoded, the swing is reduced.

**Advantages:**
*   Potentially very high differential gain due to high output impedance of current mirror loads.
*   Good CMRR.

**Disadvantages:**
*   More complex circuit.
*   Output swing might be further reduced, especially with cascoded current mirror loads.
*   Bias current must be carefully set for the mirror.

**Reference:**
*   **Razavi, *Design of Analog CMOS Integrated Circuits*, 2/e, Chapter 5.4: Differential Amplifiers with Current Mirror Loads** - Discusses the benefits and analysis of using current mirrors as loads.
*   **Allen & Holbery, *CMOS Analog Circuit Design*, 3/e, Chapter 4.3: Differential Amplifiers** - Provides insights into various load types for differential amplifiers.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Explains the analysis of a differential amplifier with current mirror loads (gain).
*   **CO2 (K2):** Illustrates a more advanced differential amplifier configuration leveraging current mirrors.

---

### 2.6 Common Source Amplifier vs. Differential Amplifier

| Feature            | Common Source Amplifier (with resistive load) | Differential Amplifier (with resistive load) | Differential Amplifier (with current source/mirror loads) |
| :----------------- | :-------------------------------------------- | :------------------------------------------- | :----------------------------------------------------- |
| **Inputs**         | Single-ended                                  | Differential                                 | Differential                                           |
| **Gain**           | $g_m R_D$                                     | $g_m R_D$ (differential)                     | $g_m(R_o || R_{load})$ (differential)                 |
| **CMRR**           | N/A                                           | Low (depends on tail impedance)              | High (depends on tail and load impedance)              |
| **Output Swing**   | Moderate                                      | Moderate                                     | Better than resistive load, depends on load type       |
| **Output Resistance** | $R_D || r_o$                                  | $R_D || r_o$ (single-ended)                  | $R_o || R_{load}$ (single-ended)                       |
| **Noise**          | Higher                                        | Lower common-mode noise                        | Lower common-mode noise                                |
| **Power Cons.**    | Lower (single device active)                  | Moderate (2 diff pair + tail)                | Higher (more active components)                        |
| **Complexity**     | Simple                                        | Moderate                                     | Higher                                                 |

**Key Takeaway:** Differential amplifiers are preferred for their CMRR and are the basis for higher-performance circuits like op-amps. The choice of load directly impacts the gain, output swing, and CMRR.

**Learning Outcome Alignment:**
*   **CO1 (K2):** Contrasts differential amplifiers with single-ended amplifiers like the common source.
*   **CO2 (K2):** Reinforces the advantages of differential amplifier architectures.

---

### 2.7 CMOS Differential Amplifier Biasing

**Tail Current Source:**
*   Crucial for setting the total tail current $I_S$ and providing a high output impedance ($R_{tail}$) for good CMRR.
*   Typically implemented using a current mirror fed by a reference voltage.
*   **Example:** A simple NMOS current source biased by a diode-connected PMOS transistor, or a cascode current source for higher $R_{tail}$.

**Load Biasing:**
*   **Resistive Loads:** $R_D$ is a passive component.
*   **Current Source Loads:** The PMOS transistors (M3, M4) must be biased in saturation. Their gate voltages are controlled by a bias voltage derived from a reference current. The current through M3/M4 should ideally match the current through M1/M2 ($I_S/2$).
*   **Current Mirror Loads:** The bias current for the mirror ($I_{ref}$) must be set to a value that allows M3 and M4 to operate in saturation and to provide the required current to the differential pair.

**Bias Generation:**
*   Bias voltages are typically generated using a bandgap reference or a simple voltage divider, then fed into current mirrors to create stable bias currents.

**Important Point:** Proper biasing ensures all transistors operate in the saturation region, which is essential for amplification.

**Reference:**
*   **Razavi, *Fundamentals of Microelectronics*, Chapter 5.3: Biasing** - Covers biasing techniques for MOSFETs.
*   **Baker et al., *CMOS: Circuits Design, Layout and Simulation*, Chapter 5.2: Biasing** - Discusses practical biasing techniques for analog ICs.

**Learning Outcome Alignment:**
*   **CO2 (K2):** Understanding the importance of proper biasing for differential amplifiers.

---

### 2.8 CMOS Differential Amplifiers in Practice (NMOS and PMOS input pairs)

The analysis so far has primarily focused on NMOS input pairs with PMOS loads. However, the input pair can also be PMOS, with NMOS loads.

*   **NMOS Input Pair (M1, M2 NMOS):**
    *   Input voltages are applied to the gates of NMOS transistors.
    *   Typically driven by positive voltage signals.
    *   Loads are usually PMOS transistors (current sources or mirrors).
    *   $V_{out}$ swings between $V_{OV1}$ and $V_{DD} - V_{OV3}$.

*   **PMOS Input Pair (M1, M2 PMOS):**
    *   Input voltages are applied to the gates of PMOS transistors.
    *   Typically driven by negative voltage signals (or by inverting positive signals).
    *   Loads are usually NMOS transistors (current sources or mirrors).
    *   $V_{out}$ swings between $V_{SS} + V_{OV1}$ and $V_{DD} - V_{OV3}$. (Assuming $V_{SS}$ is the negative supply, typically GND).
    *   **Advantages:** Can sometimes offer higher speed due to higher hole mobility compared to electron mobility, but this is technology dependent.

**Example of a PMOS Input Pair Differential Amplifier:**

```
          VDD
           |
      +----'----'----+
      |             |
     M5 (NMOS)   M6 (NMOS)  (Current Mirror Load)
  D     G       D     G
  |     |       |     |
  S-----'----'-----S
        |             |
   M1 (PMOS)     M2 (PMOS)
  D     G       D     G
  |     |       |     |
  S-----'----'-----S
        |
       Is (Tail Current - PMOS current source)
        |
       GND (or VSS)
```

**Learning Outcome Alignment:**
*   **CO1 (K2):** Explains the operation of differential amplifiers with different transistor types (NMOS/PMOS input pairs).
*   **CO2 (K2):** Differentiates between NMOS and PMOS input differential amplifier configurations.

---

### 2.9 Key Takeaways and Important Points to Remember

*   **Differential amplifiers are fundamental:** They are the building blocks of op-amps and provide excellent common-mode rejection.
*   **Load type is critical:**
    *   **Resistive loads:** Simple, but limited gain and swing. CMRR depends heavily on tail impedance.
    *   **Current source loads:** Higher gain and swing, good CMRR if tail source is good.
    *   **Current mirror loads:** Highest potential gain, but complexity and swing trade-offs.
*   **CMRR depends on:**
    *   Tail current source output impedance ($R_{tail}$).
    *   Output impedance of the load devices ($R_{load}$).
*   **Gain depends on:**
    *   Input pair transconductance ($g_m$).
    *   Output impedance of the input pair ($r_o$).
    *   Output impedance of the load ($R_{load}$).
*   **Matching is crucial:** For high CMRR and predictable behavior, the input pair transistors must be well-matched.
*   **Biasing:** Proper biasing is essential for all transistors to remain in saturation.
*   **NMOS vs. PMOS Input:** Either can be used, with complementary load devices. Performance can differ due to mobility variations.

---

### 2.10 Practice Questions and Answers

**Question 1:** What is the primary advantage of a differential amplifier over a single-ended amplifier?
**Answer:** The primary advantage is its ability to reject common-mode signals (noise) while amplifying differential signals, quantified by its Common-Mode Rejection Ratio (CMRR).

**Question 2:** For a CMOS differential amplifier with resistive loads, how can the differential voltage gain be increased?
**Answer:**
1.  Increase the transconductance ($g_m$) of the input pair transistors (e.g., by increasing $W/L$ ratio or bias current).
2.  Increase the load resistance ($R_D$).

**Question 3:** If a CMOS differential amplifier with current source loads has a low CMRR, what could be the primary cause?
**Answer:** A low CMRR is typically caused by a low output impedance of the tail current source. The output impedance of the load devices also plays a role, but the tail source impedance is often the dominant factor limiting CMRR in these configurations.

**Question 4:** Compare the output voltage swing of a differential amplifier with resistive loads versus current source loads.
**Answer:** Differential amplifiers with current source loads generally offer a larger output voltage swing.
*   **Resistive Load:** $V_{out,min} \approx V_{OV}$, $V_{out,max} \approx V_{DD} - I_{bias}R_D$. Swing is limited by voltage drop across $R_D$.
*   **Current Source Load:** $V_{out

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
