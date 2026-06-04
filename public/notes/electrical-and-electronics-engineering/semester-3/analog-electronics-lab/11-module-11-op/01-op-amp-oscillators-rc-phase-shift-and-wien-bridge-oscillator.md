---
title: "Op- Amp Oscillators – RC Phase shift and Wien Bridge Oscillator"
subject: "ANALOG ELECTRONICS LAB"
module: "Module 11: Op"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d5b"
status: "completed"
scrapedAt: "2026-05-23T16:11:09.506Z"
---
# ANALOG ELECTRONICS LAB

## Module 11: Op-Amp Oscillators

### Topic: Op-Amp Oscillators – RC Phase Shift and Wien Bridge Oscillator

**Course Outcomes Addressed:**

*   **CO3:** Design and implement amplifier and oscillator circuits using BJT and JFET. (While this topic focuses on Op-Amps, the fundamental principles of oscillation are transferable and the design process aligns with designing amplifier circuits.)
*   **CO4:** Design and implement basic circuits using IC (OPAMP and 555 timers). (This is directly addressed as we are designing oscillator circuits using Op-Amps.)
*   **CO5:** Simulate electronic circuits using any circuit simulation software. (This can be applied to verify the design and operation of the oscillators.)

**Learning Outcomes Covered:**

*   Understand the fundamental principles of oscillation and the Barkhausen criterion.
*   Identify the components of an RC phase shift oscillator and explain their function.
*   Design and analyze an RC phase shift oscillator using an operational amplifier.
*   Identify the components of a Wien Bridge oscillator and explain their function.
*   Design and analyze a Wien Bridge oscillator using an operational amplifier.
*   Understand the importance of frequency determination in oscillator circuits.
*   Compare and contrast the characteristics of RC phase shift and Wien Bridge oscillators.

---

### 1. Introduction to Oscillators

**Definition:** An oscillator is an electronic circuit that produces a periodic, oscillating electronic signal, often a sine wave, square wave, or triangular wave. Oscillators do not require an external input signal to generate their output; they create their own.

**Key Requirement for Oscillation (Barkhausen Criterion):**

For an oscillator circuit to produce sustained oscillations, two conditions must be met:

1.  **Loop Gain Magnitude:** The magnitude of the *total loop gain* (gain of the amplifier plus attenuation of the feedback network) must be at least unity (≥ 1).
    *   $|A\beta| \ge 1$
    *   Where $A$ is the gain of the amplifier and $\beta$ is the feedback factor.
2.  **Phase Shift:** The *total phase shift* around the feedback loop must be 0° or an integer multiple of 360°.
    *   $\angle A\beta = 0^\circ \text{ or } 360^\circ n$, where $n$ is an integer.

**How Oscillators Work:**

Oscillators typically consist of two main parts:

*   **Amplifier:** Provides the necessary gain to overcome losses in the feedback network and maintain oscillations.
*   **Feedback Network:** Selects the frequency of oscillation by introducing a specific phase shift and attenuation at that frequency.

**Types of Oscillators:**

Oscillators can be broadly classified into:

*   **Feedback Oscillators:** Utilize a feedback loop to generate oscillations (e.g., RC Phase Shift, Wien Bridge, Colpitts, Hartley).
*   **Non-Feedback Oscillators:** Utilize non-linear elements or relaxation processes (e.g., relaxation oscillators, oscillators using Schmitt triggers).

This module focuses on **Feedback Oscillators** using Op-Amps.

---

### 2. Op-Amp RC Phase Shift Oscillator

**Concept:** This oscillator uses an operational amplifier as the active amplifying element and an RC (Resistor-Capacitor) network to provide the necessary phase shift and frequency selection. The RC network is designed to introduce a 180° phase shift at the desired oscillation frequency. The Op-Amp, configured as an inverting amplifier, also provides a 180° phase shift. Thus, the total phase shift around the loop is 360°.

**Circuit Diagram:**

```
      Vin
       |
       R1
       |
      .-.
      | |  Op-Amp (Inverting Configuration)
      '-'
       |  (-) -----+
       R2         |
       |          |
      .-.         |
      | |  Feedback Network (3 x RC sections)
      '-'         |
       |          |
       C1 -----.  |
       |       |  |
       R3 -----'  |
       |          |
       C2 -----.  |
       |       |  |
       R4 -----'  |
       |          |
       C3 -----.  |
       |       |  |
       R5 -----'  |
       |          |
      GND --------+
       |
      Vout
```

*   **Op-Amp:** Configured as an inverting amplifier. The feedback resistor ($R_f$) is typically set to a value to provide a gain of 20 or more to ensure $|A| > 1$ even with the attenuation of the RC network. Let's say $R_f = R_{gain}$.
*   **RC Feedback Network:** Consists of three cascaded RC sections. Each RC section shifts the phase by approximately 60° at the oscillation frequency, totaling 180° phase shift from the output back to the inverting input.

**Working Principle:**

1.  **Amplification:** The Op-Amp amplifies the signal from the feedback network.
2.  **Phase Shift:** The three RC sections in the feedback path are specifically chosen to produce a total phase shift of 180° at a particular frequency.
3.  **Positive Feedback:** When the output signal, after being phase-shifted by 180° by the RC network, is fed back to the inverting input of the Op-Amp, it results in an overall 360° phase shift (180° from RC network + 180° from inverting amplifier). This positive feedback sustains oscillations.
4.  **Frequency Determination:** The frequency of oscillation is determined by the values of the resistors ($R$) and capacitors ($C$) in the feedback network.

**Analysis:**

*   **Gain:** For an inverting amplifier, the gain is $A = -R_f / R_{in}$, where $R_{in}$ is the input resistor of the inverting amplifier. Let's assume $R_{in} = R_{gain}$. So, $A = -R_f / R_{gain}$.
*   **Phase Shift of RC Network:** Each RC section ($RC$) provides a phase shift. The transfer function of a single RC section is:
    $$H(j\omega) = \frac{R}{R + \frac{1}{j\omega C}} = \frac{j\omega RC}{1 + j\omega RC}$$
    The phase shift is $\phi = \arctan(\omega RC)$.
    For three identical RC sections cascaded, the total phase shift is $3\phi$. We need $3\phi = 180^\circ$, which means $\phi = 60^\circ$.
    $\tan(60^\circ) = \sqrt{3}$.
    So, $\omega RC = \sqrt{3}$.
    The frequency of oscillation ($f_0$) is:
    $$f_0 = \frac{\omega_0}{2\pi} = \frac{\sqrt{3}}{2\pi RC}$$
*   **Attenuation (Gain of Feedback Network $\beta$):** The attenuation of the RC network is the reciprocal of its gain. At the oscillation frequency ($\omega_0 = \frac{\sqrt{3}}{RC}$), the gain of each RC section is approximately 0.5 (for $\phi = 60^\circ$ and $\omega RC = \sqrt{3}$).
    The gain of the three cascaded RC sections is approximately $(0.5)^3 = 0.125$.
    The feedback factor $\beta = 0.125$.
*   **Barkhausen Criterion Check:**
    *   Total Phase Shift: $180^\circ$ (RC network) + $180^\circ$ (inverting amplifier) = $360^\circ$.
    *   Loop Gain Magnitude: $|A\beta| = |- \frac{R_f}{R_{gain}}| \times 0.125 \ge 1$.
    This means the amplifier gain must be $|A| = \frac{R_f}{R_{gain}} \ge \frac{1}{0.125} = 8$.
    In practice, a higher gain (e.g., 20 to 100) is used to ensure reliable oscillation and to allow for component tolerances.

**Design Considerations:**

*   **Frequency Selection:** Choose $R$ and $C$ values to set the desired frequency of oscillation. Common practice is to use standard capacitor values (e.g., 0.01 $\mu$F, 0.1 $\mu$F) and calculate the required resistance.
*   **Gain Setting:** The non-inverting input terminal of the Op-Amp is usually grounded for oscillation. The inverting input is connected to the feedback network. The feedback resistor ($R_f$) and input resistor ($R_{gain}$) of the Op-Amp determine its gain. Ensure $|A| > 8$.
*   **Component Tolerances:** Resistor and capacitor tolerances can affect the oscillation frequency and amplitude. Use components with tighter tolerances for more stable oscillations.
*   **Practical Issues:** The Op-Amp's bandwidth can limit the oscillation frequency. The output amplitude might not be a perfect sine wave due to Op-Amp limitations or gain setting.

**Example Design:**

Design an RC phase shift oscillator to produce a sine wave of approximately 1 kHz.

1.  **Choose Capacitor Value:** Let $C = 0.1 \mu$F.
2.  **Calculate Resistance:** Using $f_0 = \frac{\sqrt{3}}{2\pi RC}$,
    $R = \frac{\sqrt{3}}{2\pi f_0 C} = \frac{1.732}{2 \times \pi \times 1000 \times 0.1 \times 10^{-6}}$
    $R \approx \frac{1.732}{6.283 \times 10^{-4}} \approx 2757 \Omega$.
    Choose a standard resistor value close to this, e.g., $R = 2.7 k\Omega$ or $R=2.8 k\Omega$.
3.  **Set Op-Amp Gain:** Let's use $R_{gain} = 1 k\Omega$. To ensure a gain greater than 8, we can set $R_f = 10 k\Omega$ (gain = 10).
    $A = -10$.
    $|A\beta| = |-10| \times 0.125 = 1.25 > 1$. This is sufficient.

**Practice Question (RC Phase Shift Oscillator):**

1.  What is the minimum gain required for the amplifier stage in an RC phase shift oscillator with three RC sections if the feedback network attenuates the signal by a factor of 8?
    *   **Answer:** The feedback factor $\beta = 1/8$. According to Barkhausen criterion, $|A\beta| \ge 1$, so $|A| \times (1/8) \ge 1$, which means $|A| \ge 8$.

---

### 3. Op-Amp Wien Bridge Oscillator

**Concept:** The Wien Bridge oscillator is widely used for generating sine waves with good amplitude stability and low distortion. It utilizes an Op-Amp as the amplifier and an RC network, forming a Wien bridge, for frequency selection and phase shifting. The bridge is designed to have maximum attenuation and 0° phase shift at the oscillation frequency when balanced.

**Circuit Diagram:**

```
      Vin
       |
      .-.
      | |  Op-Amp (Non-inverting Configuration)
      '-'
       |  (+) -----+-------------------+
       R_f1        |                   |
       |           |                   |
      .-.          |                   |
      | |  Feedback Network 1 (RC)      |
      '-'          |                   |
       |           |                   |
       C1 -----.   |                   |
       |       |   |                   |
       R1 -----+---'                   |
       |                           Vout
       |                           |
      GND                          |
                                   .-.
                                   | |  Feedback Network 2 (R)
                                   '-'
                                    |
                                   GND
```

*   **Op-Amp:** Typically configured as a non-inverting amplifier.
*   **RC Network (Frequency Determining Network):** Consists of a series RC combination and a parallel RC combination. This network provides a gain of 1/3 and 0° phase shift at a specific frequency when the bridge is balanced.
*   **Gain Setting Network:** A resistive feedback path is used to provide additional gain to compensate for the attenuation of the RC network and satisfy the Barkhausen criterion.

**Working Principle:**

1.  **Frequency Determining Network:** The series $R_1C_1$ and parallel $R_2C_2$ network acts as a frequency-sensitive filter. At the oscillation frequency, the impedance of the capacitor in the series arm equals the impedance of the capacitor in the parallel arm ($|X_{C1}| = R_2$ and $R_1 = |X_{C2}|$, assuming $R_1=R_2$ and $C_1=C_2$). This condition leads to 0° phase shift.
2.  **Gain Control:** The Wien bridge itself introduces an attenuation of 1/3 at the oscillation frequency. Therefore, the amplifier stage must provide a gain of at least 3 to satisfy the Barkhausen criterion ($|A\beta| \ge 1$, where $\beta = 1/3$).
3.  **Non-Inverting Amplifier:** The Op-Amp is configured as a non-inverting amplifier, which has a 0° phase shift.
4.  **Positive Feedback:** The signal from the Wien bridge feedback network, which is in phase with the output, is fed to the non-inverting input of the Op-Amp. This provides positive feedback.
5.  **Amplitude Stability:** To ensure stable oscillation amplitude, the gain of the amplifier must be just slightly greater than 3. This is often achieved using a variable resistor or a circuit that automatically adjusts the gain.

**Analysis:**

*   **Frequency of Oscillation:** For a Wien bridge with $R_1 = R_2 = R$ and $C_1 = C_2 = C$, the frequency of oscillation is:
    $$f_0 = \frac{1}{2\pi RC}$$
    At this frequency, the impedance of the series arm is $R + jX_C$ and the impedance of the parallel arm is $R || \frac{1}{j\omega C} = \frac{R \times \frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = \frac{R}{1 + j\omega RC}$.
    The voltage at the junction of the parallel arm is:
    $$V_{junction} = V_{out} \times \frac{\frac{R}{1 + j\omega RC}}{\frac{R}{1 + j\omega RC} + R + \frac{1}{j\omega C}}$$
    At $\omega_0 = \frac{1}{RC}$, $|X_C| = R$.
    $V_{junction} = V_{out} \times \frac{R || (-jR)}{R || (-jR) + R + (-jR)}$
    $V_{junction} = V_{out} \times \frac{\frac{R(-jR)}{R - jR}}{\frac{R(-jR)}{R - jR} + R - jR} = V_{out} \times \frac{\frac{-jR^2}{R(1-j)}}{\frac{-jR^2}{R(1-j)} + R(1-j)}$
    $V_{junction} = V_{out} \times \frac{\frac{-jR}{1-j}}{\frac{-jR}{1-j} + R(1-j)} = V_{out} \times \frac{-jR}{R(-j + (1-j)^2)} = V_{out} \times \frac{-j}{(-j + (1 - 2j - 1))}$
    $V_{junction} = V_{out} \times \frac{-j}{(-j - 2j)} = V_{out} \times \frac{-j}{-3j} = V_{out} \times \frac{1}{3}$
    The phase shift is 0°.
    The feedback factor $\beta = 1/3$.
*   **Amplifier Gain:** The non-inverting amplifier gain is $A = 1 + \frac{R_{f1}}{R_{f2}}$.
*   **Barkhausen Criterion Check:**
    *   Total Phase Shift: $0^\circ$ (Wien bridge) + $0^\circ$ (non-inverting amplifier) = $0^\circ$.
    *   Loop Gain Magnitude: $|A\beta| = |(1 + \frac{R_{f1}}{R_{f2}})| \times \frac{1}{3} \ge 1$.
    This means $1 + \frac{R_{f1}}{R_{f2}} \ge 3$.
    Therefore, $\frac{R_{f1}}{R_{f2}} \ge 2$. The gain of the amplifier stage must be at least 3.

**Design Considerations:**

*   **Frequency Selection:** Choose $R$ and $C$ values for the desired frequency. Using equal values for all resistors and capacitors simplifies the design.
*   **Gain Setting for Stability:** To achieve good amplitude stability and prevent clipping, the gain should be slightly above 3. A common technique is to use a potentiometer for $R_{f1}$ or $R_{f2}$ to fine-tune the gain. Alternatively, a lamp or diode-based gain stabilization circuit can be employed (as discussed in some advanced texts).
*   **Component Selection:** Using high-quality components with low distortion characteristics is crucial for a clean sine wave output.
*   **Initial Start-up:** For oscillations to start, there must be a slight initial imbalance in the gain, allowing the signal to build up.

**Example Design:**

Design a Wien Bridge oscillator to produce a sine wave of approximately 10 kHz.

1.  **Choose Component Values:** Let $R_1 = R_2 = R = 10 k\Omega$ and $C_1 = C_2 = C = 1.59 nF$.
    $f_0 = \frac{1}{2\pi RC} = \frac{1}{2\pi \times 10 k\Omega \times 1.59 nF} \approx \frac{1}{2\pi \times 10^4 \times 1.59 \times 10^{-9}} \approx 10 kHz$.
2.  **Set Op-Amp Gain:** We need the amplifier gain to be slightly greater than 3. Let's set $R_{f2} = 10 k\Omega$. To achieve a gain of approximately 3, we need $1 + R_{f1}/R_{f2} = 3$, so $R_{f1}/R_{f2} = 2$. Thus, $R_{f1} = 2 \times R_{f2} = 2 \times 10 k\Omega = 20 k\Omega$.
    So, $R_{f1} = 20 k\Omega$ and $R_{f2} = 10 k\Omega$.

**Practice Question (Wien Bridge Oscillator):**

1.  What is the feedback factor ($\beta$) of a Wien bridge network when $R_1=R_2=R$ and $C_1=C_2=C$ at the oscillation frequency?
    *   **Answer:** $\beta = 1/3$.
2.  What is the minimum required gain of the amplifier stage in a Wien Bridge oscillator?
    *   **Answer:** 3.

---

### 4. Comparison: RC Phase Shift vs. Wien Bridge Oscillator

| Feature              | RC Phase Shift Oscillator                               | Wien Bridge Oscillator                                      |
| :------------------- | :------------------------------------------------------ | :---------------------------------------------------------- |
| **Oscillation Type** | Sine wave                                               | Primarily sine wave                                         |
| **Feedback Network** | Cascaded RC sections                                    | Wien bridge (series RC and parallel RC)                     |
| **Phase Shift**      | 180° (RC network) + 180° (inverting amplifier) = 360°   | 0° (Wien bridge) + 0° (non-inverting amplifier) = 0°        |
| **Gain Requirement** | Amplifier gain $\ge 8$ (for 3 RC sections)            | Amplifier gain $\ge 3$                                      |
| **Amplitude Stability**| Less stable; output can be distorted or clipped       | Good amplitude stability, lower distortion (with AGC)       |
| **Frequency Range**  | Limited by Op-Amp bandwidth, practical for lower freq. | Suitable for a wider range of frequencies, including higher. |
| **Complexity**       | Simpler design (more components but simpler concept)    | Can be more complex to stabilize amplitude                  |
| **Output Waveform**  | Can be distorted if gain margin is too high           | Generally produces a cleaner sine wave                      |

---

### 5. Key Points to Remember

*   **Barkhausen Criterion:** $|A\beta| \ge 1$ and $\angle A\beta = 360^\circ n$.
*   **RC Phase Shift Oscillator:** Requires 180° phase shift from the RC network and uses an inverting amplifier (180° phase shift). Each RC section provides approximately 60° shift. Frequency: $f_0 = \frac{\sqrt{3}}{2\pi RC}$. Amplifier gain must be $\ge 8$ for 3 sections.
*   **Wien Bridge Oscillator:** Uses a Wien bridge network which provides 0° phase shift and attenuation of 1/3 at the oscillation frequency. Requires a non-inverting amplifier (0° phase shift) with a gain of $\ge 3$. Frequency: $f_0 = \frac{1}{2\pi RC}$ (for equal R and C).
*   **Amplitude Stabilization:** Crucial for good sine wave output, especially in Wien bridge oscillators. AGC (Automatic Gain Control) techniques or careful gain setting are employed.
*   **Component Selection:** Resistor and capacitor values determine the frequency. Op-amp limitations (bandwidth, slew rate) affect performance at higher frequencies.
*   **Verification:** Oscilloscope is essential for observing the output waveform and confirming the frequency of oscillation. Circuit simulation software (CO5) can be used for pre-design verification.

---

### 6. Practice Problems & Exercises

1.  **Design an RC phase shift oscillator using an Op-Amp to generate a sine wave of approximately 5 kHz. Choose suitable resistor and capacitor values. Specify the gain required for the Op-Amp.**
    *   **Solution Hint:**
        *   Choose $C = 0.01 \mu F$.
        *   Calculate $R = \frac{\sqrt{3}}{2\pi f_0 C} = \frac{1.732}{2\pi \times 5000 \times 0.01 \times 10^{-6}} \approx 11035 \Omega$. Choose $R = 11 k\Omega$.
        *   Required amplifier gain $|A| \ge 8$. You can set $R_{gain} = 1 k\Omega$ and $R_f = 10 k\Omega$ for a gain of 10.

2.  **Design a Wien Bridge oscillator to produce a sine wave of 20 kHz. Specify the values of R, C, $R_{f1}$, and $R_{f2}$ for the Op-Amp.**
    *   **Solution Hint:**
        *   Choose $R = 10 k\Omega$.
        *   Calculate $C = \frac{1}{2\pi f_0 R} = \frac{1}{2\pi \times 20000 \times 10000} \approx 0.796 nF$. Choose $C = 0.82 nF$ or $0.75 nF$ for practical values.
        *   Required amplifier gain $A = 1 + R_{f1}/R_{f2} \ge 3$. Set $R_{f2} = 10 k\Omega$. For a gain of 3, $R_{f1} = 2 \times R_{f2} = 20 k\Omega$.

3.  **What happens to the output waveform of a Wien Bridge oscillator if the gain of the amplifier stage is too high?**
    *   **Answer:** If the gain is too high, the output waveform will be clipped or distorted, resembling a square wave, because the Op-Amp will saturate at its positive and negative voltage limits.

4.  **Why is the Wien Bridge oscillator generally preferred for generating low-distortion sine waves compared to the RC phase shift oscillator?**
    *   **Answer:** The Wien bridge oscillator uses a frequency-dependent feedback network that provides 0° phase shift at the desired frequency. Combined with a non-inverting amplifier, it offers a gain of 3 at this frequency. This minimal gain requirement and the characteristic of the Wien bridge network contribute to lower distortion. Furthermore, techniques for amplitude stabilization (like using lamps or diodes) are more effectively implemented with the Wien bridge oscillator, further improving sine wave purity.

---
