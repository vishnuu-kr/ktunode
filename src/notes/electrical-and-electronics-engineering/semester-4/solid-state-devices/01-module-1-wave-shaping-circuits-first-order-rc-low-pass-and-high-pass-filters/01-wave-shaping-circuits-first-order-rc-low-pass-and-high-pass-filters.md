---
title: "Wave shaping circuits : First order RC low pass and high pass filters"
subject: "SOLID STATE DEVICES"
module: "Module 1: Wave shaping circuits : First order RC low pass and high pass filters"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f73"
status: "completed"
scrapedAt: "2026-05-23T16:18:29.222Z"
---
# SOLID STATE DEVICES: Module 1 - Wave Shaping Circuits: First Order RC Low Pass and High Pass Filters

## Introduction to Wave Shaping Circuits

Wave shaping circuits are electronic circuits that modify or change the shape of a waveform. They are fundamental building blocks in many electronic systems, including communication, control, and signal processing. This module focuses on the simplest form of wave shaping: first-order RC filters.

### Learning Outcomes:

By the end of this module, you will be able to:

*   **Analyze the behavior of first-order RC low-pass filters.**
*   **Analyze the behavior of first-order RC high-pass filters.**
*   **Determine the cutoff frequency for both low-pass and high-pass RC filters.**
*   **Understand the concept of frequency response and its significance in filter design.**
*   **Apply the principles of RC filtering to simple wave shaping applications.**
*   **Relate the analysis of RC filters to basic circuit analysis techniques.**

### Course Outcomes Alignment:

This module directly contributes to **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4)** by providing the foundational knowledge for analyzing RC networks. While not directly dealing with BJT biasing, understanding circuit analysis of RC elements is crucial for analyzing more complex transistor circuits in later modules.

---

## 1. First-Order RC Low-Pass Filter

### 1.1. Circuit Configuration and Principle of Operation

A first-order RC low-pass filter consists of a resistor (R) and a capacitor (C) connected in series, with the output taken across the capacitor.

**Circuit Diagram:**

```
      R
Vin ---/\/\/\---+--- Vout
              |
              C
              |
             GND
```

**Principle of Operation:**

*   **Capacitor's Impedance:** The impedance of a capacitor ($Z_C$) is inversely proportional to the frequency of the input signal: $Z_C = \frac{1}{j\omega C}$, where $\omega$ is the angular frequency ($2\pi f$).
*   **Low Frequencies:** At very low frequencies ($\omega \approx 0$), the capacitor's impedance is very high ($Z_C \to \infty$). The capacitor acts like an open circuit. Most of the input voltage appears across the capacitor, so $V_{out} \approx V_{in}$.
*   **High Frequencies:** At very high frequencies ($\omega \to \infty$), the capacitor's impedance is very low ($Z_C \to 0$). The capacitor acts like a short circuit. Most of the input voltage is dropped across the resistor, and $V_{out} \approx 0$.
*   **Intermediate Frequencies:** For frequencies between these extremes, the capacitor's impedance is comparable to the resistor's, and the output voltage is a fraction of the input voltage. The circuit allows low frequencies to pass through to the output while attenuating high frequencies.

### 1.2. Transfer Function and Frequency Response

The transfer function of a linear time-invariant (LTI) system relates the output to the input in the frequency domain. For an RC low-pass filter, we can use the voltage divider rule:

$V_{out}(j\omega) = V_{in}(j\omega) \frac{Z_C}{R + Z_C}$

Substitute $Z_C = \frac{1}{j\omega C}$:

$V_{out}(j\omega) = V_{in}(j\omega) \frac{\frac{1}{j\omega C}}{R + \frac{1}{j\omega C}}$

Multiply the numerator and denominator by $j\omega C$:

$V_{out}(j\omega) = V_{in}(j\omega) \frac{1}{1 + j\omega RC}$

The **transfer function**, $H(j\omega)$, is defined as $\frac{V_{out}(j\omega)}{V_{in}(j\omega)}$:

$H(j\omega) = \frac{1}{1 + j\omega RC}$

**Key Concepts:**

*   **Angular Cutoff Frequency ($\omega_c$):** This is the frequency at which the magnitude of the transfer function is $\frac{1}{\sqrt{2}}$ (or approximately 0.707) of its maximum value. It's also the frequency where the output power is half the input power (hence, "half-power frequency" or "3dB frequency").

    For $H(j\omega) = \frac{1}{1 + j\omega RC}$, the magnitude is $|H(j\omega)| = \frac{1}{\sqrt{1^2 + (\omega RC)^2}}$.
    To find $\omega_c$, we set $|H(j\omega_c)| = \frac{1}{\sqrt{2}}$:

    $\frac{1}{\sqrt{1 + (\omega_c RC)^2}} = \frac{1}{\sqrt{2}}$
    $1 + (\omega_c RC)^2 = 2$
    $(\omega_c RC)^2 = 1$
    $\omega_c RC = 1$
    $\omega_c = \frac{1}{RC}$

*   **Cutoff Frequency ($f_c$):** This is the frequency in Hertz corresponding to $\omega_c$:

    $f_c = \frac{\omega_c}{2\pi} = \frac{1}{2\pi RC}$

*   **Frequency Response:** This describes how the filter's gain (magnitude) and phase shift vary with the input frequency.

    *   **Magnitude Response:** $|H(j\omega)| = \frac{1}{\sqrt{1 + (\omega RC)^2}}$.
        *   At $\omega = 0$, $|H(j0)| = 1$ (unity gain, 0 dB).
        *   At $\omega = \omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{1 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (-3 dB).
        *   At $\omega \to \infty$, $|H(j\omega)| \to 0$ (infinite attenuation).
    *   **Phase Response:** $\phi(\omega) = \angle H(j\omega) = \angle \frac{1}{1 + j\omega RC}$.
        The angle of the denominator is $\arctan(\omega RC)$. Since it's in the denominator, the phase of $H(j\omega)$ is the negative of this:

        $\phi(\omega) = -\arctan(\omega RC)$
        *   At $\omega = 0$, $\phi(0) = -\arctan(0) = 0^\circ$.
        *   At $\omega = \omega_c$, $\phi(\omega_c) = -\arctan(1) = -45^\circ$.
        *   At $\omega \to \infty$, $\phi(\omega) \to -\arctan(\infty) = -90^\circ$.

**Bode Plot (Magnitude):**

A Bode plot is a semi-logarithmic plot of the magnitude and phase response versus frequency. For a first-order low-pass filter:

*   The magnitude plot starts at 0 dB for low frequencies.
*   It rolls off at a rate of -20 dB per decade (or -6 dB per octave) for frequencies above $\omega_c$.
*   The transition point is at $\omega_c$, where the extrapolated line from low frequencies intersects the extrapolated line for high frequencies.

**Reference:** Boylested & Nashelsky, Ch. 16 (Frequency Response) and Ch. 17 (Filters) often cover these concepts in detail. Sedra & Smith also discuss frequency response in their early chapters on amplifier analysis.

### 1.3. Examples and Applications

**Example 1.1:** Design an RC low-pass filter with a cutoff frequency of 1 kHz.

**Solution:**
We need to choose R and C such that $f_c = \frac{1}{2\pi RC} = 1000$ Hz.
Let's choose a standard capacitor value, say $C = 0.1 \mu F = 0.1 \times 10^{-6} F$.
Then, $R = \frac{1}{2\pi f_c C} = \frac{1}{2\pi \times 1000 \times 0.1 \times 10^{-6}} = \frac{1}{2\pi \times 10^{-4}} \approx \frac{10^4}{6.283} \approx 1591.5 \Omega$.
A standard resistor value close to this is $1.6 k\Omega$ or $1.5 k\Omega$.

**Application:** Smoothing out ripple in DC power supplies. If a power supply has some AC ripple superimposed on its DC output, an RC low-pass filter can pass the DC component while attenuating the AC ripple.

---

## 2. First-Order RC High-Pass Filter

### 2.1. Circuit Configuration and Principle of Operation

A first-order RC high-pass filter consists of a resistor (R) and a capacitor (C) connected in series, with the output taken across the resistor.

**Circuit Diagram:**

```
      C
Vin ---||----+--- Vout
            |
            R
            |
           GND
```

**Principle of Operation:**

*   **Capacitor's Impedance:** $Z_C = \frac{1}{j\omega C}$.
*   **Low Frequencies:** At very low frequencies ($\omega \approx 0$), the capacitor's impedance is very high ($Z_C \to \infty$). The capacitor acts like an open circuit. Most of the input voltage is dropped across the capacitor, and $V_{out} \approx 0$.
*   **High Frequencies:** At very high frequencies ($\omega \to \infty$), the capacitor's impedance is very low ($Z_C \to 0$). The capacitor acts like a short circuit. Most of the input voltage appears across the resistor, so $V_{out} \approx V_{in}$.
*   **Intermediate Frequencies:** Similar to the low-pass filter, the output voltage is a fraction of the input voltage. This circuit allows high frequencies to pass through to the output while attenuating low frequencies.

### 2.2. Transfer Function and Frequency Response

Using the voltage divider rule:

$V_{out}(j\omega) = V_{in}(j\omega) \frac{R}{R + Z_C}$

Substitute $Z_C = \frac{1}{j\omega C}$:

$V_{out}(j\omega) = V_{in}(j\omega) \frac{R}{R + \frac{1}{j\omega C}}$

Multiply the numerator and denominator by $j\omega C$:

$V_{out}(j\omega) = V_{in}(j\omega) \frac{j\omega RC}{1 + j\omega RC}$

The **transfer function**, $H(j\omega)$, is:

$H(j\omega) = \frac{j\omega RC}{1 + j\omega RC}$

**Key Concepts:**

*   **Angular Cutoff Frequency ($\omega_c$):** The definition of cutoff frequency remains the same: where $|H(j\omega)| = \frac{1}{\sqrt{2}} |H_{max}|$.
    The magnitude of the transfer function is $|H(j\omega)| = \frac{|\omega RC|}{\sqrt{1^2 + (\omega RC)^2}}$.
    The maximum gain occurs at very high frequencies, where $\omega RC \gg 1$, so $|H(j\omega)| \approx \frac{\omega RC}{\omega RC} = 1$.
    To find $\omega_c$, we set $|H(j\omega_c)| = \frac{1}{\sqrt{2}}$:

    $\frac{\omega_c RC}{\sqrt{1 + (\omega_c RC)^2}} = \frac{1}{\sqrt{2}}$
    Squaring both sides:
    $\frac{(\omega_c RC)^2}{1 + (\omega_c RC)^2} = \frac{1}{2}$
    $2(\omega_c RC)^2 = 1 + (\omega_c RC)^2$
    $(\omega_c RC)^2 = 1$
    $\omega_c RC = 1$
    $\omega_c = \frac{1}{RC}$

*   **Cutoff Frequency ($f_c$):**

    $f_c = \frac{\omega_c}{2\pi} = \frac{1}{2\pi RC}$

    Notice that the cutoff frequency calculation is the same as for the low-pass filter for the same R and C values.

*   **Frequency Response:**

    *   **Magnitude Response:** $|H(j\omega)| = \frac{\omega RC}{\sqrt{1 + (\omega RC)^2}}$.
        *   At $\omega \to 0$, $|H(j\omega)| \to 0$ (infinite attenuation).
        *   At $\omega = \omega_c$, $|H(j\omega_c)| = \frac{1}{\sqrt{1 + 1^2}} = \frac{1}{\sqrt{2}} \approx 0.707$ (-3 dB).
        *   At $\omega \to \infty$, $|H(j\omega)| \to 1$ (unity gain, 0 dB).
    *   **Phase Response:** $\phi(\omega) = \angle H(j\omega) = \angle \frac{j\omega RC}{1 + j\omega RC}$.
        The phase of the numerator is $+90^\circ$ (due to $j$). The phase of the denominator is $\arctan(\omega RC)$.

        $\phi(\omega) = 90^\circ - \arctan(\omega RC)$
        *   At $\omega \to 0$, $\phi(0) = 90^\circ - \arctan(0) = 90^\circ$.
        *   At $\omega = \omega_c$, $\phi(\omega_c) = 90^\circ - \arctan(1) = 90^\circ - 45^\circ = 45^\circ$.
        *   At $\omega \to \infty$, $\phi(\omega) \to 90^\circ - \arctan(\infty) = 90^\circ - 90^\circ = 0^\circ$.

**Bode Plot (Magnitude):**

*   The magnitude plot starts at $-\infty$ dB for low frequencies.
*   It rolls up at a rate of +20 dB per decade (or +6 dB per octave) for frequencies below $\omega_c$.
*   The transition point is at $\omega_c$.
*   The gain flattens to 0 dB for frequencies above $\omega_c$.

**Reference:** Again, Boylested & Nashelsky and Sedra & Smith are excellent sources for understanding these transfer functions and frequency responses.

### 2.3. Examples and Applications

**Example 2.1:** Design an RC high-pass filter with a cutoff frequency of 1 kHz.

**Solution:**
This is the same cutoff frequency as Example 1.1. If we choose $C = 0.1 \mu F$, then $R \approx 1.59 k\Omega$.

**Application:** Blocking DC components of a signal. If you have a signal that has a DC offset that you want to remove, a capacitor in series (as in the high-pass filter configuration) will block the DC component. For instance, in audio amplifiers, you often use coupling capacitors to prevent the DC bias of one stage from affecting the next.

---

## 3. Comparison and Key Differences

| Feature              | RC Low-Pass Filter                       | RC High-Pass Filter                      |
| :------------------- | :--------------------------------------- | :--------------------------------------- |
| **Circuit Output**   | Across the Capacitor                     | Across the Resistor                      |
| **Low Freq. Behavior** | Passes (Gain $\approx$ 1)               | Blocks (Gain $\approx$ 0)               |
| **High Freq. Behavior**| Blocks (Gain $\approx$ 0)               | Passes (Gain $\approx$ 1)               |
| **Transfer Function**| $H(j\omega) = \frac{1}{1 + j\omega RC}$     | $H(j\omega) = \frac{j\omega RC}{1 + j\omega RC}$ |
| **Magnitude at $\omega_c$** | $0.707$ (-3 dB)                          | $0.707$ (-3 dB)                          |
| **Phase at $\omega_c$**   | $-45^\circ$                              | $+45^\circ$                              |
| **Application**      | Smoothing, noise reduction               | DC blocking, AC coupling                 |

---

## 4. Practice Questions and Exercises

**Q1:** A resistor of $10 k\Omega$ is connected in series with a capacitor of $0.01 \mu F$.
    a) If this forms a low-pass filter, what is its cutoff frequency?
    b) If this forms a high-pass filter, what is its cutoff frequency?
    c) What is the gain of the low-pass filter at $100 Hz$?
    d) What is the gain of the high-pass filter at $10 kHz$?
    e) What is the phase shift of the low-pass filter at its cutoff frequency?
    f) What is the phase shift of the high-pass filter at its cutoff frequency?

**Answer:**
    a) $f_c = \frac{1}{2\pi RC} = \frac{1}{2\pi (10 \times 10^3 \Omega)(0.01 \times 10^{-6} F)} = \frac{1}{2\pi \times 10^{-4}} \approx 1591.5 Hz$.
    b) The cutoff frequency is the same: $f_c \approx 1591.5 Hz$.
    c) For a low-pass filter, $H(j\omega) = \frac{1}{1 + j\omega RC}$. At $f = 100 Hz$, $\omega = 2\pi \times 100 = 200\pi$ rad/s.
       $|H(j200\pi)| = \frac{1}{\sqrt{1 + (200\pi \times 10 \times 10^3 \times 0.01 \times 10^{-6})^2}} = \frac{1}{\sqrt{1 + (0.2\pi)^2}} = \frac{1}{\sqrt{1 + 0.03948}} \approx \frac{1}{\sqrt{1.03948}} \approx 0.981$.
       The gain is approximately 0.981.
    d) For a high-pass filter, $H(j\omega) = \frac{j\omega RC}{1 + j\omega RC}$. At $f = 10 kHz$, $\omega = 2\pi \times 10 \times 10^3 = 20\pi \times 10^3$ rad/s.
       $|H(j20\pi \times 10^3)| = \frac{|j(20\pi \times 10^3)(10 \times 10^3)(0.01 \times 10^{-6})|}{\sqrt{1 + (20\pi \times 10^3 \times 10 \times 10^3 \times 0.01 \times 10^{-6})^2}} = \frac{|j(2\pi)|}{\sqrt{1 + (2\pi)^2}} = \frac{2\pi}{\sqrt{1 + 4\pi^2}} = \frac{6.283}{\sqrt{1 + 39.48}} = \frac{6.283}{\sqrt{40.48}} \approx \frac{6.283}{6.362} \approx 0.987$.
       The gain is approximately 0.987.
    e) For a low-pass filter, the phase shift at the cutoff frequency is $-45^\circ$.
    f) For a high-pass filter, the phase shift at the cutoff frequency is $+45^\circ$.

**Q2:** You want to build a circuit that passes frequencies above $5 kHz$ and attenuates frequencies below $5 kHz$. What type of RC filter would you use, and what component values could you choose for R and C?

**Answer:**
You would use an RC **high-pass filter**.
To achieve a cutoff frequency of $5 kHz$ ($f_c = 5000 Hz$), we need $\frac{1}{2\pi RC} = 5000$.
Let's choose $R = 10 k\Omega = 10^4 \Omega$.
Then, $C = \frac{1}{2\pi f_c R} = \frac{1}{2\pi (5000 Hz) (10^4 \Omega)} = \frac{1}{100000\pi} F \approx \frac{1}{314159} F \approx 3.18 \times 10^{-6} F = 3.18 \mu F$.
A standard capacitor value close to this is $3.3 \mu F$.

---

## 5. Important Points to Remember

*   **RC Filters are First-Order:** They have a single reactive component (C) and a single dissipative component (R).
*   **Cutoff Frequency ($f_c$) is Key:** It defines the transition point between passing and attenuating frequencies. $f_c = \frac{1}{2\pi RC}$.
*   **Low-Pass Filter:** Passes low frequencies, attenuates high frequencies. Output across C. Phase shift from $0^\circ$ to $-90^\circ$.
*   **High-Pass Filter:** Passes high frequencies, attenuates low frequencies. Output across R. Phase shift from $+90^\circ$ to $0^\circ$.
*   **-3 dB Point:** The cutoff frequency is also known as the half-power point or -3 dB point. At this frequency, the output voltage is $1/\sqrt{2}$ (0.707) times the maximum output voltage.
*   **Bode Plots:** Useful for visualizing the frequency response (gain vs. frequency and phase vs. frequency). First-order filters have a roll-off rate of $\pm 20 dB/\text{decade}$ ($\pm 6 dB/\text{octave}$).
*   **Applications:** Filtering, signal coupling, de-coupling, and basic wave shaping.

---

## Conclusion

This module has introduced the fundamental concepts of first-order RC low-pass and high-pass filters. Understanding their circuit configurations, transfer functions, and frequency responses is crucial for analyzing and designing more complex electronic circuits. These simple filters form the basis for many signal processing and filtering applications in solid-state devices.
