---
title: "Differentiator and Integrator circuits-practical circuits"
subject: "ANALOG ELECTRONICS"
module: "Module 3: Introduction to Operational Amplifiers (Op"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b66"
status: "completed"
scrapedAt: "2026-05-23T16:10:57.602Z"
---
# ANALOG ELECTRONICS: Module 3 - Introduction to Operational Amplifiers (Op-Amps)

## Topic: Differentiator and Integrator Circuits - Practical Circuits

This module delves into two fundamental Op-Amp applications: differentiator and integrator circuits. We will explore their theoretical operation and then focus on the practical implementations, addressing their limitations and how to overcome them.

---

### Learning Outcomes Covered:

*   **Design of Practical Differentiator Circuits:** Understanding the limitations of ideal differentiators and designing circuits that mitigate these issues.
*   **Design of Practical Integrator Circuits:** Recognizing the drawbacks of basic integrators and implementing practical designs for improved performance.
*   **Analysis of Practical Differentiator and Integrator Circuits:** Evaluating the behavior of these circuits under non-ideal conditions.

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO3: Design and develop various OPAMP application circuits. (Knowledge Level: K3)** - We will be designing and understanding the design principles of differentiator and integrator circuits.

---

### Key Concepts and Definitions:

*   **Operational Amplifier (Op-Amp):** A high-gain, direct-coupled, differential voltage amplifier with a single-ended output. Ideal Op-Amp characteristics include infinite open-loop gain, infinite input impedance, zero output impedance, infinite bandwidth, and zero voltage offset.
*   **Differentiator Circuit:** An analog circuit that produces an output voltage proportional to the rate of change (derivative) of its input voltage.
*   **Integrator Circuit:** An analog circuit that produces an output voltage proportional to the integral (accumulation) of its input voltage over time.
*   **Frequency Response:** The behavior of a circuit over a range of input frequencies.
*   **Gain-Bandwidth Product (GBWP):** A figure of merit for Op-Amps that relates the open-loop gain to the bandwidth.
*   **Slew Rate:** The maximum rate of change of the Op-Amp's output voltage.
*   **Offset Voltage:** A small DC voltage at the Op-Amp's output when the input voltage is zero.
*   **Noise:** Unwanted random fluctuations in the output signal.

---

### 1. Practical Differentiator Circuits

#### 1.1. Ideal Differentiator Recap

As discussed in earlier modules, the ideal differentiator circuit uses an Op-Amp with the input signal applied to the inverting terminal through a capacitor ($C_1$) and a feedback resistor ($R_f$) connected between the output and the inverting terminal.

*   **Circuit Diagram:**
    ```
           R_f
      +----/\/\/----+------> Output (V_out)
      |             |
     ---           _|_
     --- C_1      |   | -
      |           |___| +
      |             |
    V_in ---+-------+
            |
           GND
    ```

*   **Transfer Function:** $V_{out}(s) = -R_f C_1 s V_{in}(s)$
*   **Output Voltage:** $V_{out}(t) = -R_f C_1 \frac{dV_{in}(t)}{dt}$

#### 1.2. Limitations of the Ideal Differentiator

The ideal differentiator circuit suffers from several practical limitations:

*   **High-Frequency Gain:** The gain of an ideal differentiator increases with frequency ($|A_v| = 20 \log_{10}(R_f C_1 f)$). This means even small high-frequency noise present at the input can be amplified significantly, leading to a noisy output.
*   **Instability:** The phase shift introduced by the capacitive input element, combined with the Op-Amp's internal phase shifts, can lead to instability and oscillation, especially at higher frequencies.
*   **Limited Bandwidth:** The circuit's bandwidth is limited by the Op-Amp's GBWP. At high frequencies, the Op-Amp's open-loop gain drops, making the circuit deviate from ideal differentiator behavior.
*   **Input Impedance:** The input impedance of an ideal differentiator is capacitive ($Z_{in} = 1/(sC_1)$), which decreases with increasing frequency. This can cause loading effects on the source signal at higher frequencies.

#### 1.3. Practical Differentiator Circuit Design

To overcome these limitations, practical differentiator circuits incorporate modifications:

**1.3.1. Adding a Series Resistor ($R_1$) at the Input (Noise Reduction):**

*   **Modification:** A resistor ($R_1$) is placed in series with the input capacitor ($C_1$).
*   **Circuit Diagram:**
    ```
           R_f
      +----/\/\/----+------> Output (V_out)
      |             |
     ---           _|_
     --- C_1      |   | -
      |           |___| +
      |             |
    V_in ---+-------+
            |
           R_1
            |
           GND
    ```
*   **Effect:**
    *   **Reduces High-Frequency Gain:** The series resistor ($R_1$) limits the gain at high frequencies. The gain at very high frequencies becomes approximately $-R_f/R_1$. This acts as a low-pass filter, attenuating unwanted high-frequency noise.
    *   **Improves Stability:** By limiting the high-frequency gain, this modification helps to prevent oscillations.

*   **Transfer Function (Approximation):**
    $V_{out}(s) = -\frac{R_f C_1 s}{1 + R_1 C_1 s} V_{in}(s)$

*   **Choosing $R_1$:** A common practice is to choose $R_1$ such that the corner frequency of the low-pass filter it forms with $C_1$ is equal to or less than the corner frequency of the Op-Amp's open-loop response. This is typically chosen to be around the Op-Amp's unity-gain frequency.

    **Important Point to Remember (Textbook Reference - e.g., Paynter):**  The time constant $R_1 C_1$ is often selected to be less than or equal to the Op-Amp's gain-bandwidth product divided by the desired differentiation frequency. This ensures stability and good differentiator action up to the desired frequency range.

**1.3.2. Adding a Parallel Resistor ($R_2$) Across the Feedback Resistor ($R_f$) (Further Stability and Input Impedance Improvement):**

*   **Modification:** A resistor ($R_2$) is connected in parallel with the feedback resistor ($R_f$).
*   **Circuit Diagram:**
    ```
        +----/\/\/----+------> Output (V_out)
        |     R_f     |
        |    +-----/\/\/---+
        |    |           |
       ---   |          _|_
       --- C_1      |   | -
        |           |___| +
        |             |
      V_in ---+-------+
              |
             R_1
              |
             GND
    ```
*   **Effect:**
    *   **Further Reduces High-Frequency Gain:** The parallel resistor ($R_2$) further limits the high-frequency gain, making the circuit more stable. The gain at very high frequencies approaches $-R_2/R_1$.
    *   **Improves Input Impedance:** At DC and very low frequencies, the input impedance is dominated by $R_1$. At higher frequencies, it's still capacitive. The resistor $R_2$ helps to stabilize the input impedance at frequencies where the capacitor's impedance becomes very low.

*   **Choosing $R_2$:** The value of $R_2$ is often chosen to be equal to $R_1$.

**1.3.3. Adding a Small Capacitor ($C_f$) in Parallel with $R_f$ (Bandwidth Limiting and Stability):**

*   **Modification:** A small capacitor ($C_f$) is placed in parallel with the feedback resistor ($R_f$).
*   **Circuit Diagram:**
    ```
           +----/\/\/----+------> Output (V_out)
           |     R_f     |
           |    +--------+
           |    |    ---
           |    |    --- C_f
          ---   |     |
          --- C_1   _|_
           |       |   | -
         V_in --+--|___| +
                |   |
               R_1  |
                |   |
               GND
    ```
*   **Effect:**
    *   **More Precise Bandwidth Limiting:** This capacitor acts as a low-pass filter in the feedback path, effectively limiting the bandwidth of the differentiator.
    *   **Further Stability Improvement:** It further reduces the gain at high frequencies, enhancing stability and preventing oscillations.
    *   **More Consistent Differentiator Action:** By limiting the frequency range where the circuit operates as a differentiator, it can provide more predictable output for a given input signal.

*   **Choosing $C_f$:** The value of $C_f$ is critical. It's typically chosen such that the pole created by $R_f || C_f$ is at or above the frequency where the Op-Amp's open-loop gain reaches unity. The frequency where the differentiator action starts to roll off is approximately $1/(2\pi R_f C_f)$.

    **Important Point to Remember (Textbook Reference - e.g., Neaman):** The value of $C_f$ is chosen to set the upper cutoff frequency of the differentiator. A common rule of thumb is to set this cutoff frequency to be approximately the frequency where the Op-Amp's open-loop gain is equal to the desired low-frequency gain of the differentiator.

**1.3.4. Using an Op-Amp with a Low Slew Rate and Low Noise:**

*   **Consideration:** For practical differentiator circuits, it's crucial to select Op-Amps that have a low slew rate and low input noise. Op-Amps with high slew rates can introduce distortion for fast-changing input signals. Low-noise Op-Amps are essential to prevent the amplification of unwanted noise.

#### 1.4. Example Application: Differentiator for Edge Detection

A differentiator circuit can be used to detect rapid changes in an input signal, such as edges in a pulse or waveform.

*   **Input:** A square wave.
*   **Expected Output:** Two sharp negative and positive spikes corresponding to the rising and falling edges of the square wave.

#### 1.5. Practice Question (Differentiator):

**Question:** Design a practical differentiator circuit using an LM741 Op-Amp. The circuit should differentiate input signals up to 10 kHz and provide a low-frequency gain of approximately 10. The input signal is expected to have some high-frequency noise. Assume an input capacitor $C_1 = 0.1 \mu F$.

**Solution:**

1.  **Low-Frequency Gain:** We want $|A_v| = R_f/R_1 = 10$.
2.  **Choosing $R_1$ and $R_f$:** Let $R_1 = 10 k\Omega$. Then $R_f = 10 \times R_1 = 100 k\Omega$.
3.  **Choosing $R_1$ for Noise Reduction:** The gain should be limited at high frequencies. Let's choose $R_1$ such that $R_1 C_1$ creates a pole at a frequency below 10 kHz. The feedback resistor limits the gain to $-R_f/R_1 = -100k/10k = -10$. The noise gain is limited by the ratio $R_f/R_1$.
4.  **Choosing $C_f$ for Bandwidth Limiting:** The LM741 Op-Amp has a GBWP of approximately 1 MHz. We want the differentiator action to roll off around 10 kHz. The frequency where the feedback impedance becomes comparable to $R_f$ due to $C_f$ is approximately $f_{cutoff} = 1/(2\pi R_f C_f)$.
    So, $10 \text{ kHz} = 1/(2\pi \times 100 k\Omega \times C_f)$.
    $C_f = 1/(2\pi \times 100 k\Omega \times 10 k\Omega) = 1/(2\pi \times 10^3 \Omega \times 10^4 \Omega) = 1/(2\pi \times 10^7) \approx 15.9 \times 10^{-9} F = 15.9 nF$.
    We can choose a standard value like $C_f = 15 nF$ or $22 nF$. Let's choose $C_f = 15 nF$.
5.  **Adding $R_2$ (Optional but good practice):** We can add $R_2$ in parallel with $R_f$. Let's choose $R_2 = R_1 = 10 k\Omega$. This further limits the gain at very high frequencies to $-R_2/R_1 = -10k/10k = -1$.

**Final Practical Differentiator Circuit Components:**

*   $C_1 = 0.1 \mu F$
*   $R_1 = 10 k\Omega$
*   $R_f = 100 k\Omega$
*   $C_f = 15 nF$ (in parallel with $R_f$)
*   $R_2 = 10 k\Omega$ (in parallel with $R_f$)

*(Note: The exact values of $C_f$ and $R_2$ depend on the specific Op-Amp used and the desired performance criteria.)*

---

### 2. Practical Integrator Circuits

#### 2.1. Ideal Integrator Recap

The ideal integrator circuit uses an Op-Amp with the input signal applied to the inverting terminal through a feedback capacitor ($C_f$) and a feedback resistor ($R_1$) connected between the output and the inverting terminal. The input signal is applied to the input resistor ($R_{in}$).

*   **Circuit Diagram:**
    ```
           R_in
      +----/\/\/----+------> Output (V_out)
      |             |
     ---           _|_
     --- C_f      |   | -
      |           |___| +
      |             |
    V_in ---+-------+
            |
           GND
    ```

*   **Transfer Function:** $V_{out}(s) = -\frac{1}{R_{in} C_f s} V_{in}(s)$
*   **Output Voltage:** $V_{out}(t) = -\frac{1}{R_{in} C_f} \int V_{in}(t) dt$

#### 2.2. Limitations of the Ideal Integrator

The ideal integrator circuit has several significant practical drawbacks:

*   **Drift at DC:** The gain of an ideal integrator is infinite at DC ($|A_v| = 1/(2\pi R_{in} C_f f)$). Any small DC offset voltage at the input (e.g., from the Op-Amp's input offset voltage or bias currents) will be integrated, causing the output to drift towards saturation. This is a major issue.
*   **Saturation:** Due to the DC drift, the output voltage can quickly reach the Op-Amp's saturation limits, rendering the integrator useless.
*   **Limited Bandwidth:** The gain decreases with frequency. The Op-Amp's finite GBWP limits the frequency range over which the circuit behaves as an integrator.
*   **High Input Impedance (at Low Frequencies):** The input impedance is essentially $R_{in}$, which can be large.

#### 2.3. Practical Integrator Circuit Design

To address the limitations, practical integrator circuits are designed with modifications:

**2.3.1. Adding a Parallel Resistor ($R_f$) Across the Feedback Capacitor ($C_f$) (DC Gain Stabilization):**

*   **Modification:** A resistor ($R_f$) is connected in parallel with the feedback capacitor ($C_f$).
*   **Circuit Diagram:**
    ```
           R_in
      +----/\/\/----+------> Output (V_out)
      |             |
     ---           _|_
     --- C_f      |   | -
      |    +------|___| +
      |    |      |
    V_in --+------+----/\/\/---- R_f
           |
          GND
    ```
*   **Effect:**
    *   **Limits DC Gain:** The parallel resistor $R_f$ provides a finite gain at DC (and very low frequencies), equal to $-R_f/R_{in}$. This prevents the output from drifting to saturation due to DC offsets.
    *   **Creates a Low-Pass Filter:** The combination of $R_f$ and $C_f$ forms a low-pass filter, setting a lower cutoff frequency for the integrator's operation. This is the primary mechanism for preventing DC drift.

*   **Choosing $R_f$:** The value of $R_f$ is chosen to be large enough so that for the desired integration frequency range, the capacitive impedance of $C_f$ is much smaller than $R_f$. However, it needs to be small enough to limit the DC gain to an acceptable level (e.g., 100 or 1000). A common choice is $R_f = 10 R_{in}$ or higher.

    **Important Point to Remember (Textbook Reference - e.g., Boylestad):** The parallel resistor $R_f$ is essential to counteract the infinite DC gain of the ideal integrator. Its value should be selected to provide sufficient DC gain stabilization without significantly affecting the integration performance at the desired operating frequencies.

**2.3.2. Using a Biasing Resistor ($R_B$) for Input Bias Current Compensation (if necessary):**

*   **Consideration:** If the Op-Amp has significant input bias currents, a resistor can be placed in series with the non-inverting input to balance the resistances seen by both inputs. This is often required for bipolar input Op-Amps.

**2.3.3. Using an Op-Amp with Low Input Offset Voltage and Input Bias Current:**

*   **Consideration:** Similar to differentiators, using Op-Amps with low input offset voltage and input bias currents will minimize the inherent DC drift, even with the presence of $R_f$.

**2.3.4. Practical Considerations for Component Selection:**

*   **Capacitor Quality:** Use high-quality capacitors (e.g., film capacitors) for $C_f$ to ensure stable capacitance values and low leakage.
*   **Resistor Tolerance:** Use resistors with appropriate tolerance to achieve the desired integration constant.

#### 2.4. Example Application: Ramp Generator

An integrator circuit driven by a constant DC input voltage will produce a ramp output voltage.

*   **Input:** A constant DC voltage, $V_{in}$.
*   **Expected Output:** A linear ramp voltage $V_{out}(t) = -\frac{1}{R_{in} C_f} V_{in} t + V_{initial}$. The slope of the ramp is determined by the integration constant.

#### 2.5. Practice Question (Integrator):

**Question:** Design a practical integrator circuit using an LM741 Op-Amp to integrate input signals in the frequency range of 100 Hz to 10 kHz. The integration constant should be $1/(10^4)$. The input signal is an audio signal with a small DC offset.

**Solution:**

1.  **Integration Constant:** We need $1/(R_{in} C_f) = 10^4$.
2.  **Choosing $C_f$ and $R_{in}$:** Let $C_f = 0.1 \mu F$.
    Then $R_{in} = 1/(10^4 \times C_f) = 1/(10^4 \times 0.1 \times 10^{-6}) = 1/(10^{-3}) = 1000 \Omega = 1 k\Omega$.
3.  **Stabilizing DC Gain:** We need to limit the DC gain to prevent saturation. Let's choose $R_f$ such that the DC gain is around 100.
    DC Gain = $-R_f/R_{in} = -100$.
    $R_f = 100 \times R_{in} = 100 \times 1 k\Omega = 100 k\Omega$.
4.  **Checking Bandwidth Limitation:** The low-pass filter formed by $R_f || C_f$ sets the lower cutoff frequency. The effective gain starts to drop when the impedance of $C_f$ becomes comparable to $R_f$. The frequency where the gain is reduced by 3dB is approximately $f_{low\_cutoff} = 1/(2\pi R_f C_f)$.
    $f_{low\_cutoff} = 1/(2\pi \times 100 k\Omega \times 0.1 \mu F) = 1/(2\pi \times 10^5 \times 10^{-7}) = 1/(2\pi \times 10^{-2}) \approx 15.9 Hz$.
    This is well below our desired operating range of 100 Hz to 10 kHz, so the integrator will function correctly in this range.

**Final Practical Integrator Circuit Components:**

*   $R_{in} = 1 k\Omega$
*   $C_f = 0.1 \mu F$
*   $R_f = 100 k\Omega$ (in parallel with $C_f$)

*(Note: For critical applications, a biasing resistor for the non-inverting input might also be required.)*

---

### 3. Summary of Important Points to Remember:

**For Differentiators:**

*   **Problem:** High-frequency gain, noise amplification, instability.
*   **Solutions:** Add series resistor ($R_1$) for noise reduction, parallel resistor ($R_2$) for stability, and/or feedback capacitor ($C_f$) for bandwidth limiting.
*   **Selection Criteria:** Choose components to limit the high-frequency gain and ensure stability up to the desired operating frequency.
*   **Op-Amp Choice:** Low-noise, moderate slew rate Op-Amps are preferred.

**For Integrators:**

*   **Problem:** DC offset drift, saturation.
*   **Solution:** Add a parallel resistor ($R_f$) across the feedback capacitor ($C_f$) to limit DC gain.
*   **Selection Criteria:** Choose $R_f$ to provide sufficient DC stabilization without significantly affecting the desired integration range. $R_f$ sets the low-frequency cutoff.
*   **Op-Amp Choice:** Low input offset voltage and low input bias current Op-Amps are beneficial.

---
