---
title: "Determination of impedance, admittance and power factor in RLC series/ parallel circuit and to study the effect of reactive components on power factor."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 3: Determination of impedance, admittance and power factor in RLC series/ parallel circuit and to study the effect of reactive components on power factor."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35ce7"
status: "completed"
scrapedAt: "2026-05-23T16:11:54.707Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 3: Determination of Impedance, Admittance, and Power Factor in RLC Circuits

## Introduction to AC Circuits and Key Concepts

This module focuses on understanding and experimentally determining the fundamental AC circuit parameters: impedance, admittance, and power factor. We will explore their behavior in series and parallel RLC circuits and investigate how reactive components (inductors and capacitors) influence the power factor. This aligns with **Course Outcome 1 (CO1)**, which aims to analyze voltage-current phasor relations in RLC circuits.

### 1. Alternating Current (AC) Circuits

*   **Definition:** An AC circuit is an electric circuit where the current and voltage vary periodically with time, typically in a sinusoidal manner.
*   **Sinusoidal Waveform:** The fundamental waveform in AC circuits is the sine wave, represented by:
    *   $v(t) = V_m \sin(\omega t + \phi_v)$
    *   $i(t) = I_m \sin(\omega t + \phi_i)$
    Where:
        *   $V_m, I_m$: Peak voltage and current
        *   $\omega$: Angular frequency (radians/second) = $2\pi f$, where $f$ is the frequency (Hz)
        *   $\phi_v, \phi_i$: Phase angles of voltage and current

### 2. Phasors

*   **Definition:** Phasors are rotating vectors used to represent sinusoidal quantities (voltage and current) in AC circuits. They simplify the analysis of AC circuits by converting differential equations into algebraic equations.
*   **Representation:** A phasor is represented by its magnitude (RMS value) and its phase angle.
    *   Voltage phasor: $\vec{V} = V \angle \phi_v$
    *   Current phasor: $\vec{I} = I \angle \phi_i$
*   **RMS Value:** The Root Mean Square (RMS) value is the effective value of an AC quantity, equivalent to the DC value that would produce the same heating effect.
    *   $V_{rms} = \frac{V_m}{\sqrt{2}}$
    *   $I_{rms} = \frac{I_m}{\sqrt{2}}$

### 3. Impedance (Z)

*   **Definition:** Impedance is the total opposition to current flow in an AC circuit, encompassing resistance and reactance. It is a complex quantity.
*   **Unit:** Ohms ($\Omega$)
*   **Mathematical Representation:**
    *   $Z = R + jX$
    Where:
        *   $R$: Resistance (real part)
        *   $X$: Reactance (imaginary part)
        *   $j$: Imaginary unit ($\sqrt{-1}$)
*   **Magnitude of Impedance:** $|Z| = \sqrt{R^2 + X^2}$
*   **Phase Angle of Impedance:** $\theta_Z = \tan^{-1}\left(\frac{X}{R}\right)$
*   **Ohm's Law in AC:** $\vec{V} = \vec{I} \cdot \vec{Z}$
    *   $V_{rms} = I_{rms} \cdot |Z|$
    *   $\phi_v - \phi_i = \theta_Z$

### 4. Reactance (X)

*   **Definition:** Reactance is the opposition to current flow due to energy storage in electric or magnetic fields (capacitors and inductors, respectively). It is a purely imaginary quantity.
*   **Types of Reactance:**
    *   **Inductive Reactance ($X_L$):** Opposition offered by an inductor.
        *   $X_L = \omega L = 2\pi f L$
        *   Phase relationship: Current lags voltage by 90 degrees ($+jX_L$)
        *   $L$: Inductance in Henries (H)
    *   **Capacitive Reactance ($X_C$):** Opposition offered by a capacitor.
        *   $X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}$
        *   Phase relationship: Current leads voltage by 90 degrees ($-jX_C$)
        *   $C$: Capacitance in Farads (F)
*   **Total Reactance ($X$):** In a series circuit, $X = X_L - X_C$.

### 5. Admittance (Y)

*   **Definition:** Admittance is the reciprocal of impedance, representing the ease with which current flows in an AC circuit.
*   **Unit:** Siemens (S) or mho
*   **Mathematical Representation:**
    *   $Y = \frac{1}{Z} = \frac{1}{R + jX}$
    *   $Y = \frac{R}{R^2 + X^2} - j\frac{X}{R^2 + X^2}$
*   **Components of Admittance:**
    *   **Conductance (G):** The reciprocal of resistance.
        *   $G = \frac{1}{R}$
    *   **Susceptance (B):** The reciprocal of reactance.
        *   $B = \frac{1}{X}$ (Careful with signs here, usually defined as $B = \frac{-X}{R^2+X^2}$ in terms of Y)
*   **Relationship:** $Y = G + jB$
*   **Ohm's Law in terms of Admittance:** $\vec{I} = \vec{V} \cdot \vec{Y}$

### 6. Power Factor (PF)

*   **Definition:** Power factor is the ratio of the real power (power dissipated by resistance) to the apparent power (total power supplied). It represents the phase difference between voltage and current.
*   **Formula:**
    *   $PF = \frac{P}{S} = \cos(\theta)$
    Where:
        *   $P$: Real Power (Watts, W)
        *   $S$: Apparent Power (Volt-Amperes, VA)
        *   $\theta$: Phase angle between voltage and current ($\theta = \phi_v - \phi_i$)
*   **Interpretation:**
    *   **Unity PF (PF = 1):** Occurs when the circuit is purely resistive (or $X_L = X_C$ at resonance). Voltage and current are in phase ($\theta = 0^\circ$).
    *   **Lagging PF:** Occurs in inductive circuits where current lags voltage ($\theta > 0$, $X_L > X_C$).
    *   **Leading PF:** Occurs in capacitive circuits where current leads voltage ($\theta < 0$, $X_C > X_L$).

---

## RLC Series Circuit

### 1. Circuit Configuration

*   A resistor (R), an inductor (L), and a capacitor (C) are connected in series with an AC voltage source.
*   **Total Impedance ($Z_s$):**
    *   $Z_s = R + j(X_L - X_C)$
    *   $|Z_s| = \sqrt{R^2 + (X_L - X_C)^2}$
    *   $\theta_s = \tan^{-1}\left(\frac{X_L - X_C}{R}\right)$
*   **Total Admittance ($Y_s$):**
    *   $Y_s = \frac{1}{Z_s} = \frac{1}{R + j(X_L - X_C)}$
    *   $Y_s = \frac{R - j(X_L - X_C)}{R^2 + (X_L - X_C)^2}$
    *   Conductance $G_s = \frac{R}{R^2 + (X_L - X_C)^2}$
    *   Susceptance $B_s = \frac{-(X_L - X_C)}{R^2 + (X_L - X_C)^2}$

### 2. Voltage and Current Relationship

*   The current ($\vec{I}_s$) is the same through all components.
*   $\vec{V}_s = \vec{I}_s \cdot \vec{Z}_s$
*   The phase angle of the circuit is $\theta_s$, which is the phase difference between the source voltage ($\vec{V}_s$) and the circuit current ($\vec{I}_s$).

### 3. Power Factor in Series Circuit

*   $PF_s = \cos(\theta_s) = \frac{R}{|Z_s|} = \frac{R}{\sqrt{R^2 + (X_L - X_C)^2}}$
*   **Effect of Reactive Components:**
    *   If $X_L > X_C$, the circuit is inductive, and the PF is lagging.
    *   If $X_C > X_L$, the circuit is capacitive, and the PF is leading.
    *   If $X_L = X_C$ (Resonance), the circuit is purely resistive, $|Z_s| = R$, and $PF_s = 1$ (unity).

### 4. Measurement of Impedance, Admittance, and Power Factor

*   **Impedance:**
    *   Measure RMS voltage across the series combination ($V_s$).
    *   Measure RMS current through the series combination ($I_s$) using an ammeter.
    *   Calculate $|Z_s| = \frac{V_s}{I_s}$.
    *   Measure the phase angle $\theta_s$ between $V_s$ and $I_s$ using an oscilloscope or a wattmeter.
    *   Calculate $R$ by measuring the voltage drop across the resistor ($V_R$) and the current ($I_s$), so $R = V_R / I_s$.
    *   Calculate $X_s = \sqrt{|Z_s|^2 - R^2}$ and determine if it's inductive or capacitive based on the phase angle.
*   **Admittance:**
    *   Once impedance is known, $Y_s = 1/Z_s$.
    *   Alternatively, measure voltage and current and calculate $|Y_s| = 1/|Z_s|$.
*   **Power Factor:**
    *   Directly measure using a power factor meter.
    *   Calculate from measured voltage, current, and real power ($P = V_s I_s \cos\theta$).
    *   Calculate from the measured phase angle $\theta_s$.

---

## RLC Parallel Circuit

### 1. Circuit Configuration

*   A resistor (R), an inductor (L), and a capacitor (C) are connected in parallel across an AC voltage source.
*   **Voltage:** The voltage across all components is the same ($\vec{V}_p$).
*   **Currents:** The total current ($\vec{I}_p$) is the phasor sum of the currents through each branch.
    *   $\vec{I}_R = \frac{\vec{V}_p}{R}$
    *   $\vec{I}_L = \frac{\vec{V}_p}{-jX_L} = \frac{\vec{V}_p}{jX_L}$
    *   $\vec{I}_C = \frac{\vec{V}_p}{jX_C} = \frac{\vec{V}_p}{-jX_C}$
*   **Total Current ($\vec{I}_p$):** $\vec{I}_p = \vec{I}_R + \vec{I}_L + \vec{I}_C$

### 2. Admittance of Parallel Branches

*   **Admittance of Resistor ($Y_R$):** $Y_R = \frac{1}{R} = G$ (purely real)
*   **Admittance of Inductor ($Y_L$):** $Y_L = \frac{1}{jX_L} = -j\frac{1}{X_L} = -jB_L$ (purely negative imaginary)
*   **Admittance of Capacitor ($Y_C$):** $Y_C = \frac{1}{-jX_C} = j\frac{1}{X_C} = jB_C$ (purely positive imaginary)

### 3. Total Admittance ($Y_p$)

*   **Total Admittance:** $Y_p = Y_R + Y_L + Y_C = G - jB_L + jB_C$
*   $Y_p = G + j(B_C - B_L)$
    Where:
        *   $G = \frac{1}{R}$
        *   $B_C = \frac{1}{X_C} = \omega C$
        *   $B_L = \frac{1}{X_L} = \frac{1}{\omega L}$
*   **Magnitude of Admittance:** $|Y_p| = \sqrt{G^2 + (B_C - B_L)^2}$
*   **Phase Angle of Admittance:** $\theta_Y = \tan^{-1}\left(\frac{B_C - B_L}{G}\right)$

### 4. Impedance of Parallel Circuit ($Z_p$)

*   $Z_p = \frac{1}{Y_p} = \frac{1}{G + j(B_C - B_L)}$
*   $Z_p = \frac{G - j(B_C - B_L)}{G^2 + (B_C - B_L)^2}$
*   **Magnitude of Impedance:** $|Z_p| = \frac{1}{|Y_p|} = \frac{1}{\sqrt{G^2 + (B_C - B_L)^2}}$
*   **Phase Angle of Impedance:** $\theta_Z = -\tan^{-1}\left(\frac{B_C - B_L}{G}\right) = \tan^{-1}\left(\frac{B_L - B_C}{G}\right)$

### 5. Power Factor in Parallel Circuit

*   The power factor of the parallel circuit is determined by the phase angle between the source voltage ($\vec{V}_p$) and the total current ($\vec{I}_p$). This angle is $\theta_Y$.
*   $PF_p = \cos(\theta_Y) = \frac{G}{|Y_p|} = \frac{1/R}{\sqrt{(1/R)^2 + (B_C - B_L)^2}}$
*   **Effect of Reactive Components:**
    *   If $B_C > B_L$ (i.e., $X_C < X_L$ which is counter-intuitive from series, but due to reciprocals), the circuit is capacitive, and the PF is leading.
    *   If $B_L > B_C$ (i.e., $X_L < X_C$), the circuit is inductive, and the PF is lagging.
    *   If $B_C = B_L$ (Resonance), the circuit is purely resistive, $|Y_p| = G$, $|Z_p| = R$, and $PF_p = 1$ (unity).

### 6. Measurement of Impedance, Admittance, and Power Factor in Parallel Circuits

*   **Admittance (more direct):**
    *   Measure RMS voltage across the parallel combination ($V_p$).
    *   Measure the total RMS current flowing from the source ($I_p$) using an ammeter.
    *   Calculate $|Y_p| = \frac{I_p}{V_p}$.
    *   Measure the phase angle $\theta_Y$ between $V_p$ and $I_p$ using an oscilloscope or wattmeter.
    *   Calculate $G = Y_p \cos(\theta_Y)$ and $B_p = Y_p \sin(\theta_Y)$.
    *   From $G=1/R$, calculate $R$.
    *   From $B_C = \omega C$ and $B_L = 1/(\omega L)$, calculate $X_C$ and $X_L$.
*   **Impedance:**
    *   Calculate $|Z_p| = \frac{1}{|Y_p|} = \frac{V_p}{I_p}$.
    *   Calculate the phase angle of impedance $\theta_Z = -\theta_Y$.
*   **Power Factor:**
    *   Directly measure using a power factor meter.
    *   Calculate using $PF_p = \cos(\theta_Y)$.
    *   Measure real power ($P$) using a wattmeter. Then $PF_p = P / (V_p I_p)$.

---

## Study of the Effect of Reactive Components on Power Factor

### 1. Importance of Power Factor

*   **Efficiency:** A low power factor means a higher current is needed to deliver the same amount of real power, leading to increased $I^2R$ losses in transmission and distribution lines.
*   **Equipment Rating:** Generators, transformers, and conductors are rated in kVA (apparent power). A low power factor requires larger capacity equipment for the same real power output.
*   **Penalties:** Industrial consumers are often penalized by electricity boards for operating at a low power factor.
*   **Improvement:** Power factor is typically improved by connecting capacitors in parallel with inductive loads.

### 2. Effect of Purely Inductive Load (RL Series)

*   $Z = R + jX_L$.
*   The current lags the voltage.
*   $PF = \cos(\tan^{-1}(X_L/R))$, which is always lagging and less than 1.
*   As $X_L$ increases (or R decreases), the phase angle increases, and the power factor decreases (becomes more lagging).

### 3. Effect of Purely Capacitive Load (RC Series)

*   $Z = R - jX_C$.
*   The current leads the voltage.
*   $PF = \cos(\tan^{-1}(-X_C/R))$, which is always leading and less than 1.
*   As $X_C$ increases (or R decreases), the phase angle becomes more negative, and the power factor increases (becomes more leading).

### 4. Effect of RLC Series Circuit

*   $Z = R + j(X_L - X_C)$.
*   The nature of the power factor (leading or lagging) depends on the relative values of $X_L$ and $X_C$.
*   **$X_L > X_C$:** Inductive nature, lagging PF.
*   **$X_C > X_L$:** Capacitive nature, leading PF.
*   **$X_L = X_C$ (Resonance):** Resistive nature, unity PF. The impedance is minimum, and current is maximum.

### 5. Effect of RLC Parallel Circuit

*   The analysis is based on the net susceptance $B_{net} = B_C - B_L$.
*   **$B_C > B_L$ ($X_C < X_L$):** Capacitive nature, leading PF.
*   **$B_L > B_C$ ($X_L < X_C$):** Inductive nature, lagging PF.
*   **$B_C = B_L$ (Resonance):** Resistive nature, unity PF. The admittance is minimum, and current is minimum.

### 6. Experimental Study

*   **Procedure:**
    1.  Set up a series or parallel RLC circuit with variable components or by selecting different combinations of R, L, and C.
    2.  Apply a known AC voltage.
    3.  Measure voltage across each component and the total voltage.
    4.  Measure the current through each branch and the total current.
    5.  Measure the phase angle between voltage and current for the entire circuit.
    6.  Measure real power, reactive power, and apparent power using a wattmeter or power analyzer.
    7.  Calculate impedance, admittance, and power factor.
    8.  Vary the values of L and C (or R) and observe the effect on the power factor and other circuit parameters.
    9.  For parallel circuits, connect capacitors in parallel with an inductive load to observe power factor improvement.

---

## Textbooks and Concepts Alignment

*   **A. K. Sawhney:** This textbook covers AC circuits thoroughly, including impedance, admittance, power, and power factor. Chapters dealing with AC bridge measurements and analyzing AC circuits will be particularly relevant. The experimental setup and measurement techniques for determining these parameters will be found in the sections on AC bridges and measuring instruments. (Supports CO1, CO7).
*   **J. B. Gupta:** Similar to Sawhney, Gupta's book provides detailed explanations of AC circuit analysis, including series and parallel RLC circuits, resonance, and power factor correction. The practical aspects of measurements in AC circuits are also covered extensively. (Supports CO1, CO3).
*   **Kalsi H. S.:** Kalsi's "Electronic Instrumentation" will be useful for understanding the principles of measuring instruments (voltmeters, ammeters, oscilloscopes, wattmeters, power factor meters) used in these experiments. The concepts of AC signal measurement and analysis are central to this book. (Supports CO1, CO4).

**Course Outcome Alignment:**

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3):** This module directly addresses this by defining impedance and admittance as complex quantities that relate voltage and current phasors. The phase angle and its calculation are central.
*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3):** Understanding power factor is crucial for measuring real power accurately in AC circuits ($P = VI \cos\theta$). Wattmeters often implicitly use power factor information. While this module focuses on single-phase, the principles extend.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3):** To accurately determine impedance, admittance, and power factor, the accuracy of the measuring instruments (voltmeters, ammeters, oscilloscopes, wattmeters, power factor meters) is paramount. This module implicitly relies on the proper functioning and understanding of these meters.
*   **CO7: Determine electrical parameters using various bridges (Knowledge Level: K3):** While this module focuses on direct measurement and calculations, AC bridges (like Maxwell's bridge, Anderson bridge) are standard methods for determining unknown inductance and capacitance, which are key components for calculating impedance and admittance. Understanding impedance and admittance is a prerequisite for bridge analysis.

---

## Important Points to Remember

*   **Phase is Crucial:** In AC circuits, the phase relationship between voltage and current is as important as their magnitudes. Impedance, admittance, and power factor are all dependent on this phase.
*   **Complex Numbers:** Impedance and admittance are complex quantities. Always treat them as such in calculations ($R+jX$ and $G+jB$).
*   **Series vs. Parallel:** The formulas for total impedance and admittance differ significantly between series and parallel circuits.
*   **Resonance:** At resonance ($X_L = X_C$ in series, $B_L = B_C$ in parallel), impedance/admittance is purely real, and the power factor is unity.
*   **Power Factor Improvement:** Capacitors are used to improve the lagging power factor of inductive loads.
*   **Measurement Tools:** Oscilloscopes are invaluable for visualizing phase differences and verifying waveform shapes. Wattmeters and power factor meters provide direct power measurements.

---

## Practice Questions and Exercises

**1. Short Answer Questions:**

*   Define impedance and admittance. What are their units?
*   What is the phase relationship between voltage and current in an ideal inductor? In an ideal capacitor?
*   What is the condition for unity power factor in a series RLC circuit?
*   What is the condition for resonance in a parallel RLC circuit?
*   Why is power factor improvement important?

**2. Calculation Problems:**

*   **Problem 1 (Series Circuit):** A resistor of $10 \Omega$, an inductor of $0.05$ H, and a capacitor of $100 \mu F$ are connected in series to a $230$ V, $50$ Hz supply. Calculate:
    *   Inductive Reactance ($X_L$)
    *   Capacitive Reactance ($X_C$)
    *   Total Impedance ($Z$)
    *   Total Current ($I$)
    *   Power Factor (PF) and state if it is leading or lagging.
    *   Phase angle ($\theta$)

    *   **Solution:**
        *   $f = 50$ Hz, $V = 230$ V
        *   $R = 10 \Omega$
        *   $L = 0.05$ H
        *   $C = 100 \mu F = 100 \times 10^{-6}$ F
        *   $\omega = 2\pi f = 2\pi \times 50 = 100\pi \approx 314.16$ rad/s
        *   $X_L = \omega L = 100\pi \times 0.05 = 5\pi \approx 15.71 \Omega$
        *   $X_C = \frac{1}{\omega C} = \frac{1}{100\pi \times 100 \times 10^{-6}} = \frac{10^4}{100\pi} = \frac{100}{\pi} \approx 31.83 \Omega$
        *   $X = X_L - X_C = 15.71 - 31.83 = -16.12 \Omega$ (Capacitive)
        *   $Z = R + jX = 10 - j16.12 \Omega$
        *   $|Z| = \sqrt{R^2 + X^2} = \sqrt{10^2 + (-16.12)^2} = \sqrt{100 + 259.85} = \sqrt{359.85} \approx 18.97 \Omega$
        *   $I = \frac{V}{|Z|} = \frac{230}{18.97} \approx 12.12$ A
        *   $PF = \cos(\theta) = \frac{R}{|Z|} = \frac{10}{18.97} \approx 0.527$
        *   $\theta = \tan^{-1}\left(\frac{X}{R}\right) = \tan^{-1}\left(\frac{-16.12}{10}\right) = \tan^{-1}(-1.612) \approx -58.17^\circ$
        *   The power factor is approximately $0.527$ leading (since $X_C > X_L$).

*   **Problem 2 (Parallel Circuit):** A $20 \Omega$ resistor is connected in parallel with an inductor of $0.08$ H and a capacitor of $50 \mu F$ to a $240$ V, $60$ Hz supply. Calculate:
    *   Conductance ($G$)
    *   Inductive Susceptance ($B_L$)
    *   Capacitive Susceptance ($B_C$)
    *   Total Admittance ($Y$)
    *   Total Current ($I$)
    *   Power Factor (PF) and state if it is leading or lagging.

    *   **Solution:**
        *   $f = 60$ Hz, $V = 240$ V
        *   $R = 20 \Omega$
        *   $L = 0.08$ H
        *   $C = 50 \mu F = 50 \times 10^{-6}$ F
        *   $\omega = 2\pi f = 2\pi \times 60 = 120\pi \approx 376.99$ rad/s
        *   $G = \frac{1}{R} = \frac{1}{20} = 0.05$ S
        *   $X_L = \omega L = 120\pi \times 0.08 = 9.6\pi \approx 30.16 \Omega$
        *   $B_L = \frac{1}{X_L} = \frac{1}{30.16} \approx 0.03316$ S
        *   $X_C = \frac{1}{\omega C} = \frac{1}{120\pi \times 50 \times 10^{-6}} = \frac{10^6}{6000\pi} = \frac{1000}{6\pi} \approx 53.05 \Omega$
        *   $B_C = \frac{1}{X_C} = \frac{1}{53.05} \approx 0.01885$ S
        *   Net Susceptance $B_{net} = B_C - B_L = 0.01885 - 0.03316 = -0.01431$ S (Inductive)
        *   $Y = G + jB_{net} = 0.05 - j0.01431$ S
        *   $|Y| = \sqrt{G^2 + B_{net}^2} = \sqrt{(0.05)^2 + (-0.01431)^2} = \sqrt{0.0025 + 0.0002048} = \sqrt{0.0027048} \approx 0.0520$ S
        *   $I = V |Y| = 240 \times 0.0520 \approx 12.48$ A
        *   $PF = \cos(\theta_Y) = \frac{G}{|Y|} = \frac{0.05}{0.0520} \approx 0.9615$
        *   $\theta_Y = \tan^{-1}\left(\frac{B_{net}}{G}\right) = \tan^{-1}\left(\frac{-0.01431}{0.05}\right) = \tan^{-1}(-0.2862) \approx -15.95^\circ$
        *   The power factor is approximately $0.9615$ lagging (since $B_L > B_C$).

**3. Experimental Design Question:**

*   Describe an experimental setup to determine the impedance and power factor of a series RL circuit. What instruments would you use, and how would you connect them? How would you vary the circuit to observe the effect on the power factor?

---
This concludes the study notes for Module 3. Remember to consult your textbooks for more in-depth explanations and examples.
