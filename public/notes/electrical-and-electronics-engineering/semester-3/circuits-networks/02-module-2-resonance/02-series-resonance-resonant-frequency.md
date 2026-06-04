---
title: "series resonance– resonant frequency"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac0"
status: "completed"
scrapedAt: "2026-05-23T16:11:24.249Z"
---
# CIRCUITS & NETWORKS - Module 2: Resonance

## Topic: Series Resonance - Resonant Frequency

This module delves into the fascinating phenomenon of resonance in electrical circuits, specifically focusing on series RLC circuits. Understanding resonance is crucial for various applications, from tuning radio receivers to designing oscillators.

---

### 1. Introduction to Resonance

**Definition:** Resonance in an AC circuit is the condition where the inductive reactance ($X_L$) equals the capacitive reactance ($X_C$). At this point, the impedance of the circuit is at its minimum (for a series circuit) or maximum (for a parallel circuit), leading to maximum current or voltage, respectively.

**Key Concept:** Resonance is a phenomenon that occurs in circuits containing both inductive and capacitive elements when the frequency of the applied AC voltage causes the reactances to cancel each other out.

**Relevance to Course Outcomes:**
*   **CO3: Solve series and parallel resonant circuits (Knowledge Level: K3)** - This topic directly addresses the understanding and solving of series resonant circuits.

---

### 2. Series RLC Circuit and its Impedance

Consider a series RLC circuit consisting of a resistor (R), an inductor (L), and a capacitor (C) connected in series to an AC voltage source $V = V_m \sin(\omega t)$.

**Impedance (Z) of a Series RLC Circuit:**
The impedance of a series RLC circuit is given by:
$Z = R + j(X_L - X_C)$

Where:
*   $R$ is the resistance in Ohms ($\Omega$).
*   $L$ is the inductance in Henries (H).
*   $C$ is the capacitance in Farads (F).
*   $\omega = 2\pi f$ is the angular frequency in radians per second (rad/s), where $f$ is the frequency in Hertz (Hz).
*   $X_L = \omega L$ is the inductive reactance in Ohms ($\Omega$).
*   $X_C = \frac{1}{\omega C}$ is the capacitive reactance in Ohms ($\Omega$).
*   $j$ is the imaginary unit.

The magnitude of the impedance is:
$|Z| = \sqrt{R^2 + (X_L - X_C)^2}$

**Important Point to Remember:** The impedance is a complex quantity that depends on the frequency of the applied voltage.

**Textbook Reference:**
*   **Van Valkenburg, "Network Analysis":** Chapter on AC steady-state analysis will cover the impedance of RLC circuits.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Similar coverage of impedance calculations for AC circuits.
*   **Suresh Kumar, "Electric Circuits & Networks":** Detailed explanation of AC circuit analysis including RLC circuits.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Provides a thorough treatment of AC circuit impedance.

---

### 3. Condition for Resonance

**Definition:** Resonance occurs when the inductive reactance ($X_L$) is equal to the capacitive reactance ($X_C$).

$X_L = X_C$

Substituting the formulas for reactances:
$\omega L = \frac{1}{\omega C}$

**Derivation of Resonant Frequency:**
To find the frequency at which resonance occurs, we solve the above equation for $\omega$. Let $\omega_0$ be the resonant angular frequency.

$\omega_0^2 LC = 1$
$\omega_0^2 = \frac{1}{LC}$
$\omega_0 = \frac{1}{\sqrt{LC}}$ radians per second

The resonant frequency ($f_0$) in Hertz is related to the resonant angular frequency by $\omega_0 = 2\pi f_0$.
$2\pi f_0 = \frac{1}{\sqrt{LC}}$
$f_0 = \frac{1}{2\pi\sqrt{LC}}$ Hertz

**Key Concepts:**
*   **Resonant Angular Frequency ($\omega_0$):** The angular frequency at which resonance occurs.
*   **Resonant Frequency ($f_0$):** The frequency in Hertz at which resonance occurs.

**Example:**
A series RLC circuit has a resistance of $10 \Omega$, an inductance of $100 \text{ mH}$, and a capacitance of $100 \mu\text{F}$. Calculate the resonant frequency.

Given:
$R = 10 \Omega$
$L = 100 \text{ mH} = 100 \times 10^{-3} \text{ H} = 0.1 \text{ H}$
$C = 100 \mu\text{F} = 100 \times 10^{-6} \text{ F} = 1 \times 10^{-4} \text{ F}$

$f_0 = \frac{1}{2\pi\sqrt{LC}}$
$f_0 = \frac{1}{2\pi\sqrt{(0.1 \text{ H})(1 \times 10^{-4} \text{ F})}}$
$f_0 = \frac{1}{2\pi\sqrt{1 \times 10^{-5}}}$
$f_0 = \frac{1}{2\pi \times 3.162 \times 10^{-3}}$
$f_0 \approx \frac{1}{0.01986}$
$f_0 \approx 50.3 \text{ Hz}$

**Important Point to Remember:** The resonant frequency depends only on the inductance (L) and capacitance (C) values of the circuit, not on the resistance (R).

**Textbook Reference:**
*   **Van Valkenburg, "Network Analysis":** Chapter on resonance will explicitly derive and explain the resonant frequency.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Similar derivation of resonant frequency in AC circuits.
*   **Suresh Kumar, "Electric Circuits & Networks":** Coverage of resonant frequency calculations for series RLC circuits.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Detailed mathematical derivation and explanation of resonant frequency.

---

### 4. Characteristics of a Series RLC Circuit at Resonance

At the resonant frequency ($\omega = \omega_0$):

*   **Reactances are Equal:** $X_L = X_C$.
*   **Impedance is Minimum:**
    $|Z| = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + (0)^2} = R$
    The impedance is purely resistive and equal to the circuit resistance.
*   **Current is Maximum:** Since $Z$ is minimum, the current in the circuit ($I = V/Z$) is maximum for a given voltage.
    $I_{max} = \frac{V}{R}$
    This current is in phase with the applied voltage because the net reactance is zero.
*   **Phase Angle is Zero:** The phase difference between voltage and current is $0^\circ$. The circuit behaves purely resistively.
    The phase angle $\phi$ is given by:
    $\tan\phi = \frac{X_L - X_C}{R}$
    At resonance, $X_L - X_C = 0$, so $\tan\phi = 0$, which means $\phi = 0^\circ$.
*   **Voltage Across Inductor and Capacitor:**
    The voltage across the inductor is $V_L = I Z_L = I j\omega_0 L$.
    The voltage across the capacitor is $V_C = I Z_C = I \frac{1}{j\omega_0 C} = I (-j\frac{1}{\omega_0 C})$.
    At resonance, $X_L = X_C$. Therefore, $V_L = I X_L$ and $V_C = I X_C$ (in magnitude).
    However, $V_L$ and $V_C$ are $180^\circ$ out of phase with each other.
    $V_L = I j\omega_0 L$
    $V_C = I (-j\frac{1}{\omega_0 C})$
    Since $\omega_0 L = \frac{1}{\omega_0 C}$, let this common value be $X_0$.
    $V_L = I jX_0$
    $V_C = I (-jX_0)$
    So, $V_L = -V_C$. The voltages across the inductor and capacitor are equal in magnitude but opposite in phase.
*   **Voltage Across Resistor:** $V_R = I R$. At resonance, $I = I_{max} = V/R$. So, $V_R = (V/R) R = V$.
    The voltage across the resistor is equal to the applied voltage.

**Key Concepts:**
*   **Unity Power Factor:** At resonance, the circuit operates at a unity power factor because the phase angle is zero.
*   **Voltage Magnification:** The voltage across the inductor ($V_L$) and the capacitor ($V_C$) can be significantly larger than the applied voltage ($V$). This is known as voltage magnification.
    $V_L = I_{max} X_L = \frac{V}{R} X_L = \frac{V}{R} \omega_0 L$
    $V_C = I_{max} X_C = \frac{V}{R} X_C = \frac{V}{R} \frac{1}{\omega_0 C}$
    Since $X_L = X_C = X_0$ at resonance, $V_L = V_C = \frac{V}{R} X_0$.
    The ratio of the voltage across the inductor (or capacitor) to the applied voltage is $\frac{V_L}{V} = \frac{\omega_0 L}{R}$. This ratio is also known as the **Quality Factor (Q)** of the circuit.

**Relevance to Course Outcomes:**
*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks (Knowledge Level: K3)** - Understanding the behavior at resonance requires applying Ohm's law and the concept of impedance in AC circuits.
*   **CO3: Solve series and parallel resonant circuits (Knowledge Level: K3)** - This is the core of the topic.

**Textbook Reference:**
*   **Van Valkenburg, "Network Analysis":** Chapters on AC steady-state and resonance will detail these characteristics.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Provides thorough coverage of the behavior of series RLC circuits at resonance.
*   **Suresh Kumar, "Electric Circuits & Networks":** Focuses on the characteristics like minimum impedance and maximum current.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Elaborates on phase angle, power factor, and voltage magnification at resonance.

---

### 5. Quality Factor (Q-factor) of a Series Resonant Circuit

**Definition:** The Quality Factor (Q) of a series resonant circuit is defined as the ratio of the voltage across the inductor (or capacitor) to the applied voltage at resonance, or equivalently, the ratio of the reactive power to the average power dissipated in the resistor.

**Mathematical Expressions for Q-factor:**

1.  **In terms of Voltage Magnification:**
    $Q = \frac{V_L}{V} = \frac{V_C}{V}$ (at resonance)
    Since $V_L = I_{max} X_L = \frac{V}{R} X_L$ and $V = IR$ (at resonance),
    $Q = \frac{(V/R) X_L}{V} = \frac{X_L}{R}$
    At resonance, $X_L = \omega_0 L = \frac{L}{\sqrt{LC}} = \sqrt{\frac{L}{C}}$.
    So, $Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}$.

2.  **In terms of Energy Storage and Dissipation:**
    The energy stored in the inductor and capacitor fluctuates. At resonance, the average energy stored in the inductor is equal to the average energy stored in the capacitor.
    Average energy stored in inductor ($W_L$) = $\frac{1}{2} L I_{rms}^2$
    Average energy stored in capacitor ($W_C$) = $\frac{1}{2} C V_{C,rms}^2 = \frac{1}{2} C (I_{rms} X_C)^2 = \frac{1}{2} C I_{rms}^2 X_C^2$
    Average power dissipated in resistor ($P_{avg}$) = $I_{rms}^2 R$

    The Q-factor can also be expressed as:
    $Q = 2\pi \frac{\text{Maximum energy stored in the circuit}}{\text{Energy dissipated per cycle}}$

    Using RMS values:
    $Q = \frac{\text{Maximum energy stored}}{\text{Average power dissipated} \times \text{Time Period}}$
    $Q = \frac{\frac{1}{2} L I_{rms}^2 + \frac{1}{2} C V_{C,rms}^2}{I_{rms}^2 R \times (1/\omega_0)}$
    At resonance, $V_C = I_{rms} X_L$. So, $Q = \frac{\frac{1}{2} L I_{rms}^2 + \frac{1}{2} C (I_{rms} X_L)^2}{I_{rms}^2 R \times (1/\omega_0)} = \frac{\frac{1}{2} I_{rms}^2 (L + CX_L^2)}{I_{rms}^2 R \times (1/\omega_0)}$
    Since $X_L = \omega_0 L$, $X_L^2 = \omega_0^2 L^2$.
    $Q = \frac{\frac{1}{2} I_{rms}^2 (L + C \omega_0^2 L^2)}{I_{rms}^2 R \times (1/\omega_0)} = \frac{\frac{1}{2} L I_{rms}^2 (1 + C \omega_0^2 L)}{I_{rms}^2 R \times (1/\omega_0)}$
    Substitute $\omega_0^2 = \frac{1}{LC} \implies C \omega_0^2 = \frac{1}{L}$.
    $Q = \frac{\frac{1}{2} L I_{rms}^2 (1 + \frac{1}{L} L)}{I_{rms}^2 R \times (1/\omega_0)} = \frac{\frac{1}{2} L I_{rms}^2 (2)}{I_{rms}^2 R \times (1/\omega_0)} = \frac{L I_{rms}^2}{I_{rms}^2 R \times (1/\omega_0)} = \frac{L \omega_0}{R}$
    This leads back to the same expression: $Q = \frac{\omega_0 L}{R}$.

    Also, we know $X_C = \frac{1}{\omega_0 C}$. So, $Q = \frac{1}{\omega_0 C R}$.

**Summary of Q-factor Expressions:**
*   $Q = \frac{\omega_0 L}{R}$
*   $Q = \frac{1}{\omega_0 C R}$
*   $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$
*   $Q = \frac{X_L}{R}$ (at resonance)
*   $Q = \frac{X_C}{R}$ (at resonance)

**Key Concepts:**
*   **Quality Factor (Q):** A dimensionless parameter that indicates how selective a resonant circuit is. A higher Q-factor means a sharper resonance peak and a more selective circuit.
*   **Bandwidth (BW):** The range of frequencies over which the power delivered to the circuit is at least half of the maximum power. For a series RLC circuit, the bandwidth is given by:
    $BW = \frac{\omega_0}{Q} = \frac{R}{L}$ (in rad/s)
    $BW = \frac{f_0}{Q} = \frac{R}{2\pi L}$ (in Hz)
    A higher Q-factor leads to a narrower bandwidth, meaning the circuit is more sensitive to frequencies close to the resonant frequency.

**Example:**
For the previous example where $R = 10 \Omega$, $L = 0.1 \text{ H}$, and $C = 1 \times 10^{-4} \text{ F}$, we found $f_0 \approx 50.3 \text{ Hz}$ and $\omega_0 \approx 316.2 \text{ rad/s}$.
Let's calculate the Q-factor.

Using $Q = \frac{\omega_0 L}{R}$:
$Q = \frac{(316.2 \text{ rad/s})(0.1 \text{ H})}{10 \Omega} = \frac{31.62}{10} = 3.162$

Using $Q = \frac{1}{\omega_0 C R}$:
$Q = \frac{1}{(316.2 \text{ rad/s})(1 \times 10^{-4} \text{ F})(10 \Omega)} = \frac{1}{0.3162} = 3.162$

Using $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$:
$Q = \frac{1}{10 \Omega}\sqrt{\frac{0.1 \text{ H}}{1 \times 10^{-4} \text{ F}}} = \frac{1}{10}\sqrt{1000} = \frac{31.62}{10} = 3.162$

**Important Point to Remember:** The Q-factor is a crucial parameter for understanding the "sharpness" of resonance and the selectivity of the circuit.

**Relevance to Course Outcomes:**
*   **CO3: Solve series and parallel resonant circuits (Knowledge Level: K3)** - Calculating Q-factor is a standard part of analyzing resonant circuits.

**Textbook Reference:**
*   **Van Valkenburg, "Network Analysis":** Dedicated section on Quality Factor and its significance.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Comprehensive treatment of Q-factor definitions and derivations.
*   **Suresh Kumar, "Electric Circuits & Networks":** Focuses on the practical implications of Q-factor in circuit design.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Detailed mathematical derivations and explanation of Q-factor and bandwidth.

---

### 6. Bandwidth of a Series Resonant Circuit

**Definition:** The bandwidth (BW) of a resonant circuit is the range of frequencies for which the power delivered to the circuit is at least half of the maximum power delivered at resonance. This is also known as the half-power bandwidth.

**Derivation of Bandwidth:**
The power dissipated in the circuit is $P = I_{rms}^2 R$.
At resonance, the current is maximum ($I_{max} = V/R$), so the maximum power is $P_{max} = I_{max}^2 R = (V/R)^2 R = V^2/R$.

We are looking for frequencies where $P = P_{max}/2$.
$I_{rms}^2 R = \frac{1}{2} \frac{V^2}{R}$
$I_{rms}^2 = \frac{V^2}{2R^2}$
$I_{rms} = \frac{V}{\sqrt{2}R}$

The impedance of the series RLC circuit is $|Z| = \sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2}$.
So, $I_{rms} = \frac{V}{|Z|} = \frac{V}{\sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2}}$.

Setting $I_{rms} = \frac{V}{\sqrt{2}R}$:
$\frac{V}{\sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2}} = \frac{V}{\sqrt{2}R}$

Squaring both sides:
$\frac{V^2}{R^2 + (\omega L - \frac{1}{\omega C})^2} = \frac{V^2}{2R^2}$

$2R^2 = R^2 + (\omega L - \frac{1}{\omega C})^2$
$R^2 = (\omega L - \frac{1}{\omega C})^2$

This gives two possibilities for the frequencies ($\omega_1$ and $\omega_2$) where the power is half the maximum:

**Case 1: $\omega L - \frac{1}{\omega C} = R$** (This is for the upper half-power frequency, $\omega_2$)
$\omega_2 L - \frac{1}{\omega_2 C} = R$
Multiply by $\omega_2 C$:
$\omega_2^2 LC - 1 = R \omega_2 C$
$\omega_2^2 LC - R \omega_2 C - 1 = 0$

This is a quadratic equation in $\omega_2$. Using the quadratic formula $\omega = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$\omega_2 = \frac{RC \pm \sqrt{(-RC)^2 - 4(LC)(-1)}}{2LC} = \frac{RC \pm \sqrt{R^2C^2 + 4LC}}{2LC}$
$\omega_2 = \frac{R}{2L} \pm \frac{\sqrt{R^2C^2 + 4LC}}{2LC}$
$\omega_2 = \frac{R}{2L} \pm \sqrt{\frac{R^2C^2}{4L^2C^2} + \frac{4LC}{4L^2C^2}} = \frac{R}{2L} \pm \sqrt{\frac{R^2}{4L^2} + \frac{1}{LC}}$
We know $\omega_0^2 = \frac{1}{LC}$, so:
$\omega_2 = \frac{R}{2L} + \sqrt{\frac{R^2}{4L^2} + \omega_0^2}$

For practical circuits where $R$ is not excessively large, $R^2/(4L^2)$ is much smaller than $\omega_0^2$.
Thus, for high Q circuits, $\omega_2 \approx \frac{R}{2L} + \omega_0$.

**Case 2: $\omega L - \frac{1}{\omega C} = -R$** (This is for the lower half-power frequency, $\omega_1$)
$\omega_1 L - \frac{1}{\omega_1 C} = -R$
Multiply by $\omega_1 C$:
$\omega_1^2 LC - 1 = -R \omega_1 C$
$\omega_1^2 LC + R \omega_1 C - 1 = 0$

Using the quadratic formula:
$\omega_1 = \frac{-RC \pm \sqrt{(RC)^2 - 4(LC)(-1)}}{2LC} = \frac{-RC \pm \sqrt{R^2C^2 + 4LC}}{2LC}$
Since frequency must be positive, we take the positive root:
$\omega_1 = \frac{-RC + \sqrt{R^2C^2 + 4LC}}{2LC}$
$\omega_1 = -\frac{R}{2L} + \sqrt{\frac{R^2}{4L^2} + \frac{1}{LC}} = -\frac{R}{2L} + \sqrt{\frac{R^2}{4L^2} + \omega_0^2}$

For high Q circuits, $\omega_1 \approx \omega_0 - \frac{R}{2L}$.

**Bandwidth Calculation:**
The bandwidth is the difference between the upper and lower half-power frequencies:
$BW = \omega_2 - \omega_1$
$BW = \left(\frac{R}{2L} + \sqrt{\frac{R^2}{4L^2} + \omega_0^2}\right) - \left(-\frac{R}{2L} + \sqrt{\frac{R^2}{4L^2} + \omega_0^2}\right)$
$BW = \frac{R}{2L} + \frac{R}{2L} = \frac{R}{L}$ rad/s

In Hertz, $f_{BW} = \frac{BW}{2\pi} = \frac{R}{2\pi L}$.

**Relationship between Bandwidth and Q-factor:**
We found earlier that $Q = \frac{\omega_0 L}{R}$, which can be rewritten as $\frac{R}{L} = \frac{\omega_0}{Q}$.
Therefore, $BW = \frac{\omega_0}{Q}$.
And $f_{BW} = \frac{f_0}{Q}$.

This relationship is fundamental: a higher Q-factor leads to a narrower bandwidth, and vice-versa.

**Example:**
For the previous example ($R = 10 \Omega$, $L = 0.1 \text{ H}$, $C = 1 \times 10^{-4} \text{ F}$), $Q=3.162$, $f_0 \approx 50.3 \text{ Hz}$, $\omega_0 \approx 316.2 \text{ rad/s}$.

Let's calculate the bandwidth.
$BW = \frac{R}{L} = \frac{10 \Omega}{0.1 \text{ H}} = 100 \text{ rad/s}$
$f_{BW} = \frac{R}{2\pi L} = \frac{10 \Omega}{2\pi (0.1 \text{ H})} = \frac{10}{0.628} \approx 15.9 \text{ Hz}$

Alternatively, using $f_{BW} = f_0/Q$:
$f_{BW} = \frac{50.3 \text{ Hz}}{3.162} \approx 15.9 \text{ Hz}$

The half-power frequencies are:
$f_1 = f_0 - \frac{f_{BW}}{2} = 50.3 - \frac{15.9}{2} \approx 50.3 - 7.95 \approx 42.35 \text{ Hz}$
$f_2 = f_0 + \frac{f_{BW}}{2} = 50.3 + \frac{15.9}{2} \approx 50.3 + 7.95 \approx 58.25 \text{ Hz}$

**Important Point to Remember:** Bandwidth is a measure of the frequency range over which the circuit is responsive. It's inversely proportional to the Q-factor.

**Relevance to Course Outcomes:**
*   **CO3: Solve series and parallel resonant circuits (Knowledge Level: K3)** - Bandwidth calculation is an integral part of resonant circuit analysis.

**Textbook Reference:**
*   **Van Valkenburg, "Network Analysis":** Detailed derivation and explanation of bandwidth.
*   **Ravish R Singh, "Network Analysis and Synthesis":** Thorough coverage of half-power frequencies and bandwidth.
*   **Suresh Kumar, "Electric Circuits & Networks":** Practical aspects of bandwidth and its relation to circuit selectivity.
*   **A Sudhakar, Shyammohan S Palli, "Circuits and Networks, Analysis and Synthesis":** Rigorous mathematical derivation of bandwidth and its properties.

---

### 7. Applications of Series Resonance

Series resonance has numerous applications in electrical engineering:

*   **Tuning Circuits:** In radio and television receivers, series resonant circuits are used to tune into specific frequencies. By varying the capacitance, the resonant frequency of the circuit can be changed to match the desired broadcast frequency.
*   **Filters:** Resonant circuits can act as band-pass filters, allowing frequencies around the resonant frequency to pass through while attenuating others.
*   **Oscillators:** The resonant properties of LC circuits are fundamental to the operation of many electronic oscillators, which generate AC signals.
*   **Induction Heating:** High-frequency currents induced in a conductor can cause heating. Resonant circuits are used to achieve the high currents required for efficient induction heating.
*   **Power Factor Correction:** While parallel resonance is more common for power factor correction, series resonance can be utilized in specific scenarios to compensate for reactive power.

**Relevance to Course Outcomes:**
*   **CO3: Solve series and parallel resonant circuits (Knowledge Level: K3)** - Understanding applications helps in applying the concepts.

---

### 8. Summary of Series Resonance

| Parameter               | Condition                                  | Value at Resonance                                     |
| :---------------------- | :----------------------------------------- | :----------------------------------------------------- |
| Inductive Reactance     | $X_L = \omega L$                           | $X_L = X_C$                                            |
| Capacitive Reactance    | $X_C = 1/(\omega C)$                       | $X_C = X_L$                                            |
| Resonant Angular Freq.  | -                                          | $\omega_0 = 1/\sqrt{LC}$                               |
| Resonant Frequency      | -                                          | $f_0 = 1/(2\pi\sqrt{LC})$                               |
| Impedance               | $Z = R + j(X_L - X_C)$                     | $Z = R$ (Minimum)                                      |
| Current                 | $I = V/Z$                                  | $I_{max} = V/R$ (Maximum)                              |
| Phase Angle ($\phi$)    | $\tan\phi = (X_L - X_C)/R$                 | $\phi = 0^\circ$ (Unity Power Factor)                  |
| Voltage across L & C    | $V_L = I X_L$, $V_C = I X_C$               | $V_L = V_C$ (Magnitudes), $V_L = -V_C$ (Phasors)       |
| Voltage across R        | $V_R = I R$                                | $V_R = V$                                              |
| Quality Factor (Q)      | -                                          | $Q = \omega_0 L / R = 1/(\omega_0 C R) = (1/R)\sqrt{L/C}$ |
| Bandwidth (BW)          | -                                          | $BW = \omega_0 / Q = R/L$ (rad/s)                      |
| Bandwidth (BW in Hz)    | -                                          | $f_{BW} = f_0 / Q = R/(2\pi L)$ (Hz)                   |

---

### 9. Practice Questions and Exercises

**Question 1:**
A series RLC circuit has $R = 50 \Omega$, $L = 20 \text{ mH}$, and $C = 0.1 \mu\text{F}$. Calculate:
a) The resonant frequency.
b) The impedance at resonance.
c) The current at resonance if the applied voltage is $10 \text{ V}$ RMS.
d) The Q-factor of the circuit.
e) The bandwidth of the circuit in Hz.

**Answer 1:**
a) $L = 20 \times 10^{-3} \text{ H}$, $C = 0.1 \times 10^{-6} \text{ F}$
$f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{(20 \times 10^{-3})(0.1 \times 10^{-6})}} = \frac{1}{2\pi\sqrt{2 \times 10^{-9}}} = \frac{1}{2\pi \times 4.472 \times 10^{-5}} \approx 3558.8 \text{ Hz}$

b) At resonance, $Z = R = 50 \Omega$.

c) $I_{rms} = V_{rms}/R = 10 \text{ V} / 50 \Omega = 0.2 \text{ A}$

d) $Q = \frac{\omega_0 L}{R}$. First, find $\omega_0 = 2\pi f_0 = 2\pi \times 3558.8 \approx 22360 \text{ rad/s}$.
$Q = \frac{22360 \times (20 \times 10^{-3})}{50} = \frac{447.2}{50} = 8.944$

e) $f_{BW} = \frac{f_0}{Q} = \frac{3558.8}{8.944} \approx 397.9 \text{ Hz}$

---

**Question 2:**
In a series RLC circuit, resonance occurs at $100 \text{ kHz}$. The inductance is $10 \mu\text{H}$. Calculate the capacitance and the Q-factor if the resistance is $20 \Omega$.

**Answer 2:**
$f_0 = 100 \text{ kHz} = 100 \times 10^3 \text{ Hz}$
$L = 10 \mu\text{H} = 10 \times 10^{-6} \text{ H}$
$R = 20 \Omega$

From $f_0 = \frac{1}{2\pi\sqrt{LC}}$:
$C = \frac{1}{(2\pi f_0)^2 L} = \frac{1}{(2\pi \times 100 \times 10^3)^2 \times (10 \times 10^{-6})} = \frac{1}{(628.3 \times 10^3)^2 \times (10 \times 10^{-6})}$
$C = \frac{1}{(3.948 \times 10^{11}) \times (10 \times 10^{-6})} = \frac{1}{3.948 \times 10^6} \approx 0.253 \times 10^{-6} \text{ F} = 0.253 \mu\text{F}$

$Q = \frac{\omega_0 L}{R} = \frac{2\pi f_0 L}{R} = \frac{2\pi \times (100 \times 10^3) \times (10 \times 10^{-6})}{20} = \frac{6283}{20} \approx 314.15$

---

### 10. Important Points to Remember

*   Resonance in a series RLC circuit occurs when $X_L = X_C$.
*   The resonant frequency $f_0$ depends only on L and C: $f_0 = \frac{1}{2\pi\sqrt{LC}}$.
*   At resonance, impedance $Z$ is minimum and equals $R$.
*   At resonance, current $I$ is maximum and leads to unity power factor.
*   The Q-factor quantifies the "sharpness" of resonance and voltage magnification.
*   Bandwidth is inversely proportional to the Q-factor.
*   Series resonance is used in tuning circuits, filters, and oscillators.

---

This concludes the notes on series resonance and resonant frequency. Understanding these concepts is fundamental to analyzing and designing many electrical circuits.
