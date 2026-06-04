---
title: "Hartley"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f9a"
status: "completed"
scrapedAt: "2026-05-23T16:18:57.603Z"
---
# SOLID STATE DEVICES - Module 4: Oscillators: Introduction - Hartley Oscillator

## 1. Introduction to Oscillators

An oscillator is an electronic circuit that produces a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangle wave. Unlike amplifiers that amplify an existing input signal, oscillators generate a new signal without any external input signal (other than the DC power supply).

**Key Concepts:**

*   **Feedback:** Oscillators rely on positive feedback, where a portion of the output signal is fed back to the input in phase with the input signal. This positive feedback sustains the oscillation.
*   **Gain:** The active device (e.g., transistor) in the oscillator circuit must provide sufficient gain to overcome the losses in the feedback network.
*   **Frequency-determining network:** A component or combination of components that determines the frequency of oscillation. This is typically an LC or RC network.
*   **Barkhausen Criterion:** For sustained oscillations to occur, two conditions must be met:
    1.  The **loop gain** ($A\beta$) must be equal to unity ($|A\beta| = 1$).
    2.  The **phase shift** around the feedback loop must be $0^\circ$ or an integer multiple of $360^\circ$ ($0^\circ, 360^\circ, 720^\circ$, etc.).

**Importance:** Oscillators are fundamental building blocks in many electronic systems, including:

*   Radio and television transmitters and receivers
*   Communication systems
*   Signal generators
*   Timing circuits
*   Clocks in digital systems
*   Synthesizers

**Relation to Course Outcomes:** This topic directly contributes to **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)**. Understanding the Barkhausen criterion and the principles of positive feedback is crucial for designing and analyzing oscillator circuits.

**Textbook References:**

*   **Boylested & Nashelsky:** Chapters on Oscillators will detail the fundamental principles and different types of oscillators, including LC oscillators.
*   **Sedra & Smith:** Chapters on Oscillators will provide a rigorous analysis of oscillator circuits, focusing on the conditions for oscillation and various configurations.
*   **Bell:** Chapters on Oscillators will offer a practical approach, explaining the operation of common oscillator circuits and their applications.

---

## 2. The Hartley Oscillator

The Hartley oscillator is a type of LC oscillator characterized by its use of a tapped inductor (or two coupled inductors) in the feedback network. This tapped inductor, along with a capacitor, forms the resonant tank circuit that determines the frequency of oscillation.

**Key Concepts:**

*   **Tapped Inductor:** The defining feature of a Hartley oscillator. It consists of a single inductor with a tap, or two separate inductors that are magnetically coupled. The tap divides the inductor into two parts, $L_1$ and $L_2$.
*   **LC Tank Circuit:** The parallel combination of the total inductance ($L_1 + L_2$) and a capacitor ($C$) forms the resonant circuit.
*   **Positive Feedback:** The signal is fed back from the tank circuit to the active device (e.g., BJT or FET) to sustain oscillations. The feedback network provides both the required phase shift and amplitude reduction.
*   **Frequency of Oscillation:** Determined by the values of inductance and capacitance in the tank circuit.

**Circuit Configuration (BJT-based Hartley Oscillator):**

A common configuration uses a BJT as the active amplifying element.

```
      +Vcc
       |
       Rc
       |
      C1-----> Output
       |
      +---+
      |   |
     L1   C2
      |   |
      +---+---- Tap Point
      |   |
     L2   E
      |   |------- Ground
      |
      B------
      |     |
      Rb1   Rb2
      |     |
      +-----+---- Ground
```

*   **Active Device:** BJT (or FET) provides the amplification.
*   **Biasing Resistors (Rb1, Rb2):** Set the quiescent operating point of the transistor.
*   **Coupling Capacitor (C1):** Blocks DC from the output.
*   **Tank Circuit:** Composed of $L_1$, $L_2$, and $C$.
*   **Feedback Path:** The voltage developed across $L_2$ (or a portion of it) is coupled to the emitter (for common-emitter or common-collector configurations) or base (for common-base) of the transistor, providing positive feedback. In the common-emitter configuration shown, the emitter resistor $Re$ is often bypassed by a capacitor $Ce$ for AC signals, and the feedback is typically taken from the tap point and fed to the emitter. Sometimes, the feedback is taken from the collector tap and fed to the base.

**Operation:**

1.  **Start-up:** When power is applied, random noise in the circuit is amplified by the active device. This noise contains a wide range of frequencies.
2.  **Resonance:** The LC tank circuit acts as a band-pass filter. It resonates at its natural frequency, amplifying signals at that frequency and attenuating others.
3.  **Positive Feedback:** The amplified signal at the resonant frequency is fed back to the input of the transistor through the tapped inductor and the capacitor. The phase shift around the loop is $0^\circ$ (or $360^\circ$), ensuring positive feedback.
4.  **Sustained Oscillation:** If the gain of the active device is sufficient to compensate for the losses in the tank circuit (i.e., $|A\beta| \ge 1$), the amplitude of the oscillations will build up until limited by the non-linearities of the active device. The oscillations will then stabilize at the resonant frequency of the tank circuit.

**Analysis of Frequency of Oscillation:**

The total inductance of the tapped inductor is $L = L_1 + L_2$. The tank circuit is the parallel combination of this total inductance and the capacitance $C$. The resonant frequency ($f_r$) of an LC tank circuit is given by:

$f_r = \frac{1}{2\pi\sqrt{LC}}$

In a Hartley oscillator, the effective inductance ($L$) is the sum of the inductances on either side of the tap: $L = L_1 + L_2$.

**Therefore, the frequency of oscillation for a Hartley oscillator is:**

$f_{Hartley} = \frac{1}{2\pi\sqrt{(L_1 + L_2)C}}$

**Example:**

Consider a Hartley oscillator with $L_1 = 100 \mu H$, $L_2 = 50 \mu H$, and $C = 100 pF$.

The total inductance is $L = L_1 + L_2 = 100 \mu H + 50 \mu H = 150 \mu H$.

The frequency of oscillation is:

$f_{Hartley} = \frac{1}{2\pi\sqrt{(150 \times 10^{-6} H)(100 \times 10^{-12} F)}}$
$f_{Hartley} = \frac{1}{2\pi\sqrt{15000 \times 10^{-18}}}$
$f_{Hartley} = \frac{1}{2\pi\sqrt{1.5 \times 10^{-14}}}$
$f_{Hartley} = \frac{1}{2\pi \times 1.225 \times 10^{-7}}$
$f_{Hartley} \approx \frac{1}{7.697 \times 10^{-7}}$
$f_{Hartley} \approx 1.3 \times 10^6 Hz = 1.3 MHz$

**Amplitude of Oscillation:**

The amplitude of oscillation is related to the feedback ratio, which is determined by the ratio of inductances ($L_2/L_1$) and the gain of the active device. The active device saturates and cuts off during the oscillation cycle, limiting the amplitude.

**Condition for Oscillation:**

The loop gain must be unity or greater. In simplified terms, the gain of the active device must be sufficient to overcome the attenuation of the feedback network. The feedback ratio, $\beta$, is approximately the ratio of the voltage across $L_2$ to the total voltage across $(L_1 + L_2)$. If the tank circuit is idealized and the current is uniformly distributed, the voltage ratio is proportional to the inductance ratio:

$\beta \approx \sqrt{\frac{L_2}{L_1 + L_2}}$ (This is a simplification; more detailed analysis involves impedance in the tank circuit).

The gain of the active device ($A$) must satisfy $|A\beta| \ge 1$.

**Textbook References for Deeper Analysis:**

*   **Boylested & Nashelsky:** Will likely discuss the basic operation and frequency calculation, possibly with simplified gain considerations.
*   **Sedra & Smith:** Provides a more in-depth analysis, including the exact feedback factor and the stability criteria. They might use small-signal analysis to derive the exact loop gain.
*   **Bell:** Will offer practical aspects and troubleshooting, possibly with equivalent circuit diagrams for analysis.
*   **Neamen:** Offers detailed analysis techniques for oscillator circuits.
*   **Razavi:** Provides a modern perspective on oscillator design and analysis, potentially covering FET-based Hartley oscillators.
*   **Millman & Halkias:** Offers a fundamental and comprehensive treatment of transistor circuits, including oscillators.

---

## 3. Advantages and Disadvantages of Hartley Oscillators

**Advantages:**

*   **Simple Construction:** Uses a single tapped inductor (or two coupled inductors), which can be easily constructed by tapping a standard coil.
*   **Wide Frequency Range:** Can be designed to oscillate over a wide range of frequencies by varying $L$ and $C$ values.
*   **Stable Frequency:** The frequency is primarily determined by the LC tank circuit, which offers good frequency stability when properly designed.
*   **Higher Output:** Can generally provide a higher output amplitude compared to some other oscillator types.

**Disadvantages:**

*   **Difficulty in Obtaining High Frequencies:** At very high frequencies, the parasitic capacitances and inductances of the components and layout become significant, making it difficult to achieve very high and stable frequencies.
*   **Tapped Inductor Construction:** While simple, the construction of a precisely tapped inductor can be tedious, and the tap point can introduce losses or affect the Q-factor of the coil.
*   **Frequency Drift:** The frequency can drift with temperature changes, component aging, and variations in the supply voltage.
*   **Harmonic Content:** The output waveform is not a perfect sine wave and contains harmonics.

---

## 4. Design Considerations for Hartley Oscillators

**1. Frequency of Oscillation ($f_r$):**

*   Choose appropriate values for $L_1$, $L_2$, and $C$ based on the desired frequency using the formula: $f_r = \frac{1}{2\pi\sqrt{(L_1 + L_2)C}}$.
*   It's often easier to choose $C$ and then calculate the required total inductance $(L_1 + L_2)$.
*   For practical circuits, it's good to have a variable capacitor or inductor to fine-tune the frequency.

**2. Quality Factor (Q) of the Tank Circuit:**

*   The Q-factor of the tank circuit affects the stability and amplitude of oscillations. A higher Q-factor leads to a narrower bandwidth and more stable frequency.
*   $Q = \frac{\omega_r L_{total}}{R_p}$, where $R_p$ is the equivalent parallel resistance of the tank circuit. $R_p$ includes the resistance of the inductor coil and the effective resistance seen from the tank circuit looking into the active device.
*   Use high-Q inductors and capacitors.

**3. Feedback Ratio ($\beta$):**

*   The feedback ratio is determined by the ratio of inductances $L_2/L_1$. This ratio influences the gain requirement of the active device.
*   A common design choice is to have $L_1 \approx L_2$ for balanced feedback, though variations exist. The exact ratio is determined by the impedance presented by the transistor at the tap.

**4. Gain of the Active Device:**

*   The active device must provide sufficient gain to overcome the losses in the tank circuit and the feedback network.
*   The gain ($A$) of the transistor amplifier must satisfy $|A\beta| \ge 1$.
*   The selection of biasing components ($R_b1, R_b2$) and the active device (e.g., BJT or FET type) will determine the amplifier's gain.

**5. Biasing:**

*   Proper biasing of the active device is essential to ensure it operates in its active region and provides adequate gain without distortion.
*   The biasing network should be designed to be stable against variations in temperature and transistor parameters.

**6. Output Coupling:**

*   A capacitor is typically used to couple the output signal to the load, blocking the DC component.

**Example Design Step (CO4 - K4):**

**Problem:** Design a Hartley oscillator using a BJT to produce a frequency of 500 kHz. Assume a transistor with sufficient gain is available.

**Solution:**

1.  **Choose Capacitor:** Let's select a standard capacitor value, say $C = 0.01 \mu F$ (10 nF).
2.  **Calculate Total Inductance:**
    $f_r = \frac{1}{2\pi\sqrt{(L_1 + L_2)C}}$
    $500 \times 10^3 = \frac{1}{2\pi\sqrt{(L_1 + L_2)(0.01 \times 10^{-6})}}$
    $(L_1 + L_2) = \left(\frac{1}{2\pi f_r C}\right)^2$
    $(L_1 + L_2) = \left(\frac{1}{2\pi (500 \times 10^3)(0.01 \times 10^{-6})}\right)^2$
    $(L_1 + L_2) = \left(\frac{1}{2\pi \times 5 \times 10^{-3}}\right)^2$
    $(L_1 + L_2) = \left(\frac{1}{0.031416}\right)^2 \approx (31.83)^2 \approx 1013 \mu H$

3.  **Choose Inductance Values:** We need $L_1 + L_2 \approx 1013 \mu H$. A common practice is to choose $L_1$ and $L_2$ such that $L_1 \approx L_2$ for balanced feedback. Let's choose $L_1 \approx 500 \mu H$ and $L_2 \approx 500 \mu H$.
    *   Alternatively, one might choose a single inductor of $1013 \mu H$ and tap it at the midpoint. Or use two coupled inductors.

4.  **Biasing:** Design a voltage divider bias network ($R_{b1}, R_{b2}$) to bias the BJT in the active region. This requires knowing the transistor's parameters ($h_{FE}$, $V_{BE(on)}$).
    *   Let's assume a small-signal gain requirement from the transistor that would be satisfied by a typical common-emitter configuration.

5.  **Other Components:**
    *   Coupling capacitor ($C_1$) should be chosen such that it doesn't attenuate the signal at 500 kHz. A value like $0.1 \mu F$ would be suitable.
    *   Consider the emitter resistor ($R_e$) and its bypass capacitor ($C_e$) if used. $R_e$ influences the gain.

This design process demonstrates the application of knowledge from CO4 by selecting component values to meet a specific oscillation frequency requirement, which is a core aspect of oscillator design.

---

## 5. Practice Questions and Exercises

**Question 1:**

What are the two fundamental conditions required for sustained oscillations in any feedback oscillator circuit?
*(Relates to CO4 - K4)*

**Answer:**
1.  The loop gain must be equal to unity ($|A\beta| = 1$).
2.  The total phase shift around the feedback loop must be $0^\circ$ or an integer multiple of $360^\circ$.

---

**Question 2:**

A Hartley oscillator uses two inductors $L_1 = 200 \mu H$ and $L_2 = 100 \mu H$, and a capacitor $C = 50 pF$. Calculate the frequency of oscillation.
*(Relates to CO4 - K4)*

**Answer:**
Total inductance $L = L_1 + L_2 = 200 \mu H + 100 \mu H = 300 \mu H$.
$f_r = \frac{1}{2\pi\sqrt{LC}}$
$f_r = \frac{1}{2\pi\sqrt{(300 \times 10^{-6} H)(50 \times 10^{-12} F)}}$
$f_r = \frac{1}{2\pi\sqrt{15000 \times 10^{-18}}}$
$f_r = \frac{1}{2\pi\sqrt{1.5 \times 10^{-14}}}$
$f_r = \frac{1}{2\pi \times 1.225 \times 10^{-7}}$
$f_r \approx 1.3 \times 10^6 Hz = 1.3 MHz$

---

**Question 3:**

What is the primary advantage of using a tapped inductor in a Hartley oscillator compared to using two separate, uncoupled inductors?
*(Relates to CO4 - K4)*

**Answer:**
The primary advantage is simplicity of construction. A tapped inductor can be made by taking a single coil and creating a connection point (tap) along its winding. Using two separate inductors requires ensuring they are properly coupled magnetically to achieve the desired feedback effect, which can be more complex to implement and control.

---

**Question 4:**

If the frequency of oscillation needs to be increased in a Hartley oscillator with fixed $L_1$ and $L_2$, what should be done with the capacitor $C$?
*(Relates to CO4 - K4)*

**Answer:**
To increase the frequency of oscillation ($f_r = \frac{1}{2\pi\sqrt{(L_1 + L_2)C}}$), the value of the capacitor $C$ must be decreased.

---

**Question 5 (Conceptual):**

Describe how the Barkhausen criterion applies to the operation of a Hartley oscillator. Specifically, explain what aspect of the circuit contributes to the loop gain and what contributes to the phase shift.
*(Relates to CO4 - K4)*

**Answer:**
*   **Loop Gain:** The loop gain ($A\beta$) is the product of the gain of the active device ($A$) and the attenuation/amplification factor of the feedback network ($\beta$). The active device (BJT/FET) provides voltage or current gain ($A$). The feedback network (tapped inductor and capacitor) determines the feedback factor ($\beta$), which is typically less than 1 (providing attenuation) unless specific impedance matching occurs. The entire loop must have a gain of at least 1 for oscillation.
*   **Phase Shift:** The phase shift comes from both the active device and the feedback network. In a properly configured Hartley oscillator (e.g., common-emitter configuration with feedback to the emitter), the phase shifts combine to be $0^\circ$ or $360^\circ$ at the resonant frequency. The transistor's amplification stage typically provides a $180^\circ$ phase shift (e.g., common-emitter), and the LC tank circuit, at resonance, behaves as a purely resistive circuit with negligible phase shift. However, the feedback mechanism in the Hartley circuit is designed to ensure the net phase shift around the loop is $0^\circ$ or $360^\circ$. The tapped inductor and capacitor play a crucial role in phase shifting the signal from the output to the input.

---

## 6. Important Points to Remember

*   **Positive Feedback is Key:** Oscillators are designed around positive feedback principles.
*   **Barkhausen Criterion:** Always recall the two conditions: $|A\beta| = 1$ and $\phi_{loop} = n \cdot 360^\circ$.
*   **Hartley Specifics:** The defining feature is the tapped inductor (or coupled inductors) forming part of the resonant tank.
*   **Frequency Formula:** $f_r = \frac{1}{2\pi\sqrt{(L_1 + L_2)C}}$ is fundamental.
*   **Active Device Role:** Amplification is necessary to overcome losses.
*   **Tank Circuit Role:** Determines the oscillation frequency and provides filtering.
*   **Practical Design:** Consider component Q-factors, biasing stability, and output coupling.

---

## 7. Conclusion

The Hartley oscillator is a widely used LC oscillator circuit characterized by its simple construction utilizing a tapped inductor. Understanding its operation, the conditions for oscillation as described by the Barkhausen criterion, and the factors influencing its frequency and stability are essential for anyone learning about solid-state devices and electronic circuit design. This knowledge is directly applicable to CO4, enabling the analysis and design of oscillators for various communication and signal generation applications.
