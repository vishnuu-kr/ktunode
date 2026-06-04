---
title: "Infinite Uniform transmission line; ideal distortion less lossless transmission line"
subject: "HIGH SPEED DIGITAL DESIGN"
module: "Module 3: Transmission Lines: Problems of point to point wiring"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb70"
status: "completed"
scrapedAt: "2026-05-23T17:57:19.526Z"
---
# Module 3: Transmission Lines: Problems of Point-to-Point Wiring

## Topic: Infinite Uniform Transmission Line; Ideal Distortionless Lossless Transmission Line

This module delves into the fundamental behavior of transmission lines, which are critical for signal integrity in high-speed digital designs. We'll explore the concept of an infinite uniform transmission line and its idealized counterpart, the distortionless lossless transmission line, to understand how signals propagate and what factors influence their behavior.

---

### 1. The Need for Transmission Line Theory in High-Speed Digital Design

**CO1 (K2):** Illustrate the fundamentals of the effects of passive circuit elements on signal propagation in high speed digital circuits.
**CO3 (K3):** Analyze the effects of wiring, source, and load on the signal propagation from one end of a circuit to the other end.

**Key Concepts:**

*   **Point-to-Point Wiring:** In traditional digital design, simple point-to-point wires were sufficient. However, as clock frequencies and data rates increase, signal rise/fall times become comparable to the propagation delay of these wires.
*   **Parasitic Effects:** Unavoidable parasitic inductance (L) and capacitance (C) of wires become significant at high frequencies. These parasitic elements can no longer be ignored and behave like transmission lines.
*   **Signal Degradation:** At high speeds, simply connecting components with wires can lead to:
    *   **Reflections:** Mismatches in impedance cause signals to bounce back from the termination.
    *   **Ringing:** Oscillations due to reflections.
    *   **Overshoot/Undershoot:** Exceeding the logic thresholds.
    *   **Losses:** Attenuation of signal amplitude and distortion of waveform shape.
*   **Transmission Line Behavior:** When the electrical length of a conductor (propagation delay relative to signal rise/fall time) becomes significant, it must be treated as a transmission line.

**Reference (Johnson & Graham):** Chapter 1, "What is High-Speed Digital Design?" and Chapter 2, "Interconnects" extensively discuss why traditional wiring approaches fail at high frequencies and introduce the concept of interconnects behaving as transmission lines.

**Example:**
Consider a 4-inch trace on a PCB with a typical dielectric constant. The propagation delay is around 300 ps. If a digital signal has a rise time of 1 ns, the trace is electrically short. However, if the rise time is 100 ps, the trace is electrically long, and transmission line effects will dominate.

---

### 2. The Infinite Uniform Transmission Line

**CO1 (K2):** Illustrate the fundamentals of the effects of passive circuit elements on signal propagation in high speed digital circuits.
**CO3 (K3):** Analyze the effects of wiring, source, and load on the signal propagation from one end of a circuit to the other end.

**Key Concepts:**

*   **Model:** An infinite uniform transmission line is modeled as a series of infinitesimal segments, each containing:
    *   **Series Resistance (R):** Resistance per unit length of the conductor.
    *   **Series Inductance (L):** Inductance per unit length due to the magnetic field around the conductor.
    *   **Shunt Conductance (G):** Conductance per unit length of the dielectric between conductors (leakage).
    *   **Shunt Capacitance (C):** Capacitance per unit length between conductors.

*   **Telegrapher's Equations:** These are fundamental partial differential equations that describe the voltage $V(z, t)$ and current $I(z, t)$ along the transmission line as functions of position ($z$) and time ($t$). They are derived using Kirchhoff's voltage and current laws applied to the infinitesimal segments.

    *   $\frac{\partial V}{\partial z} = - (R + L\frac{\partial}{\partial t}) I$
    *   $\frac{\partial I}{\partial z} = - (G + C\frac{\partial}{\partial t}) V$

*   **Wave Propagation:** These equations show that voltage and current propagate along the line as waves.

*   **Characteristic Impedance ($Z_0$):** For a uniform transmission line, there exists a unique impedance that, if presented at any point along the line, will result in no reflections. It's the ratio of voltage to current for a forward-traveling wave.

    $Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}}$

    where $\omega$ is the angular frequency.

*   **Propagation Velocity ($v_p$):** The speed at which a signal propagates down the line.

    $v_p = \frac{1}{\sqrt{LC}}$ (approximately, for low-loss lines)

*   **Attenuation Constant ($\gamma$):** Describes how the amplitude of the wave decreases with distance.

    $\gamma = \sqrt{(R + j\omega L)(G + j\omega C)}$
    $\gamma = \alpha + j\beta$

    *   $\alpha$: Attenuation factor (real part, measures amplitude decay).
    *   $\beta$: Phase factor (imaginary part, relates to phase shift per unit length).

**Reference (Johnson & Graham):** Chapter 2, "Interconnects" provides a good overview of the transmission line model and the physical basis for L, C, R, and G. Chapter 4, "Lossless Transmission Lines" delves deeper into the equations.

**Example:**
A coaxial cable might have $L=75 \text{ nH/m}$, $C=100 \text{ pF/m}$. If we ignore R and G for a moment, $Z_0 = \sqrt{L/C} = \sqrt{75 \times 10^{-9} / 100 \times 10^{-12}} \approx 27.4 \Omega$. The propagation velocity $v_p = 1/\sqrt{LC} = 1/\sqrt{75 \times 10^{-9} \times 100 \times 10^{-12}} \approx 3.65 \times 10^8 \text{ m/s}$.

---

### 3. Ideal Distortionless Lossless Transmission Line

**CO1 (K2):** Illustrate the fundamentals of the effects of passive circuit elements on signal propagation in high speed digital circuits.
**CO3 (K3):** Analyze the effects of wiring, source, and load on the signal propagation from one end of a circuit to the other end.

**Key Concepts:**

*   **Idealization:** This is a simplified but crucial model where we assume certain parameters are zero or negligible.

*   **Lossless Transmission Line:**
    *   $R = 0$ (no series resistance)
    *   $G = 0$ (no shunt conductance)

    For a lossless line:
    *   Characteristic Impedance ($Z_0$):
        $Z_0 = \sqrt{\frac{L}{C}}$ (constant and purely real)
    *   Propagation Constant ($\gamma$):
        $\gamma = j\omega\sqrt{LC} = j\beta$ (purely imaginary)
        *   $\alpha = 0$ (no attenuation)
        *   $\beta = \omega\sqrt{LC}$
    *   Propagation Velocity ($v_p$):
        $v_p = \frac{1}{\sqrt{LC}}$ (constant and independent of frequency)

*   **Distortionless Transmission Line:**
    *   The condition for a distortionless transmission line is:
        $\frac{R}{L} = \frac{G}{C}$

    *   If this condition is met, the propagation constant becomes:
        $\gamma = \sqrt{RL} + j\omega\sqrt{LC}$ (assuming R and G are not zero)

    *   In this case, the attenuation $\alpha = \sqrt{RL}$ is constant with frequency. This means all frequency components of a complex waveform (like a digital pulse) are attenuated by the same factor, preserving the waveform shape. The phase velocity $\beta = \omega\sqrt{LC}$ is still proportional to frequency, meaning different frequency components travel at the same speed, also preserving waveform shape.

*   **Ideal Distortionless Lossless Transmission Line:**
    This is the *most* idealized case, where **both** conditions are met:
    1.  **Lossless:** $R = 0$ and $G = 0$.
    2.  **Distortionless:** $\frac{R}{L} = \frac{G}{C}$.

    When $R=0$ and $G=0$, the distortionless condition $\frac{0}{L} = \frac{0}{C}$ is trivially true.
    Therefore, for an ideal distortionless lossless transmission line:
    *   $Z_0 = \sqrt{\frac{L}{C}}$ (constant, real)
    *   $v_p = \frac{1}{\sqrt{LC}}$ (constant, independent of frequency)
    *   $\alpha = 0$ (no attenuation)
    *   $\beta = \omega\sqrt{LC}$ (phase is linear with frequency)

**Implications:**
*   **Perfect Signal Transmission:** Signals propagate without any amplitude decay or shape distortion.
*   **Constant Impedance:** The characteristic impedance is a single, constant value.
*   **Foundation for Analysis:** This idealized model simplifies analysis and provides a baseline for understanding more complex real-world scenarios.

**Reference (Johnson & Graham):** Chapter 4, "Lossless Transmission Lines" focuses on this ideal case. Chapter 5, "Signal Reflections" discusses how mismatches lead to reflections, which are critical at high speeds.

**Example:**
Imagine a transmission line where $L=10 \text{ nH/cm}$ and $C=1 \text{ pF/cm}$.
*   $Z_0 = \sqrt{10 \times 10^{-9} / 1 \times 10^{-12}} = \sqrt{10000} = 100 \Omega$.
*   $v_p = 1 / \sqrt{10 \times 10^{-9} \times 1 \times 10^{-12}} = 1 / \sqrt{10 \times 10^{-21}} = 1 / (3.16 \times 10^{-11}) \approx 3.16 \times 10^{10} \text{ cm/s} = 3.16 \times 10^8 \text{ m/s}$.
This ideal line would transmit a digital pulse perfectly, with no attenuation or shape change, regardless of the pulse's rise time.

---

### 4. Voltage and Current Waves

**CO1 (K2):** Illustrate the fundamentals of the effects of passive circuit elements on signal propagation in high speed digital circuits.
**CO3 (K3):** Analyze the effects of wiring, source, and load on the signal propagation from one end of a circuit to the other end.

**Key Concepts:**

*   **Forward and Backward Waves:** For a finite transmission line terminated with a load $Z_L$ and driven by a source with impedance $Z_S$, signals propagate in both directions.
    *   **Forward Wave ($V^+, I^+$):** Travels from the source towards the load.
    *   **Backward Wave ($V^-, I^-$):** Travels from the load towards the source due to reflections.

*   **Voltage and Current Relationship:** For each traveling wave, the voltage and current are related by the characteristic impedance:
    *   $V^+ = Z_0 I^+$
    *   $V^- = -Z_0 I^-$

*   **Total Voltage and Current:** The total voltage and current at any point $z$ on the line are the sum of the forward and backward waves:
    *   $V(z, t) = V^+(z, t) + V^-(z, t)$
    *   $I(z, t) = I^+(z, t) + I^-(z, t)$

*   **Reflection Coefficient ($\Gamma$):** Defines the ratio of the reflected voltage wave to the incident voltage wave at the point of reflection (usually the load).

    $\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0}$

    *   If $Z_L = Z_0$ (matched load), $\Gamma_L = 0$, meaning no reflection.
    *   If $Z_L = 0$ (short circuit), $\Gamma_L = -1$, meaning a perfect negative reflection.
    *   If $Z_L = \infty$ (open circuit), $\Gamma_L = +1$, meaning a perfect positive reflection.

*   **Total Voltage at Load ($V_L$):**
    $V_L = V^+_{at\_load} + V^-_{at\_load}$
    $V_L = V^+_{at\_load} + \Gamma_L V^+_{at\_load} = V^+_{at\_load}(1 + \Gamma_L)$

*   **Total Current at Load ($I_L$):**
    $I_L = I^+_{at\_load} + I^-_{at\_load}$
    $I_L = I^+_{at\_load} + \frac{V^-_{at\_load}}{-Z_0} = I^+_{at\_load} - \frac{\Gamma_L V^+_{at\_load}}{Z_0}$
    Since $I^+_{at\_load} = V^+_{at\_load} / Z_0$:
    $I_L = \frac{V^+_{at\_load}}{Z_0} - \Gamma_L \frac{V^+_{at\_load}}{Z_0} = \frac{V^+_{at\_load}}{Z_0}(1 - \Gamma_L)$

**Reference (Johnson & Graham):** Chapter 5, "Signal Reflections" is crucial for understanding reflection coefficients and their impact.

**Example:**
A 50 $\Omega$ transmission line ($Z_0 = 50 \Omega$) is terminated with a $100 \Omega$ resistor ($Z_L = 100 \Omega$).
*   Reflection Coefficient at the load:
    $\Gamma_L = \frac{100 - 50}{100 + 50} = \frac{50}{150} = \frac{1}{3}$
*   This means that for every 3V of the incident voltage wave reaching the load, a 1V reflected voltage wave travels back towards the source. The total voltage at the load will be $V_L = V^+_{at\_load} (1 + 1/3) = (4/3) V^+_{at\_load}$. This can lead to overshoot.

---

### 5. Effects of Source Impedance ($Z_S$)

**CO3 (K3):** Analyze the effects of wiring, source, and load on the signal propagation from one end of a circuit to the other end.

**Key Concepts:**

*   **Source Termination:** The impedance of the signal source ($Z_S$) is critical, especially when considering reflections from the load returning to the source.
*   **Reflection Coefficient at the Source ($\Gamma_S$):** Similar to the load, a reflection can occur at the source if the source impedance does not match the transmission line impedance.

    $\Gamma_S = \frac{Z_S - Z_0}{Z_S + Z_0}$

*   **Voltage Divider at the Source:** When the signal first leaves the source, the voltage across the transmission line is determined by a voltage divider between $Z_S$ and $Z_0$:

    $V^+_{at\_source} = V_{source} \frac{Z_0}{Z_S + Z_0}$

    where $V_{source}$ is the open-circuit voltage of the source.

*   **Double Reflections:** A signal reflected from the load travels back to the source. If $Z_S \neq Z_0$, this returning signal will be reflected again at the source, leading to multiple reflections that can persist for a long time.

**Reference (Johnson & Graham):** Chapter 5, "Signal Reflections" also covers the impact of source impedance and double reflections.

**Example:**
A source with a $10 \Omega$ output impedance ($Z_S = 10 \Omega$) drives a $50 \Omega$ transmission line ($Z_0 = 50 \Omega$) terminated with a matched load ($Z_L = 50 \Omega$). The source open-circuit voltage is 5V.
*   Voltage launched onto the line: $V^+_{at\_source} = 5V \frac{50}{10 + 50} = 5V \times \frac{50}{60} = 4.17V$.
*   If the source impedance was $50 \Omega$ ($Z_S = 50 \Omega$), the launched voltage would be $5V \times \frac{50}{50 + 50} = 5V \times \frac{50}{100} = 2.5V$.
*   The lower launched voltage in the second case is due to the voltage division by the source impedance matching the line impedance, effectively "bootstrapping" the voltage.

---

### 6. Practice Questions and Exercises

**Question 1:**
An ideal lossless transmission line has an inductance of 20 nH/m and a capacitance of 50 pF/m. Calculate its characteristic impedance ($Z_0$) and propagation velocity ($v_p$).

**Answer 1:**
*   Characteristic Impedance ($Z_0$):
    $Z_0 = \sqrt{\frac{L}{C}} = \sqrt{\frac{20 \times 10^{-9} \text{ H/m}}{50 \times 10^{-12} \text{ F/m}}} = \sqrt{\frac{20}{50} \times 10^3} = \sqrt{0.4 \times 1000} = \sqrt{400} = 20 \Omega$.

*   Propagation Velocity ($v_p$):
    $v_p = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(20 \times 10^{-9} \text{ H/m}) \times (50 \times 10^{-12} \text{ F/m})}} = \frac{1}{\sqrt{1000 \times 10^{-21}}} = \frac{1}{\sqrt{10 \times 10^{-19}}} = \frac{1}{10 \times 10^{-10}} = 1 \times 10^{10} \text{ m/s}$.

    *Correction for Calculation Error*:
    $LC = (20 \times 10^{-9}) \times (50 \times 10^{-12}) = 1000 \times 10^{-21} = 1 \times 10^{-18}$.
    $\sqrt{LC} = \sqrt{1 \times 10^{-18}} = 1 \times 10^{-9}$.
    $v_p = \frac{1}{1 \times 10^{-9}} = 1 \times 10^9 \text{ m/s}$.

**Question 2:**
A 50 $\Omega$ transmission line is terminated with a purely capacitive load of 10 pF. The signal frequency is 1 GHz.
What is the reflection coefficient ($\Gamma_L$) at the load? Is this a matched condition?

**Answer 2:**
*   Characteristic Impedance ($Z_0$) = 50 $\Omega$.
*   Load Impedance ($Z_L$):
    The capacitive load is reactive. At 1 GHz, its impedance is:
    $Z_C = \frac{1}{j\omega C} = \frac{1}{j(2\pi \times 1 \times 10^9 \text{ Hz}) \times (10 \times 10^{-12} \text{ F})}$
    $Z_C = \frac{1}{j 2\pi \times 10 \times 10^{-3}} = \frac{1}{j 0.0628}$
    $Z_C \approx -j 15.9 \Omega$.

*   Reflection Coefficient ($\Gamma_L$):
    $\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{-j 15.9 - 50}{-j 15.9 + 50} = \frac{50 - j 15.9}{50 - j 15.9}$ (Oops, denominator should be $50 - j 15.9$)
    $\Gamma_L = \frac{-50 - j 15.9}{50 - j 15.9}$ (Let's re-evaluate carefully)
    $\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{-j 15.9 - 50}{(-j 15.9 + 50)} = \frac{50 - j 15.9}{50 - j 15.9}$ (Mistake in calculation, it should be $Z_L = Z_R + jZ_I$, here $Z_R = 0, Z_I = -15.9$. So $Z_L = -j15.9$)
    $\Gamma_L = \frac{-j 15.9 - 50}{50 - j 15.9} = \frac{-(50 + j 15.9)}{50 - j 15.9}$

    To find the magnitude and phase:
    $|50 + j 15.9| = \sqrt{50^2 + 15.9^2} \approx \sqrt{2500 + 252.8} \approx \sqrt{2752.8} \approx 52.47$
    $|50 - j 15.9| = \sqrt{50^2 + (-15.9)^2} \approx 52.47$
    The magnitude of $\Gamma_L$ is $|\Gamma_L| = \frac{|-(50 + j 15.9)|}{|50 - j 15.9|} = \frac{52.47}{52.47} = 1$.

    This suggests a significant reflection. Let's calculate the phase.
    $\tan(\theta) = 15.9/50 \approx 0.318 \implies \theta \approx 17.6^\circ$.
    $\Gamma_L = \frac{-(50 + j 15.9)}{50 - j 15.9} = \frac{-(52.47 \angle 17.6^\circ)}{52.47 \angle -17.6^\circ} = -1 \times (52.47/52.47) \times \angle (17.6^\circ - (-17.6^\circ)) = -1 \times 1 \times \angle 35.2^\circ$.
    $\Gamma_L = -1 \times (\cos(35.2^\circ) + j \sin(35.2^\circ)) = -1 \times (0.817 + j 0.576) = -0.817 - j 0.576$.

*   Matched Condition: No, this is not a matched condition as $Z_L \neq Z_0$. The reflection coefficient has a non-zero magnitude, indicating reflections.

**Question 3:**
A 70 $\Omega$ transmission line is driven by a voltage source with an open-circuit voltage of 3.3V and a source impedance of 20 $\Omega$. If the transmission line is terminated with a matched load ($Z_L = 70 \Omega$), what is the voltage launched onto the transmission line?

**Answer 3:**
*   Source Open-Circuit Voltage ($V_{source}$) = 3.3V
*   Source Impedance ($Z_S$) = 20 $\Omega$
*   Transmission Line Impedance ($Z_0$) = 70 $\Omega$

The voltage launched onto the transmission line ($V^+_{at\_source}$) is determined by the voltage division between $Z_S$ and $Z_0$:
$V^+_{at\_source} = V_{source} \frac{Z_0}{Z_S + Z_0}$
$V^+_{at\_source} = 3.3V \times \frac{70 \Omega}{20 \Omega + 70 \Omega} = 3.3V \times \frac{70}{90}$
$V^+_{at\_source} = 3.3V \times 0.777... \approx 2.56V$.

---

### 7. Important Points to Remember

*   **Signal Integrity at High Speeds:** Simple point-to-point wiring fails as signal rise/fall times become comparable to propagation delays.
*   **Transmission Line Model:** Wires at high frequencies are characterized by distributed L, C, R, and G parameters.
*   **Characteristic Impedance ($Z_0$):** A fundamental property of a transmission line, representing the ratio of voltage to current for a traveling wave. It's crucial for impedance matching.
*   **Lossless Line:** An idealization where $R=0, G=0$, leading to $Z_0=\sqrt{L/C}$, constant propagation velocity, and no attenuation.
*   **Distortionless Line:** Satisfies $R/L = G/C$, preserving waveform shape by attenuating all frequencies equally and propagating them at the same speed.
*   **Reflections:** Occur when $Z_L \neq Z_0$ or $Z_S \neq Z_0$. They cause ringing, overshoot, and other signal integrity issues.
*   **Reflection Coefficient ($\Gamma$):** Quantifies the magnitude and phase of reflected waves.
*   **Source Impedance:** Affects the initial voltage launched onto the line and can cause double reflections.

---

### 8. Alignment with Course Outcomes

*   **CO1 (K2):** The concepts of L, C, R, G, characteristic impedance, and how they affect signal propagation (e.g., no attenuation in lossless lines) are covered.
*   **CO2 (K2):** While this module focuses on interconnects, understanding transmission line behavior is foundational for analyzing logic gate behavior at high frequencies (e.g., output impedance mismatch).
*   **CO3 (K3):** The core of this module is analyzing the effects of wiring (L, C, R, G), source impedance ($Z_S$), and load impedance ($Z_L$) on signal propagation through reflection coefficients and wave behavior.
*   **CO4 (K3):** Understanding transmission lines is essential for designing power and clock distribution networks, as these also behave as transmission lines and require impedance matching for efficient power delivery and timing accuracy.

---
This comprehensive study guide covers the essential aspects of infinite uniform transmission lines and the ideal distortionless lossless transmission line, providing a strong foundation for understanding signal integrity challenges in high-speed digital design. Remember to refer to the specified textbooks for deeper theoretical insights and detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
