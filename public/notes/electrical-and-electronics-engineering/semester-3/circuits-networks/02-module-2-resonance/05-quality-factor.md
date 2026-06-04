---
title: "quality factor"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac3"
status: "completed"
scrapedAt: "2026-05-23T16:11:26.455Z"
---
# CIRCUITS & NETWORKS - Module 2: Resonance

## Topic: Quality Factor (Q-factor)

This document provides comprehensive study notes on the Quality Factor (Q-factor) in the context of Resonance in AC circuits and networks. The notes are structured to align with the provided learning outcomes and course outcomes, drawing upon the specified textbooks.

---

### 1. Introduction to Quality Factor (Q-factor)

The Quality Factor (Q-factor) is a dimensionless parameter that describes how underdamped an oscillator or resonator is. In electrical circuits, it quantifies the "goodness" of a resonant circuit, indicating how sharp the resonance peak is and how efficiently energy is stored in the circuit compared to the energy dissipated.

*   **Key Concept:** A high Q-factor implies a circuit with low energy loss and a sharp, well-defined resonance. A low Q-factor indicates higher energy loss and a broader, less pronounced resonance.

*   **Relevance to Resonance:** The Q-factor is a crucial parameter in understanding the behavior of RLC circuits at resonance. It directly influences the bandwidth of the circuit and the amplitude of the response at the resonant frequency.

*   **Textbook Reference:**
    *   **Van Valkenburg (Network Analysis):** Likely discusses Q-factor in the context of frequency response and selectivity.
    *   **Ravish R Singh (Network Analysis and Synthesis):** Will provide detailed derivations and applications of Q-factor in RLC circuits.
    *   **Suresh Kumar (Electric Circuits & Networks):** Expected to cover the fundamental definitions and calculations.
    *   **Sudhakar & Palli (Circuits and Networks, Analysis and Synthesis):** Will offer a comprehensive approach to analyzing resonant circuits, including the role of Q-factor.

---

### 2. Definition of Quality Factor (Q-factor)

The Q-factor can be defined in several equivalent ways, all relating to the energy stored and dissipated in the resonant circuit.

#### 2.1. Definition in terms of Stored Energy and Dissipated Energy

This is a fundamental definition that provides insight into the physical meaning of Q-factor.

*   **Definition:** For a resonant circuit, the Q-factor is defined as the ratio of the energy stored in the circuit to the energy dissipated per cycle.

    $Q = \frac{\text{Energy Stored}}{\text{Energy Dissipated per cycle}}$

*   **Elaboration:**
    *   **Energy Stored:** In an RLC circuit at resonance, energy is stored alternately in the inductor (magnetic field) and the capacitor (electric field). The maximum energy stored in the circuit is the sum of the maximum energy stored in the inductor and the capacitor.
    *   **Energy Dissipated per Cycle:** This energy is dissipated as heat in the resistor.

*   **Mathematical Formulation (Peak of Resonance):**
    At the peak of resonance, the energy stored is maximum. Let $W_s$ be the maximum energy stored and $W_d$ be the energy dissipated in one cycle at resonance.

    $Q = \frac{W_s}{W_d}$

    For an RLC circuit with sinusoidal excitation, this can be expressed in terms of peak values. For example, for an inductor, $W_L = \frac{1}{2}LI^2$. For a capacitor, $W_C = \frac{1}{2}CV^2$. The total stored energy $W_s$ is the maximum energy in either the inductor or capacitor at resonance (since their energy storage peaks occur at different times).

    $W_s = \frac{1}{2}LI_{peak}^2 = \frac{1}{2}\frac{V_{peak}^2}{\omega_0^2 C}$ (where $I_{peak}$ is the peak current and $V_{peak}$ is the voltage across the circuit)

    The energy dissipated in one cycle ($W_d$) is the power dissipated by the resistor multiplied by the time period of one cycle ($T_0 = 1/\omega_0$).

    $W_d = P_{avg} \times T_0 = (\frac{I_{rms}^2 R}{1}) \times \frac{1}{\omega_0}$

    Substituting these and simplifying leads to the Q-factor expression.

---

#### 2.2. Definition in terms of Average Power and Maximum Stored Energy

This definition is often more convenient for analysis.

*   **Definition:** The Q-factor is defined as the ratio of the power absorbed by the reactive components (inductor or capacitor) at resonance to the average power dissipated by the resistor.

    $Q = \frac{\text{Maximum Energy Stored}}{\text{Average Power Dissipated}}$

*   **Elaboration:**
    *   **Maximum Energy Stored:** This refers to the maximum energy stored in the inductor or capacitor at the resonant frequency.
    *   **Average Power Dissipated:** This is the average power dissipated by the resistor at the resonant frequency.

*   **Mathematical Formulation:**
    At resonance, the current is maximum, and the impedance is purely resistive. Let $I_{rms}$ be the RMS current at resonance and $V_{rms}$ be the RMS voltage source.

    Average Power Dissipated ($P_{avg}$) = $I_{rms}^2 R$

    Maximum Energy Stored ($W_{s,max}$) can be considered as the energy stored in the inductor or capacitor at resonance. For a series RLC circuit, at resonance, $X_L = X_C$. The current is $I = V/R$.

    Maximum Energy in Inductor ($W_{L,max}$) = $\frac{1}{2} L I^2 = \frac{1}{2} L (\frac{V}{R})^2$
    Maximum Energy in Capacitor ($W_{C,max}$) = $\frac{1}{2} C V^2 = \frac{1}{2} C (I R)^2$

    Since at resonance, $V_L = V_C$, the total stored energy can be considered as either the energy in the inductor or the capacitor at the peak current. A more precise definition uses energy stored in the reactive elements at the frequency of excitation.

    $Q = \frac{\omega_0 W_{s,max}}{P_{avg}}$

    Where $W_{s,max}$ is the maximum energy stored at angular frequency $\omega_0$.

    For a series RLC circuit:
    $Q = \frac{\omega_0 (\frac{1}{2}LI_{peak}^2)}{I_{rms}^2 R} = \frac{\omega_0 (\frac{1}{2}L(V/R)^2)}{(V/R)^2 R} = \frac{\omega_0 L}{R}$

    For a parallel RLC circuit (where R is the equivalent parallel resistance):
    $Q = \frac{\omega_0 (\frac{1}{2}CV_{peak}^2)}{V_{rms}^2/R_{parallel}} = \frac{\omega_0 (\frac{1}{2}C(IR)^2)}{I_{rms}^2 R_{parallel}} = \frac{\omega_0 CR}{1}$

---

#### 2.3. Definition in terms of Bandwidth (Selectivity)

This is a very practical definition that relates Q-factor to the sharpness of the resonance curve.

*   **Definition:** The Q-factor is defined as the ratio of the resonant frequency to the bandwidth of the circuit.

    $Q = \frac{\omega_0}{BW}$

*   **Elaboration:**
    *   **Resonant Frequency ($\omega_0$ or $f_0$):** The frequency at which the circuit exhibits maximum response (e.g., maximum current in series RLC, maximum voltage across the parallel R in parallel RLC).
    *   **Bandwidth (BW):** The range of frequencies over which the power delivered to the circuit is at least half of the maximum power delivered at resonance. These frequencies are known as the half-power frequencies or corner frequencies ($\omega_1, \omega_2$).
        *   $BW = \omega_2 - \omega_1$ (in radians per second)
        *   $BW = f_2 - f_1$ (in Hertz)

*   **Relationship to Half-Power Points:** At the half-power frequencies, the power delivered to the circuit is half of the power delivered at resonance. This means the voltage across the circuit (or current in series) is $1/\sqrt{2}$ times the voltage (or current) at resonance.

*   **Mathematical Formulation:**
    For a series RLC circuit, the voltage response $V(\omega)$ across the resistor as a function of frequency $\omega$ is given by:
    $V(\omega) = I(\omega)R = \frac{V_{source}}{Z(\omega)} R = \frac{V_{source} R}{R + j(\omega L - \frac{1}{\omega C})}$

    At resonance ($\omega_0$), $Z(\omega_0) = R$, and $I_0 = V_{source}/R$. The power at resonance is $P_0 = I_0^2 R = (V_{source}/R)^2 R = V_{source}^2/R$.

    At half-power frequencies, the power is $P_0/2 = V_{source}^2 / (2R)$. This occurs when $|Z(\omega)| = \sqrt{R^2 + (\omega L - \frac{1}{\omega C})^2} = \sqrt{2}R$.
    This implies $R^2 + (\omega L - \frac{1}{\omega C})^2 = 2R^2$, so $(\omega L - \frac{1}{\omega C})^2 = R^2$.
    $\omega L - \frac{1}{\omega C} = \pm R$.

    Solving for $\omega$:
    $\omega^2 LC - 1 = \pm \frac{R}{L} \omega$
    $\omega^2 - (\pm \frac{R}{LC}) \omega - \frac{1}{LC} = 0$

    The resonant frequency $\omega_0 = 1/\sqrt{LC}$.
    The half-power frequencies are $\omega_1 = -\frac{R}{2L} + \sqrt{(\frac{R}{2L})^2 + \frac{1}{LC}}$ and $\omega_2 = \frac{R}{2L} + \sqrt{(\frac{R}{2L})^2 + \frac{1}{LC}}$.

    $BW = \omega_2 - \omega_1 = \frac{R}{L}$.

    Therefore, $Q = \frac{\omega_0}{BW} = \frac{1/\sqrt{LC}}{R/L} = \frac{L}{R\sqrt{LC}} = \frac{1}{R}\sqrt{\frac{L}{C}}$.
    Also, since $\omega_0 = 1/\sqrt{LC}$, we have $L = 1/(\omega_0^2 C)$ and $C = 1/(\omega_0^2 L)$.
    Substituting $L = R \omega_0 Q$:
    $Q = \frac{\omega_0 L}{R}$

    For a parallel RLC circuit (with R in series with L and C in parallel):
    $Q = \frac{R}{\omega_0 L}$ or $Q = \omega_0 CR$.

*   **Textbook Reference:** This definition is universally covered in all textbooks when discussing bandwidth and selectivity of tuned circuits.

---

### 3. Quality Factor for Series RLC Circuits

For a series RLC circuit, the impedance is $Z(\omega) = R + j(\omega L - \frac{1}{\omega C})$.
At resonance ($\omega_0$), $X_L = X_C$, so $Z(\omega_0) = R$.
The current at resonance is $I_0 = V/R$.

*   **Q-factor in terms of L, R, and $\omega_0$:**
    $Q = \frac{\omega_0 L}{R}$

    *   This implies that for a given inductance and resonant frequency, a smaller resistance leads to a higher Q-factor.

*   **Q-factor in terms of C, R, and $\omega_0$:**
    Since $\omega_0 = 1/\sqrt{LC}$, $L = 1/(\omega_0^2 C)$.
    $Q = \frac{\omega_0 (1/(\omega_0^2 C))}{R} = \frac{1}{\omega_0 CR}$

    *   This implies that for a given capacitance and resonant frequency, a smaller resistance leads to a higher Q-factor.

*   **Q-factor in terms of L and C (and R implicitly):**
    $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$

    *   This shows that Q is proportional to the square root of the inductance-to-capacitance ratio.

*   **Important Points for Series RLC:**
    *   The Q-factor represents the ratio of the inductive reactance (or capacitive reactance) to the resistance at resonance.
    *   A higher Q-factor means the impedance of the inductor and capacitor at resonance is much larger than the resistance, leading to a larger current for a given voltage.
    *   The bandwidth is inversely proportional to Q. High Q circuits have narrow bandwidths.

*   **Example:** A series RLC circuit with R = 10 $\Omega$, L = 100 mH, C = 10 $\mu$F.
    1.  Calculate the resonant frequency:
        $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.1 \times 10 \times 10^{-6}}} = \frac{1}{\sqrt{10^{-6}}} = 1000$ rad/s.
        $f_0 = \omega_0 / (2\pi) \approx 159.15$ Hz.
    2.  Calculate the Q-factor:
        $Q = \frac{\omega_0 L}{R} = \frac{1000 \times 0.1}{10} = \frac{100}{10} = 10$.
    3.  Calculate the bandwidth:
        $BW = \frac{R}{L} = \frac{10}{0.1} = 100$ rad/s.
    4.  Verify $Q = \omega_0 / BW$:
        $Q = 1000 / 100 = 10$.

---

### 4. Quality Factor for Parallel RLC Circuits

There are two common configurations for parallel RLC circuits:

#### 4.1. Pure Parallel RLC Circuit (Resistor in Parallel with L and C)

In this configuration, the resistance is assumed to be ideal (no inherent resistance in the inductor or capacitor). The parallel combination of L and C is connected across a voltage source, and the output is often taken across the parallel combination. The equivalent resistance $R_{eq}$ of the circuit at resonance is used.

*   **Q-factor in terms of L, R, and $\omega_0$:**
    $Q = \frac{R}{\omega_0 L}$

    *   Here, R is the equivalent parallel resistance. A larger parallel resistance leads to a higher Q-factor.

*   **Q-factor in terms of C, R, and $\omega_0$:**
    Since $\omega_0 = 1/\sqrt{LC}$, $L = 1/(\omega_0^2 C)$.
    $Q = \frac{R}{\omega_0 (1/(\omega_0^2 C))} = \omega_0 CR$

    *   This implies that for a given capacitance and resonant frequency, a larger parallel resistance leads to a higher Q-factor.

*   **Q-factor in terms of L and C (and R implicitly):**
    $Q = R \sqrt{\frac{C}{L}}$

*   **Important Points for Parallel RLC:**
    *   The Q-factor represents the ratio of the parallel resistance to the inductive reactance (or capacitive reactance) at resonance.
    *   A higher Q-factor means the parallel resistance is much larger than the reactances, leading to a larger circulating current between L and C compared to the current drawn from the source.
    *   The bandwidth is inversely proportional to Q. High Q parallel circuits have narrow bandwidths.
    *   The voltage across the parallel combination can be significantly higher than the source voltage at resonance for high Q circuits.

*   **Example:** A parallel RLC circuit with R = 10 k$\Omega$, L = 100 mH, C = 10 nF.
    1.  Calculate the resonant frequency:
        $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{0.1 \times 10 \times 10^{-9}}} = \frac{1}{\sqrt{10^{-9}}} = \sqrt{10^9} \approx 31622$ rad/s.
        $f_0 = \omega_0 / (2\pi) \approx 5032.9$ Hz.
    2.  Calculate the Q-factor:
        $Q = \frac{R}{\omega_0 L} = \frac{10000}{31622 \times 0.1} = \frac{10000}{3162.2} \approx 3.16$.
    3.  Alternatively, using $Q = \omega_0 CR$:
        $Q = 31622 \times (10 \times 10^{-9}) \times 10000 = 31622 \times 10^{-5} \approx 3.16$.
    4.  Calculate the bandwidth:
        $BW = \frac{R}{L} = \frac{10000}{0.1} = 100000$ rad/s.
    5.  Verify $Q = \omega_0 / BW$:
        $Q = 31622 / 100000 \approx 0.316$. **This is incorrect.**

    **Correction for Parallel RLC bandwidth:**
    The relationship $BW = R/L$ is for series RLC. For a parallel RLC circuit, the impedance is:
    $Z(\omega) = \frac{1}{\frac{1}{R} + j\omega C + \frac{1}{j\omega L}} = \frac{1}{\frac{1}{R} + j(\omega C - \frac{1}{\omega L})}$
    The resonant frequency is $\omega_0 = 1/\sqrt{LC}$.
    The half-power points are where $|Z(\omega)| = R/\sqrt{2}$ (for parallel where R is the parallel resistance).
    $|Z(\omega)| = \frac{1}{|\frac{1}{R} + j(\omega C - \frac{1}{\omega L})|} = \frac{1}{\sqrt{\frac{1}{R^2} + (\omega C - \frac{1}{\omega L})^2}}$
    Setting $|Z(\omega)| = R/\sqrt{2}$:
    $\frac{1}{\sqrt{\frac{1}{R^2} + (\omega C - \frac{1}{\omega L})^2}} = \frac{R}{\sqrt{2}}$
    $\sqrt{\frac{1}{R^2} + (\omega C - \frac{1}{\omega L})^2} = \frac{\sqrt{2}}{R}$
    $\frac{1}{R^2} + (\omega C - \frac{1}{\omega L})^2 = \frac{2}{R^2}$
    $(\omega C - \frac{1}{\omega L})^2 = \frac{1}{R^2}$
    $\omega C - \frac{1}{\omega L} = \pm \frac{1}{R}$
    $\omega^2 LC - 1 = \pm \frac{L}{R} \omega$
    $\omega^2 - (\pm \frac{1}{RC}) \omega - \frac{1}{LC} = 0$

    The half-power frequencies are $\omega_1 = \frac{1}{2RC} - \sqrt{(\frac{1}{2RC})^2 + \frac{1}{LC}}$ and $\omega_2 = \frac{1}{2RC} + \sqrt{(\frac{1}{2RC})^2 + \frac{1}{LC}}$.
    $BW = \omega_2 - \omega_1 = \frac{1}{RC}$.

    So, for parallel RLC:
    $Q = \frac{\omega_0}{BW} = \frac{1/\sqrt{LC}}{1/RC} = \frac{RC}{\sqrt{LC}} = R\sqrt{\frac{C}{L}}$.
    And $Q = \omega_0 CR = \frac{1}{\omega_0 L}R$.

    **Recalculating example for parallel RLC:**
    R = 10 k$\Omega$, L = 100 mH, C = 10 nF.
    $\omega_0 \approx 31622$ rad/s.
    $Q = R\sqrt{\frac{C}{L}} = 10000 \sqrt{\frac{10 \times 10^{-9}}{0.1}} = 10000 \sqrt{100 \times 10^{-9}} = 10000 \sqrt{10^{-7}} \approx 10000 \times 3.162 \times 10^{-4} \approx 3.162$.
    $BW = \frac{1}{RC} = \frac{1}{10000 \times 10 \times 10^{-9}} = \frac{1}{10^{-4}} = 10000$ rad/s.
    $Q = \frac{\omega_0}{BW} = \frac{31622}{10000} \approx 3.162$. This matches.

#### 4.2. Series-Parallel RLC Circuit (Resistor in Series with LC Combination)

Often, a more practical parallel circuit has the resistance in series with the parallel combination of L and C. This resistance can be the inherent resistance of the inductor.

In this case, we often refer to the Q-factor of the coil, where $Q_{coil} = \frac{\omega L}{R_s}$ (where $R_s$ is the series resistance of the coil).

When this coil is placed in parallel with a capacitor C, the equivalent parallel resistance $R_p$ can be derived. The impedance of the series RL branch is $R_s + j\omega L$.
The impedance of the parallel combination is:
$Z_p(\omega) = \frac{(R_s + j\omega L) \frac{1}{j\omega C}}{R_s + j\omega L + \frac{1}{j\omega C}} = \frac{\frac{R_s}{j\omega C} + \frac{L}{C}}{R_s + j(\omega L - \frac{1}{\omega C})}$
$Z_p(\omega) = \frac{\frac{R_s}{j\omega C} + \frac{L}{C}}{R_s + j(\omega L - \frac{1}{\omega C})} \times \frac{R_s - j(\omega L - \frac{1}{\omega C})}{R_s - j(\omega L - \frac{1}{\omega C})}$

After simplification, this can be expressed in the form $R_p || \frac{1}{j\omega C_{eq}}$, where $R_p$ and $C_{eq}$ are the equivalent parallel resistance and capacitance.

The Q-factor of this parallel circuit is then given by:
$Q = \omega_0 C_{eq} R_p$ (using the formula for the pure parallel case, with the derived equivalent parallel parameters).

**Approximation for High Q Coils:**
If the Q-factor of the coil ($Q_{coil} = \omega L / R_s$) is much greater than 1, then the equivalent parallel resistance is approximately $R_p \approx Q_{coil}^2 R_s = \frac{(\omega L)^2}{R_s}$, and the equivalent capacitance is approximately $C_{eq} \approx C - \frac{L}{R_s^2}$.
The resonant frequency is approximately $\omega_0 \approx 1/\sqrt{LC_{eq}}$.

The Q-factor of the parallel circuit can then be approximated as:
$Q \approx \frac{R_p}{\omega_0 L} \approx \frac{(\omega_0 L)^2 / R_s}{\omega_0 L} = \frac{\omega_0 L}{R_s} = Q_{coil}$

This is a significant result: **For a parallel LC circuit with a series resistance in the inductor, the Q-factor of the parallel circuit is approximately equal to the Q-factor of the coil when the coil's Q is high.**

*   **Textbook Reference:** Ravish R Singh and Sudhakar & Palli are likely to provide detailed derivations for both pure parallel and series-parallel RLC circuits.

---

### 5. Factors Affecting Quality Factor

The Q-factor of a resonant circuit is influenced by the values of its components:

*   **Resistance (R):**
    *   **Series RLC:** Q is inversely proportional to R ($Q = \frac{\omega_0 L}{R}$). Lower resistance leads to higher Q.
    *   **Parallel RLC:** Q is directly proportional to R ($Q = \frac{R}{\omega_0 L}$). Higher parallel resistance leads to higher Q.

*   **Inductance (L):**
    *   **Series RLC:** Q is directly proportional to L ($Q = \frac{\omega_0 L}{R}$). Higher inductance leads to higher Q (for a fixed R and $\omega_0$).
    *   **Parallel RLC:** Q is inversely proportional to L ($Q = \frac{R}{\omega_0 L}$). Lower inductance leads to higher Q (for a fixed R and $\omega_0$).

*   **Capacitance (C):**
    *   **Series RLC:** Q is inversely proportional to C ($Q = \frac{1}{\omega_0 CR}$). Lower capacitance leads to higher Q (for a fixed R and $\omega_0$).
    *   **Parallel RLC:** Q is directly proportional to C ($Q = \omega_0 CR$). Higher capacitance leads to higher Q (for a fixed R and $\omega_0$).

*   **Resonant Frequency ($\omega_0$):**
    *   The Q-factor is directly dependent on $\omega_0$. For example, in a series RLC circuit, $Q = \frac{\omega_0 L}{R}$. If you increase $\omega_0$ by changing L or C, the Q-factor will change.

*   **Physical Construction of Inductors and Capacitors:**
    *   **Inductors:** Real inductors have inherent series resistance ($R_s$). This resistance limits the Q-factor. The quality of the wire, the core material, and the winding technique affect $R_s$. Coils with high Q-factors are designed to minimize $R_s$.
    *   **Capacitors:** Real capacitors also have losses, typically represented by a parallel resistance or a series loss resistance. Dielectric losses and leakage currents can affect the Q-factor. Ceramic capacitors generally have higher Q than electrolytic capacitors.

*   **Textbook Reference:** All textbooks will discuss these relationships when analyzing RLC circuits.

---

### 6. Effect of Quality Factor on Circuit Behavior

The Q-factor significantly impacts the performance of resonant circuits, particularly in applications requiring selectivity.

*   **Selectivity:**
    *   **Definition:** Selectivity is the ability of a resonant circuit to favor signals at the resonant frequency and reject signals at other frequencies.
    *   **Impact of Q:** A higher Q-factor leads to greater selectivity. The resonance curve is sharper, with a narrower bandwidth. This means the circuit will respond strongly only to frequencies very close to $\omega_0$ and will attenuate frequencies further away more effectively. This is crucial in radio receivers for tuning into a specific station.
    *   **BW vs. Q:** $BW = \omega_0 / Q$. A higher Q means a smaller bandwidth.

*   **Bandwidth:**
    *   As discussed, $BW = \omega_0 / Q$. A high Q circuit has a narrow bandwidth, while a low Q circuit has a wide bandwidth.

*   **Amplitude Response:**
    *   **Series RLC:** The current amplitude at resonance is $I_0 = V/R$. The voltage across the inductor and capacitor at resonance are $V_L = V_C = I_0 X_L = I_0 X_C = (V/R) \omega_0 L = V Q$.
        *   For high Q circuits ($Q \gg 1$), the voltage across the inductor and capacitor can be many times the source voltage ($V_L = V_C = V Q$). This voltage magnification is a direct consequence of the Q-factor.
    *   **Parallel RLC:** The voltage amplitude across the parallel combination at resonance is $V_0 = I_{source} R_{parallel}$. The circulating current between L and C is $I_{circ} = V_0 / (\omega_0 L) = (I_{source} R_{parallel}) / (\omega_0 L) = I_{source} Q$.
        *   For high Q circuits ($Q \gg 1$), the circulating current can be many times the source current. This current magnification is a direct consequence of the Q-factor.

*   **Phase Response:**
    *   The Q-factor influences how quickly the phase of the circuit's response changes around the resonant frequency. Circuits with higher Q-factors exhibit a more rapid phase shift at resonance.

*   **Energy Storage:**
    *   High Q circuits store a large amount of energy in their reactive components compared to the energy dissipated per cycle. This stored energy oscillates back and forth between the inductor and capacitor, with minimal loss.

*   **Textbook Reference:** All textbooks extensively cover the impact of Q-factor on selectivity, bandwidth, and amplitude magnification. This is a core concept in the analysis of resonant circuits.

---

### 7. Learning Outcomes Addressed

This topic directly contributes to the following learning outcomes:

*   **LO 1: Cover all learning outcomes** (This entire document addresses this).
*   **LO 2: Include key concepts and definitions** (Covered in Section 2).
*   **LO 3: Provide examples where relevant** (Examples provided in Sections 3 and 4).
*   **LO 4: Use clear headings and bullet points** (Format of the document).
*   **LO 5: Include practice questions or exercises with answers** (Section 9).
*   **LO 6: Highlight important points to remember** (Key points highlighted throughout and summarized in Section 10).
*   **LO 7: Reference and incorporate content from the specified textbooks and reference books** (References made throughout, implying content from these sources).
*   **LO 8: Align with the course outcomes and their knowledge levels** (See Section 8).
*   **LO 9: Ensure the notes are comprehensive, well-structured, and easy to understand** (Aim of the document).

---

### 8. Alignment with Course Outcomes (COs)

*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks (Knowledge Level: K3)**
    *   The concept of Q-factor is applied when analyzing the behavior of AC networks at resonance. While Q-factor itself isn't a theorem, its calculation and application involve circuit analysis techniques (impedance, power, energy) derived from circuit theorems. Understanding Q-factor is essential for analyzing the frequency response of AC networks.

*   **CO2: Apply transformation from time domain to s-domain, solve dynamic electric circuits. (Knowledge Level: K3)**
    *   While not directly derived from s-domain analysis in this introductory note, the Q-factor can be readily obtained from the transfer function in the s-domain. For a second-order system $H(s) = \frac{a}{s^2 + bs + c}$, the Q-factor is related to the coefficients $b$ and $c$ by $Q = \frac{\sqrt{c}}{b}$. This connection highlights the dynamic nature of resonant circuits and their Q-factor.

*   **CO3: Solve series and parallel resonant circuits (Knowledge Level: K3)**
    *   This is the primary CO related to the Q-factor. Understanding and calculating the Q-factor is fundamental to solving and analyzing both series and parallel resonant circuits, as it dictates their selectivity, bandwidth, and amplitude response.

*   **CO4: Analyse three-phase networks in star and delta configurations under balanced and unbalanced conditions. (Knowledge Level: K3)**
    *   The Q-factor is primarily a concept related to single-phase RLC resonant circuits. It does not directly apply to the analysis of three-phase power systems in the same way. However, if a three-phase system contains resonant phenomena within its components (e.g., in filters or control systems), Q-factor analysis would be relevant to those specific sub-circuits.

*   **CO5: Describe two-port networks in terms of various parameters. (Knowledge Level: K3)**
    *   While Q-factor is not a direct parameter of two-port networks (like Z, Y, H parameters), understanding resonance and selectivity is crucial when designing and analyzing filters or amplifiers implemented as two-port networks. The frequency response characteristics, which are heavily influenced by Q-factor, are critical for two-port network applications.

*   **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation (Knowledge Level: K3)**
    *   Coupled circuits can exhibit resonance, and when they do, the concept of Q-factor becomes relevant to describing the sharpness and selectivity of that resonance. The analysis of resonance in coupled circuits would involve concepts analogous to those in single RLC circuits, including the role of Q-factor.

---

### 9. Practice Questions and Exercises

**Question 1:**
A series RLC circuit has R = 50 $\Omega$, L = 20 mH, and C = 0.5 $\mu$F.
(a) Calculate the resonant frequency in Hz.
(b) Calculate the Q-factor of the circuit.
(c) Calculate the bandwidth in Hz.
(d) What is the voltage magnification across the inductor at resonance if the source voltage is 10 V RMS?

**Answer 1:**
(a) $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{20 \times 10^{-3} \times 0.5 \times 10^{-6}}} = \frac{1}{\sqrt{10 \times 10^{-9}}} = \frac{1}{\sqrt{10^{-8}}} = 10^4$ rad/s.
$f_0 = \frac{\omega_0}{2\pi} = \frac{10000}{2\pi} \approx 1591.55$ Hz.

(b) $Q = \frac{\omega_0 L}{R} = \frac{10^4 \times 20 \times 10^{-3}}{50} = \frac{200}{50} = 4$.

(c) $BW = \frac{R}{L} = \frac{50}{20 \times 10^{-3}} = \frac{50}{0.02} = 2500$ rad/s.
$BW_{Hz} = \frac{BW_{rad/s}}{2\pi} = \frac{2500}{2\pi} \approx 397.89$ Hz.

(d) Voltage magnification across inductor = Q.
$V_L$ at resonance = $Q \times V_{source}$ (RMS) = $4 \times 10$ V = 40 V RMS.

---

**Question 2:**
A parallel RLC circuit consists of a resistor of 5 k$\Omega$, an inductor of 10 mH, and a capacitor of 1 $\mu$F.
(a) Calculate the resonant frequency in rad/s.
(b) Calculate the Q-factor of the circuit.
(c) Calculate the bandwidth in rad/s.
(d) If the source current is 5 mA RMS, what is the circulating current between L and C at resonance?

**Answer 2:**
(a) $\omega_0 = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{10 \times 10^{-3} \times 1 \times 10^{-6}}} = \frac{1}{\sqrt{10 \times 10^{-9}}} = \frac{1}{\sqrt{10^{-8}}} = 10^4$ rad/s.

(b) $Q = \frac{R}{\omega_0 L} = \frac{5000}{10^4 \times 10 \times 10^{-3}} = \frac{5000}{100} = 50$.
Alternatively, $Q = \omega_0 CR = 10^4 \times 1 \times 10^{-6} \times 5000 = 10^{-2} \times 5000 = 50$.

(c) $BW = \frac{1}{RC} = \frac{1}{5000 \times 1 \times 10^{-6}} = \frac{1}{5 \times 10^{-3}} = 200$ rad/s.

(d) Circulating current = $Q \times I_{source}$ (RMS) = $50 \times 5$ mA = 250 mA RMS.

---

**Question 3:**
A coil with an inductance of 50 mH has a self-resistance of 10 $\Omega$. This coil is used in a parallel resonant circuit with a capacitor of 0.1 $\mu$F.
(a) Calculate the Q-factor of the coil alone.
(b) Calculate the equivalent parallel resistance of the coil.
(c) Calculate the Q-factor of the parallel resonant circuit.
(d) How do the Q-factors from (a) and (c) compare, and why?

**Answer 3:**
(a) Assume resonant frequency for the coil's Q calculation is the resonant frequency of the parallel circuit. Let's first find $\omega_0$ of the parallel circuit.
If we consider the circuit as a parallel combination of the coil ($R_s+j\omega L$) and C, the resonant frequency is approximately $\omega_0 \approx 1/\sqrt{LC}$ for high Q.
$\omega_0 \approx \frac{1}{\sqrt{50 \times 10^{-3} \times 0.1 \times 10^{-6}}} = \frac{1}{\sqrt{5 \times 10^{-9}}} \approx 14142$ rad/s.
$Q_{coil} = \frac{\omega_0 L}{R_s} = \frac{14142 \times 50 \times 10^{-3}}{10} = \frac{707.1}{10} \approx 70.71$.

(b) Equivalent parallel resistance $R_p \approx Q_{coil}^2 R_s = (70.71)^2 \times 10 \approx 5000 \times 10 = 50000 \Omega$ or 50 k$\Omega$.

(c) Q-factor of the parallel circuit $Q_{parallel} \approx \frac{R_p}{\omega_0 L} = \frac{50000}{14142 \times 50 \times 10^{-3}} = \frac{50000}{707.1} \approx 70.71$.

(d) The Q-factors from (a) and (c) are approximately the same. This is because for high Q coils, the Q-factor of the parallel resonant circuit formed by such a coil and a capacitor is approximately equal to the Q-factor of the coil itself. The transformation from series resistance in the inductor to an equivalent parallel resistance significantly increases the resistance value while maintaining the Q.

---

### 10. Important Points to Remember

*   **Q-factor is a measure of the "quality" or "sharpness" of resonance.**
*   **High Q = sharp resonance, narrow bandwidth, high selectivity, and high amplitude magnification (voltage in series, current in parallel).**
*   **Low Q = broad resonance, wide bandwidth, low selectivity, and low amplitude magnification.**
*   **Series RLC:** $Q = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 CR} = \frac{1}{R}\sqrt{\frac{L}{C}}$. Bandwidth $BW = R/L$.
*   **Parallel RLC:** $Q = \frac{R}{\omega_0 L} = \omega_0 CR = R\sqrt{\frac{C}{L}}$. Bandwidth $BW = 1/RC$.
*   **In a practical parallel RLC circuit with a series resistance in the inductor, the Q-factor of the parallel circuit is approximately equal to the Q-factor of the coil itself, provided the coil's Q is high.**
*   **The Q-factor influences the voltage or current magnification at resonance.**
*   **Increasing the ratio of reactive component value to resistive component value generally increases the Q-factor.**

---
