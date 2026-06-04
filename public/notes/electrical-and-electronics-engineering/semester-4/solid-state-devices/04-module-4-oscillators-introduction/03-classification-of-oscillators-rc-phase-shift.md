---
title: "Classification of oscillators - RC phase shift"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f98"
status: "completed"
scrapedAt: "2026-05-23T16:18:56.064Z"
---
# SOLID STATE DEVICES - Module 4: Oscillators: Introduction

## Topic: Classification of Oscillators - RC Phase Shift Oscillators

This module introduces the fundamental concepts of oscillators and their classification. We will delve into specific types of oscillators, with a focus on the RC phase shift oscillator.

### Learning Outcomes:

*   Understand the basic principle of oscillation.
*   Classify different types of oscillators.
*   Analyze the operation of an RC phase shift oscillator.
*   Determine the conditions for oscillation in an RC phase shift oscillator.
*   Design an RC phase shift oscillator for a specific frequency.

### Course Outcomes Alignment:

*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)** - This topic directly addresses the design and analysis of a specific type of oscillator, contributing to a deeper understanding of CO4.

### Key Concepts and Definitions:

*   **Oscillator:** An electronic circuit that produces a repetitive, oscillating electronic signal, often a sine wave, square wave, or triangular wave. It does this without any external input signal.
*   **Feedback:** The process of returning a portion of the output signal of a circuit or system to its input.
*   **Positive Feedback (Regenerative Feedback):** Feedback where the feedback signal is in phase with the input signal, reinforcing it. This is crucial for oscillation.
*   **Negative Feedback (Degenerative Feedback):** Feedback where the feedback signal is out of phase with the input signal, reducing its amplitude.
*   **Barkhausen Criterion:** A set of conditions required for an amplifier with feedback to oscillate. It states that for sustained oscillation, the loop gain must be unity (magnitude of 1) and the phase shift around the feedback loop must be 0° or an integer multiple of 360°.
*   **Gain:** The ratio of output to input signal magnitude.
*   **Phase Shift:** The difference in phase between two signals, typically measured in degrees or radians.
*   **Resonant Circuit:** A circuit containing inductance and capacitance that exhibits a particular frequency (resonant frequency) at which it oscillates or exhibits maximum impedance/admittance.

### Classification of Oscillators:

Oscillators can be broadly classified based on several criteria:

1.  **Based on Output Waveform:**
    *   **Sinusoidal Oscillators:** Produce a sinusoidal output waveform (e.g., LC oscillators, RC oscillators, crystal oscillators).
    *   **Non-sinusoidal Oscillators:** Produce waveforms like square waves, triangular waves, or sawtooth waves (e.g., relaxation oscillators).

2.  **Based on Frequency Determining Component:**
    *   **LC Oscillators:** Utilize inductors (L) and capacitors (C) for frequency determination (e.g., Hartley, Colpitts, Clapp). These are generally used for higher frequencies (RF range).
    *   **RC Oscillators:** Utilize resistors (R) and capacitors (C) for frequency determination (e.g., Phase Shift, Wien Bridge). These are typically used for lower frequencies (audio range).
    *   **Crystal Oscillators:** Utilize the piezoelectric effect of crystals (usually quartz) for very stable and accurate frequency generation.

3.  **Based on Feedback Mechanism:**
    *   **Negative Resistance Oscillators:** Rely on devices exhibiting negative resistance characteristics (e.g., tunnel diode oscillators).
    *   **Feedback Oscillators:** Utilize positive feedback from an amplifier circuit.

**For this module, we focus on the classification based on frequency-determining components, specifically RC oscillators.**

---

### RC Phase Shift Oscillators:

RC phase shift oscillators are a type of sinusoidal oscillator that uses resistor-capacitor (RC) networks to provide the necessary phase shift for oscillation. They are generally used for generating low-frequency signals.

#### Principle of Operation:

An RC phase shift oscillator typically consists of:

1.  **An Amplifier:** Usually a common-emitter BJT amplifier or a common-source FET amplifier. This provides the necessary voltage gain to compensate for losses in the feedback network.
2.  **An RC Feedback Network:** A series of RC sections that shift the phase of the signal by a specific amount. To achieve sustained oscillation, the total phase shift around the loop (amplifier + feedback network) must be 360° (or 0°).

**The Barkhausen Criterion for Oscillation:**

For sustained oscillations to occur, the following conditions must be met:

*   **Loop Gain = 1:** The magnitude of the gain around the entire feedback loop (amplifier gain × feedback network gain) must be equal to or greater than unity. In practice, it's usually slightly greater than 1 to overcome start-up losses, and the circuit's non-linearity limits the amplitude.
*   **Phase Shift = 360° (or 0°):** The total phase shift introduced by the amplifier and the feedback network combined must be a multiple of 360°. Since amplifiers typically invert the signal (180° phase shift), the feedback network must provide an additional 180° phase shift.

#### Basic RC Phase Shift Oscillator Circuit:

The core of the RC phase shift oscillator is the feedback network. A common configuration uses three RC sections. Each RC section is designed to provide a phase shift between 0° and -90°. To achieve the required 180° phase shift from the feedback network, three such sections are cascaded.

**Circuit Diagram (Conceptual):**

```
      +Vcc
       |
       R1
       |
     -----
     |   | C1
     -----
       |
       Rc  <-- Collector resistor for BJT amplifier
       |
     -----
     |   | C2
     -----
       |
       Load R
       |
     -----
     |   | C3
     -----
       |
       To Amplifier Input (e.g., Base of BJT)
```

**Analysis of the RC Feedback Network:**

Each RC section (a resistor R in series with a capacitor C) provides a phase shift. The phase shift $\phi$ introduced by a single RC section is given by:

$\phi = \arctan \left( \frac{-1}{\omega RC} \right)$

where:
*   $\omega$ is the angular frequency ($\omega = 2\pi f$)
*   $R$ is the resistance
*   $C$ is the capacitance

For oscillation, we need a total phase shift of 180° from the feedback network. If we use three identical RC sections, each section must contribute 60° of phase shift.

Let's consider one RC section with resistance $R$ and capacitance $C$. The impedance of the capacitor is $Z_C = \frac{1}{j\omega C}$. The output voltage $V_{out}$ across the capacitor is related to the input voltage $V_{in}$ as:

$V_{out} = V_{in} \frac{Z_C}{R + Z_C} = V_{in} \frac{\frac{1}{j\omega C}}{R + \frac{1}{j\omega C}} = V_{in} \frac{1}{1 + j\omega RC}$

The phase shift $\phi$ is the argument of this complex number:

$\phi = \arg \left( \frac{1}{1 + j\omega RC} \right) = \arctan \left( \frac{- \omega RC}{1} \right) = \arctan(-\omega RC)$

For a 60° phase shift, we have:

$\tan(60^\circ) = \omega RC$
$\sqrt{3} = \omega RC$

This implies that for each section to contribute 60°, the condition $\omega RC = \sqrt{3}$ must be met.

**Total Phase Shift:**

With three such sections cascaded, the total phase shift introduced by the feedback network is $3 \times 60^\circ = 180^\circ$.

**Gain of the Feedback Network:**

The gain ($A_{FB}$) of each RC section is the ratio of output voltage magnitude to input voltage magnitude:

$|A_{FB\_section}| = \left| \frac{1}{1 + j\omega RC} \right| = \frac{1}{\sqrt{1^2 + (\omega RC)^2}}$

At the oscillation frequency, where $\omega RC = \sqrt{3}$:

$|A_{FB\_section}| = \frac{1}{\sqrt{1 + (\sqrt{3})^2}} = \frac{1}{\sqrt{1 + 3}} = \frac{1}{\sqrt{4}} = \frac{1}{2}$

So, each RC section has a voltage gain magnitude of 1/2. For three identical sections, the total voltage gain magnitude of the feedback network is:

$|A_{FB}| = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$

**Condition for Oscillation (Gain):**

The amplifier must provide a voltage gain ($A_{amp}$) to compensate for the loss in the feedback network. According to the Barkhausen criterion, the loop gain must be at least unity. The loop gain is $A_{loop} = A_{amp} \times A_{FB}$.

$|A_{amp}| \times |A_{FB}| \ge 1$
$|A_{amp}| \times \frac{1}{8} \ge 1$
$|A_{amp}| \ge 8$

This means the amplifier must have a voltage gain of at least 8. In a typical BJT common-emitter amplifier, the voltage gain is approximately $A_{amp} \approx -\frac{R_C}{r_e'}$, where $R_C$ is the collector resistor and $r_e'$ is the small-signal emitter resistance. Therefore, $\frac{R_C}{r_e'} \ge 8$.

**Frequency of Oscillation:**

The frequency of oscillation ($f$) is determined by the $\omega RC = \sqrt{3}$ condition for each section.

$2\pi f RC = \sqrt{3}$
$f = \frac{\sqrt{3}}{2\pi RC}$

If multiple sections use different $R$ and $C$ values, the calculation becomes more complex. However, for identical sections, this formula holds.

#### Design Considerations:

*   **Amplifier Selection:** A common-emitter BJT amplifier is often used. The biasing of the BJT is crucial to ensure it operates in the active region and provides sufficient gain. The collector resistor ($R_C$) plays a dual role: it's part of the amplifier's gain calculation and can also be part of the feedback network in some configurations.
*   **RC Network Design:** The values of R and C determine the frequency of oscillation. For audio frequencies (e.g., 1 kHz), typical values might be $R = 10 \text{ k}\Omega$ and $C = 0.01 \mu F$.
    $f = \frac{\sqrt{3}}{2\pi \times 10 \text{ k}\Omega \times 0.01 \mu F} = \frac{\sqrt{3}}{2\pi \times 10^4 \times 10^{-8}} = \frac{\sqrt{3}}{2\pi \times 10^{-4}} \approx \frac{1.732}{6.28 \times 10^{-4}} \approx 2756 \text{ Hz}$
*   **Gain Adjustment:** The amplifier's gain can be adjusted by changing the collector resistor ($R_C$) or by introducing a variable resistor in the feedback path for gain control.
*   **Stability:** The stability of the oscillation frequency depends on the stability of the component values (R, C) and the amplifier's operating point.

#### Practical Implementation (BJT Common-Emitter Amplifier):

A typical RC phase shift oscillator using a BJT common-emitter amplifier:

*   **Amplifier Stage:** A BJT is biased using a voltage divider network ($R_1$, $R_2$) and a collector resistor ($R_C$). An emitter resistor ($R_E$) can be used for biasing stability, but it might require bypassing with a capacitor to ensure high AC gain.
*   **Feedback Network:** Three RC sections are connected between the amplifier's output (collector) and its input (base). The load resistor ($R_L$) at the output is often incorporated into the feedback network.

**Example Circuit:**

```
      +Vcc
       |
       R1 ---- R2
       |      |
      ---    Base (B)
     |   |   /
     R_C ---<   Collector (C)
     |   |   \
     ---    Emitter (E) --- RE --- Ground
       |
       |---- C1 ---- R ---- C2 ---- R ---- C3 ---- R ----> To Base
                                                         |
                                                         Input Signal (if any for analysis)
                                                         Output Signal (at Collector)
```

*(Note: This conceptual diagram shows the feedback connections. In a practical circuit, the output of the amplifier (collector) connects to the input of the first RC section, and the output of the last RC section (usually across the last capacitor) connects to the input of the amplifier (base). The collector resistor $R_C$ is part of the amplifier but also affects the load on the first RC section if not carefully designed.)*

**A more accurate representation:**

```
      +Vcc
       |
       R1 ---- R2
       |      |
      ---    B
     |   |   /
     R_C ---<   C ---- C1 ---- R ---- C2 ---- R ---- C3 ---- R ----> To B
     |   |   \                                 |
     ---    E ---- RE ---- Ground             Ground
       |
       Output (taken from C)
```

In this setup:
*   $R_1$ and $R_2$ provide DC biasing.
*   $R_C$ is the collector load resistor.
*   The output signal is taken from the collector.
*   The feedback network consists of $C_1, R, C_2, R, C_3, R$ connected from collector to base.
*   The impedance of the feedback network should be high compared to $R_C$ to avoid excessive loading on the amplifier.

**Calculating Frequency and Gain in a Practical Circuit:**

The analysis of the feedback network's loading effect on the amplifier can be complex. If the impedance of the RC sections is much larger than $R_C$, the approximation of three identical, unloaded sections is reasonable.

If $R_C$ is not much larger than $R$, the gain calculation for the amplifier will also be affected by the feedback network's input impedance.

**Example Calculation (referencing Boylestad & Nashelsky):**

Boylestad and Nashelsky often present simplified models where the amplifier is treated as an ideal voltage source with gain, and the feedback network is analyzed separately. When designing, you need to ensure that the minimum gain requirement of 8 is met by the amplifier stage, considering its actual components and biasing.

**Example Exercise:**

Design an RC phase shift oscillator to produce a sinusoidal output at a frequency of approximately 5 kHz. Use identical RC sections.

**Solution:**

1.  **Frequency Calculation:**
    We need $f = 5 \text{ kHz} = 5000 \text{ Hz}$.
    Using the formula $f = \frac{\sqrt{3}}{2\pi RC}$:
    $5000 = \frac{\sqrt{3}}{2\pi RC}$
    $RC = \frac{\sqrt{3}}{2\pi \times 5000} = \frac{1.732}{31415.9} \approx 5.51 \times 10^{-5} \text{ seconds}$

2.  **Component Selection:**
    Let's choose a standard capacitor value, say $C = 0.01 \mu F = 10^{-8} F$.
    Then, $R = \frac{5.51 \times 10^{-5}}{10^{-8}} = 5.51 \times 10^3 \Omega = 5.51 \text{ k}\Omega$.
    We can use standard resistor values close to this, e.g., $R = 5.6 \text{ k}\Omega$.
    With $R = 5.6 \text{ k}\Omega$ and $C = 0.01 \mu F$:
    $f = \frac{\sqrt{3}}{2\pi \times 5.6 \text{ k}\Omega \times 0.01 \mu F} = \frac{1.732}{2\pi \times 5600 \times 10^{-8}} \approx 4914 \text{ Hz}$ (close to 5 kHz).

3.  **Amplifier Gain:**
    The amplifier must provide a gain of at least 8. If using a common-emitter BJT amplifier, the voltage gain $A_{amp} \approx -\frac{R_C}{r_e'}$.
    We need $|\frac{R_C}{r_e'}| \ge 8$.
    To calculate $r_e'$, we need to bias the BJT. Let's assume a silicon NPN transistor with $I_C \approx 1 \text{ mA}$.
    $r_e' = \frac{25 \text{ mV}}{I_E} \approx \frac{25 \text{ mV}}{1 \text{ mA}} = 25 \Omega$.
    So, $R_C$ should be at least $8 \times 25 \Omega = 200 \Omega$.
    However, a larger $R_C$ is usually chosen to provide sufficient voltage swing and gain, e.g., $R_C = 1 \text{ k}\Omega$ to $10 \text{ k}\Omega$. If $R_C = 2 \text{ k}\Omega$, the gain would be $\frac{2000}{25} = 80$, which is ample.

**Important Points to Remember:**

*   **Barkhausen Criterion is Key:** Loop gain $\ge 1$ and 180° (from feedback) + 180° (from amplifier) = 360° total phase shift.
*   **RC Network for Phase Shift:** Each RC section provides a phase shift between 0° and -90°. Three identical sections provide 180°.
*   **Frequency Formula:** For identical RC sections, $f = \frac{\sqrt{3}}{2\pi RC}$.
*   **Gain Requirement:** Amplifier gain must be at least 8 to compensate for the 1/8 gain of the three-section feedback network.
*   **Limitations:** RC oscillators are generally used for lower frequencies. They are less stable than LC or crystal oscillators. The output waveform might not be a perfect sine wave unless carefully designed.

---

### Practice Questions:

1.  **What are the two essential conditions for an oscillator to function, according to the Barkhausen criterion?**
    *   *Answer: Loop gain must be unity (or greater than unity) and the total phase shift around the feedback loop must be 0° or an integer multiple of 360°.*

2.  **Explain why an amplifier is necessary in an RC phase shift oscillator.**
    *   *Answer: The RC feedback network introduces signal loss (attenuation). The amplifier provides sufficient gain to compensate for this loss and sustain oscillations.*

3.  **A three-stage RC phase shift network uses identical RC sections. What is the phase shift provided by each individual section at the frequency of oscillation?**
    *   *Answer: 60°.*

4.  **If an RC phase shift oscillator uses three identical RC sections, what is the minimum voltage gain required from the amplifier stage to sustain oscillation?**
    *   *Answer: 8.*

5.  **Calculate the frequency of oscillation for an RC phase shift oscillator if $R = 10 \text{ k}\Omega$ and $C = 0.02 \mu F$, assuming three identical RC sections are used.**
    *   *Calculation: $f = \frac{\sqrt{3}}{2\pi RC} = \frac{1.732}{2\pi \times 10 \times 10^3 \times 0.02 \times 10^{-6}} = \frac{1.732}{2\pi \times 200 \times 10^{-3}} = \frac{1.732}{1.256} \approx 1.379 \text{ kHz}$.*
    *   *Answer: Approximately 1.379 kHz.*

6.  **Design a simple RC phase shift oscillator for an audio frequency of 1 kHz. Specify the values of R and C for the feedback network and discuss the required amplifier gain.**
    *   *Design Steps:*
        *   *Choose $f = 1000 \text{ Hz}$.*
        *   *Using $f = \frac{\sqrt{3}}{2\pi RC}$, calculate $RC = \frac{1.732}{2\pi \times 1000} \approx 2.757 \times 10^{-4} s$.*
        *   *Select a capacitor value, e.g., $C = 0.1 \mu F = 10^{-7} F$.*
        *   *Calculate $R = \frac{2.757 \times 10^{-4}}{10^{-7}} \approx 2.757 \times 10^3 \Omega = 2.757 \text{ k}\Omega$. Use $R = 2.7 \text{ k}\Omega$ or $3.3 \text{ k}\Omega$.*
        *   *Required Amplifier Gain: Minimum gain of 8. A common-emitter BJT amplifier with $R_C \approx 1 \text{ k}\Omega$ and $r_e' \approx 25 \Omega$ would provide a gain of $\approx 40$, which is sufficient.*

---
