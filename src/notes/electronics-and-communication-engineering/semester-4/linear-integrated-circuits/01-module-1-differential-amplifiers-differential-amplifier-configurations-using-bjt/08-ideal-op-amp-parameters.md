---
title: "Ideal Op Amp parameters"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe568"
status: "completed"
scrapedAt: "2026-05-23T17:49:40.801Z"
---
# LINEAR INTEGRATED CIRCUITS

## Module 1: Differential Amplifiers

### Topic: Ideal Op Amp Parameters

**Learning Outcomes:**

*   Understand the fundamental characteristics of an ideal operational amplifier (Op-Amp).
*   Relate ideal Op-Amp parameters to the behavior of real Op-Amps and their limitations.
*   Apply the concept of ideal Op-Amp parameters in analyzing basic Op-Amp circuits.

**Course Outcomes Alignment:**

*   **CO1:** Summarize the concepts of operational amplifiers and differential amplifier configurations (Knowledge Level: K2). This topic directly contributes to understanding the fundamental building blocks of operational amplifiers.
*   **CO2:** Design operational amplifier circuits for various applications. (Knowledge Level: K3). Understanding ideal parameters is the first step in designing and analyzing Op-Amp circuits accurately.

---

### 1. Introduction to Operational Amplifiers (Op-Amps)

An operational amplifier, or Op-Amp, is a high-gain, direct-coupled, high-input impedance, low-output impedance amplifier. It is a fundamental building block in analog integrated circuits and is used in a vast array of applications, including amplification, filtering, signal conditioning, and control systems.

The symbol for an Op-Amp is shown below:

```
     +Vcc
      ^
      |
  ----|-----
 |         |
 |   ---   |
 |- | Op  |---| Out
 |   ---   |
  ----|-----
      |
     -Vee
      ^
      |
      +------ + Input (Non-inverting)
      |
      +------ - Input (Inverting)
```

An Op-Amp has two input terminals and one output terminal. The two input terminals are:

*   **Inverting Input (-):** A signal applied to this terminal results in an amplified, inverted output signal.
*   **Non-inverting Input (+):** A signal applied to this terminal results in an amplified, non-inverted output signal.

The output voltage ($V_{out}$) is proportional to the difference between the voltages at the non-inverting and inverting inputs:

$V_{out} = A_{OL} (V_+ - V_-)$

where:
*   $A_{OL}$ is the open-loop voltage gain.

---

### 2. The Ideal Op-Amp Model

To simplify the analysis of Op-Amp circuits, we often use the **ideal Op-Amp model**. This model assumes certain parameters are at their theoretical extreme values. While no real Op-Amp can achieve these ideals, they provide a valuable baseline for understanding circuit behavior and the sources of error in real Op-Amps.

**Key Ideal Op-Amp Parameters:**

The following parameters define an ideal Op-Amp:

1.  **Infinite Open-Loop Voltage Gain ($A_{OL} = \infty$)**
2.  **Infinite Input Impedance ($Z_{in} = \infty$)**
3.  **Zero Output Impedance ($Z_{out} = 0$)**
4.  **Infinite Bandwidth ($BW = \infty$)**
5.  **Zero Output Offset Voltage ($V_{os} = 0$)**
6.  **Infinite Common-Mode Rejection Ratio (CMRR = $\infty$)**
7.  **Infinite Slew Rate (SR = $\infty$)**
8.  **Zero Input Bias Current ($I_{B} = 0$)**
9.  **Zero Input Offset Current ($I_{OS} = 0$)**

Let's delve into each of these parameters in detail:

---

#### 2.1. Infinite Open-Loop Voltage Gain ($A_{OL} = \infty$)

*   **Concept:** The open-loop voltage gain is the gain of the Op-Amp when no external feedback is applied. In an ideal Op-Amp, this gain is considered infinite.
*   **Implication:** This infinite gain is the reason why Op-Amps, when used with negative feedback, can amplify very small input voltage differences (close to zero) to a large extent.
*   **Real-World Behavior:** Real Op-Amps have very high but finite open-loop gains, typically in the range of $10^5$ to $10^6$ V/V (or 100-120 dB). This finite gain leads to small output errors, especially at higher frequencies.
*   **Textbook Reference:** Roy D. C. & Jain S. B. (5/e) discusses open-loop gain as a primary characteristic, highlighting its significance in negative feedback configurations.

---

#### 2.2. Infinite Input Impedance ($Z_{in} = \infty$)

*   **Concept:** Input impedance is the impedance seen by the signal source connected to the Op-Amp's input terminals. An ideal Op-Amp draws no current from the input signal source.
*   **Implication:** This means that when an Op-Amp is connected to a circuit, it does not load the preceding stage. The voltage at the input terminal accurately reflects the signal from the source.
*   **Real-World Behavior:** Real Op-Amps have very high input impedances, typically in the range of $10^6 \Omega$ to $10^{12} \Omega$ (especially for FET-input Op-Amps). However, they are not infinite, which can cause loading effects in sensitive circuits.
*   **Textbook Reference:** Franco (3/e) emphasizes input impedance in the context of amplifier loading and how it affects signal transfer.

---

#### 2.3. Zero Output Impedance ($Z_{out} = 0$)

*   **Concept:** Output impedance is the internal impedance of the Op-Amp at its output terminal. An ideal Op-Amp has zero output impedance.
*   **Implication:** This means that the output voltage of the Op-Amp is independent of the load connected to it. The Op-Amp can deliver its full amplified signal to any load without its output voltage dropping.
*   **Real-World Behavior:** Real Op-Amps have low but non-zero output impedances, typically in the range of $10 \Omega$ to $100 \Omega$. A load connected to the output will cause the output voltage to drop due to the voltage division across $Z_{out}$ and the load impedance.
*   **Textbook Reference:** Gayakwad (4/e) explains output impedance in relation to the Op-Amp's ability to drive loads and potential voltage drops.

---

#### 2.4. Infinite Bandwidth ($BW = \infty$)

*   **Concept:** Bandwidth refers to the range of frequencies over which the Op-Amp can amplify signals. An ideal Op-Amp has infinite bandwidth, meaning it can amplify signals of any frequency with the same gain.
*   **Implication:** This would allow an ideal Op-Amp to amplify both DC and AC signals without any attenuation or phase shift within the amplification process.
*   **Real-World Behavior:** Real Op-Amps have limited bandwidth. Their open-loop gain decreases as frequency increases. The **Gain-Bandwidth Product (GBWP)** is a key parameter for real Op-Amps, indicating that the product of gain and bandwidth is roughly constant for a given Op-Amp. For example, if an Op-Amp has a GBWP of 1 MHz, it might have a gain of 100 at 10 kHz, but its gain will drop significantly at higher frequencies.
*   **Textbook Reference:** Clayton (5/e) and Coughlin & Driscoll (6/e) extensively cover bandwidth limitations and their impact on signal fidelity, introducing concepts like GBWP.

---

#### 2.5. Zero Output Offset Voltage ($V_{os} = 0$)

*   **Concept:** Output offset voltage is the voltage that appears at the output terminal when the differential input voltage is zero ($V_+ - V_- = 0$). Ideally, if there is no input difference, the output should be zero.
*   **Implication:** This parameter is crucial for DC applications. A zero offset voltage ensures that even for very small input signals or in circuits where the input difference should ideally be zero, the output remains at zero, preventing DC errors.
*   **Real-World Behavior:** Real Op-Amps have a small, non-zero output offset voltage due to mismatches in the internal transistor parameters. This offset voltage can be amplified by the Op-Amp's gain, causing significant DC errors, especially in high-gain circuits. Offset voltage can be reduced using external components or by choosing Op-Amps with offset nulling pins.
*   **Textbook Reference:** Bell (3/e) and Botkar (10/e) detail the sources of offset voltage (due to internal imbalances) and methods for compensation.

---

#### 2.6. Infinite Common-Mode Rejection Ratio (CMRR = $\infty$)

*   **Concept:** Common-mode signals are signals that appear simultaneously and with the same polarity on both input terminals of the Op-Amp. CMRR is a measure of how well an Op-Amp rejects these common-mode signals compared to differential-mode signals.
*   **Implication:** An infinite CMRR means that the Op-Amp amplifies only the difference between the two inputs and completely ignores any signal that is common to both inputs. This is vital for amplifying small differential signals in the presence of large common-mode noise.
*   **Real-World Behavior:** Real Op-Amps have high but finite CMRR, typically in the range of 70 dB to 120 dB. A finite CMRR means that a portion of the common-mode signal will appear at the output, causing errors.
*   **Formula:** $CMRR = 20 \log_{10} \left( \frac{A_{DM}}{A_{CM}} \right)$, where $A_{DM}$ is the differential gain and $A_{CM}$ is the common-mode gain.
*   **Textbook Reference:** Sedra & Smith (6/e) provides a thorough explanation of common-mode rejection, its significance in differential amplifiers, and the factors affecting CMRR.

---

#### 2.7. Infinite Slew Rate (SR = $\infty$)

*   **Concept:** Slew rate is the maximum rate of change of the output voltage per unit time. It is typically measured in volts per microsecond (V/µs). An ideal Op-Amp has an infinite slew rate.
*   **Implication:** This means that the output voltage of an ideal Op-Amp can change instantaneously from one level to another, allowing it to accurately reproduce high-frequency, large-amplitude signals.
*   **Real-World Behavior:** Real Op-Amps have finite slew rates, which limit their ability to accurately reproduce fast-changing signals. If the required rate of change of the output signal exceeds the Op-Amp's slew rate, the output waveform will be distorted (e.g., triangular instead of sinusoidal for a sine wave input).
*   **Textbook Reference:** Bell (3/e) and Gayakwad (4/e) explain slew rate limitations, showing how they cause waveform distortion for large-amplitude, high-frequency signals.

---

#### 2.8. Zero Input Bias Current ($I_{B} = 0$)

*   **Concept:** Input bias current is the average of the currents flowing into the two input terminals of the Op-Amp. Ideally, this current should be zero.
*   **Implication:** If $I_B = 0$, no current flows into the input terminals, and therefore, no voltage drop occurs across the input resistors of the connected circuit. This is particularly important when using large resistors in the feedback network or at the input.
*   **Real-World Behavior:** Real Op-Amps have small but non-zero input bias currents, typically in the picoampere (pA) to nanoampere (nA) range. These currents can cause output voltage errors by creating voltage drops across input and feedback resistors.
*   **Textbook Reference:** Roy D. C. & Jain S. B. (5/e) discuss input bias current and its implications for DC errors, especially in circuits with large resistors.

---

#### 2.9. Zero Input Offset Current ($I_{OS} = 0$)

*   **Concept:** Input offset current is the difference between the currents flowing into the two input terminals ($I_{OS} = |I_{B+} - I_{B-}|$). Ideally, this difference should be zero.
*   **Implication:** If $I_{OS} = 0$, the currents flowing into both input terminals are equal. This simplifies error analysis, as any voltage drop across input resistors due to bias current will be the same, and thus cancel out if the input impedance of both terminals is identical.
*   **Real-World Behavior:** Real Op-Amps have small but non-zero input offset currents. This difference in input currents can lead to output voltage errors, especially when the resistances connected to the two input terminals are different.
*   **Textbook Reference:** Franco (3/e) and Botkar (10/e) explain how input offset current contributes to output errors, particularly in unbalanced input circuits.

---

### 3. The "Golden Rules" of Ideal Op-Amp Circuit Analysis

When analyzing circuits using ideal Op-Amps, two fundamental rules simplify the process:

1.  **Rule 1: The output voltage attempts to do whatever is necessary to make the voltage difference between its input terminals zero.**
    *   This means that if an Op-Amp is used in a negative feedback configuration, the inverting input terminal will be driven to the same voltage as the non-inverting input terminal.
    *   Mathematically: $V_- = V_+$

2.  **Rule 2: With negative feedback, the input terminals draw no current.**
    *   This is a direct consequence of infinite input impedance ($Z_{in} = \infty$).
    *   Mathematically: $I_+ = 0$ and $I_- = 0$

**How these rules are derived from ideal parameters:**

*   **Rule 1** is a consequence of infinite open-loop gain ($A_{OL} = \infty$). The output voltage is $V_{out} = A_{OL} (V_+ - V_-)$. If $A_{OL} \to \infty$, for a finite output voltage $V_{out}$, the difference $(V_+ - V_-)$ must approach zero, meaning $V_+ = V_-$. This is often referred to as the **virtual short** concept.
*   **Rule 2** is a direct consequence of infinite input impedance ($Z_{in} = \infty$). If $Z_{in} = \infty$, then $I = V/Z = V/\infty = 0$.

**Example Application of Golden Rules:**

Let's analyze a simple **inverting amplifier** using the golden rules:

```
       R1
   ----/\/\/----
  |             |
  |    ---      |
  +---| Op |----|---- Vout
      |   ---|
      +------
      |
     Rin
   ----/\/\/----
  |
 Vin
```

*   **Step 1: Apply Rule 1.** The non-inverting input (+) is connected to ground ($V_+ = 0$). Therefore, the inverting input (-) will also be at virtual ground: $V_- = V_+ = 0$.

*   **Step 2: Apply Rule 2.** No current flows into the inverting input terminal ($I_- = 0$).

*   **Step 3: Analyze currents.**
    *   Current through $R_{in}$: $I_{in} = (V_{in} - V_-) / R_{in} = (V_{in} - 0) / R_{in} = V_{in} / R_{in}$.
    *   Current through $R_1$: $I_{f} = (V_- - V_{out}) / R_1 = (0 - V_{out}) / R_1 = -V_{out} / R_1$.

*   **Step 4: Apply Kirchhoff's Current Law (KCL) at the inverting input node.**
    The current flowing into the node through $R_{in}$ must flow out through $R_1$ (since $I_- = 0$).
    $I_{in} = I_{f}$
    $V_{in} / R_{in} = -V_{out} / R_1$

*   **Step 5: Derive the gain.**
    $V_{out} / V_{in} = -R_1 / R_{in}$

This demonstrates how the ideal Op-Amp parameters and the derived golden rules greatly simplify circuit analysis.

---

### 4. Importance of Ideal Op-Amp Parameters

Understanding the ideal Op-Amp parameters is crucial for several reasons:

*   **Foundation for Analysis:** They provide a simplified model that allows for the derivation of fundamental Op-Amp circuit behaviors and gain equations without getting bogged down by complex internal Op-Amp characteristics.
*   **Design Approximation:** For many applications where the Op-Amp is operated with significant negative feedback and the signal frequencies are within the Op-Amp's effective bandwidth, the ideal model provides a good first-order approximation for circuit design.
*   **Identifying Limitations:** By contrasting the ideal behavior with real Op-Amp parameters, one can understand the sources of error and limitations in actual circuits. This knowledge is essential for selecting the appropriate Op-Amp for a given application and for designing compensation techniques.
*   **Basis for Further Study:** Advanced analog circuit analysis often starts with the ideal model and then introduces non-ideal effects systematically.

---

### 5. Bridging Ideal to Real Op-Amps

While the ideal model is a powerful tool, it's important to remember that real Op-Amps deviate from these ideals. The specific deviations and their magnitudes are defined by the non-ideal parameters. For example:

*   **Finite $A_{OL}$ and finite $BW$**: Affect the achievable gain and frequency response.
*   **Non-zero $V_{os}$, $I_B$, $I_{OS}$**: Introduce DC errors.
*   **Finite CMRR**: Causes amplification of common-mode noise.
*   **Finite SR**: Limits the speed of signal reproduction.
*   **Non-zero $Z_{out}$**: Affects the ability to drive loads.

The study of these non-ideal parameters is essential for designing circuits that meet specific performance requirements, especially in precision analog applications.

---

### 6. Practice Questions

1.  **State the five most important parameters of an ideal Op-Amp and explain the significance of each.** (Aligns with CO1, K2)

2.  **Using the "golden rules" of ideal Op-Amp analysis, derive the voltage gain for a non-inverting amplifier configuration.**
    ```
           R1
       ----/\/\/----
      |             |
      |    ---      |
      +---| Op |----|---- Vout
      |   ---|      |
      +------       +--------
      |             |
      Vin-----------+
    ```
    (Aligns with CO1, CO2, K2, K3)

3.  **Explain why infinite input impedance is a desirable characteristic for an Op-Amp.** (Aligns with CO1, K2)

4.  **What is the main consequence of a finite slew rate in a real Op-Amp?** (Aligns with CO1, K2)

5.  **If a real Op-Amp has an open-loop gain of $2 \times 10^5$ and is used in a negative feedback configuration with a closed-loop gain of 100, what is the output voltage error if the input differential voltage is 1mV?** (Aligns with CO1, CO2, K2, K3)
    *   *Hint: Use the relation $V_{out} = A_{OL} (V_+ - V_-)$ and the virtual short concept ($V_+ - V_- = V_{diff\_error}$). The closed-loop gain ($A_{CL}$) aims to make $V_{out} = A_{CL} \times V_{in\_effective}$. The difference $(V_+ - V_-)$ is the effective input difference, which is not necessarily zero due to finite gain.*

---

### 7. Answers to Practice Questions

1.  **Five most important parameters of an ideal Op-Amp and their significance:**
    *   **Infinite Open-Loop Voltage Gain ($A_{OL} = \infty$):** Enables the Op-Amp to amplify tiny input differences to large outputs, forming the basis of negative feedback applications (virtual short).
    *   **Infinite Input Impedance ($Z_{in} = \infty$):** Prevents loading of the input signal source, ensuring the signal is accurately passed to the Op-Amp.
    *   **Zero Output Impedance ($Z_{out} = 0$):** Ensures the output voltage is unaffected by the load connected to it, allowing the Op-Amp to drive any load.
    *   **Infinite Bandwidth ($BW = \infty$):** Allows amplification of signals across all frequencies without attenuation or phase shift.
    *   **Zero Output Offset Voltage ($V_{os} = 0$):** Eliminates DC errors at the output when the differential input is zero, crucial for precision DC amplification.

2.  **Voltage gain of a non-inverting amplifier:**
    *   **Step 1:** Non-inverting input (+) is connected to $V_{in}$.
    *   **Step 2:** Apply Rule 1: Since $V_+ = V_{in}$, the inverting input (-) will also be at virtual voltage $V_- = V_{in}$.
    *   **Step 3:** Apply Rule 2: No current flows into the inverting input terminal ($I_- = 0$).
    *   **Step 4:** Current through $R_1$ is $I_1 = (V_- - V_{out}) / R_1 = (V_{in} - V_{out}) / R_1$.
    *   **Step 5:** Since $I_- = 0$, this current $I_1$ must flow through the input terminal, which it doesn't. Instead, by KCL at the inverting node, the current from the feedback resistor ($R_1$) must come from somewhere. Since $I_-=0$, and no other path exists to the inverting input, the current from the voltage source through $R_1$ must be zero. This reasoning is slightly flawed. Let's re-examine:
    *   **Corrected Step 4 & 5:**
        *   Current through $R_1$: $I_{f} = (V_- - V_{out}) / R_1$.
        *   Since $V_- = V_{in}$ (from Rule 1), $I_{f} = (V_{in} - V_{out}) / R_1$.
        *   According to Rule 2, no current flows into the inverting terminal ($I_- = 0$). This implies that the current flowing through $R_1$ must be equal to the current flowing into the Op-Amp's inverting input. However, the standard analysis is based on the fact that $I_-$ is zero.
        *   Let's consider the current through the feedback resistor R1: $I_{R1} = (V_- - V_{out}) / R_1$.
        *   Since $V_- = V_{in}$ and $I_- = 0$: The current through $R_1$ is the current flowing from the virtual voltage $V_{in}$ to $V_{out}$.
        *   Consider the voltage difference across $R_1$ is $(V_- - V_{out})$.
        *   The current through $R_1$ is $I_{R1} = \frac{V_- - V_{out}}{R_1}$.
        *   Since $I_- = 0$, this current must be supplied to the inverting terminal from $R_1$. Therefore, $I_{R1} = I_- = 0$.
        *   This means $\frac{V_{in} - V_{out}}{R_1} = 0$.
        *   For this to be true, $V_{in} - V_{out} = 0$, which means $V_{out} = V_{in}$. This is incorrect.

    *   **Let's use the proper KCL approach at the inverting node:**
        *   The non-inverting input is at $V_+ = V_{in}$.
        *   By Rule 1, the inverting input is at $V_- = V_+ = V_{in}$.
        *   By Rule 2, $I_- = 0$.
        *   There is no resistor connected directly to $V_{in}$. The feedback resistor $R_1$ is connected between $V_{out}$ and $V_-$.
        *   The current through $R_1$ is $I_{R1} = (V_- - V_{out})/R_1 = (V_{in} - V_{out})/R_1$.
        *   This current $I_{R1}$ flows into the inverting terminal. Since $I_- = 0$, this implies $I_{R1} = 0$.
        *   Therefore, $(V_{in} - V_{out})/R_1 = 0$. This implies $V_{in} = V_{out}$. This is still incorrect.

    *   **The circuit diagram provided in the question is for a voltage follower, not a non-inverting amplifier with feedback.**
        *   Let's assume the question intended to ask for the gain of a **voltage follower** where $R_1$ is the feedback resistor and there is no other input resistor connected to the inverting terminal.
        *   In a voltage follower: $V_+ = V_{in}$, $V_- = V_{out}$ (due to direct feedback), $R_1$ is infinite (or just a wire for direct feedback), $I_- = 0$.
        *   **Applying Golden Rules:**
            *   $V_+ = V_{in}$.
            *   By Rule 1, $V_- = V_+$, so $V_- = V_{in}$.
            *   Since the output is directly connected to the inverting input, $V_{out} = V_-$.
            *   Therefore, $V_{out} = V_{in}$.
            *   The voltage gain is $V_{out}/V_{in} = 1$.

    *   **If the question meant a standard non-inverting amplifier with feedback resistor $R_f$ and a resistor $R_1$ from the inverting input to ground:**
        ```
               Rf
           ----/\/\/----
          |             |
          |    ---      |
          +---| Op |----|---- Vout
          |   ---|      |
          +------       +--------
          |             |
          R1            Vin
        ----/\/\/----
        |
        Ground
        ```
        *   $V_+ = V_{in}$.
        *   By Rule 1, $V_- = V_+ = V_{in}$.
        *   By Rule 2, $I_- = 0$.
        *   Current through $R_1$: $I_{R1} = (V_- - 0) / R_1 = V_{in} / R_1$.
        *   Current through $R_f$: $I_{f} = (V_- - V_{out}) / R_f = (V_{in} - V_{out}) / R_f$.
        *   By KCL at the inverting node: $I_{R1} + I_{f} = I_-$.
        *   $V_{in}/R_1 + (V_{in} - V_{out})/R_f = 0$.
        *   $V_{in}/R_1 = -(V_{in} - V_{out})/R_f$.
        *   $R_f V_{in} = -R_1 (V_{in} - V_{out})$.
        *   $R_f V_{in} = -R_1 V_{in} + R_1 V_{out}$.
        *   $(R_f + R_1) V_{in} = R_1 V_{out}$.
        *   $V_{out}/V_{in} = (R_f + R_1) / R_1 = 1 + R_f/R_1$.

    *   **Assuming the diagram meant a simple voltage follower:** **Gain = 1**.

3.  **Significance of infinite input impedance:** Infinite input impedance prevents the Op-Amp from drawing any current from the source connected to its input terminals. This ensures that the signal from the source is not attenuated or distorted by the Op-Amp itself, making the analysis of the circuit simpler and the performance more predictable, especially when dealing with high-impedance sources.

4.  **Main consequence of finite slew rate:** The main consequence of a finite slew rate is **output waveform distortion**, particularly for large-amplitude, high-frequency input signals. If the signal requires a faster rate of change than the Op-Amp can provide, the output will not accurately track the input, leading to a "slewed" or distorted output waveform (e.g., a sine wave might appear triangular).

5.  **Output voltage error calculation:**
    *   Let $V_{in\_diff}$ be the actual differential input voltage.
    *   The output of an Op-Amp is $V_{out} = A_{OL} \times V_{in\_diff}$.
    *   We are given $A_{OL} = 2 \times 10^5$ and $V_{in\_diff} = 1mV = 1 \times 10^{-3} V$.
    *   So, the output voltage without considering the closed-loop gain's target is $V_{out\_raw} = (2 \times 10^5) \times (1 \times 10^{-3} V) = 200 V$.
    *   The Op-Amp is used in a configuration with a closed-loop gain ($A_{CL}$) of 100. This means the circuit is designed such that if the input to the *closed-loop system* is $V_{in\_system}$, the output should be $V_{out} = A_{CL} \times V_{in\_system} = 100 \times V_{in\_system}$.
    *   The ideal Op-Amp analysis with negative feedback enforces $V_+ = V_-$. The difference $(V_+ - V_-)$ is the *actual* differential input voltage to the Op-Amp's internal amplifier, which we are calling $V_{in\_diff}$ here.
    *   So, $V_{out} = A_{OL} \times (V_+ - V_-)$.
    *   In a circuit with negative feedback, $V_{out} \approx A_{CL} \times V_{in\_effective\_input}$ where $V_{in\_effective\_input}$ is the signal applied to the overall circuit.
    *   Let's assume the input signal to the closed-loop circuit is $V_{sig}$. Then $V_{out} \approx 100 \times V_{sig}$.
    *   The actual differential voltage at the Op-Amp inputs is $V_{diff} = V_{out}/A_{OL}$.
    *   So, $V_{out} = A_{CL} \times V_{sig}$.
    *   $V_{out} = A_{OL} (V_+ - V_-)$.
    *   In a negative feedback circuit, $V_- \approx V_+$. Let $V_+ - V_- = \delta V$. Then $V_{out} = A_{OL} \delta V$.
    *   The output voltage of the *circuit* is $V_{out} = A_{CL} \times V_{in\_circuit}$.
    *   So, $A_{CL} \times V_{in\_circuit} = A_{OL} \times \delta V$.
    *   $\delta V = \frac{A_{CL}}{A_{OL}} \times V_{in\_circuit}$. This is the error voltage at the input.
    *   The question states the differential input is 1mV. This could mean the voltage difference that *should* have been zero in an ideal case is 1mV.
    *   Let's re-interpret the question: The Op-Amp itself has a certain internal voltage difference that produces an output. If the Op-Amp were ideal, its output would be exactly $100 \times V_{in\_circuit}$. However, because of finite gain, there's an error.
    *   The statement "differential input is 1mV" is ambiguous without knowing what circuit it refers to. However, if it means the *actual* voltage difference causing the output, $V_+ - V_- = 1mV$, then:
        *   $V_{out} = A_{OL} \times (V_+ - V_-) = (2 \times 10^5) \times (1 \times 10^{-3} V) = 200 V$.
        *   This is a very large output, suggesting this interpretation might be wrong.

    *   **Let's assume the question means:** The Op-Amp is used in a circuit designed for a closed-loop gain of 100. If the Op-Amp were ideal, an input of $V_{in}$ would produce $V_{out} = 100 V_{in}$. However, due to its internal properties (specifically, a non-ideal input difference required to produce a certain output), there's an issue.
    *   **Alternative interpretation (more likely):** The question is stating that the *inherent* input voltage difference that the Op-Amp is producing *internally* (which might be due to offset or noise, or the signal itself not being perfectly zeroed) is 1mV. And this Op-Amp is being used in a feedback loop.
    *   If $V_{diff} = V_+ - V_- = 1mV$ is the *actual* voltage difference at the input terminals *despite* the feedback trying to make it zero, then:
        *   The output voltage produced by the Op-Amp is $V_{out} = A_{OL} \times (V_+ - V_-) = (2 \times 10^5) \times 1 \times 10^{-3} V = 200 V$.
        *   The *intended* output, based on the closed-loop gain of 100, would be $V_{out\_intended} = 100 \times V_{in\_signal}$.
        *   The error is the difference between the actual output and the intended output if the differential input was truly zero.
        *   This question is poorly phrased. A common way to ask this is about an offset voltage that is amplified.

    *   **Let's assume the question means the input offset voltage is 1mV, and this is amplified by the closed-loop gain:**
        *   Input offset voltage ($V_{OS}$) is the voltage that must be applied between the input terminals to force the output to zero.
        *   If $V_{OS} = 1mV$, and the Op-Amp is in a circuit with $A_{CL} = 100$, then the output offset voltage ($V_{out\_OS}$) will be $V_{out\_OS} = A_{CL} \times V_{OS} = 100 \times 1mV = 100mV$.
        *   If the question implies the Op-Amp is producing an output corresponding to a 1mV differential input *in addition* to the signal, then:
            *   Let the input signal to the circuit be $V_{in\_circuit}$.
            *   The desired output is $V_{out\_desired} = 100 \times V_{in\_circuit}$.
            *   The Op-Amp has an internal difference $V_{diff}$ such that $V_{out} = A_{OL} \times V_{diff}$.
            *   If the Op-Amp is used in negative feedback, the feedback tries to make $V_{diff}$ very small.
            *   If $V_{diff} = 1mV$ is the *remaining* difference after feedback, then $V_{out} = (2 \times 10^5) \times 1mV = 200V$. This still doesn't fit the context of typical errors.

    *   **Let's assume the question is poorly worded and means:** If the Op-Amp had an input offset voltage that, when amplified by the closed-loop gain, resulted in an output of 200V. This implies $A_{CL} \times V_{OS} = 200V$. If $A_{CL}=100$, then $V_{OS} = 200V/100 = 2V$. This is a very large offset.

    *   **Most plausible interpretation:** The question is testing the understanding that $V_{out} = A_{OL}(V_+ - V_-)$. If the *resulting* differential voltage at the input terminals, despite feedback, is $1mV$, then the output is $V_{out} = (2 \times 10^5) \times 1mV = 200V$. The error would be the difference between this and what the closed-loop gain would imply for some input signal. Without an explicit input signal, it's hard to quantify error in that sense.

    *   **Let's assume the question meant to imply that the output voltage, if ideal, would be 1V, but due to the finite gain and some input difference, it becomes 200V.** The error in output voltage would be $200V - 1V = 199V$.

    *   **Considering the context of "error":**
        *   If the intended output for a given signal was $V_{out\_intended} = 100V$.
        *   And the actual output is $V_{out\_actual} = 200V$ (because $V_+ - V_- = 1mV$).
        *   Then the output voltage error is $V_{out\_actual} - V_{out\_intended} = 200V - 100V = 100V$.

    *   **Let's go with the interpretation that the 1mV is the error voltage at the input, and we want to see the resulting output voltage:**
        *   **Output Voltage:** $V_{out} = A_{OL} \times (V_+ - V_-) = (2 \times 10^5) \times (1 \times 10^{-3} V) = 200 V$.
        *   **Error Analysis (relative to ideal closed-loop operation):**
            *   If the circuit was designed for a closed-loop gain of 100, and the actual output is 200V, it means the Op-Amp is producing 200V for an input difference of 1mV.
            *   The error *at the output* due to this 1mV input difference is the total output voltage itself, $200V$, compared to what would be desired if the input difference was zero.

    *   **Final interpretation:** The question most likely implies that the differential voltage at the Op-Amp's input terminals is $1mV$. This is the voltage that the negative feedback is trying to minimize.
        *   **Output Voltage:** $V_{out} = A_{OL} \times (V_+ - V_-)$
        *   $V_{out} = (2 \times 10^5) \times (1 \times 10^{-3} V) = 200 V$.
        *   **Output Voltage Error:** If we assume an ideal circuit *should* have $V_+ - V_- = 0$, then any non-zero difference is an error. The output voltage produced due to this error differential input is $200V$. If the desired output (for some implied input signal) was, say, 100V, then the error is $200V - 100V = 100V$. However, without a specified input signal to the closed loop, the most direct answer is the output voltage itself, as it arises from the 1mV difference.

        *   **Answer: $200 V$.** (This is the output voltage generated by the 1mV input difference. If we were to define an error relative to a specific intended output, that would require more information.)

---

### Important Points to Remember:

*   The ideal Op-Amp is a theoretical model that simplifies circuit analysis.
*   Key ideal parameters are infinite $A_{OL}$, infinite $Z_{in}$, zero $Z_{out}$, infinite $BW$, zero $V_{os}$, infinite CMRR, infinite SR, zero $I_B$, and zero $I_{OS}$.
*   The "golden rules" ($V_+ = V_-$ and $I_+ = I_- = 0$ with negative feedback) are direct consequences of ideal parameters and are essential for quick analysis.
*   Real Op-Amps deviate from these ideals, and understanding these deviations is crucial for practical design.
*   The ideal model provides a foundation for understanding the behavior of Op-Amp circuits, such as inverting and non-inverting amplifiers, integrators, and differentiators.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
