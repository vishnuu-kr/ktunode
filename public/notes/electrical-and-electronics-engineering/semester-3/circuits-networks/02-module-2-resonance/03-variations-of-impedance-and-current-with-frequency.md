---
title: "variations of 
impedance and current with frequency"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac1"
status: "completed"
scrapedAt: "2026-05-23T16:11:24.963Z"
---
# CIRCUITS & NETWORKS: Module 2: Resonance

## Topic: Variations of Impedance and Current with Frequency

This topic delves into how the impedance and current in AC circuits, particularly those containing reactive components (inductors and capacitors), change as the input frequency varies. Understanding these variations is fundamental to comprehending the behavior of resonant circuits.

---

### Learning Outcomes:

*   Understand the frequency-dependent nature of impedance in circuits with inductors and capacitors.
*   Analyze the total impedance of series and parallel RLC circuits as a function of frequency.
*   Predict the behavior of current in RLC circuits at different frequencies, especially around resonance.
*   Relate the concepts of impedance variation to the phenomenon of resonance.

---

### Key Concepts and Definitions:

*   **Impedance ($Z$)**: The total opposition to current flow in an AC circuit. It's a complex quantity, comprising resistance ($R$), inductive reactance ($X_L$), and capacitive reactance ($X_C$).
    *   $Z = R + j(X_L - X_C)$
*   **Resistance ($R$)**: Opposition to current flow that dissipates energy as heat. Its value is independent of frequency.
*   **Inductive Reactance ($X_L$)**: Opposition to current flow offered by an inductor. It increases linearly with frequency.
    *   $X_L = \omega L = 2\pi f L$
    *   Where:
        *   $\omega$ is the angular frequency in rad/s
        *   $f$ is the frequency in Hz
        *   $L$ is the inductance in Henries
*   **Capacitive Reactance ($X_C$)**: Opposition to current flow offered by a capacitor. It decreases inversely with frequency.
    *   $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$
    *   Where:
        *   $C$ is the capacitance in Farads
*   **Admittance ($Y$)**: The reciprocal of impedance.
    *   $Y = \frac{1}{Z} = G + j(B_C - B_L)$
    *   Where $G$ is conductance, $B_C = \omega C$ is capacitive susceptance, and $B_L = \frac{1}{\omega L}$ is inductive susceptance.
*   **Frequency Response**: The characteristic of a circuit's output (voltage, current, power) as a function of the input frequency.

---

### Variations of Impedance and Current with Frequency:

#### 1. Series RLC Circuit:

**Impedance Variation:**

The impedance of a series RLC circuit is given by:
$Z = R + j(X_L - X_C) = R + j(\omega L - \frac{1}{\omega C})$

*   **At very low frequencies ($f \to 0$)**:
    *   $X_L = 2\pi f L \to 0$ (Inductor acts like a short circuit)
    *   $X_C = \frac{1}{2\pi f C} \to \infty$ (Capacitor acts like an open circuit)
    *   $Z \approx R + j(0 - \infty) \approx \infty$ (largely determined by $X_C$)
    *   The impedance is very high, and the current is very low.

*   **At very high frequencies ($f \to \infty$)**:
    *   $X_L = 2\pi f L \to \infty$ (Inductor acts like an open circuit)
    *   $X_C = \frac{1}{2\pi f C} \to 0$ (Capacitor acts like a short circuit)
    *   $Z \approx R + j(\infty - 0) \approx \infty$ (largely determined by $X_L$)
    *   The impedance is very high, and the current is very low.

*   **At resonance (where $X_L = X_C$)**:
    *   $\omega_0 L = \frac{1}{\omega_0 C}$
    *   $\omega_0 = \frac{1}{\sqrt{LC}}$ (Resonant angular frequency)
    *   $f_0 = \frac{1}{2\pi\sqrt{LC}}$ (Resonant frequency)
    *   At resonance, the imaginary part of the impedance is zero: $X_L - X_C = 0$.
    *   $Z_{resonance} = R$
    *   The impedance is at its minimum value and is purely resistive.

**Current Variation:**

The current in a series RLC circuit is given by Ohm's Law: $I = \frac{V}{Z}$, where $V$ is the RMS voltage.

*   **At very low frequencies**: $I$ is very low due to the large capacitive reactance.
*   **At very high frequencies**: $I$ is very low due to the large inductive reactance.
*   **At resonance**: $I$ is at its maximum value because the impedance is at its minimum ($Z=R$).
    *   $I_{max} = \frac{V}{R}$

**Graphical Representation:**

*   **Impedance vs. Frequency**: The impedance plot will be a U-shaped curve (or a curve that starts at infinity, decreases to a minimum at resonance, and then increases back to infinity).
*   **Current vs. Frequency**: The current plot will be an inverted U-shaped curve, peaking at the resonant frequency.

---

#### 2. Parallel RLC Circuit:

**Impedance Variation:**

The impedance of a parallel RLC circuit is more complex to analyze directly. It's often easier to consider its reciprocal, the admittance ($Y$).

$Y = \frac{1}{R} + \frac{1}{j\omega L} + j\omega C$
$Y = G + j(\omega C - \frac{1}{\omega L})$

The magnitude of the impedance is $|Z| = \frac{1}{|Y|}$.

*   **At very low frequencies ($f \to 0$)**:
    *   $X_L = 2\pi f L \to 0$ (Inductor acts like a short circuit)
    *   $X_C = \frac{1}{2\pi f C} \to \infty$ (Capacitor acts like an open circuit)
    *   The inductor essentially shorts the circuit.
    *   $Y \approx G + j(0 - \infty) \approx \infty$
    *   $Z \approx 0$ (limited by the resistance of the inductor, if it's not ideal)
    *   The impedance is very low, and the current is very high.

*   **At very high frequencies ($f \to \infty$)**:
    *   $X_L = 2\pi f L \to \infty$ (Inductor acts like an open circuit)
    *   $X_C = \frac{1}{2\pi f C} \to 0$ (Capacitor acts like a short circuit)
    *   The capacitor essentially shorts the circuit.
    *   $Y \approx G + j(\infty - 0) \approx \infty$
    *   $Z \approx 0$ (limited by the resistance of the capacitor, if it's not ideal)
    *   The impedance is very low, and the current is very high.

*   **At resonance (where $X_L = X_C$)**:
    *   In a parallel circuit, resonance occurs when the imaginary part of the admittance is zero: $\omega C - \frac{1}{\omega L} = 0$.
    *   $\omega_0 = \frac{1}{\sqrt{LC}}$ (Resonant angular frequency - same as series)
    *   $f_0 = \frac{1}{2\pi\sqrt{LC}}$ (Resonant frequency - same as series)
    *   At resonance, the susceptance terms cancel out: $\omega_0 C = \frac{1}{\omega_0 L}$.
    *   $Y_{resonance} = G = \frac{1}{R}$
    *   $Z_{resonance} = \frac{1}{Y_{resonance}} = R$
    *   **Important Note:** This is for an ideal parallel RLC circuit. In a practical parallel circuit where the resistor is in parallel with L and C, the resonant impedance can be much higher than R. Textbooks like Van Valkenburg often discuss the "dynamic resistance" in this context. If the resistor is in series with the parallel LC combination, the analysis changes. Assuming the most common scenario of R in parallel with L and C:
        *   $Z = \frac{1}{\frac{1}{R} + \frac{1}{j\omega L} + j\omega C} = \frac{1}{\frac{1}{R} + j(\omega C - \frac{1}{\omega L})}$
        *   At resonance, $\omega C = \frac{1}{\omega L}$.
        *   $Z_{resonance} = \frac{1}{\frac{1}{R}} = R$.
        *   However, if we consider the parallel combination of R, L, and C, and express admittance:
            $Y = \frac{1}{R} + \frac{1}{j\omega L} + j\omega C$
            $Y = \frac{1}{R} + j(\omega C - \frac{1}{\omega L})$
            At resonance $\omega_0 = \frac{1}{\sqrt{LC}}$:
            $Y_{res} = \frac{1}{R}$
            $Z_{res} = R$.
        *   A more realistic parallel circuit often has the resistor ($R_p$) in parallel with the inductor and capacitor. In this case, the impedance is:
            $Z = \frac{1}{\frac{1}{R_p} + \frac{1}{R_s + j\omega L} + j\omega C}$ (where $R_s$ is the series resistance of the inductor)
            The condition for resonance where the circuit appears purely resistive is when the imaginary part of the total admittance is zero. The impedance at resonance can be significantly higher than $R_p$.
            For a parallel LC circuit with a series resistance R:
            $Z = \frac{R+j\omega L}{1 - \omega^2 LC + j\omega CR}$
            The resonant frequency is slightly shifted. The condition for unity power factor is $X_L = X_C - \frac{R^2}{X_L}$.
            The impedance at resonance can be very high.
            *Textbook Reference:* Van Valkenburg discusses the impedance of parallel circuits and the concept of "dynamic resistance" or "quality factor" in parallel resonance, which can lead to very high impedance at resonance if the parallel resistance is large compared to the reactive components. Ravish R Singh also covers parallel resonance extensively, highlighting the high impedance.

**Current Variation:**

The current in a parallel RLC circuit is the sum of the currents through each branch.

*   **At very low frequencies**: The current is very high, dominated by the current through the inductor (short circuit).
*   **At very high frequencies**: The current is very high, dominated by the current through the capacitor (short circuit).
*   **At resonance**: The currents through the inductor and capacitor are equal in magnitude but 180 degrees out of phase. They cancel each other out ideally. The total current drawn from the source is minimal and is limited by the parallel resistor ($I_{res} = \frac{V}{R}$). The impedance is at its maximum.

**Graphical Representation:**

*   **Impedance vs. Frequency**: The impedance plot will start at a low value, increase to a peak at resonance, and then decrease again.
*   **Current vs. Frequency**: The current plot will start at a high value, decrease to a minimum at resonance, and then increase again.

---

### Impact of Component Values (Q-Factor):

The sharpness of the resonance peak (both for current in series and impedance in parallel) is determined by the **Quality Factor (Q)** of the circuit.

*   **Series RLC Circuit**:
    *   $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR}$
    *   A higher Q-factor means a sharper resonance peak (steeper rise and fall in current) and a narrower bandwidth.
    *   Bandwidth ($BW$) = $\frac{R}{L} = \frac{\omega_0}{Q}$

*   **Parallel RLC Circuit (Ideal)**:
    *   $Q = \frac{R}{\omega_0 L} = \omega_0 CR$
    *   A higher Q-factor in a parallel circuit means a broader impedance peak and a narrower bandwidth for the current.

**Important Point:** The Q-factor quantifies how "good" a resonant circuit is. A higher Q means less energy loss in the resistive components relative to the energy stored in the reactive components.

---

### Alignment with Course Outcomes:

*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks.**
    *   Understanding impedance variations helps in applying network theorems like superposition, nodal analysis, and mesh analysis to AC circuits with varying frequencies. For example, calculating the impedance of each branch at a specific frequency is a prerequisite.
*   **CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits.**
    *   In the s-domain, impedance is represented as $Z(s)$. Inductors have impedance $sL$, and capacitors have impedance $1/(sC)$. The variation with frequency is directly related to the behavior of $Z(s)$ as $s$ approaches $j\omega$. This topic provides the foundational understanding for s-domain analysis.
*   **CO3: Solve series and parallel resonant circuits.**
    *   This entire topic is dedicated to understanding the impedance and current variations that define resonance in series and parallel RLC circuits. It lays the groundwork for solving for resonant frequency, impedance at resonance, and current/voltage behavior around resonance.
*   **CO4: Analyse three-phase networks in star and delta configurations under balanced and unbalanced conditions.**
    *   While not directly about three-phase, understanding how individual components (L and C) behave with frequency is crucial for analyzing three-phase circuits where impedance is a key parameter.
*   **CO5: Describe two-port networks in terms of various parameters.**
    *   Parameters like the ABCD parameters or Z-parameters of a two-port network will be frequency-dependent if the network contains reactive elements. This topic provides the context for understanding this frequency dependence.
*   **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation.**
    *   Coupled circuits (transformers, etc.) also exhibit frequency-dependent behavior due to the inductance involved. Understanding the basic impedance variations helps in analyzing these more complex circuits.

---

### Examples:

**Example 1: Series RLC Circuit**

Consider a series RLC circuit with $R = 50 \Omega$, $L = 100 \text{ mH}$, and $C = 10 \mu\text{F}$. A voltage source of $10 \text{ V}$ (RMS) is applied.

1.  **Calculate the resonant frequency.**
    $f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{(100 \times 10^{-3}) \times (10 \times 10^{-6})}}$
    $f_0 = \frac{1}{2\pi\sqrt{10^{-6}}} = \frac{1}{2\pi \times 10^{-3}} = \frac{1000}{2\pi} \approx 159.15 \text{ Hz}$

2.  **Calculate the impedance at resonance.**
    At resonance, $Z = R = 50 \Omega$.

3.  **Calculate the current at resonance.**
    $I_{max} = \frac{V}{R} = \frac{10 \text{ V}}{50 \Omega} = 0.2 \text{ A}$

4.  **Calculate the impedance at $f = 50 \text{ Hz}$.**
    $\omega = 2\pi f = 2\pi(50) = 100\pi \text{ rad/s}$
    $X_L = \omega L = (100\pi)(100 \times 10^{-3}) = 10\pi \Omega \approx 31.42 \Omega$
    $X_C = \frac{1}{\omega C} = \frac{1}{(100\pi)(10 \times 10^{-6})} = \frac{10^6}{1000\pi} = \frac{1000}{\pi} \Omega \approx 318.31 \Omega$
    $Z = R + j(X_L - X_C) = 50 + j(31.42 - 318.31) = 50 - j286.89 \Omega$
    $|Z| = \sqrt{50^2 + (-286.89)^2} \approx \sqrt{2500 + 82306} \approx \sqrt{84806} \approx 291.2 \Omega$
    $I = \frac{10 \text{ V}}{|Z|} \approx \frac{10}{291.2} \approx 0.034 \text{ A}$ (Significantly lower than at resonance)

5.  **Calculate the impedance at $f = 500 \text{ Hz}$.**
    $\omega = 2\pi f = 2\pi(500) = 1000\pi \text{ rad/s}$
    $X_L = \omega L = (1000\pi)(100 \times 10^{-3}) = 100\pi \Omega \approx 314.16 \Omega$
    $X_C = \frac{1}{\omega C} = \frac{1}{(1000\pi)(10 \times 10^{-6})} = \frac{10^5}{1000\pi} = \frac{100}{\pi} \Omega \approx 31.83 \Omega$
    $Z = R + j(X_L - X_C) = 50 + j(314.16 - 31.83) = 50 + j282.33 \Omega$
    $|Z| = \sqrt{50^2 + (282.33)^2} \approx \sqrt{2500 + 79710} \approx \sqrt{82210} \approx 286.7 \Omega$
    $I = \frac{10 \text{ V}}{|Z|} \approx \frac{10}{286.7} \approx 0.035 \text{ A}$ (Also significantly lower than at resonance)

**Example 2: Parallel RLC Circuit**

Consider a parallel RLC circuit with $R = 100 \Omega$, $L = 50 \text{ mH}$, and $C = 20 \mu\text{F}$. A voltage source of $12 \text{ V}$ (RMS) is applied.

1.  **Calculate the resonant frequency.**
    $f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{(50 \times 10^{-3}) \times (20 \times 10^{-6})}}$
    $f_0 = \frac{1}{2\pi\sqrt{1000 \times 10^{-9}}} = \frac{1}{2\pi\sqrt{10^{-6}}} = \frac{1}{2\pi \times 10^{-3}} = \frac{1000}{2\pi} \approx 159.15 \text{ Hz}$

2.  **Calculate the impedance at resonance.**
    At resonance (ideal parallel circuit), $Z_{res} = R = 100 \Omega$.

3.  **Calculate the current at resonance.**
    $I_{res} = \frac{V}{R} = \frac{12 \text{ V}}{100 \Omega} = 0.12 \text{ A}$

4.  **Calculate the impedance at $f = 50 \text{ Hz}$.**
    $\omega = 2\pi f = 2\pi(50) = 100\pi \text{ rad/s}$
    $X_L = \omega L = (100\pi)(50 \times 10^{-3}) = 5\pi \Omega \approx 15.71 \Omega$
    $X_C = \frac{1}{\omega C} = \frac{1}{(100\pi)(20 \times 10^{-6})} = \frac{10^6}{2000\pi} = \frac{500}{\pi} \Omega \approx 159.15 \Omega$
    The impedance of the parallel combination is:
    $Z = \frac{1}{\frac{1}{R} + \frac{1}{jX_L} + \frac{1}{jX_C}} = \frac{1}{\frac{1}{100} + \frac{1}{j15.71} + \frac{1}{j159.15}}$
    $Z = \frac{1}{0.01 - j\frac{1}{15.71} - j\frac{1}{159.15}} = \frac{1}{0.01 - j0.0636 - j0.0063}$
    $Z = \frac{1}{0.01 - j0.0699}$
    $|Z| = \frac{1}{\sqrt{(0.01)^2 + (-0.0699)^2}} = \frac{1}{\sqrt{0.0001 + 0.004886}} = \frac{1}{\sqrt{0.004986}} \approx \frac{1}{0.0706} \approx 14.16 \Omega$
    $I = \frac{12 \text{ V}}{|Z|} \approx \frac{12}{14.16} \approx 0.85 \text{ A}$ (Much higher than at resonance)

---

### Practice Questions:

**Question 1:**
A series RLC circuit has a resistance of $20 \Omega$, an inductance of $50 \text{ mH}$, and a capacitance of $100 \mu\text{F}$. Calculate:
a) The resonant frequency.
b) The impedance of the circuit at resonance.
c) The current at resonance if a $5 \text{ V}$ source is applied.
d) The impedance at half the resonant frequency.
e) The impedance at twice the resonant frequency.

**Question 2:**
In a parallel RLC circuit, $R = 200 \Omega$, $L = 20 \text{ mH}$, and $C = 50 \mu\text{F}$. Determine:
a) The resonant frequency.
b) The impedance of the circuit at resonance.
c) The total current drawn from a $10 \text{ V}$ source at resonance.
d) The total current drawn from the source at $100 \text{ Hz}$.

**Question 3:**
How does the inductive reactance ($X_L$) and capacitive reactance ($X_C$) vary with frequency? Explain the implications for the impedance of series and parallel RLC circuits at very low and very high frequencies.

---

### Answers to Practice Questions:

**Answer 1:**
Given: $R = 20 \Omega$, $L = 50 \text{ mH} = 0.05 \text{ H}$, $C = 100 \mu\text{F} = 100 \times 10^{-6} \text{ F}$.

a) Resonant frequency ($f_0$):
$f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{(0.05)(100 \times 10^{-6})}} = \frac{1}{2\pi\sqrt{5 \times 10^{-6}}} = \frac{1}{2\pi \times 2.236 \times 10^{-3}} \approx \frac{1}{0.01405} \approx 71.18 \text{ Hz}$.

b) Impedance at resonance ($Z_{res}$):
At resonance, $Z_{res} = R = 20 \Omega$.

c) Current at resonance ($I_{res}$):
$I_{res} = \frac{V}{R} = \frac{5 \text{ V}}{20 \Omega} = 0.25 \text{ A}$.

d) Impedance at half the resonant frequency ($f = 35.59 \text{ Hz}$):
$\omega = 2\pi f = 2\pi(35.59) \approx 223.6 \text{ rad/s}$
$X_L = \omega L = (223.6)(0.05) \approx 11.18 \Omega$
$X_C = \frac{1}{\omega C} = \frac{1}{(223.6)(100 \times 10^{-6})} = \frac{1}{0.02236} \approx 44.72 \Omega$
$Z = R + j(X_L - X_C) = 20 + j(11.18 - 44.72) = 20 - j33.54 \Omega$
$|Z| = \sqrt{20^2 + (-33.54)^2} = \sqrt{400 + 1125} \approx \sqrt{1525} \approx 39.05 \Omega$.

e) Impedance at twice the resonant frequency ($f = 142.36 \text{ Hz}$):
$\omega = 2\pi f = 2\pi(142.36) \approx 894.4 \text{ rad/s}$
$X_L = \omega L = (894.4)(0.05) \approx 44.72 \Omega$
$X_C = \frac{1}{\omega C} = \frac{1}{(894.4)(100 \times 10^{-6})} = \frac{1}{0.08944} \approx 11.18 \Omega$
$Z = R + j(X_L - X_C) = 20 + j(44.72 - 11.18) = 20 + j33.54 \Omega$
$|Z| = \sqrt{20^2 + (33.54)^2} = \sqrt{400 + 1125} \approx \sqrt{1525} \approx 39.05 \Omega$.

**Answer 2:**
Given: $R = 200 \Omega$, $L = 20 \text{ mH} = 0.02 \text{ H}$, $C = 50 \mu\text{F} = 50 \times 10^{-6} \text{ F}$.

a) Resonant frequency ($f_0$):
$f_0 = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{(0.02)(50 \times 10^{-6})}} = \frac{1}{2\pi\sqrt{1000 \times 10^{-9}}} = \frac{1}{2\pi\sqrt{10^{-6}}} = \frac{1}{2\pi \times 10^{-3}} = \frac{1000}{2\pi} \approx 159.15 \text{ Hz}$.

b) Impedance at resonance ($Z_{res}$):
For an ideal parallel RLC circuit, $Z_{res} = R = 200 \Omega$.

c) Total current at resonance ($I_{res}$):
$I_{res} = \frac{V}{R} = \frac{10 \text{ V}}{200 \Omega} = 0.05 \text{ A}$.

d) Total current at $100 \text{ Hz}$ ($I_{100Hz}$):
$\omega = 2\pi f = 2\pi(100) \approx 628.3 \text{ rad/s}$
$X_L = \omega L = (628.3)(0.02) \approx 12.57 \Omega$
$X_C = \frac{1}{\omega C} = \frac{1}{(628.3)(50 \times 10^{-6})} = \frac{1}{0.031415} \approx 31.83 \Omega$
$|Z| = \frac{1}{\sqrt{(\frac{1}{R})^2 + (\omega C - \frac{1}{\omega L})^2}} = \frac{1}{\sqrt{(\frac{1}{200})^2 + (\frac{1}{12.57} - \frac{1}{31.83})^2}}$
$|Z| = \frac{1}{\sqrt{(0.005)^2 + (0.07955 - 0.03142)^2}} = \frac{1}{\sqrt{0.000025 + (0.04813)^2}}$
$|Z| = \frac{1}{\sqrt{0.000025 + 0.002316}} = \frac{1}{\sqrt{0.002341}} \approx \frac{1}{0.04838} \approx 20.67 \Omega$
$I_{100Hz} = \frac{V}{|Z|} = \frac{10 \text{ V}}{20.67 \Omega} \approx 0.484 \text{ A}$.

**Answer 3:**
*   **Inductive Reactance ($X_L$)**: $X_L = \omega L = 2\pi f L$. As frequency ($f$) increases, inductive reactance ($X_L$) increases linearly.
*   **Capacitive Reactance ($X_C$)**: $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$. As frequency ($f$) increases, capacitive reactance ($X_C$) decreases inversely.

**Implications for Impedance:**

*   **Series RLC Circuit:**
    *   **Very Low Frequencies:** $X_L \to 0$, $X_C \to \infty$. The impedance is dominated by $X_C$ and is very high (approaching infinity). Current is very low.
    *   **Very High Frequencies:** $X_L \to \infty$, $X_C \to 0$. The impedance is dominated by $X_L$ and is very high (approaching infinity). Current is very low.
    *   **At Resonance:** $X_L = X_C$. The reactive components cancel each other, and the impedance is at its minimum, equal to $R$. Current is at its maximum.

*   **Parallel RLC Circuit:**
    *   **Very Low Frequencies:** $X_L \to 0$ (short circuit), $X_C \to \infty$ (open circuit). The inductor shorts the circuit, resulting in very low impedance (ideally 0). Current is very high.
    *   **Very High Frequencies:** $X_L \to \infty$ (open circuit), $X_C \to 0$ (short circuit). The capacitor shorts the circuit, resulting in very low impedance (ideally 0). Current is very high.
    *   **At Resonance:** $X_L = X_C$. The reactive currents cancel each other out. The impedance is at its maximum, ideally limited by the parallel resistor $R$. Current is at its minimum.

---

### Important Points to Remember:

*   The impedance of inductors and capacitors is frequency-dependent, while resistance is not.
*   $X_L$ increases with frequency, while $X_C$ decreases with frequency.
*   In series RLC circuits, impedance is minimum and current is maximum at resonance ($X_L = X_C$).
*   In parallel RLC circuits, impedance is maximum and current is minimum at resonance ($X_L = X_C$).
*   The Q-factor determines the sharpness of the resonance and the bandwidth of the circuit.
*   Understanding these variations is crucial for designing and analyzing filters, oscillators, and tuning circuits.

---

**References:**

*   **Network Analysis by Van Valkenburg (Pearson, 3rd 2019)**: This textbook provides a comprehensive treatment of AC circuit analysis, including detailed discussions on resonance and frequency response, particularly Chapters 9 and 10 in some editions.
*   **Network Analysis and Synthesis by Ravish R Singh (McGraw Hill Education, 2nd 2019)**: Offers thorough coverage of resonance phenomena in both series and parallel circuits, with clear explanations and examples relevant to this topic. Chapters on AC steady-state analysis and resonance are key.
*   **Electric Circuits & Networks by Suresh Kumar (Pearson, Ist 2008)**: Covers the fundamental principles of AC circuits and resonance, often with practical examples.
*   **Circuits and Networks, Analysis and Synthesis by A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017)**: This widely used text provides in-depth analysis of RLC circuits, frequency response, and resonance concepts, with a strong focus on mathematical derivations. Chapters related to AC steady-state analysis and resonance are highly relevant.
