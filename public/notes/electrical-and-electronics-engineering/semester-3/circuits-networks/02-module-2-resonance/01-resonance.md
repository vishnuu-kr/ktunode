---
title: "Resonance"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35abf"
status: "completed"
scrapedAt: "2026-05-23T16:11:23.532Z"
---
# CIRCUITS & NETWORKS: Module 2: Resonance - Topic: Resonance

This document provides comprehensive study notes on the topic of Resonance within Module 2 of CIRCUITS & NETWORKS. It is designed to align with the specified learning outcomes and course outcomes, drawing upon the provided textbooks.

## 1. Introduction to Resonance

**Definition:** Resonance is a phenomenon that occurs in electrical circuits containing reactive components (inductors and capacitors) when the inductive reactance ($X_L$) and capacitive reactance ($X_C$) are equal in magnitude. At resonance, the circuit behaves like a purely resistive circuit, leading to maximum current or voltage in certain configurations.

**Key Concepts:**

*   **Reactance:** The opposition offered by an inductor or capacitor to the flow of alternating current.
    *   **Inductive Reactance ($X_L$):** Opposition offered by an inductor, given by $X_L = \omega L = 2\pi fL$, where $\omega$ is the angular frequency, $f$ is the frequency, and $L$ is the inductance. $X_L$ increases with frequency.
    *   **Capacitive Reactance ($X_C$):** Opposition offered by a capacitor, given by $X_C = \frac{1}{\omega C} = \frac{1}{2\pi fC}$, where $C$ is the capacitance. $X_C$ decreases with frequency.
*   **Impedance ($Z$):** The total opposition to current flow in an AC circuit, combining resistance and reactance. For a series RLC circuit, $Z = R + j(X_L - X_C)$.
*   **Angular Frequency ($\omega$):** Related to frequency by $\omega = 2\pi f$. Measured in radians per second (rad/s).
*   **Resonant Frequency ($f_0$ or $\omega_0$):** The specific frequency at which resonance occurs.

**Textbook References:**

*   **Van Valkenburg:** Chapter on Resonance, particularly sections discussing series and parallel resonance.
*   **Ravish R Singh:** Chapters dedicated to Resonance, covering its fundamental principles and applications.
*   **Suresh Kumar:** Sections on AC circuit analysis with emphasis on reactive components and resonant conditions.
*   **Sudhakar & Palli:** Chapters detailing resonance in RLC circuits and the behaviour of circuits at different frequencies.

## 2. Series Resonance

**Concept:** In a series RLC circuit, resonance occurs when the inductive reactance equals the capacitive reactance, i.e., $X_L = X_C$.

**Derivation of Resonant Frequency:**

At resonance:
$X_L = X_C$
$\omega_0 L = \frac{1}{\omega_0 C}$

Rearranging for $\omega_0$:
$\omega_0^2 = \frac{1}{LC}$
$\omega_0 = \frac{1}{\sqrt{LC}}$ (in rad/s)

The resonant frequency in Hertz ($f_0$) is given by:
$f_0 = \frac{\omega_0}{2\pi} = \frac{1}{2\pi\sqrt{LC}}$

**Characteristics of a Series RLC Circuit at Resonance:**

*   **Impedance ($Z$):**
    $Z = R + j(X_L - X_C)$
    At resonance, $X_L = X_C$, so $Z = R + j(0) = R$.
    **Minimum Impedance:** The impedance of the series RLC circuit is minimum at resonance, and it is purely resistive.
*   **Current ($I$):**
    $I = \frac{V}{Z}$
    At resonance, $I_{res} = \frac{V}{R}$.
    **Maximum Current:** The current in the series RLC circuit is maximum at resonance. This is because the impedance is minimum.
*   **Phase Angle ($\phi$):**
    $\tan \phi = \frac{X_L - X_C}{R}$
    At resonance, $X_L = X_C$, so $\tan \phi = \frac{0}{R} = 0$.
    **Unity Power Factor:** The phase angle is zero, meaning the current and voltage are in phase. The circuit behaves like a pure resistor, and the power factor is unity ($\cos \phi = 1$).
*   **Voltage Across Inductor ($V_L$) and Capacitor ($V_C$):**
    $V_L = I_{res} X_L = \frac{V}{R} (\omega_0 L)$
    $V_C = I_{res} X_C = \frac{V}{R} (\frac{1}{\omega_0 C})$
    Since $X_L = X_C$ at resonance, $|V_L| = |V_C|$. These voltages can be much larger than the source voltage if the circuit has a high quality factor.
*   **Voltage Across Resistor ($V_R$):**
    $V_R = I_{res} R = \frac{V}{R} R = V$.
    At resonance, the voltage across the resistor is equal to the source voltage.

**Example (Series Resonance):**
A series RLC circuit has $R = 10 \Omega$, $L = 20 \text{ mH}$, and $C = 100 \mu\text{F}$. Find the resonant frequency and the impedance at resonance.

**Solution:**
Resonant frequency ($\omega_0$):
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(20 \times 10^{-3} \text{ H})(100 \times 10^{-6} \text{ F})}}$
$\omega_0 = \frac{1}{\sqrt{2000 \times 10^{-9}}} = \frac{1}{\sqrt{2 \times 10^{-6}}} = \frac{1}{1.414 \times 10^{-3}} \approx 707.1 \text{ rad/s}$

Resonant frequency ($f_0$):
$f_0 = \frac{\omega_0}{2\pi} = \frac{707.1}{2\pi} \approx 112.55 \text{ Hz}$

Impedance at resonance:
At resonance, $Z = R = 10 \Omega$.

**Practice Question (Series Resonance):**
A series RLC circuit with $R=5\Omega$, $L=10\text{mH}$, and $C=10\mu\text{F}$ is connected to a variable frequency AC voltage source of 10V. Calculate the resonant frequency, the current at resonance, and the voltage across the inductor at resonance.

**Answer:**
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(10 \times 10^{-3})(10 \times 10^{-6})}} = \frac{1}{\sqrt{100 \times 10^{-9}}} = \frac{1}{10 \times 10^{-4}} = 1000 \text{ rad/s}$
$f_0 = \frac{1000}{2\pi} \approx 159.15 \text{ Hz}$
Current at resonance ($I_{res}$) = $\frac{V}{R} = \frac{10 \text{ V}}{5 \Omega} = 2 \text{ A}$
Voltage across inductor at resonance ($V_L$) = $I_{res} \times X_L = I_{res} \times (\omega_0 L)$
$V_L = 2 \text{ A} \times (1000 \text{ rad/s} \times 10 \times 10^{-3} \text{ H}) = 2 \text{ A} \times 10 \Omega = 20 \text{ V}$

**Learning Outcome Alignment:** This section directly addresses **CO3: Solve series and parallel resonant circuits**. The knowledge level is K3 (Application) as it involves calculations based on the derived formulas.

**Important Point to Remember:** In a series RLC circuit, resonance leads to minimum impedance and maximum current, with the circuit behaving as purely resistive.

## 3. Parallel Resonance

**Concept:** In a parallel RLC circuit, resonance occurs when the circuit behaves as purely resistive. This happens when the reactive currents from the inductor and capacitor cancel each other out.

**Ideal Parallel Resonance:**
In an ideal parallel circuit with a pure inductor and a pure capacitor connected in parallel across a current source, resonance occurs when the susceptances are equal:
$B_L = B_C$
$\frac{1}{X_L} = \frac{1}{X_C}$
$\frac{1}{\omega L} = \omega C$
$\omega_0^2 = \frac{1}{LC}$
$\omega_0 = \frac{1}{\sqrt{LC}}$ (in rad/s)
$f_0 = \frac{1}{2\pi\sqrt{LC}}$ (in Hz)

**Characteristics of an Ideal Parallel RLC Circuit at Resonance:**

*   **Admittance ($Y$):**
    The total admittance of the parallel circuit is the sum of the admittances of the individual branches:
    $Y = Y_R + Y_L + Y_C$
    $Y = \frac{1}{R} + \frac{1}{j\omega L} + j\omega C$
    $Y = \frac{1}{R} + j(\omega C - \frac{1}{\omega L})$
    At resonance, $\omega C = \frac{1}{\omega L}$, so the imaginary part is zero.
    $Y_{res} = \frac{1}{R}$
    **Minimum Admittance:** The admittance is minimum at resonance, and it is purely conductive.
*   **Impedance ($Z$):**
    $Z = \frac{1}{Y}$
    At resonance, $Z_{res} = \frac{1}{1/R} = R$.
    **Maximum Impedance:** The impedance of the ideal parallel RLC circuit is maximum at resonance.
*   **Current:**
    If connected to a current source ($I_s$), the total current is minimum at resonance, as the impedance is maximum. The current from the source will primarily flow through the resistive branch. The inductor and capacitor currents are equal and opposite, cancelling each other out.
*   **Phase Angle ($\phi$):**
    The phase angle is zero, meaning the source current is in phase with the source voltage. The circuit behaves like a pure resistor.

**Practical Parallel Resonance (with series resistance in inductor/capacitor):**

In practical circuits, inductors and capacitors have inherent series resistance. Consider a circuit with a resistor $R$ in parallel with a branch containing a series resistance $R_s$ and an inductor $L$, and a capacitor $C$.

The impedance of the inductor branch ($Z_L$) = $R_s + j\omega L$.
The impedance of the capacitor branch ($Z_C$) = $\frac{1}{j\omega C}$.
The impedance of the resistor branch ($Z_R$) = $R$.

For parallel resonance, the imaginary part of the total admittance must be zero.
Total Admittance $Y = \frac{1}{R} + \frac{1}{R_s + j\omega L} + \frac{1}{1/(j\omega C)}$
$Y = \frac{1}{R} + \frac{R_s - j\omega L}{R_s^2 + (\omega L)^2} + j\omega C$
$Y = \left(\frac{1}{R} + \frac{R_s}{R_s^2 + (\omega L)^2}\right) + j\left(\omega C - \frac{\omega L}{R_s^2 + (\omega L)^2}\right)$

For resonance, the imaginary part is zero:
$\omega_0 C - \frac{\omega_0 L}{R_s^2 + (\omega_0 L)^2} = 0$
$\omega_0 C = \frac{\omega_0 L}{R_s^2 + (\omega_0 L)^2}$
$C(R_s^2 + \omega_0^2 L^2) = L$
$R_s^2 C + \omega_0^2 L^2 C = L$
$\omega_0^2 L^2 C = L - R_s^2 C$
$\omega_0^2 = \frac{L - R_s^2 C}{L^2 C}$
$\omega_0 = \sqrt{\frac{L - R_s^2 C}{L^2 C}} = \frac{\sqrt{L - R_s^2 C}}{LC}$

The resonant frequency in a practical parallel circuit is slightly lower than in the ideal case.

The impedance at resonance for a practical parallel circuit is:
$Z_{res} = \frac{L}{CR_s}$ (assuming $R_s^2 \ll (\omega_0 L)^2$)

**Example (Parallel Resonance):**
An ideal parallel RLC circuit consists of a $100 \Omega$ resistor, a $20 \text{ mH}$ inductor, and a $50 \mu\text{F}$ capacitor. Calculate the resonant frequency and the impedance at resonance.

**Solution:**
Resonant frequency ($\omega_0$):
$\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{(20 \times 10^{-3} \text{ H})(50 \times 10^{-6} \text{ F})}}$
$\omega_0 = \frac{1}{\sqrt{1000 \times 10^{-9}}} = \frac{1}{\sqrt{1 \times 10^{-6}}} = \frac{1}{1 \times 10^{-3}} = 1000 \text{ rad/s}$

Resonant frequency ($f_0$):
$f_0 = \frac{\omega_0}{2\pi} = \frac{1000}{2\pi} \approx 159.15 \text{ Hz}$

Impedance at resonance:
At resonance, $Z_{res} = R = 100 \Omega$.

**Practice Question (Parallel Resonance):**
A practical parallel circuit consists of a $100 \Omega$ resistor in parallel with an inductor having a series resistance of $2 \Omega$ and inductance of $10 \text{ mH}$, and a capacitor of $20 \mu\text{F}$. Calculate the resonant frequency.

**Answer:**
Using the formula for practical parallel resonance:
$\omega_0 = \frac{\sqrt{L - R_s^2 C}}{LC}$
$L = 10 \text{ mH} = 10 \times 10^{-3} \text{ H}$
$C = 20 \mu\text{F} = 20 \times 10^{-6} \text{ F}$
$R_s = 2 \Omega$

$\omega_0 = \frac{\sqrt{(10 \times 10^{-3}) - (2^2)(20 \times 10^{-6})}}{(10 \times 10^{-3})(20 \times 10^{-6})}$
$\omega_0 = \frac{\sqrt{10 \times 10^{-3} - 4 \times 20 \times 10^{-6}}}{200 \times 10^{-9}}$
$\omega_0 = \frac{\sqrt{0.01 - 0.00008}}{0.0000002}$
$\omega_0 = \frac{\sqrt{0.00992}}{0.0000002} = \frac{0.0996}{0.0000002} \approx 498000 \text{ rad/s}$

$f_0 = \frac{\omega_0}{2\pi} = \frac{498000}{2\pi} \approx 79245 \text{ Hz}$

**Learning Outcome Alignment:** This section directly addresses **CO3: Solve series and parallel resonant circuits**. The knowledge level is K3 (Application).

**Important Points to Remember:**
*   In an ideal parallel RLC circuit, resonance leads to maximum impedance and minimum current, with the circuit behaving as purely resistive.
*   Practical parallel resonance involves accounting for series resistance in the inductor/capacitor, leading to a slightly lower resonant frequency and a different impedance value.

## 4. Quality Factor (Q-factor)

**Concept:** The quality factor (Q) of a resonant circuit is a dimensionless parameter that measures the "sharpness" or "selectivity" of the resonance. A higher Q-factor indicates a sharper resonance peak, meaning the circuit is more sensitive to frequencies near the resonant frequency.

**Q-factor for Series Resonance:**

The Q-factor in a series RLC circuit is defined as the ratio of the voltage across the inductor (or capacitor) to the voltage across the resistor at resonance.

$Q = \frac{V_L \text{ at resonance}}{V_R \text{ at resonance}} = \frac{I_{res} X_L}{I_{res} R} = \frac{X_L}{R}$
$Q = \frac{\omega_0 L}{R}$

Alternatively, it can be expressed as:
$Q = \frac{X_C}{R}$ (since $X_L = X_C$ at resonance)
$Q = \frac{1}{\omega_0 RC}$

Also, in terms of energy:
$Q = 2\pi \frac{\text{Maximum Energy Stored}}{\text{Energy Dissipated per Cycle}}$

For a series RLC circuit, $Q$ is also related to bandwidth ($BW$):
$BW = f_0 / Q$ or $\omega_0 / Q$
$Q = \frac{f_0}{BW}$

**Q-factor for Parallel Resonance:**

For an ideal parallel RLC circuit (pure R, L, C):
$Q = \frac{R}{X_L}$
$Q = \frac{R}{\omega_0 L}$

Alternatively, it can be expressed as:
$Q = \frac{X_C}{R}$ (since $X_L = X_C$ at resonance)
$Q = \omega_0 RC$

For a practical parallel circuit with series resistance $R_s$:
$Q = \frac{\omega_0 L}{R_s}$ (This is often the definition used for the inductor's Q)

**Bandwidth (BW):**
The bandwidth of a resonant circuit is the range of frequencies over which the power delivered to the circuit is at least half of the maximum power. This corresponds to the frequencies where the current (for series) or impedance (for parallel) is $1/\sqrt{2}$ times its maximum value.

For a series RLC circuit:
$BW = \frac{R}{L}$

For an ideal parallel RLC circuit:
$BW = \frac{1}{RC}$

**Textbook References:**

*   **Van Valkenburg:** Chapter on Resonance, specifically sections on Q-factor and bandwidth.
*   **Ravish R Singh:** Sections explaining the significance of Q-factor and its relationship with circuit selectivity.
*   **Sudhakar & Palli:** Discussion on Q-factor and bandwidth in both series and parallel resonant circuits.

**Example (Q-factor):**
For the series RLC circuit with $R = 10 \Omega$, $L = 20 \text{ mH}$, and $C = 100 \mu\text{F}$:
Calculate the Q-factor and bandwidth.

**Solution:**
From the previous example, $\omega_0 \approx 707.1 \text{ rad/s}$ and $f_0 \approx 112.55 \text{ Hz}$.

Q-factor for series resonance:
$Q = \frac{\omega_0 L}{R} = \frac{707.1 \text{ rad/s} \times 20 \times 10^{-3} \text{ H}}{10 \Omega} = \frac{14.142}{10} = 1.414$

Bandwidth (BW):
$BW = \frac{\omega_0}{Q} = \frac{707.1 \text{ rad/s}}{1.414} \approx 500 \text{ rad/s}$

In Hertz:
$BW = \frac{f_0}{Q} = \frac{112.55 \text{ Hz}}{1.414} \approx 79.6 \text{ Hz}$

**Practice Question (Q-factor):**
Calculate the Q-factor and bandwidth for the ideal parallel RLC circuit with $R = 100 \Omega$, $L = 20 \text{ mH}$, and $C = 50 \mu\text{F}$.

**Answer:**
From the previous example, $\omega_0 = 1000 \text{ rad/s}$ and $f_0 \approx 159.15 \text{ Hz}$.

Q-factor for ideal parallel resonance:
$Q = \frac{R}{\omega_0 L} = \frac{100 \Omega}{1000 \text{ rad/s} \times 20 \times 10^{-3} \text{ H}} = \frac{100}{20} = 5$

Bandwidth (BW):
$BW = \frac{\omega_0}{Q} = \frac{1000 \text{ rad/s}}{5} = 200 \text{ rad/s}$

In Hertz:
$BW = \frac{f_0}{Q} = \frac{159.15 \text{ Hz}}{5} \approx 31.83 \text{ Hz}$

**Learning Outcome Alignment:** This section is crucial for understanding the behaviour of resonant circuits and aligns with **CO3: Solve series and parallel resonant circuits** by providing metrics for circuit performance. The knowledge level is K3 (Application).

**Important Points to Remember:**
*   Q-factor is a measure of the sharpness of resonance.
*   Higher Q means a narrower bandwidth and better selectivity.
*   Bandwidth is inversely proportional to the Q-factor.

## 5. Resonance in Coupled Circuits (Brief Mention)

**Concept:** While detailed analysis of coupled circuits is in a later module (CO6), it's worth noting that resonance can also occur in circuits with mutual inductance. The presence of mutual inductance modifies the effective impedance and can shift the resonant frequency.

**Key Points:**

*   Mutual inductance ($M$) links magnetic flux between coils.
*   The concept of reflected impedance is important.
*   The resonant frequency in coupled circuits depends on the self-inductances, mutual inductance, capacitance, and resistance, as well as the coupling coefficient.

**Textbook References:**

*   **Van Valkenburg:** May have a brief introductory section on resonance in coupled systems.
*   **Suresh Kumar:** Chapters on coupled circuits might touch upon resonant conditions.

**Learning Outcome Alignment:** While not the primary focus of this topic, understanding that resonance can extend to coupled circuits links to **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation**. The knowledge level here is K1/K2 (Knowledge/Understanding).

## 6. Applications of Resonance

Resonance is a fundamental phenomenon with numerous applications in electrical engineering:

*   **Tuning Circuits:** In radio receivers and transmitters, resonant circuits are used to select a specific frequency from a wide range of frequencies. By varying the capacitance or inductance, the resonant frequency can be tuned to match the desired station.
*   **Filters:** Resonant circuits form the basis of band-pass and band-stop filters.
    *   **Band-pass filter:** A series RLC circuit can act as a band-pass filter, allowing frequencies around the resonant frequency to pass while attenuating others.
    *   **Band-stop filter:** A parallel RLC circuit can act as a band-stop filter, blocking frequencies around the resonant frequency.
*   **Oscillators:** Resonant circuits are essential components in electronic oscillators, which generate periodic waveforms.
*   **Power Amplifiers:** Resonance can be used to increase the voltage or current gain in certain amplifier configurations.
*   **Induction Heating:** High-frequency resonant circuits are used in induction heating to generate heat in metallic objects.

**Textbook References:**

*   **All Textbooks:** Applications are generally discussed in dedicated chapters or sections at the end of resonance discussions, showcasing practical implementations.

**Learning Outcome Alignment:** Understanding applications reinforces the importance of **CO3: Solve series and parallel resonant circuits**, demonstrating their practical relevance. The knowledge level is K3 (Application).

## 7. Summary of Key Formulas and Concepts

**Series Resonance:**
*   Resonant Frequency: $\omega_0 = \frac{1}{\sqrt{LC}}$ or $f_0 = \frac{1}{2\pi\sqrt{LC}}$
*   Impedance at Resonance: $Z_{res} = R$ (minimum)
*   Current at Resonance: $I_{res} = \frac{V}{R}$ (maximum)
*   Power Factor at Resonance: Unity ($\cos \phi = 1$)
*   Q-factor: $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 RC}$
*   Bandwidth: $BW = \frac{\omega_0}{Q} = \frac{R}{L}$

**Parallel Resonance (Ideal):**
*   Resonant Frequency: $\omega_0 = \frac{1}{\sqrt{LC}}$ or $f_0 = \frac{1}{2\pi\sqrt{LC}}$
*   Impedance at Resonance: $Z_{res} = R$ (maximum)
*   Current at Resonance: $I_{res} = \frac{V}{R}$ (minimum, for voltage source) or $I_{res} = \frac{V}{Z_{res}}$ (for current source, minimum total current)
*   Power Factor at Resonance: Unity ($\cos \phi = 1$)
*   Q-factor: $Q = \frac{R}{\omega_0 L} = \omega_0 RC$
*   Bandwidth: $BW = \frac{\omega_0}{Q} = \frac{1}{RC}$

**Parallel Resonance (Practical):**
*   Resonant Frequency: $\omega_0 = \frac{\sqrt{L - R_s^2 C}}{LC}$ (slightly lower than ideal)

**Important Points to Remember:**
*   Resonance is characterized by the equality of inductive and capacitive reactances.
*   Series resonance: minimum impedance, maximum current, unity power factor.
*   Parallel resonance: maximum impedance, minimum current, unity power factor (in ideal case).
*   Q-factor quantifies the sharpness of resonance.
*   Bandwidth is the range of frequencies where power is at least half of the maximum.

---

This comprehensive study guide covers the topic of Resonance, aligning with the stated learning and course outcomes. Remember to practice solving various problems involving series and parallel resonance to solidify your understanding. Good luck with your studies!
