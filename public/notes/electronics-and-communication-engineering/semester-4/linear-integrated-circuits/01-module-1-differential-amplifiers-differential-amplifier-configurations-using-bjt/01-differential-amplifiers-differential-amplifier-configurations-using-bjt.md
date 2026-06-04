---
title: "Differential Amplifiers:  Differential amplifier configurations using BJT"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe561"
status: "completed"
scrapedAt: "2026-05-23T17:49:35.966Z"
---
# LINEAR INTEGRATED CIRCUITS - Module 1: Differential Amplifiers

## Topic: Differential Amplifier Configurations using BJT

**Course Outcomes Addressed:**
*   **CO1 (K2):** Summarize the concepts of operational amplifiers and differential amplifier configurations.
*   **CO2 (K3):** Design operational amplifier circuits for various applications. (While this module focuses on the differential amplifier building block, understanding its operation is crucial for designing op-amps).

**Learning Outcomes:**
*   Understand the basic structure and operation of a differential amplifier.
*   Analyze different configurations of BJT differential amplifiers.
*   Identify the key parameters and performance characteristics of a differential amplifier.

---

### 1. Introduction to Differential Amplifiers

A **differential amplifier** is a fundamental building block in linear integrated circuits, particularly in operational amplifiers (op-amps). Its primary function is to amplify the difference between two input voltages.

**Key Concepts:**

*   **Differential Input Voltage ($v_{id}$):** The algebraic difference between the two input voltages.
    $v_{id} = v_{1} - v_{2}$
    where $v_1$ and $v_2$ are the two input voltages.

*   **Common-Mode Input Voltage ($v_{cm}$):** The average of the two input voltages.
    $v_{cm} = \frac{v_{1} + v_{2}}{2}$

*   **Differential Gain ($A_d$):** The ratio of the output differential voltage to the input differential voltage.
    $A_d = \frac{v_{od}}{v_{id}}$

*   **Common-Mode Gain ($A_{cm}$):** The ratio of the output common-mode voltage to the input common-mode voltage.
    $A_{cm} = \frac{v_{ocm}}{v_{cm}}$

*   **Common-Mode Rejection Ratio (CMRR):** A measure of how well the amplifier rejects unwanted common-mode signals. It is the ratio of differential gain to common-mode gain, usually expressed in decibels (dB).
    $CMRR = |\frac{A_d}{A_{cm}}|$
    $CMRR (dB) = 20 \log_{10} |\frac{A_d}{A_{cm}}|$

    A high CMRR is desirable, indicating that the amplifier amplifies the difference signal much more than the common-mode signal.

**Importance:**
*   Differential amplifiers are the input stage of almost all op-amps.
*   They are used in instrumentation amplifiers, subtractors, and other precision analog circuits.
*   Their ability to reject common-mode noise makes them robust in noisy environments.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 4: Differential Amplifier.
*   Sedra A. S. and K. C. Smith, "Microelectronic Circuits," Chapter 7: Differential Amplifiers.

---

### 2. Basic BJT Differential Amplifier Configuration

The simplest differential amplifier configuration uses two matched bipolar junction transistors (BJTs) connected in a symmetric manner.

**Circuit Diagram:**
*(Imagine a circuit diagram here with two NPN transistors, Q1 and Q2. Their emitters are connected together and to a common emitter resistor $R_E$. The collectors are connected to individual collector resistors $R_C$ and then to the positive supply voltage ($V_{CC}$). The inputs $v_1$ and $v_2$ are applied to the bases of Q1 and Q2 respectively. The output can be taken differentially between the collectors ($v_{od} = v_{c2} - v_{c1}$) or from a single collector.)*

**Components:**
*   Two matched BJTs (Q1, Q2)
*   Two collector resistors ($R_{C1}$, $R_{C2}$)
*   One emitter resistor ($R_E$)
*   Power supply ($V_{CC}$)
*   Input signals ($v_1$, $v_2$)

**Operation:**

*   **When $v_1 > v_2$:**
    *   The differential input voltage $v_{id} = v_1 - v_2$ is positive.
    *   Transistor Q1 conducts more heavily, drawing more current.
    *   Transistor Q2 conducts less heavily, drawing less current.
    *   The output voltage at collector 1 ($v_{c1}$) decreases (becomes more negative).
    *   The output voltage at collector 2 ($v_{c2}$) increases (becomes more positive).
    *   The differential output $v_{od} = v_{c2} - v_{c1}$ will be positive.

*   **When $v_2 > v_1$:**
    *   The differential input voltage $v_{id} = v_1 - v_2$ is negative.
    *   Transistor Q2 conducts more heavily, drawing more current.
    *   Transistor Q1 conducts less heavily, drawing less current.
    *   The output voltage at collector 2 ($v_{c2}$) decreases.
    *   The output voltage at collector 1 ($v_{c1}$) increases.
    *   The differential output $v_{od} = v_{c2} - v_{c1}$ will be negative.

*   **When $v_1 = v_2$ (Common-Mode Input):**
    *   If Q1 and Q2 are perfectly matched and $R_{C1} = R_{C2}$, then the currents $I_{C1}$ and $I_{C2}$ will be equal.
    *   The voltage drop across $R_{C1}$ and $R_{C2}$ will be the same.
    *   The output voltages $v_{c1}$ and $v_{c2}$ will be equal, resulting in $v_{od} = v_{c2} - v_{c1} = 0$.
    *   This demonstrates the common-mode rejection capability.

**Analysis (Small-Signal Analysis):**

To derive the gain, we can use small-signal analysis. Assuming matched transistors ($R_{C1} = R_{C2} = R_C$) and a simplified model where $r_o$ (output resistance of BJT) is infinite for now.

*   **Differential Gain ($A_d$):**
    When analyzing for differential gain, we apply $v_1 = v_{id}/2$ and $v_2 = -v_{id}/2$. This implies that the emitter current is split equally, with half going through Q1 and half through Q2. Effectively, the emitter node acts as a virtual ground for AC signals in the differential mode.
    $A_d = \frac{v_{od}}{v_{id}} = \frac{(v_{c2} - v_{c1})}{v_{id}}$
    $v_{c1} = V_{CC} - I_{C1}R_C$
    $v_{c2} = V_{CC} - I_{C2}R_C$
    $v_{od} = (V_{CC} - I_{C2}R_C) - (V_{CC} - I_{C1}R_C) = (I_{C1} - I_{C2})R_C$
    For differential input, $I_{C1} = I_E/2 + i_e$ and $I_{C2} = I_E/2 - i_e$, where $I_E$ is the quiescent emitter current and $i_e$ is the AC emitter current component.
    The input differential voltage $v_{id} = v_{be1} - v_{be2}$.
    Using $v_{be} = i_b r_{\pi}$, we get $v_{id} = (i_{b1} - i_{b2})r_{\pi}$.
    Since $i_c = \beta i_b$, we have $i_{b1} = i_{c1}/\beta$ and $i_{b2} = i_{c2}/\beta$.
    $v_{id} = \frac{(i_{c1} - i_{c2})}{\beta} r_{\pi} = \frac{(i_{c1} - i_{c2})}{\beta} (\beta r_e) = (i_{c1} - i_{c2}) r_e$, where $r_e = V_T/I_E$ (AC emitter resistance).
    The differential output current is $i_{od} = i_{c2} - i_{c1}$.
    So, $v_{id} = -(i_{od}) r_e$.
    The differential output voltage is $v_{od} = i_{od} R_C$.
    Therefore, $A_d = \frac{v_{od}}{v_{id}} = \frac{i_{od} R_C}{-(i_{od}) r_e} = -\frac{R_C}{r_e}$.
    The negative sign indicates a phase inversion for the differential output relative to the input difference. If we take output as $v_{c1}-v_{c2}$, the gain is $+R_C/r_e$.
    The magnitude of differential gain is $|A_d| = \frac{R_C}{r_e}$.

*   **Common-Mode Gain ($A_{cm}$):**
    When analyzing for common-mode gain, we apply $v_1 = v_2 = v_{cm}$.
    Both transistors experience the same emitter voltage $v_E = v_{cm} - v_{be}$.
    The emitter current $I_E = 2I_C$.
    $v_{cm} = v_{be} + I_E R_E = v_{be} + 2I_C R_E$.
    Using small-signal model: $v_{cm} = v_{be} + i_e R_E$.
    Since $v_{be} = i_b r_{\pi}$, and $i_e = (\beta+1)i_b = (\beta+1)v_{be}/r_{\pi} = v_{be}/r_e$.
    $v_{cm} = v_{be} + \frac{v_{be}}{r_e} R_E = v_{be} (1 + \frac{R_E}{r_e})$.
    $v_{be} = \frac{v_{cm}}{1 + R_E/r_e}$.
    The common-mode output voltage is $v_{ocm} = v_{c1} = v_{c2}$ (assuming matched components).
    $v_{ocm} = V_{CC} - i_{c}R_C = V_{CC} - (\beta i_b)R_C$.
    $v_{ocm} = V_{CC} - \beta (\frac{v_{be}}{r_{\pi}}) R_C = V_{CC} - \frac{v_{be}}{r_e} R_C$.
    $v_{ocm} = V_{CC} - \frac{R_C}{r_e} \frac{v_{cm}}{1 + R_E/r_e}$.
    The common-mode gain $A_{cm} = \frac{v_{ocm}}{v_{cm}} = -\frac{R_C}{r_e (1 + R_E/r_e)}$.
    This can be simplified to $A_{cm} = -\frac{R_C}{r_e + R_E}$.
    The magnitude of common-mode gain is $|A_{cm}| = \frac{R_C}{r_e + R_E}$.

*   **CMRR Calculation:**
    $CMRR = |\frac{A_d}{A_{cm}}| = |\frac{-R_C/r_e}{-R_C/(r_e + R_E)}| = \frac{r_e + R_E}{r_e} = 1 + \frac{R_E}{r_e}$.
    This shows that increasing $R_E$ significantly improves the CMRR.

**Effect of Collector Resistances ($r_o$):**
If we consider the output resistance $r_o$ of the transistors, the collector resistors $R_C$ are effectively in parallel with $r_o$. The equivalent collector resistance becomes $R'_C = R_C || r_o$. The analysis for $A_d$ and $A_{cm}$ will use $R'_C$ instead of $R_C$.
This will slightly reduce the differential gain and increase the common-mode gain, thus reducing the CMRR.

**Important Point to Remember:**
The emitter resistor $R_E$ is crucial for achieving a high CMRR. In practical integrated circuits, $R_E$ is often replaced by a constant current source for an even better (ideally infinite) common-mode rejection.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 4: Differential Amplifier.
*   Sedra A. S. and K. C. Smith, "Microelectronic Circuits," Chapter 7: Differential Amplifiers.
*   Gayakwad R. A., "Op-Amps and Linear Integrated Circuits," Chapter 2: Differential Amplifiers.

---

### 3. Differential Amplifier with Emitter Current Mirror (Constant Current Source)

To achieve a very high common-mode rejection ratio (CMRR), the emitter resistor $R_E$ is often replaced by a **constant current source**. A common implementation of a constant current source in ICs is using a **current mirror**.

**Circuit Diagram:**
*(Imagine a circuit diagram similar to the basic one, but instead of $R_E$ connected to ground, the emitters of Q1 and Q2 are connected to the output of a current mirror circuit. The current mirror typically consists of a reference transistor Q3, a diode-connected transistor Q4, and a biasing resistor $R_{ref}$. The current mirror provides a constant current $I_{EE}$ to the emitters of Q1 and Q2.)*

**Components:**
*   Two matched input transistors (Q1, Q2)
*   Two collector resistors ($R_{C1}$, $R_{C2}$)
*   Current Mirror circuit (Q3, Q4, $R_{ref}$) providing current $I_{EE}$

**Operation:**
*   The current mirror is designed to provide a stable current $I_{EE}$ regardless of the common-mode input voltage.
*   This constant current $I_{EE}$ is split equally between the emitters of Q1 and Q2, so $I_{E1} = I_{E2} = I_{EE}/2$.
*   **Differential Mode:** When $v_{id}$ is applied, one transistor conducts more and the other conducts less. The change in emitter current of one transistor is matched by an opposite change in the other. The total emitter current $I_{E1} + I_{E2} = I_{EE}$ remains constant (assuming ideal current source).
*   **Common-Mode Mode:** When $v_{cm}$ is applied, both transistors try to conduct more or less current. However, the current source $I_{EE}$ keeps the total emitter current constant, thus limiting the change in emitter voltages and preventing significant changes in collector voltages.

**Analysis:**

*   **Differential Gain ($A_d$):**
    With an ideal current source providing $I_{EE}$, the AC emitter current for Q1 is $i_{e1} = i_{c1}/\beta$, and for Q2 is $i_{e2} = i_{c2}/\beta$.
    Since the total emitter current is constant, $i_{e1} + i_{e2} = 0$, which means $i_{e2} = -i_{e1}$.
    This implies $i_{c2} = -i_{c1}$ for small AC changes.
    $v_{id} = v_{be1} - v_{be2} = i_{b1}r_{\pi} - i_{b2}r_{\pi} = (i_{b1} - i_{b2})r_{\pi}$.
    $i_{c1} = \beta i_{b1}$, $i_{c2} = \beta i_{b2}$.
    $i_{c1} - i_{c2} = \beta (i_{b1} - i_{b2})$.
    $v_{id} = \frac{i_{c1} - i_{c2}}{\beta} r_{\pi} = (i_{c1} - i_{c2})r_e$.
    $v_{od} = v_{c2} - v_{c1} = (V_{CC} - i_{c2}R_C) - (V_{CC} - i_{c1}R_C) = (i_{c1} - i_{c2})R_C$.
    $A_d = \frac{v_{od}}{v_{id}} = \frac{(i_{c1} - i_{c2})R_C}{(i_{c1} - i_{c2})r_e} = \frac{R_C}{r_e}$.
    The differential gain is the same as in the basic configuration if $R_E$ is replaced by $r_e$ from an ideal current source.

*   **Common-Mode Gain ($A_{cm}$):**
    For common-mode input, if $v_1=v_2=v_{cm}$, the current source $I_{EE}$ ideally maintains $I_{E1}=I_{E2}=I_{EE}/2$. Any change in common-mode input would cause equal changes in $v_{be1}$ and $v_{be2}$, and thus in $i_{e1}$ and $i_{e2}$. However, the current source would resist these changes by altering its output impedance.
    An *ideal* current source has infinite output impedance. In this case, any attempt to change the current through it would require an infinite change in voltage, meaning the emitter current is perfectly constant.
    Therefore, for an ideal current source, the common-mode emitter current is zero ($i_{e1} = i_{e2} = 0$).
    This leads to $i_{c1} = i_{c2} = 0$.
    Consequently, the common-mode output voltage $v_{ocm} = V_{CC} - i_c R_C = V_{CC}$. This implies $A_{cm} = 0$.
    Theoretically, with an ideal current source, the CMRR is infinite.

*   **Non-ideal Current Source:**
    Real current sources have a finite output impedance ($r_o$ of the current source transistors). This finite output impedance appears in parallel with the emitters of Q1 and Q2.
    The analysis becomes similar to the case with $R_E$, where $R_E$ is replaced by the output impedance of the current source ($r_{o(mirror)}$).
    $A_{cm} = -\frac{R_C}{r_e + r_{o(mirror)}}$.
    $CMRR = 1 + \frac{r_e + r_{o(mirror)}}{r_e} = 1 + \frac{r_{o(mirror)}}{r_e}$.
    A high $r_{o(mirror)}$ (achieved by using cascode structures in the current mirror) is needed for high CMRR.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 4: Differential Amplifier.
*   Sedra A. S. and K. C. Smith, "Microelectronic Circuits," Chapter 7: Differential Amplifiers.

---

### 4. Different Output Configurations

Differential amplifiers can have different output configurations, providing either a differential output or a single-ended output.

**a) Single-Ended Output:**
The output is taken from only one of the collectors (e.g., $v_{c2}$).
*   $v_{out} = v_{c2} = V_{CC} - I_{C2}R_C$.
*   If the input is $v_1$ and $v_2$, and assuming $R_{C1}=R_{C2}=R_C$, the output is:
    $v_{out} = V_{CC} - (I_{EC}/2 - i_{e2})R_C$.
    The effective differential gain is approximately $A_d \approx -A_{d1}/2$, where $A_{d1}$ is the gain from $v_1$ to $v_{c2}$.
    More formally, for an input $v_1$ and $v_2$, and output at $v_{c2}$:
    $v_{c2} = V_{CC} - i_{c2}R_C$.
    The common-mode gain at $v_{c2}$ is $A_{cm,2} = -\frac{R_C}{2(r_e + R_E)}$.
    The differential gain from $v_{id}$ to $v_{c2}$ is $A_{d,2} = \frac{R_C}{2r_e}$.
    The CMRR for this single-ended output is also the ratio of these gains.

**b) Differential Output:**
The output is taken differentially between the two collectors ($v_{od} = v_{c2} - v_{c1}$). This configuration offers twice the differential gain compared to a single-ended output and provides better common-mode rejection.
*   $v_{out} = v_{c2} - v_{c1}$.
*   The analysis in Section 2 and 3 shows the gain for differential output.

**c) Centered Output:**
This is a variation where the output is taken differentially but referenced to a specific bias point. This is less common in basic differential amplifier stages.

**Important Point to Remember:**
For op-amp design, differential outputs are generally preferred for the first stage as they provide higher gain and better noise immunity.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 4: Differential Amplifier.
*   Sedra A. S. and K. C. Smith, "Microelectronic Circuits," Chapter 7: Differential Amplifiers.

---

### 5. Performance Parameters and Characteristics

Understanding the key performance parameters is crucial for evaluating and designing differential amplifiers.

*   **Differential Voltage Gain ($A_d$):** As discussed, the amplification of the difference signal.
*   **Common-Mode Gain ($A_{cm}$):** The amplification of the common-mode signal.
*   **Common-Mode Rejection Ratio (CMRR):** The ability to reject common-mode signals. A high CMRR is essential.
*   **Input Offset Voltage ($V_{io}$):** The difference in input voltages required to make the output voltage zero (or a specific bias point). Ideally, $V_{io}$ should be zero. Mismatches in transistor parameters or collector resistors cause non-zero $V_{io}$.
*   **Input Bias Current ($I_{IB}$):** The average of the base currents of the two input transistors. $I_{IB} = (I_{B1} + I_{B2})/2$.
*   **Input Offset Current ($I_{io}$):** The difference between the base currents of the two input transistors. $I_{io} = |I_{B1} - I_{B2}|$.
*   **Input Resistance ($R_{in}$):**
    *   **Differential Input Resistance:** The resistance seen at the differential input terminals. For the basic configuration, $R_{in(diff)} \approx 2r_{\pi}$. If $r_o$ is considered, it is $R_{in(diff)} \approx 2(r_{\pi} + R_E || r_o)$.
    *   **Common-Mode Input Resistance:** The resistance seen at the common-mode input terminals. $R_{in(cm)} \approx 2(R_E || r_{\pi})$. With a current source of output impedance $r_{o(mirror)}$, $R_{in(cm)} \approx 2(r_{o(mirror)} || r_{\pi})$.
*   **Output Resistance ($R_{out}$):** The resistance seen at the output terminal(s). For a single collector output (e.g., $v_{c2}$), $R_{out} \approx R_C || r_o$. For a differential output, the output resistance at each terminal is also $R_C || r_o$.

**Example Calculation (CO1 & CO2):**
Consider a BJT differential amplifier with $V_{CC} = 15V$, $R_{C1}=R_{C2}=10k\Omega$, $R_E=4.7k\Omega$. The quiescent collector current is $I_{CQ} = 1mA$.
Assume $\beta = 100$ and $V_T = 25mV$.

1.  **Calculate $r_e$:**
    $I_{EQ} = 2I_{CQ} = 2mA$.
    $r_e = V_T/I_{EQ} = 25mV / 2mA = 12.5\Omega$. (Note: this calculation of $r_e$ is based on the total emitter current which is not accurate for individual transistor analysis. For individual transistor's AC emitter resistance, we consider $r_e = V_T/I_{CQ} = 25mV/1mA = 25\Omega$). Let's use $r_e = 25\Omega$ as the AC emitter resistance for each transistor.

2.  **Calculate Differential Gain ($A_d$):**
    $A_d = -R_C/r_e = -10k\Omega / 25\Omega = -400$.
    The magnitude is $|A_d| = 400$.

3.  **Calculate Common-Mode Gain ($A_{cm}$):**
    $A_{cm} = -R_C / (r_e + R_E) = -10k\Omega / (25\Omega + 4.7k\Omega) \approx -10k\Omega / 4.7k\Omega \approx -2.13$.

4.  **Calculate CMRR:**
    $CMRR = |A_d / A_{cm}| = |-400 / -2.13| \approx 187.8$.
    $CMRR (dB) = 20 \log_{10}(187.8) \approx 45.45 dB$.

5.  **Calculate Input Differential Resistance ($R_{in(diff)}$):**
    $R_{in(diff)} \approx 2r_{\pi}$.
    $r_{\pi} = \beta r_e = 100 \times 25\Omega = 2.5k\Omega$.
    $R_{in(diff)} \approx 2 \times 2.5k\Omega = 5k\Omega$.

**Design Aspect (CO2):**
To achieve a higher differential gain, we would increase $R_C$ or decrease $r_e$ (by increasing quiescent current $I_{CQ}$).
To improve CMRR, we would increase $R_E$ or replace it with a current source with high output impedance.

**References:**
*   Roy D. C. and S. B. Jain, "Linear Integrated Circuits," Chapter 4: Differential Amplifier.
*   Sedra A. S. and K. C. Smith, "Microelectronic Circuits," Chapter 7: Differential Amplifiers.
*   Gayakwad R. A., "Op-Amps and Linear Integrated Circuits," Chapter 2: Differential Amplifiers.

---

### 6. Cascode Differential Amplifier

The cascode configuration is used to improve the performance of the differential amplifier, particularly its input resistance and output resistance, and to reduce the Miller effect.

**Circuit Diagram:**
*(Imagine the basic differential pair Q1 and Q2. Their collectors are connected to the emitters of cascaded transistors Q5 and Q6 respectively. The bases of Q5 and Q6 are typically biased to a fixed voltage or are part of a current mirror. The output is taken from the collectors of Q5 and Q6.)*

**Operation:**
*   Q1 and Q2 form the input differential pair.
*   Q5 and Q6 are common-emitter amplifiers cascoded onto Q1 and Q2.
*   The cascode transistors (Q5, Q6) act as current buffers, presenting a low impedance to the collectors of Q1 and Q2.
*   This low impedance at the collectors of Q1 and Q2 effectively reduces the Miller effect, as the voltage swing at their collectors is minimized.

**Performance Improvements:**
*   **Increased Input Resistance:** The input transistors Q1 and Q2 see a lower impedance at their collector nodes due to the cascode transistors, leading to a higher input impedance for the overall stage.
*   **Increased Differential Gain:** The load resistance at the collectors of Q1 and Q2 is effectively reduced, but the cascode transistors increase the output resistance of the stage, leading to a higher overall differential gain.
*   **Improved Bandwidth:** Reduction in Miller effect improves the high-frequency response.
*   **Higher CMRR:** When the current mirror supplying the emitter current uses cascoding itself, the common-mode rejection is further enhanced.

**References:**
*   Sedra A. S. and K. C. Smith, "Microelectronic Circuits," Chapter 7: Differential Amplifiers.

---

### 7. Practice Questions and Exercises

**Question 1 (CO1):**
Define Common-Mode Rejection Ratio (CMRR) and explain its significance in a differential amplifier.

**Answer:**
CMRR is the ratio of differential gain ($A_d$) to common-mode gain ($A_{cm}$). It quantifies how effectively a differential amplifier rejects unwanted common-mode signals while amplifying the desired differential signal. A high CMRR is crucial for accurate amplification in the presence of noise.

**Question 2 (CO1):**
A BJT differential amplifier has $A_d = -500$ and $A_{cm} = -5$. Calculate the CMRR in dB.

**Answer:**
$CMRR = |A_d / A_{cm}| = |-500 / -5| = 100$.
$CMRR (dB) = 20 \log_{10}(100) = 20 \times 2 = 40 dB$.

**Question 3 (CO2):**
Design a BJT differential amplifier with a differential gain magnitude of at least 300. The amplifier uses matched NPN transistors with $V_T = 25mV$ and $\beta = 100$. The quiescent current through each transistor is $1mA$. Assume collector resistors are $R_C$.
*(a) Calculate the required value of $R_C$.*
*(b) Calculate the value of the emitter resistor $R_E$ needed to achieve a CMRR of at least 60 dB.*

**Answer:**
Given: $|A_d| \ge 300$, $I_{CQ} = 1mA$, $V_T = 25mV$, $\beta = 100$.
$r_e = V_T / I_{CQ} = 25mV / 1mA = 25\Omega$.

*(a) Calculate $R_C$ for $|A_d| \ge 300$ (differential output):*
$|A_d| = R_C / r_e$
$R_C = |A_d| \times r_e = 300 \times 25\Omega = 7500\Omega = 7.5k\Omega$.
So, $R_C$ should be at least $7.5k\Omega$.

*(b) Calculate $R_E$ for CMRR $\ge 60 dB$ (differential output):*
$CMRR = 1 + R_E / r_e$
$60 dB = 20 \log_{10}(1 + R_E / r_e)$
$3 = \log_{10}(1 + R_E / r_e)$
$10^3 = 1 + R_E / r_e$
$1000 = 1 + R_E / 25\Omega$
$999 = R_E / 25\Omega$
$R_E = 999 \times 25\Omega \approx 24975\Omega \approx 25k\Omega$.
So, $R_E$ should be at least $25k\Omega$.

**Question 4 (CO1):**
Why is a constant current source preferred over a resistor in the emitter path of a differential amplifier for high CMRR applications?

**Answer:**
A constant current source has a very high output impedance (ideally infinite). When this high impedance replaces $R_E$, the common-mode gain ($A_{cm} \approx -R_C / (r_e + Z_{out\_source})$) becomes very small, leading to a significantly higher CMRR compared to using a resistor $R_E$.

---

### 8. Important Points to Remember

*   The differential amplifier amplifies the **difference** between two inputs and rejects **common-mode** signals.
*   **CMRR** is a key parameter indicating rejection of common-mode signals. Higher is better.
*   The **emitter resistor ($R_E$)** significantly improves CMRR. Replacing it with a constant current source (like a current mirror) provides even higher CMRR.
*   Differential outputs offer better performance than single-ended outputs.
*   The basic BJT differential amplifier uses two matched transistors, two collector resistors, and an emitter resistor or current source.
*   **$r_e = V_T / I_E$** is the AC emitter resistance, where $V_T$ is the thermal voltage ($25mV$ at room temperature) and $I_E$ is the quiescent emitter current of one transistor.
*   **$r_{\pi} = \beta r_e$** is the input resistance of a single transistor.
*   **Cascode configurations** are used to enhance input resistance, output resistance, and bandwidth.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
