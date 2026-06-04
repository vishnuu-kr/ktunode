---
title: "Measurement of Op-Amp parameters"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 1: Familiarization of Operational amplifiers "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe89e"
status: "completed"
scrapedAt: "2026-05-23T17:49:53.640Z"
---
# Linear Integrated Circuits Lab: Module 1 - Familiarization of Operational Amplifiers

## Topic: Measurement of Op-Amp Parameters

---

### 1. Introduction to Operational Amplifiers (Op-Amps)

**Key Concepts:**

*   **What is an Op-Amp?** An operational amplifier is a high-gain, direct-coupled, differential voltage amplifier with a single output and, usually, very high input impedance and low output impedance.
*   **Ideal Op-Amp Characteristics:**
    *   Infinite open-loop gain ($A_{OL} \rightarrow \infty$)
    *   Infinite input impedance ($Z_{in} \rightarrow \infty$)
    *   Zero output impedance ($Z_{out} \rightarrow 0$)
    *   Infinite bandwidth ($BW \rightarrow \infty$)
    *   Zero input offset voltage ($V_{os} \rightarrow 0$)
    *   Zero input bias current ($I_{B} \rightarrow 0$)
    *   Zero input offset current ($I_{OS} \rightarrow 0$)
    *   Infinite Common-Mode Rejection Ratio (CMRR $\rightarrow \infty$)
    *   Infinite Power Supply Rejection Ratio (PSRR $\rightarrow \infty$)

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 1 & 2 provide a foundational understanding of op-amps and their basic characteristics.

**Course Outcome Alignment:**
*   **CO1 (K4):** Understanding the fundamental characteristics of op-amps is crucial for designing and implementing basic linear integrated circuits.
*   **CO3 (K4):** Familiarity with op-amp parameters is essential for simulating their behavior accurately.

---

### 2. Importance of Measuring Op-Amp Parameters

**Key Concepts:**

*   **Real-world Op-Amps vs. Ideal Op-Amps:** Real op-amps deviate from ideal characteristics, and these deviations significantly impact circuit performance.
*   **Performance Evaluation:** Measuring parameters allows us to evaluate an op-amp's suitability for a specific application.
*   **Troubleshooting:** Understanding parameter deviations helps in identifying and resolving issues in op-amp based circuits.
*   **Design Validation:** Measured parameters confirm that the op-amp meets the design specifications.

**Course Outcome Alignment:**
*   **CO1 (K4):** Accurate parameter measurement is vital for designing circuits that perform as intended.
*   **CO4 (K4):** Troubleshooting requires knowledge of how parameter deviations manifest in circuit behavior.

---

### 3. Key Op-Amp Parameters and Their Measurement

This section details the measurement of several crucial op-amp parameters.

#### 3.1. Input Offset Voltage ($V_{os}$)

**Key Concepts:**

*   **Definition:** The small DC voltage that must be applied between the input terminals of an op-amp to force the output voltage to zero when the amplifier is in its open-loop configuration.
*   **Cause:** Imperfect matching of the transistors in the input differential stage.
*   **Effect:** Introduces an error voltage at the output, even when no input signal is present.

**Measurement Method (Simplified):**

1.  Connect the op-amp in open-loop configuration (no feedback).
2.  Ensure both input terminals are connected to ground (e.g., via high-value resistors if bias currents are a concern, though for basic measurement, direct grounding might suffice in some setups).
3.  Apply power supply voltages ($+V_{CC}$ and $-V_{EE}$).
4.  Measure the output voltage ($V_{out}$).
5.  If $V_{out}$ is not zero, adjust a variable DC voltage source connected in series with one of the input terminals (usually the inverting input) until $V_{out} = 0$. The magnitude of this applied voltage is the input offset voltage.
    *   Alternatively, if the open-loop gain ($A_{OL}$) is known and relatively stable, $V_{os} = V_{out} / A_{OL}$. However, directly measuring $V_{out}$ with no input signal and calculating from that is often preferred for simplicity.

**Example Circuit (Conceptual):**

```
      +Vcc
       |
       ---- Op-Amp (+) --.
      /                  |
   GND --- (-) ---------. Output (Vout)
      \                  |
       ---- GND ---------.
       |
      -Vee
```

**Important Points to Remember:**
*   Ensure stable power supply voltages.
*   Minimize external noise.
*   The measurement should be done at a stable temperature, as $V_{os}$ is temperature-dependent.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 2 discusses input offset voltage and its impact.

**Course Outcome Alignment:**
*   **CO1 (K4):** Essential for designing DC-coupled amplifiers where offset voltage can lead to significant DC errors.
*   **CO4 (K4):** Understanding how to measure $V_{os}$ helps in troubleshooting DC offsets in amplifier circuits.

---

#### 3.2. Input Bias Current ($I_B$)

**Key Concepts:**

*   **Definition:** The average of the DC bias currents flowing into the two input terminals of an op-amp.
*   **Cause:** Current required to bias the input differential amplifier.
*   **Effect:** Can cause an offset voltage at the output, especially when used with large input resistors or in circuits where these currents flow through significant impedances.

**Measurement Method (Simplified):**

1.  Connect the op-amp in open-loop configuration.
2.  Connect the non-inverting input terminal ($+$) to ground through a large resistor ($R_1$, e.g., 1 M$\Omega$ or higher).
3.  Connect the inverting input terminal ($-$) to ground through another large resistor ($R_2$, e.g., 1 M$\Omega$ or higher).
4.  Apply power supply voltages.
5.  Measure the output voltage ($V_{out}$).
6.  **Calculation:**
    *   The current flowing through $R_1$ will create a voltage drop, which ideally contributes to the voltage at the non-inverting input.
    *   The current flowing through $R_2$ will create a voltage drop, which contributes to the voltage at the inverting input.
    *   The input bias current ($I_B$) is approximately the current flowing into either input.
    *   If $R_1 = R_2 = R$, then $V_{out} \approx A_{OL} \times (V_+ - V_-)$.
    *   $V_+ \approx I_B \times R$ (if $R$ is connected to ground).
    *   $V_- \approx -I_B \times R$ (if $R$ is connected to ground).
    *   This simplified approach can be tricky due to the relationship between $I_B$ and $I_{OS}$. A more direct measurement is often preferred.

    **Alternative (More Direct) Method:**
    1. Connect the non-inverting input to ground through a large resistor ($R$, e.g., 1 M$\Omega$).
    2. Connect the inverting input directly to ground.
    3. Apply power.
    4. Measure the output voltage ($V_{out}$).
    5. $V_{out} \approx A_{OL} \times (V_+ - V_-)$
    6. $V_+ \approx I_{bias, +} \times R$
    7. $V_- = 0$
    8. $V_{out} \approx A_{OL} \times (I_{bias, +} \times R)$
    9. $I_{bias, +} \approx V_{out} / (A_{OL} \times R)$
    10. This gives the bias current at the non-inverting terminal. For $I_B$, we average the currents at both terminals.

    **Even Better Method:**
    1. Connect the non-inverting input to a voltage source $V_S$ through a large resistor $R$.
    2. Connect the inverting input to ground.
    3. Measure the output $V_{out}$.
    4. $V_{in+} = V_S$.
    5. $V_{in-} = V_{out} / A_{OL}$.
    6. The current flowing into the non-inverting input is $I_{bias, +} = (V_S - V_{in+}) / R$.
    7. The current flowing into the inverting input is $I_{bias, -} = (V_{out} - V_{in-}) / Z_{out}$ (assuming $Z_{out}$ is small, this is approximately 0).
    8. $I_B = (I_{bias, +} + I_{bias, -}) / 2$.
    9. If we want to measure $I_{bias, +}$, we can use a high-value resistor connected to ground at the non-inverting input and measure the voltage across it.

    **Practical Measurement for $I_B$:**
    1. Connect the non-inverting input to ground via a large resistor $R_{meas}$ (e.g., 1 M$\Omega$).
    2. Connect the inverting input to ground via a *different* large resistor $R_{meas}'$.
    3. Measure the output voltage $V_{out}$.
    4. If $R_{meas} = R_{meas}' = R_{meas}$, and assuming $I_{bias, +} \approx I_{bias, -} = I_B$.
    5. $V_{in+} \approx I_B \times R_{meas}$
    6. $V_{in-} \approx I_B \times R_{meas}$
    7. $V_{out} \approx A_{OL} \times (V_{in+} - V_{in-}) = A_{OL} \times (0) = 0$. This method is not ideal for directly measuring $I_B$ unless $I_{bias, +}$ and $I_{bias, -}$ are significantly different, which relates to input offset current.

    **The most common and practical method to measure $I_B$ (and $I_{OS}$ simultaneously or indirectly):**
    1. Connect the non-inverting input to ground via a large resistor $R_{bias}$ (e.g., 1 M$\Omega$).
    2. Connect the inverting input to ground via another large resistor $R_{bias}'$ (e.g., 1 M$\Omega$).
    3. Apply power.
    4. Measure the output voltage $V_{out}$.
    5. $V_{out} = A_{OL} \times (V_{in+} - V_{in-})$.
    6. $V_{in+} = I_{bias,+} \times R_{bias}$.
    7. $V_{in-} = I_{bias,-} \times R_{bias}'$.
    8. $V_{out} = A_{OL} \times (I_{bias,+} R_{bias} - I_{bias,-} R_{bias}')$.
    9. If $R_{bias} = R_{bias}' = R_{bias}$, then $V_{out} = A_{OL} \times (I_{bias,+} - I_{bias,-}) \times R_{bias}$.
    10. The term $(I_{bias,+} - I_{bias,-})$ is the Input Offset Current ($I_{OS}$).
    11. So, $V_{out} = A_{OL} \times I_{OS} \times R_{bias}$.
    12. To measure $I_B = (I_{bias,+} + I_{bias,-}) / 2$, a separate test setup is usually needed, often involving a variable voltage source to null the output and then measuring current.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 2 explains input bias current and its effects.

**Course Outcome Alignment:**
*   **CO1 (K4):** Understanding bias currents is crucial for designing circuits with minimal DC errors, especially when using high-impedance components.
*   **CO4 (K4):** Bias current effects can cause unexpected DC shifts in amplifier outputs, aiding in troubleshooting.

---

#### 3.3. Input Offset Current ($I_{OS}$)

**Key Concepts:**

*   **Definition:** The algebraic difference between the DC bias currents flowing into the two input terminals of an op-amp.
*   **Cause:** Imperfect matching of the input bias currents of the two input transistors.
*   **Effect:** Causes an error voltage at the output, which is proportional to $I_{OS}$ and the impedance connected to the input terminals. It's often more critical than input bias current if the impedances are not matched.

**Measurement Method (Simplified - as derived above):**

1.  Connect the op-amp in open-loop configuration.
2.  Connect the non-inverting input to ground via a large resistor $R_{bias}$.
3.  Connect the inverting input to ground via another large resistor $R_{bias}'$.
4.  Ensure $R_{bias} \neq R_{bias}'$ (or use the setup from 3.2.10 and calculate if $R_{bias} = R_{bias}'$).
5.  Apply power supply voltages.
6.  Measure the output voltage ($V_{out}$).
7.  Calculate the open-loop gain ($A_{OL}$) by applying a small known input voltage difference and measuring the output.
8.  **Calculation:** $I_{OS} = V_{out} / (A_{OL} \times (R_{bias} - R_{bias}'))$.
    *   Note: If $R_{bias} = R_{bias}'$, this method measures $I_{OS}$ indirectly, and the output voltage will be zero if the bias currents are perfectly matched. To measure $I_{OS}$ directly when $R_{bias} = R_{bias}'$, one would need to apply a voltage to one input to zero the output and then measure the current required at the other input.

**Practical Method to Measure $I_{OS}$ (using matched resistors):**

1.  Connect the non-inverting input to ground via a large resistor $R_{bias}$ (e.g., 1 M$\Omega$).
2.  Connect the inverting input to ground via the *same* large resistor $R_{bias}$.
3.  Apply power.
4.  Measure the output voltage $V_{out}$.
5.  Measure the open-loop gain $A_{OL}$ by applying a small known signal to the inverting input (with non-inverting input grounded) and measuring the output.
6.  If $I_{bias,+} = I_{bias,-} = I_B$, then $V_{in+} = I_B \times R_{bias}$ and $V_{in-} = I_B \times R_{bias}$. The difference $V_{in+} - V_{in-}$ is zero, so $V_{out} = 0$. This setup doesn't directly yield $I_{OS}$.

**Revised Practical Method for $I_{OS}$:**

1.  Connect the non-inverting input to ground.
2.  Connect the inverting input to ground via a large resistor $R_{bias}$ (e.g., 1 M$\Omega$).
3.  Apply power.
4.  Measure the output voltage $V_{out}$.
5.  Calculate the open-loop gain $A_{OL}$.
6.  $V_{in+} = 0$.
7.  $V_{in-} = I_{bias,-} \times R_{bias}$.
8.  $V_{out} = A_{OL} \times (V_{in+} - V_{in-}) = A_{OL} \times (-I_{bias,-} \times R_{bias})$.
9.  From this, $I_{bias,-} = -V_{out} / (A_{OL} \times R_{bias})$.

Now, to find $I_{bias,+}$:

10. Connect the inverting input to ground.
11. Connect the non-inverting input to ground via the same large resistor $R_{bias}$.
12. Apply power.
13. Measure the output voltage $V_{out}'$.
14. $V_{in-} = 0$.
15. $V_{in+} = I_{bias,+} \times R_{bias}$.
16. $V_{out}' = A_{OL} \times (V_{in+} - V_{in-}) = A_{OL} \times (I_{bias,+} \times R_{bias})$.
17. From this, $I_{bias,+} = V_{out}' / (A_{OL} \times R_{bias})$.
18. **Finally, $I_{OS} = |I_{bias,+} - I_{bias,-}|$** (take the absolute difference).

**Important Points to Remember:**
*   The accuracy of $A_{OL}$ significantly affects the calculated $I_{OS}$.
*   The value of $R_{bias}$ should be chosen carefully. Too small, and the voltage drops are negligible; too large, and it might affect stability or be limited by leakage currents.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 2 discusses input offset current.

**Course Outcome Alignment:**
*   **CO1 (K4):** Critical for designing circuits where input impedance matching is important to minimize errors.
*   **CO4 (K4):** Deviations in output due to $I_{OS}$ can be a key troubleshooting point.

---

#### 3.4. Common-Mode Rejection Ratio (CMRR)

**Key Concepts:**

*   **Definition:** The ratio of the differential gain ($A_d$) to the common-mode gain ($A_{cm}$). It indicates how well an op-amp rejects signals common to both input terminals.
*   **Differential Gain ($A_d$):** Gain for signals applied between the two input terminals. This is the desired gain. $A_d = V_{out} / (V_{in+} - V_{in-})$.
*   **Common-Mode Gain ($A_{cm}$):** Gain for signals that are common to both input terminals. This is the undesired gain. $A_{cm} = V_{out} / V_{cm}$, where $V_{cm} = (V_{in+} + V_{in-}) / 2$.
*   **CMRR Formula:** $CMRR = A_d / A_{cm}$ (or in dB, $CMRR_{dB} = 20 \log_{10} (A_d / A_{cm})$).
*   **Ideal Op-Amp:** Infinite CMRR.
*   **Effect of Low CMRR:** Amplifies unwanted common-mode noise, affecting signal integrity.

**Measurement Method:**

1.  **Measure Differential Gain ($A_d$):**
    *   Connect the op-amp in open-loop configuration.
    *   Apply a small differential voltage signal ($V_{id}$), e.g., $V_{in+} = V_1$ and $V_{in-} = V_2$, such that $V_{id} = V_1 - V_2$.
    *   Measure the output voltage $V_{out\_diff}$.
    *   $A_d = V_{out\_diff} / V_{id}$.

2.  **Measure Common-Mode Gain ($A_{cm}$):**
    *   Keep the op-amp in open-loop configuration.
    *   Apply a common-mode voltage signal ($V_{cm}$), e.g., $V_{in+} = V_{cm}$ and $V_{in-} = V_{cm}$, such that $V_{in+} = V_{in-}$. (Ensure this signal is within the op-amp's common-mode input voltage range).
    *   Measure the output voltage $V_{out\_cm}$.
    *   $A_{cm} = V_{out\_cm} / V_{cm}$.

3.  **Calculate CMRR:**
    *   $CMRR = A_d / A_{cm}$.
    *   Convert to dB if required: $CMRR_{dB} = 20 \log_{10} (A_d / A_{cm})$.

**Example Setup:**

*   **To measure $A_d$:**
    *   $V_{in+} = +10mV$
    *   $V_{in-} = -10mV$
    *   $V_{id} = 20mV$. Measure $V_{out\_diff}$. $A_d = V_{out\_diff} / 20mV$.
*   **To measure $A_{cm}$:**
    *   $V_{in+} = +1V$
    *   $V_{in-} = +1V$
    *   $V_{cm} = 1V$. Measure $V_{out\_cm}$. $A_{cm} = V_{out\_cm} / 1V$.

**Important Points to Remember:**
*   The op-amp must be operated in its linear region.
*   Ensure the common-mode voltage is within the acceptable input range for the op-amp.
*   It's easier to measure CMRR accurately when the op-amp has significant differential gain but very low common-mode gain.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 2 covers CMRR.
*   *Op-Amps And Linear Integrated Circuits* by Gayakwad (PHI, 2002) - This book also provides detailed explanations of CMRR.

**Course Outcome Alignment:**
*   **CO1 (K4):** Essential for designing circuits that are immune to noise or interfering signals present on both inputs.
*   **CO3 (K4):** Simulating CMRR is key to understanding a circuit's noise immunity.
*   **CO4 (K4):** Low CMRR can lead to amplified noise, which is a common troubleshooting scenario.

---

#### 3.5. Slew Rate (SR)

**Key Concepts:**

*   **Definition:** The maximum rate of change of the output voltage of an op-amp under a large-signal condition. It's usually expressed in V/µs.
*   **Cause:** Internal compensation capacitor and the current available to charge/discharge it.
*   **Effect:** Limits the maximum frequency of a large-amplitude output signal the op-amp can reproduce without distortion (slope limiting).

**Measurement Method:**

1.  **Setup:**
    *   Configure the op-amp as a voltage follower (buffer).
    *   Apply a large amplitude, low-frequency square wave (e.g., 1 kHz, 5V peak-to-peak) to the input. This is to ensure that the slew rate becomes the limiting factor rather than bandwidth.
    *   Alternatively, use a triangular wave input.

2.  **Observation:**
    *   Observe the output waveform on an oscilloscope.
    *   When the op-amp is slewing, the output will appear as a ramp rather than an instantaneous change.

3.  **Measurement:**
    *   Measure the time taken ($\Delta t$) for the output to change from a low value to a high value (or vice versa) across a significant portion of its swing.
    *   Measure the voltage change ($\Delta V_{out}$) during that time.
    *   **Calculation:** $SR = \Delta V_{out} / \Delta t$.
    *   Convert $\Delta t$ to microseconds (µs) for the standard unit of V/µs.

**Example:**

*   If the output changes from -5V to +5V (a change of 10V) in 2 µs, then $SR = 10V / 2\mu s = 5 V/\mu s$.

**Important Points to Remember:**
*   The input signal frequency and amplitude must be chosen carefully. A high frequency with a small amplitude tests bandwidth. A high amplitude with a low frequency tests slew rate.
*   The output swing should be large enough to observe slewing.
*   The op-amp is typically operated in a non-inverting configuration (voltage follower) for this measurement to ensure the full output swing is utilized.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 13 discusses slew rate in the context of 555 timer and general op-amp limitations.
*   *Introduction to Pspice Using Orcad for Circuits and Electronics* by M. H. Rashid (Pearson, 3rd edition, 2015) - This book would be useful for simulating slew rate effects.

**Course Outcome Alignment:**
*   **CO1 (K4):** Crucial for designing circuits that operate at higher frequencies or with large signal swings without distortion.
*   **CO3 (K4):** Simulating slew rate behavior is important for predicting circuit performance with large signals.
*   **CO4 (K4):** Distorted output waveforms with ramps are a clear indication of slew rate limiting, a common troubleshooting issue.

---

#### 3.6. Bandwidth (Unity Gain Bandwidth)

**Key Concepts:**

*   **Definition:** The frequency at which the closed-loop gain of an op-amp drops to 1 (unity gain), assuming a unity-gain stable op-amp.
*   **Cause:** Internal parasitic capacitances within the op-amp.
*   **Effect:** Limits the range of frequencies that can be amplified accurately. A higher bandwidth allows for amplification of higher frequency signals.
*   **Gain-Bandwidth Product (GBWP):** For a single-pole op-amp, the product of bandwidth and gain is constant. $GBWP \approx Gain \times Bandwidth$. For unity gain, $GBWP = 1 \times BW_{unity\_gain}$. This implies that if you use the op-amp with a gain of 10, the bandwidth will be $BW_{unity\_gain} / 10$.

**Measurement Method:**

1.  **Setup:**
    *   Configure the op-amp as a unity-gain buffer (voltage follower).
    *   Apply a sinusoidal input signal with a variable frequency.
    *   Measure the input voltage ($V_{in}$) and output voltage ($V_{out}$) amplitudes at each frequency using an oscilloscope or a spectrum analyzer.

2.  **Procedure:**
    *   Start with a low frequency (e.g., 100 Hz) and set $V_{in}$ to a suitable amplitude (e.g., 10mV peak-to-peak) to avoid slew rate limiting.
    *   Measure $V_{out}$. The ratio $|V_{out}/V_{in}|$ is the gain at that frequency.
    *   Gradually increase the input frequency and record the gain at each step.
    *   Plot the gain (in dB) versus frequency on a semi-logarithmic graph.

3.  **Identification:**
    *   The Unity Gain Bandwidth is the frequency where the gain drops to 0 dB (i.e., gain = 1).

**Example:**

*   Measure the frequency at which the output amplitude is equal to the input amplitude in a voltage follower configuration.

**Important Points to Remember:**
*   Ensure the input signal amplitude is small enough to prevent slew rate limiting.
*   The op-amp must be operated in its linear region.
*   The measurement should ideally be done with a signal generator and an oscilloscope or a network analyzer.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Chapter 2 explains bandwidth and GBWP.

**Course Outcome Alignment:**
*   **CO1 (K4):** Essential for designing amplifiers for specific frequency ranges.
*   **CO3 (K4):** Simulating bandwidth characteristics is key for analyzing frequency response.
*   **CO4 (K4):** Observing attenuated output at higher frequencies indicates bandwidth limitations, useful for troubleshooting.

---

#### 3.7. Output Voltage Swing

**Key Concepts:**

*   **Definition:** The maximum range of output voltage that an op-amp can produce without significant distortion, given the power supply voltages.
*   **Cause:** Internal circuitry limitations and the voltage drops across output transistors.
*   **Types:**
    *   **Standard Output:** The output can swing close to, but not quite reach, the power supply rails.
    *   **Rail-to-Rail Output:** The output can swing very close to, or even reach, the positive and negative power supply rails.
*   **Effect:** Limits the usable output signal amplitude.

**Measurement Method:**

1.  **Setup:**
    *   Configure the op-amp as a unity-gain buffer (voltage follower).
    *   Apply a slow sine wave or a ramp signal to the input.
    *   Observe the output waveform on an oscilloscope.

2.  **Observation:**
    *   As the input signal increases, the output will follow it until it reaches the maximum possible positive voltage, at which point it will flatten out or distort (clip).
    *   Similarly, as the input signal decreases, the output will follow until it reaches the minimum possible negative voltage, where it will flatten out or distort.

3.  **Measurement:**
    *   Measure the maximum positive output voltage ($V_{out,max}$) and the minimum negative output voltage ($V_{out,min}$) before significant distortion occurs.
    *   The output voltage swing is typically expressed as the difference between these two values ($V_{out,max} - V_{out,min}$) or as the individual limits relative to the supply rails.

**Example:**

*   If using $\pm$15V power supplies, a standard op-amp might swing from +13V to -13V. A rail-to-rail output op-amp might swing from +14.8V to -14.8V.

**Important Points to Remember:**
*   The output swing is dependent on the power supply voltages.
*   The exact limits depend on the specific op-amp model. Data sheets often specify "output voltage swing" or "output voltage range."
*   For accurate measurements, use a slow input signal to avoid slew rate limiting being mistaken for output clipping.

**Textbook Reference:**
*   *Linear Integrated Circuits* by D. Roy Choudhary and Shail B Jain (New Age International Private Limited, 6th edition, 2021) - Discussed in the context of op-amp limitations.

**Course Outcome Alignment:**
*   **CO1 (K4):** Crucial for designing circuits where maximum output signal amplitude is required.
*   **CO3 (K4):** Simulating output swing limitations is important for predicting circuit behavior.
*   **CO4 (K4):** Observing clipping at the output indicates an attempt to exceed the output voltage swing, a common troubleshooting scenario.

---

### 4. Simulation of Op-Amp Parameters using SPICE

**Key Concepts:**

*   **SPICE (Simulation Program with Integrated Circuit Emphasis):** A powerful circuit simulator used to predict the behavior of electronic circuits.
*   **Op-Amp Models:** SPICE uses models that represent the internal structure and parameters of op-amps. These models can be behavioral (simpler, based on gain and bandwidth) or more complex (transistor-level).
*   **Analysis Types:**
    *   **DC Analysis:** Used to find DC operating points, offset voltages, bias currents.
    *   **AC Analysis (Bode Plot):** Used to determine gain and phase response versus frequency, hence bandwidth.
    *   **Transient Analysis:** Used to observe output behavior over time, useful for slew rate and distortion analysis.
    *   **Noise Analysis:** Used to analyze noise performance.

**How to Simulate Parameters (General Approach using PSpice/OrCAD):**

*   **Unity Gain Bandwidth:**
    *   Use AC analysis with the op-amp in a voltage follower configuration.
    *   Plot the magnitude of the output voltage versus frequency (dB).
    *   Identify the frequency where the gain is 0 dB.
*   **Slew Rate:**
    *   Use transient analysis with a large-amplitude square or triangular wave input.
    *   Observe the slope of the output waveform when it's slewing.
*   **Input Offset Voltage:**
    *   Use DC analysis.
    *   Connect both inputs to ground.
    *   Measure the DC output voltage. If the gain is known, $V_{os} = V_{out} / A_{OL}$.
*   **Input Bias Current:**
    *   Use DC analysis.
    *   Connect one input to ground through a very large resistor (e.g., 1M$\Omega$) and the other to ground directly.
    *   Measure the current through the large resistor.
*   **CMRR:**
    *   **Method 1 (Gain Ratio):**
        *   Measure differential gain ($A_d$) using AC analysis with differential input.
        *   Measure common-mode gain ($A_{cm}$) using AC analysis with common-mode input.
        *   Calculate $CMRR = A_d / A_{cm}$.
    *   **Method 2 (Direct CMRR Simulation):** Some SPICE models allow direct specification of CMRR or have parameters that influence it. In transient or AC analysis, you can apply both differential and common-mode signals and observe the output.

**Textbook Reference:**
*   *Introduction to Pspice Using Orcad for Circuits and Electronics* by M. H. Rashid (Pearson, 3rd edition, 2015) - This book is specifically designed for simulating circuits using PSpice and would be invaluable for understanding the practical implementation of these simulations.

**Course Outcome Alignment:**
*   **CO3 (K4):** This entire section directly addresses the ability to design and simulate the functioning of basic linear integrated circuits and linear ICs using simulation tools.

---

### 5. Practice Questions and Answers

**Question 1:** Define Input Offset Voltage. What causes it, and how can its effect at the output be minimized in a DC amplifier?
**Answer:** Input Offset Voltage ($V_{os}$) is the small DC voltage required between the input terminals to make the output voltage zero in an open-loop configuration. It's caused by imperfect matching of transistors in the input differential stage. Its effect can be minimized by using input offset voltage compensation techniques (e.g., offset null pins if available) or by ensuring the op-amp has a low $V_{os}$ and using negative feedback with appropriate circuit design to reduce the impact of any residual offset.

**Question 2:** If an op-amp has a slew rate of 2 V/µs, what is the maximum frequency of a 5V peak-to-peak sine wave that can be amplified without slew-rate distortion?
**Answer:** For a sine wave $V_{out}(t) = V_p \sin(\omega t)$, the rate of change is $dV_{out}/dt = V_p \omega \cos(\omega t)$. The maximum rate of change occurs when $\cos(\omega t) = 1$, so $|dV_{out}/dt|_{max} = V_p \omega$.
The peak amplitude $V_p$ is half the peak-to-peak voltage, so $V_p = 5V / 2 = 2.5V$.
The slew rate is the maximum rate of change, so $SR \ge V_p \omega$.
$2 \text{ V/µs} \ge 2.5 \text{ V} \times \omega$
$2 \times 10^6 \text{ V/s} \ge 2.5 \text{ V} \times (2\pi f_{max})$
$f_{max} = \frac{2 \times 10^6}{2.5 \times 2\pi} \approx 127.3 \text{ kHz}$.

**Question 3:** What is CMRR, and why is it an important parameter for operational amplifiers?
**Answer:** CMRR stands for Common-Mode Rejection Ratio. It's the ratio of differential gain to common-mode gain ($A_d / A_{cm}$). It's important because it quantifies how well an op-amp can amplify differential signals (desired) while rejecting common-mode signals (undesired, like noise). A high CMRR is crucial in applications where the signal of interest is small compared to common-mode noise.

**Question 4:** In a voltage follower circuit, if the input is a 100 kHz sine wave, and the output amplitude is observed to be significantly less than the input amplitude, what op-amp parameter is likely limiting the performance? Explain why.
**Answer:** The **bandwidth** is likely limiting the performance. In a voltage follower, the gain is ideally 1 (0 dB). If the input frequency (100 kHz) is close to or exceeds the op-amp's unity-gain bandwidth, the closed-loop gain will decrease, causing the output amplitude to be less than the input amplitude. Slew rate is more about the *rate of change* of a large signal, leading to slope distortion, not necessarily a reduction in the amplitude of a sinusoidal signal at a given frequency unless the frequency is so high that the required slope exceeds the SR.

**Question 5:** If you are designing a precision DC amplifier and need to minimize output errors due to small input imbalances, which parameters would you prioritize checking from the datasheet?
**Answer:** You would prioritize checking:
1.  **Input Offset Voltage ($V_{os}$):** Directly causes a DC error at the output.
2.  **Input Bias Current ($I_B$):** Can cause a DC error if it flows through unbalanced input impedances.
3.  **Input Offset Current ($I_{OS}$):** Causes a DC error that is proportional to the difference in input impedances; if impedances are perfectly matched, this error is minimized, but it's still a factor.
4.  **Common-Mode Rejection Ratio (CMRR):** A high CMRR ensures that any common-mode voltage variations (which might include small DC shifts) are rejected, preserving the accuracy of the differential signal.

---

### 6. Summary and Key Takeaways

*   Understanding and measuring op-amp parameters is vital for practical application and troubleshooting.
*   Ideal op-amp parameters are theoretical; real op-amps have deviations that affect circuit performance.
*   Key parameters include $V_{os}$, $I_B$, $I_{OS}$, CMRR, Slew Rate, and Bandwidth.
*   Each parameter has specific measurement techniques, often involving open-loop or unity-gain configurations.
*   SPICE simulations are powerful tools for predicting and analyzing these parameters before building circuits.
*   For precision DC applications, prioritize low $V_{os}$, $I_B$, $I_{OS}$, and high CMRR.
*   For high-frequency applications, prioritize high Bandwidth and high Slew Rate.

---
**End of Module 1 Study Notes - Measurement of Op-Amp Parameters**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
