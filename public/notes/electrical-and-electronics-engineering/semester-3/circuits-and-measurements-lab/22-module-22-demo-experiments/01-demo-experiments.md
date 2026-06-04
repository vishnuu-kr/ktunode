---
title: "Demo Experiments:"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 22: Demo Experiments:"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d0d"
status: "completed"
scrapedAt: "2026-05-23T16:12:08.723Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 22: Demo Experiments

## Introduction

This module focuses on demonstrating key principles and applications within Circuits and Measurements through hands-on experiments. While the specific demo experiments are not detailed, this document provides a comprehensive study guide aligned with the Course Outcomes (COs) and Learning Outcomes (LOs) of the CIRCUITS AND MEASUREMENTS LAB. We will leverage the provided textbooks by Sawhney, Gupta, and Kalsi to cover the underlying theoretical concepts.

---

## Module 22: Demo Experiments - Comprehensive Study Notes

### Learning Outcomes Covered:

This module, through its demonstration experiments, aims to reinforce understanding across various aspects of electrical circuits and measurement techniques. The specific LOs will be addressed by the underlying principles demonstrated in the experiments.

---

### Relevant Course Outcomes (COs) and their Alignment:

This module directly or indirectly supports several Course Outcomes, providing practical demonstrations for theoretical concepts.

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3)**
    *   **Alignment:** Demo experiments involving AC circuits with R, L, and C components will visually and practically demonstrate the phase relationships between voltage and current.
*   **CO2: Verify DC network theorems by setting up various electric circuits (Knowledge Level: K3)**
    *   **Alignment:** Experiments demonstrating theorems like Superposition, Thevenin's, and Norton's will be a direct application of this CO.
*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3)**
    *   **Alignment:** Experiments showcasing power measurement techniques (e.g., using wattmeters, two-wattmeter method for three-phase power) directly align with this CO.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3)**
    *   **Alignment:** Experiments demonstrating how to calibrate ammeters, voltmeters, and ohmmeters by comparing their readings with known standards or through specific calibration procedures will cover this CO.
*   **CO5: Determine magnetic characteristics of different electrical devices (Knowledge Level: K3)**
    *   **Alignment:** Experiments involving magnetic circuits, hysteresis loops, or the behavior of electromagnets will address this CO.
*   **CO6: Analyse the characteristics of various types of transducer systems (Knowledge Level: K3)**
    *   **Alignment:** Experiments showcasing the operation and characteristics of common transducers (e.g., thermocouples, strain gauges, LVDTs) will fulfil this CO.
*   **CO7: Determine electrical parameters using various bridges (Knowledge Level: K3)**
    *   **Alignment:** Experiments demonstrating the operation of AC bridges (e.g., Maxwell, Hay, Schering) and DC bridges (e.g., Wheatstone) for parameter measurement will cover this CO.
*   **CO8: Develop simulation models of electric circuits using modern simulation tools. (Knowledge Level: K3)**
    *   **Alignment:** While not directly a lab experiment, the understanding gained from the physical demonstrations will be crucial for developing accurate simulation models. Some demo experiments might even involve comparison with simulated results.

---

## Key Concepts and Definitions

This section provides fundamental definitions and concepts relevant to the potential demo experiments.

### 1. DC Circuits and Network Theorems (CO2)

*   **Ohm's Law:** The voltage across a resistor is directly proportional to the current flowing through it, provided the temperature and other physical conditions remain unchanged. $V = IR$.
    *   *Sawhney, Chapter 2*
    *   *Gupta, Chapter 2*
*   **Kirchhoff's Laws:**
    *   **Kirchhoff's Current Law (KCL):** The algebraic sum of currents entering a node (or junction) is equal to the algebraic sum of currents leaving the node. $\sum I_{in} = \sum I_{out}$.
    *   **Kirchhoff's Voltage Law (KVL):** The algebraic sum of all voltages around any closed loop in a circuit is zero. $\sum V = 0$.
    *   *Sawhney, Chapter 2*
    *   *Gupta, Chapter 2*
*   **Superposition Theorem:** In a linear network containing multiple independent sources, the response (e.g., current, voltage) in any branch is the algebraic sum of the responses caused by each independent source acting alone, with all other independent sources turned off (voltage sources short-circuited, current sources open-circuited).
    *   *Sawhney, Chapter 3*
    *   *Gupta, Chapter 3*
*   **Thevenin's Theorem:** Any linear, two-terminal network containing independent sources can be replaced by an equivalent circuit consisting of a single voltage source ($V_{th}$) in series with a single equivalent resistance ($R_{th}$). $V_{th}$ is the open-circuit voltage across the terminals, and $R_{th}$ is the equivalent resistance looking into the terminals with all independent sources turned off.
    *   *Sawhney, Chapter 3*
    *   *Gupta, Chapter 3*
*   **Norton's Theorem:** Any linear, two-terminal network containing independent sources can be replaced by an equivalent circuit consisting of a single current source ($I_N$) in parallel with a single equivalent resistance ($R_N$). $I_N$ is the short-circuit current through the terminals, and $R_N$ is the equivalent resistance looking into the terminals with all independent sources turned off ($R_N = R_{th}$).
    *   *Sawhney, Chapter 3*
    *   *Gupta, Chapter 3*
*   **Maximum Power Transfer Theorem:** For a DC circuit, maximum power is transferred from a source to a load when the load resistance is equal to the Thevenin equivalent resistance of the source circuit. $R_L = R_{th}$.
    *   *Sawhney, Chapter 3*
    *   *Gupta, Chapter 3*

### 2. AC Circuits and Phasor Relations (CO1)

*   **Phasor:** A phasor is a rotating vector that represents a sinusoidal quantity (voltage or current). It has magnitude (amplitude or RMS value) and phase angle.
    *   *Sawhney, Chapter 7*
    *   *Gupta, Chapter 6*
    *   *Kalsi, Chapter 8*
*   **Impedance (Z):** The total opposition to current flow in an AC circuit, comprising resistance, inductive reactance, and capacitive reactance. It is a complex quantity. $Z = R + j(X_L - X_C)$. Units: Ohms ($\Omega$).
    *   **Resistance (R):** The opposition to current flow in resistive elements.
    *   **Inductive Reactance ($X_L$):** The opposition to current flow due to inductance. $X_L = \omega L = 2\pi fL$, where $\omega$ is the angular frequency and $L$ is the inductance.
    *   **Capacitive Reactance ($X_C$):** The opposition to current flow due to capacitance. $X_C = \frac{1}{\omega C} = \frac{1}{2\pi fC}$, where $C$ is the capacitance.
    *   *Sawhney, Chapter 7*
    *   *Gupta, Chapter 6*
    *   *Kalsi, Chapter 8*
*   **Admittance (Y):** The reciprocal of impedance. $Y = \frac{1}{Z} = G + jB$, where G is conductance and B is susceptance. Units: Siemens (S).
    *   *Sawhney, Chapter 7*
    *   *Gupta, Chapter 6*
*   **RLC Series Circuit:** The impedance is $Z = R + j(\omega L - \frac{1}{\omega C})$.
    *   **If $X_L > X_C$ (Inductive):** Current lags voltage.
    *   **If $X_C > X_L$ (Capacitive):** Current leads voltage.
    *   **If $X_L = X_C$ (Resonant):** Circuit is purely resistive, current and voltage are in phase.
    *   *Sawhney, Chapter 7*
    *   *Gupta, Chapter 6*
*   **RLC Parallel Circuit:** The analysis is often done using admittances.
    *   *Sawhney, Chapter 7*
    *   *Gupta, Chapter 6*

### 3. Power Measurement (CO3)

*   **Active Power (P):** The actual power consumed by the circuit, measured in Watts (W). $P = VI \cos\phi$.
*   **Reactive Power (Q):** The power exchanged between the source and the reactive components (inductors and capacitors), measured in Volt-Amperes Reactive (VAR). $Q = VI \sin\phi$.
*   **Apparent Power (S):** The product of RMS voltage and RMS current, measured in Volt-Amperes (VA). $S = VI$.
    *   *Sawhney, Chapter 5*
    *   *Gupta, Chapter 7*
    *   *Kalsi, Chapter 12*
*   **Wattmeter:** An instrument used to measure active power. It typically has a voltage coil (connected in parallel) and a current coil (connected in series).
    *   **Direct Connection:** Voltage coil is connected across the load, current coil is in series with the load.
    *   **Line and Load Connection:** For measuring power delivered to a load, the wattmeter's current coil is in series with the load, and the voltage coil is connected across the load terminals.
    *   *Sawhney, Chapter 5*
    *   *Gupta, Chapter 7*
    *   *Kalsi, Chapter 12*
*   **Two-Wattmeter Method for Three-Phase Power:** In a balanced or unbalanced three-phase system, the total active power can be measured using two wattmeters. The sum of the readings of the two wattmeters gives the total power. This method is particularly useful for measuring power in both inductive and capacitive loads.
    *   *Sawhney, Chapter 5*
    *   *Gupta, Chapter 7*
    *   *Kalsi, Chapter 12*

### 4. Calibration of Meters (CO4)

*   **Calibration:** The process of comparing the readings of a measuring instrument with a known standard or traceable reference to determine and correct any inaccuracies.
    *   *Sawhney, Chapter 1 & 2*
    *   *Gupta, Chapter 1 & 2*
    *   *Kalsi, Chapter 2 & 3*
*   **Types of Errors in Measurement:**
    *   **Gross Errors (Blunder Errors):** Due to human mistakes (e.g., incorrect reading, misinterpretation).
    *   **Systematic Errors:** Due to instrument limitations, environmental factors, or observer's bias. They are predictable and can be corrected.
        *   **Instrument Errors:** Caused by inaccuracies in the instrument itself.
        *   **Personal Errors:** Caused by the observer (e.g., parallax error).
        *   **Environmental Errors:** Caused by variations in temperature, humidity, etc.
    *   **Random Errors (Residual Errors):** Due to unpredictable variations in measurement conditions or observer limitations.
*   **Calibration Methods:**
    *   **Substitution Method:** The unknown quantity is measured by substituting it with a known quantity from a standard instrument.
    *   **Comparison Method:** The reading of the instrument under test is directly compared with the reading of a standard instrument.
*   **Calibration of Ammeters and Voltmeters:** This often involves using a calibrated DC/AC power supply and a standard ammeter/voltmeter. The instrument under test is connected in the circuit, and its readings are compared with the standard instrument for various input values.
    *   *Sawhney, Chapter 2*
    *   *Gupta, Chapter 2*
    *   *Kalsi, Chapter 2 & 3*

### 5. Magnetic Characteristics (CO5)

*   **Magnetic Circuit:** A closed path for magnetic flux. Analogous to an electrical circuit with MMF (Magnetomotive Force) instead of EMF and reluctance instead of resistance.
*   **Magnetomotive Force (MMF):** The MMF is the driving force in a magnetic circuit, analogous to EMF in an electric circuit. It is produced by coils of wire carrying current. $MMF = NI$, where $N$ is the number of turns and $I$ is the current.
*   **Reluctance ($\mathcal{R}$):** The opposition to the establishment of magnetic flux in a magnetic circuit, analogous to resistance in an electric circuit. $\mathcal{R} = \frac{l}{\mu A}$, where $l$ is the length of the magnetic path, $\mu$ is the permeability of the material, and $A$ is the cross-sectional area.
*   **Permeability ($\mu$):** A measure of the ability of a material to support the formation of a magnetic field. $\mu = \mu_r \mu_0$, where $\mu_r$ is the relative permeability and $\mu_0$ is the permeability of free space.
*   **Magnetic Flux ($\Phi$):** The magnetic field lines passing through a given area.
*   **Hysteresis Loop:** A graphical representation of the relationship between magnetic flux density (B) and magnetic field strength (H) in a ferromagnetic material as the magnetizing field is cycled. It shows magnetic properties like saturation, remanence, and coercivity.
    *   *Sawhney, Chapter 14*
    *   *Gupta, Chapter 15*
    *   *Kalsi, Chapter 14*
*   **B-H Curve:** Synonymous with the hysteresis loop.

### 6. Transducer Characteristics (CO6)

*   **Transducer:** A device that converts one form of energy into another, typically from a physical phenomenon (like temperature, pressure, displacement) into an electrical signal.
    *   *Kalsi, Chapter 1 & 2*
*   **Characteristics of Transducers:**
    *   **Sensitivity:** The ratio of the change in output signal to the change in input physical quantity.
    *   **Accuracy:** The degree of closeness of measurements to the true value.
    *   **Linearity:** The degree to which the output signal is directly proportional to the input physical quantity.
    *   **Resolution:** The smallest change in the input physical quantity that can be detected by the transducer.
    *   **Response Time:** The time taken for the transducer's output to reach a specified percentage of its final value after a change in input.
    *   **Range:** The minimum and maximum values of the physical quantity that the transducer can measure.
*   **Common Types of Transducers:**
    *   **Thermocouple:** Converts temperature difference into a voltage. (See Sawhney, Chapter 25; Gupta, Chapter 21; Kalsi, Chapter 5)
    *   **Strain Gauge:** Converts mechanical strain into a change in electrical resistance. (See Sawhney, Chapter 25; Gupta, Chapter 21; Kalsi, Chapter 5)
    *   **LVDT (Linear Variable Differential Transformer):** Converts linear displacement into an AC voltage. (See Sawhney, Chapter 25; Gupta, Chapter 21; Kalsi, Chapter 5)
    *   **Piezoelectric Transducer:** Converts pressure or force into an electrical charge/voltage.
    *   **Capacitive Transducer:** Converts displacement into a change in capacitance.

### 7. Electrical Parameter Measurement using Bridges (CO7)

*   **Wheatstone Bridge (DC Bridge):** Used for precise measurement of unknown resistance. It consists of four resistors in a bridge configuration, and a galvanometer to detect null deflection. For balance, the ratio of resistances in the arms are equal.
    *   *Sawhney, Chapter 10*
    *   *Gupta, Chapter 10*
    *   *Kalsi, Chapter 6*
*   **AC Bridges:** Used for measurement of inductance, capacitance, and frequency. They operate on the principle of impedance balance.
    *   **Maxwell's Bridge:** Measures unknown inductance in terms of known capacitance and resistances. It has two configurations:
        *   **Maxwell-Wien Bridge:** Measures medium inductance.
        *   **Maxwell-Goubau Bridge:** Measures low inductance.
        *   *Sawhney, Chapter 11*
        *   *Gupta, Chapter 11*
        *   *Kalsi, Chapter 6*
    *   **Hay's Bridge:** Measures inductance, especially suitable for coils with high Q-factor.
        *   *Sawhney, Chapter 11*
        *   *Gupta, Chapter 11*
        *   *Kalsi, Chapter 6*
    *   **Schering Bridge:** Measures unknown capacitance and dissipation factor. Commonly used for testing dielectrics in cables and transformers.
        *   *Sawhney, Chapter 11*
        *   *Gupta, Chapter 11*
        *   *Kalsi, Chapter 6*
    *   **Anderson Bridge:** Measures unknown inductance and is a modification of Maxwell's bridge, providing better accuracy for a wider range of inductances.
        *   *Sawhney, Chapter 11*
        *   *Gupta, Chapter 11*
*   **Q-Factor (Quality Factor):** A dimensionless parameter that describes how under-damped an oscillator or resonator is and is defined as the ratio of stored energy to dissipated energy per cycle. For an inductor, $Q = \frac{X_L}{R}$; for a capacitor, $Q = \frac{1}{X_C R}$.
    *   *Sawhney, Chapter 7 & 11*
    *   *Gupta, Chapter 6 & 11*

---

## Practice Questions and Exercises

These questions are designed to test your understanding of the concepts relevant to demo experiments.

**Question 1 (CO2):**
State and explain Thevenin's theorem with a simple circuit diagram. How would you experimentally verify Thevenin's theorem for a given DC network?

**Answer:**
Thevenin's theorem states that any linear, two-terminal network can be replaced by an equivalent circuit consisting of a single voltage source ($V_{th}$) in series with an equivalent resistance ($R_{th}$).
*   **Experimental Verification:**
    1.  **Determine $V_{th}$:** Open-circuit the terminals of the network and measure the voltage across these terminals using a DC voltmeter. This is $V_{th}$.
    2.  **Determine $R_{th}$:** Turn off all independent sources in the network (short voltage sources, open current sources). Measure the equivalent resistance looking into the open-circuited terminals using an ohmmeter or by applying a known voltage and measuring the resulting current.
    3.  **Verify:** Construct the Thevenin equivalent circuit with $V_{th}$ and $R_{th}$. Connect a load resistor ($R_L$) to both the original network and the equivalent circuit. Measure the voltage across $R_L$ in both cases. The readings should be identical (within experimental error).

**Question 2 (CO1 & CO3):**
A series RLC circuit has a resistance of $10 \Omega$, an inductance of $50 mH$, and a capacitance of $100 \mu F$. If connected to a $230V$, $50 Hz$ AC supply, calculate:
a) The impedance of the circuit.
b) The current flowing through the circuit.
c) The phase angle between voltage and current.
d) The power factor.
e) The active power consumed.

**Answer:**
Given: $R = 10 \Omega$, $L = 50 mH = 0.05 H$, $C = 100 \mu F = 100 \times 10^{-6} F$, $V = 230 V$, $f = 50 Hz$.
Angular frequency, $\omega = 2\pi f = 2\pi \times 50 = 100\pi$ rad/s.

*   **Inductive Reactance ($X_L$):**
    $X_L = \omega L = (100\pi)(0.05) = 5\pi \approx 15.7 \Omega$
*   **Capacitive Reactance ($X_C$):**
    $X_C = \frac{1}{\omega C} = \frac{1}{(100\pi)(100 \times 10^{-6})} = \frac{1}{0.01\pi} = \frac{100}{\pi} \approx 31.8 \Omega$

a) **Impedance (Z):**
    $Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{10^2 + (15.7 - 31.8)^2}$
    $Z = \sqrt{100 + (-16.1)^2} = \sqrt{100 + 259.21} = \sqrt{359.21} \approx 18.95 \Omega$

b) **Current (I):**
    $I = \frac{V}{Z} = \frac{230}{18.95} \approx 12.14 A$

c) **Phase Angle ($\phi$):**
    $\tan\phi = \frac{X_L - X_C}{R} = \frac{15.7 - 31.8}{10} = \frac{-16.1}{10} = -1.61$
    $\phi = \arctan(-1.61) \approx -58.15^\circ$ (Current leads voltage, as $X_C > X_L$)

d) **Power Factor:**
    $PF = \cos\phi = \cos(-58.15^\circ) \approx 0.528$ (Leading)

e) **Active Power (P):**
    $P = VI \cos\phi = 230 \times 12.14 \times 0.528 \approx 1467.7 W$

**Question 3 (CO4):**
Describe the procedure for calibrating a DC ammeter using a standard DC ammeter and a variable DC power supply.

**Answer:**
1.  **Setup:** Connect a variable DC power supply, a standard DC ammeter (calibrated and with known accuracy), the DC ammeter to be calibrated, and a suitable load resistor (or the circuit to be tested) in series.
2.  **Initial Setting:** Set the power supply to its minimum voltage.
3.  **Observation:** Turn on the power supply. Adjust the voltage to obtain a small current reading in the ammeters.
4.  **Record Readings:** Simultaneously record the readings from the standard ammeter and the ammeter under calibration.
5.  **Increment Current:** Gradually increase the voltage of the power supply to get progressively higher current values, covering the entire range of the ammeter under calibration. For each step, record the corresponding readings from both ammeters.
6.  **Repeat for Multiple Points:** Take readings at several points across the entire scale of the ammeter being calibrated.
7.  **Analysis:** Plot a graph of "Amps (ammeter under calibration)" vs. "Amps (standard ammeter)". The ideal calibration curve would be a straight line passing through the origin with a slope of 1. Deviations from this line indicate the errors in the ammeter under calibration.
8.  **Correction Factor/Calibration Curve:** Based on the graph, determine the correction factor to be applied to the readings of the ammeter under calibration, or create a calibration curve.

**Question 4 (CO7):**
When is the Hay's bridge preferred over the Maxwell bridge for inductance measurement? What is the condition for balance in a Hay's bridge?

**Answer:**
*   **Preference for Hay's Bridge:** Hay's bridge is preferred over Maxwell's bridge for measuring the inductance of coils with a **high Q-factor** (where the resistance is relatively small compared to the inductive reactance). Maxwell's bridge can become unstable or difficult to balance for high Q-factor coils.
*   **Condition for Balance in Hay's Bridge:**
    The Hay's bridge consists of a resistor ($R_1$) in series with a standard inductor ($L_1$) in one arm, a variable resistor ($R_2$) in series with a variable inductor ($L_2$) or a variable resistor ($R_3$) in another arm, and a capacitor ($C_4$) in the fourth arm. For balance, the potential difference across the detector (galvanometer) is zero. The condition for balance is:
    $\frac{R_2}{R_3} = \frac{R_1 + j\omega L_1}{R_4 + j\omega L_4}$ (This is a general form, specific configurations may vary)

    For a common configuration where $R_1$, $L_1$ are in series, $R_2$, $L_2$ are in series, $R_3$ is a pure resistance, and $C_4$ is a pure capacitance:
    The balance condition is: **$L_x = R_1 R_2 C_4$** and **$R_x = R_1 \frac{R_2}{R_4}$**. (Note: Actual formulas depend on the bridge arms' setup; refer to textbooks for precise equations).
    The balance condition for Hay's bridge, when measuring inductance $L_x$ with resistance $R_x$, in terms of its components $R_1$, $L_1$, $R_2$, $C_4$, is derived by equating the impedances in the ratio of the bridge arms. The crucial part is that $R_x$ and $L_x$ are determined from the values of the known components at balance.

    A more standard Hay's bridge configuration:
    Arm 1: $R_1$ in series with $L_1$ (known inductance)
    Arm 2: $R_2$ (variable resistance)
    Arm 3: $R_3$ (variable resistance)
    Arm 4: $C_4$ (known capacitance) in series with $R_4$ (variable resistance)
    
    For measuring an unknown inductance $L_x$ and its series resistance $R_x$:
    Arm 1: $R_1$ (known)
    Arm 2: $L_1$ (known inductance) in series with $R_L1$ (known resistance)
    Arm 3: $R_3$ (variable resistance)
    Arm 4: $C_4$ (known capacitance) in series with $R_4$ (variable resistance)
    
    The balance condition is derived from $Z_{13} Z_{24} = Z_{14} Z_{23}$. When $L_x$ and $R_x$ are in arm 1, and arm 3 is a pure resistance $R_3$:
    **$L_x = C_4 R_2 R_3$** and **$R_x = R_1 \frac{R_2}{R_3}$**. (Here, $R_2$ and $R_3$ are adjusted for balance). This is the standard form for Hay's bridge.

---

## Important Points to Remember

*   **Safety First:** Always follow lab safety guidelines when conducting experiments. Ensure all connections are secure, and be aware of voltage levels.
*   **Instrument Accuracy:** Understand the limitations and accuracy of the instruments used. This is crucial for calibration experiments.
*   **Phasor Diagrams:** Visualizing phasor diagrams is key to understanding AC circuit behavior (CO1).
*   **Ideal vs. Real Components:** In practical circuits, components are not ideal. Inductors have series resistance, and capacitors have parallel resistance and series inductance. These non-idealities affect measurements.
*   **Bridge Sensitivity:** The sensitivity of a bridge depends on the components and the null detector used. A more sensitive null detector can help achieve a sharper balance point.
*   **Power Factor Correction:** In AC circuits, maintaining a power factor close to unity is essential for efficient power transmission.
*   **Experimental Errors:** Be mindful of potential sources of error in your experiments, such as component tolerances, instrument limitations, and reading parallax.
*   **Simulation vs. Reality:** While simulation tools (CO8) are powerful, practical lab experiments provide a hands-on understanding that simulations alone cannot fully replicate. Comparing lab results with simulated results can be highly insightful.

---
