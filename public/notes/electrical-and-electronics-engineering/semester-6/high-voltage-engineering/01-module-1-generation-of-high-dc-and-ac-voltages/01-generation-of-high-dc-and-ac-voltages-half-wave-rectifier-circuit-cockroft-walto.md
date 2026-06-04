---
title: "Generation of High DC and AC Voltages- half-wave rectifier circuit- Cockroft-Walton voltage multiplier circuit- Electrostatic generator- Generation of high AC voltages-Cascaded Transformers- Series resonant circuit."
subject: "HIGH VOLTAGE ENGINEERING"
module: "Module 1: Generation of High DC and AC Voltages"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f365f9"
status: "completed"
scrapedAt: "2026-05-23T16:28:01.759Z"
---
# HIGH VOLTAGE ENGINEERING

## Module 1: Generation of High DC and AC Voltages

---

### **Introduction to High Voltage Generation**

High voltages are essential for various applications in power systems, research, and testing. This module focuses on the fundamental principles and circuits used to generate high DC and AC voltages.

---

### **1. Generation of High DC Voltages**

#### **1.1 Half-Wave Rectifier Circuit**

*   **Concept:** A basic rectifier circuit that converts AC voltage to pulsating DC voltage. It uses a single diode and a capacitor for smoothing.
*   **Working Principle:**
    *   During the positive half-cycle of the AC input, the diode is forward-biased, allowing current to flow and charge the capacitor.
    *   During the negative half-cycle, the diode is reverse-biased, and the capacitor discharges through the load.
*   **Circuit Diagram:**
    ```
       AC Input ---|>|--- C --- Load
                  Diode   Capacitor
    ```
*   **Output Voltage:** The output is a pulsating DC voltage. The ripple is significant.
*   **Limitations:** Low DC output voltage, high ripple factor, not suitable for high voltage generation due to component limitations and efficiency.
*   **Relevance to CO1 (K1):** Identifies a basic AC to DC conversion circuit.

#### **1.2 Cockcroft-Walton Voltage Multiplier Circuit**

*   **Concept:** A cascade of voltage multiplier stages that can produce very high DC voltages from a lower AC input or pulse voltage. It utilizes diodes and capacitors to step up the voltage.
*   **Working Principle:** Each stage consists of diodes and capacitors arranged to charge capacitors during different parts of the AC cycle, effectively adding voltage in series.
*   **Circuit Diagram (Typical Doubler Stage):**
    ```
         AC Input ---|>|--- C1 ---|>|--- C3 --- Load
                    D1        D2       D3
                    ^         ^        ^
                    |         |        |
                    C2 ---|>|--- C4 ---|>|---
                         D4        D5
    ```
    *   The first stage charges C1 during the positive half-cycle.
    *   During the negative half-cycle, C1 charges C2 through D2, and C2 is in series with the next AC input half-cycle to charge C3 through D3.
    *   This process continues, stepping up the voltage with each stage.
*   **Key Parameters:**
    *   **Voltage Multiplication Factor:** Approximately $2n$ for $n$ doubler stages (ignoring losses).
    *   **Ripple Factor:** Depends on the load current and capacitance values. Larger capacitance leads to lower ripple.
    *   **Rectification Efficiency:** Decreases with the number of stages and increasing load.
*   **Advantages:**
    *   Can generate very high DC voltages from a relatively low AC input.
    *   Relatively simple construction.
    *   Lower ripple compared to a simple half-wave rectifier.
*   **Disadvantages:**
    *   Requires a large number of components (diodes and capacitors) for very high voltages.
    *   The ripple increases with load current.
    *   The output voltage drops significantly under heavy load.
    *   Capacitor voltage ratings must be carefully considered.
*   **Textbook References:**
    *   **Wadhwa (2011):** Discusses the working principle, stages, ripple, and efficiency.
    *   **Kuchler (2018):** Provides detailed analysis of voltage regulation and ripple.
    *   **Naidu & Kamaraju (2004):** Explains the construction and applications in HV testing.
    *   **Kuffel, Zaengl & Kuffel (2005):** Covers ripple analysis and the effect of source impedance.
*   **Applications:** High voltage DC power supplies for X-ray machines, particle accelerators, and HV testing of insulators and equipment.
*   **Relevance to CO1 (K1):** Identifies a circuit for generating high DC voltages from AC.
*   **Example:** If a 10 kV, 50 Hz AC source is used with a Cockcroft-Walton multiplier with 5 doubler stages, the theoretical DC output voltage would be approximately $10 \text{ kV} \times 2 \times 5 = 100 \text{ kV}$.

#### **1.3 Electrostatic Generator (Van de Graaff Generator)**

*   **Concept:** A machine that produces very high static electric potentials (DC) by transferring electric charge onto a hollow metal sphere.
*   **Working Principle:**
    1.  A high-speed belt (typically made of insulating material like rubber) moves vertically.
    2.  At the bottom, charge is sprayed onto the belt using a corona discharge from a sharp electrode (emitter).
    3.  The belt carries the charge upwards to the hollow metal sphere.
    4.  At the top, a collector electrode, connected to the inner surface of the sphere, removes the charge from the belt by induction or direct contact.
    5.  This process continuously builds up a large static charge on the sphere.
*   **Key Components:**
    *   **Belt:** Insulating material with good mechanical strength.
    *   **Pulleys:** Drive the belt.
    *   **Emitter Electrodes:** Spray charge onto the belt.
    *   **Collector Electrodes:** Collect charge from the belt.
    *   **High Voltage Sphere:** Accumulates the charge.
    *   **Grounding System:** For the lower electrode and motor.
*   **Limitations:**
    *   **Current Output:** Very low current output, typically in microamperes.
    *   **Voltage Limitation:** Limited by corona discharge and leakage currents from the sphere to the surrounding atmosphere.
    *   **Size:** Large physical size for very high voltages.
*   **Textbook References:**
    *   **Wadhwa (2011):** Explains the basic principle, components, and limitations.
    *   **Kuchler (2018):** Discusses the operational principles and practical designs.
    *   **Naidu & Kamaraju (2004):** Covers the theory of charge transfer and voltage buildup.
    *   **Kuffel, Zaengl & Kuffel (2005):** Details the factors affecting voltage limits and charge transfer efficiency.
*   **Applications:** Particle accelerators (e.g., proton synchrotrons), fusion research, high-voltage physics experiments, and initial voltage sources for other HV systems.
*   **Relevance to CO1 (K1):** Identifies a DC voltage generation method based on electrostatics.
*   **Example:** Tandem Van de Graaff accelerators can generate DC potentials in the tens of MeV range.

---

### **2. Generation of High AC Voltages**

#### **2.1 Cascaded Transformers**

*   **Concept:** Connecting multiple single-phase transformers in series to achieve a higher AC voltage.
*   **Working Principle:**
    *   The primary windings of all transformers are connected in parallel to the low voltage AC source.
    *   The secondary winding of the first transformer is connected in series with the primary winding of the second transformer.
    *   The secondary winding of the second transformer is connected in series with the primary winding of the third transformer, and so on.
    *   The total voltage is the sum of the voltages induced in each secondary winding.
*   **Circuit Diagram (Three-Stage Cascade):**
    ```
       LV AC Input ----+---- LV AC Input ----+---- LV AC Input
                       |                    |
                       S1                   S2
                     /    \               /    \
                    P1     S1'           P2     S2'
                   /    \               /    \
                  P1'    S1''          P2'    S2''
                                           /    \
                                          P3     S3'
                                         /    \
                                        P3'    S3''
                                                 |
                                               HV Output
    ```
    Where P denotes primary and S denotes secondary windings.
*   **Voltage Multiplication Factor:** Approximately $N \times n$, where $N$ is the voltage ratio of a single transformer and $n$ is the number of stages.
*   **Advantages:**
    *   Can generate high AC voltages without requiring extremely high voltage insulation for individual transformer windings.
    *   Each transformer can be designed for a lower voltage, making manufacturing easier and more cost-effective.
*   **Disadvantages:**
    *   **Phase Shift:** Each transformer stage introduces a phase shift, which can be problematic for some applications.
    *   **Synchronization:** Requires careful synchronization of the magnetic fluxes in each transformer to avoid saturation and voltage instability.
    *   **Load Regulation:** The output voltage can vary significantly with load.
    *   **Size and Weight:** Can be bulky due to the multiple transformer units.
*   **Textbook References:**
    *   **Wadhwa (2011):** Explains the principle of series connection and voltage step-up.
    *   **Naidu & Kamaraju (2004):** Discusses the design considerations and practical limitations.
    *   **Kuffel, Zaengl & Kuffel (2005):** Analyzes the effect of phase shift and flux synchronization.
*   **Applications:** High voltage AC testing of transformers, switchgear, and cables.
*   **Relevance to CO1 (K1):** Identifies a method for generating high AC voltages using transformers.

#### **2.2 Series Resonant Circuit**

*   **Concept:** A circuit consisting of an inductor (L) and a capacitor (C) connected in series with an AC voltage source. At resonance, the circuit exhibits voltage amplification across the inductor and capacitor.
*   **Working Principle:**
    *   The impedance of the inductor is $Z_L = j\omega L$.
    *   The impedance of the capacitor is $Z_C = \frac{1}{j\omega C}$.
    *   At resonance, the inductive reactance equals the capacitive reactance: $X_L = X_C$.
    *   $\omega_0 = \frac{1}{\sqrt{LC}}$ (Resonant frequency)
    *   At resonance, the total impedance of the series L-C circuit is minimum ($Z = R_{series}$), where $R_{series}$ is the inherent resistance of the inductor and capacitor.
    *   The voltage across the inductor ($V_L$) and the voltage across the capacitor ($V_C$) can be significantly higher than the source voltage.
    *   $V_L = I \cdot X_L$ and $V_C = I \cdot X_C$
    *   The current at resonance is $I = \frac{V_{source}}{R_{series}}$.
    *   Therefore, $V_L = V_C = \frac{V_{source}}{R_{series}} \cdot X_L = V_{source} \cdot \frac{X_L}{R_{series}} = V_{source} \cdot Q$
    *   $Q$ is the quality factor of the circuit, defined as $Q = \frac{X_L}{R_{series}} = \frac{X_C}{R_{series}} = \frac{\omega_0 L}{R_{series}} = \frac{1}{\omega_0 C R_{series}}$.
*   **Circuit Diagram:**
    ```
       AC Source ---- R_source ---- L ---- C ---- Load
                                      ^           ^
                                      |-----------|
                                       (Measure V_L or V_C)
    ```
    Where $R_{source}$ is the internal resistance of the source and $R_{series}$ represents the total resistance in the resonant circuit.
*   **Voltage Amplification:** The voltage across L or C can be $Q$ times the source voltage.
*   **Advantages:**
    *   High voltage gain for a given source voltage.
    *   Can be used to generate very high AC voltages.
    *   Can be tuned to a specific frequency.
*   **Disadvantages:**
    *   **Narrow Bandwidth:** The circuit is only effective at or near the resonant frequency.
    *   **High Q Factor Requirement:** To achieve high voltage amplification, a high Q factor is necessary, which means low series resistance.
    *   **Component Stress:** The inductor and capacitor must withstand high voltages and currents.
    *   **Sensitivity to Frequency Changes:** Small changes in frequency can lead to large variations in output voltage.
*   **Textbook References:**
    *   **Wadhwa (2011):** Explains the principle of resonance and voltage magnification.
    *   **Kuchler (2018):** Details the use of resonant circuits in AC voltage generation for testing.
    *   **Naidu & Kamaraju (2004):** Covers the calculation of Q factor and voltage amplification.
    *   **Kuffel, Zaengl & Kuffel (2005):** Discusses practical considerations for achieving high Q and tuning.
*   **Applications:** High voltage AC testing of electrical apparatus, insulation testing, and as a resonant charging circuit for pulse generators.
*   **Relevance to CO1 (K1):** Identifies a circuit that generates high AC voltages through resonance.
*   **Example:** If a 1 kV AC source is used with a series resonant circuit having a Q factor of 50, the voltage across the inductor or capacitor at resonance can be as high as $1 \text{ kV} \times 50 = 50 \text{ kV}$.

---

### **Summary of Circuits for HV Generation**

| Circuit Type             | Voltage Type | Key Components         | Advantages                                       | Disadvantages                                  | CO Alignment |
| :----------------------- | :----------- | :--------------------- | :----------------------------------------------- | :--------------------------------------------- | :----------- |
| Half-Wave Rectifier      | DC           | Diode, Capacitor       | Simple                                           | High ripple, low output, inefficient           | CO1 (K1)     |
| Cockcroft-Walton Multiplier | DC           | Diodes, Capacitors     | High DC voltage from AC, efficient step-up       | Many components, voltage drop with load        | CO1 (K1)     |
| Van de Graaff Generator  | DC           | Belt, Electrodes, Sphere | Very high DC potential, electrostatic principle | Very low current, large size                   | CO1 (K1)     |
| Cascaded Transformers    | AC           | Transformers           | High AC voltage without high-voltage insulation  | Phase shift, synchronization issues, load dependent | CO1 (K1)     |
| Series Resonant Circuit  | AC           | Inductor, Capacitor    | High voltage gain, tunable                       | Narrow bandwidth, sensitive to frequency, component stress | CO1 (K1)     |

---

### **Important Points to Remember**

*   **DC Voltage Generation:** Cockcroft-Walton multipliers are widely used for high DC voltages due to their ability to step up voltage efficiently. Van de Graaff generators provide very high potentials but at very low currents.
*   **AC Voltage Generation:** Cascaded transformers are a straightforward way to increase AC voltage, while series resonant circuits offer voltage amplification but require careful tuning.
*   **Insulation:** All HV generation circuits require robust insulation to prevent breakdown.
*   **Ripple (DC):** Ripple is an important characteristic of DC output, indicating the AC component present. Lower ripple is generally desired.
*   **Efficiency:** The efficiency of HV generation circuits is often low, especially for high voltage and high power applications.
*   **Voltage Regulation:** How well the output voltage remains constant under varying load conditions is crucial.

---

### **Practice Questions & Exercises**

**Question 1 (CO1 - K1):**
Which of the following circuits is primarily used for generating very high DC voltages with a low current output?
a) Cascaded Transformers
b) Series Resonant Circuit
c) Van de Graaff Generator
d) Half-Wave Rectifier

**Answer:** c) Van de Graaff Generator

**Question 2 (CO1 - K1):**
In a Cockcroft-Walton voltage multiplier, increasing the number of stages will:
a) Decrease the output DC voltage.
b) Increase the ripple in the output DC voltage.
c) Increase the voltage multiplication factor.
d) Decrease the output current capability.

**Answer:** c) Increase the voltage multiplication factor. (Note: While voltage drop also increases, the multiplication factor itself increases with stages).

**Question 3 (CO1 - K1):**
The voltage amplification in a series resonant circuit is directly proportional to the:
a) Resistance of the circuit.
b) Quality Factor (Q) of the circuit.
c) Load impedance.
d) Source frequency.

**Answer:** b) Quality Factor (Q) of the circuit.

**Question 4 (Conceptual - Applying Knowledge):**
Consider a Cockcroft-Walton voltage multiplier with 5 doubler stages connected to a 15 kV, 50 Hz AC source. If each capacitor has a capacitance of 0.1 µF and the load current is 1 mA, estimate the approximate output DC voltage and identify a potential challenge in its operation.

**Hint:**
1.  Calculate the theoretical DC output voltage.
2.  Consider the effect of load current and capacitance on the output voltage (voltage drop).
3.  Think about the stress on components.

**Answer:**
1.  **Theoretical DC Output Voltage:** For $n$ doubler stages, the theoretical output voltage is approximately $2n \times V_{peak}$, where $V_{peak}$ is the peak AC input voltage.
    *   $V_{peak} = 15 \text{ kV} \times \sqrt{2} \approx 21.21 \text{ kV}$
    *   Theoretical Output $\approx 2 \times 5 \times 21.21 \text{ kV} = 212.1 \text{ kV}$.

2.  **Voltage Drop due to Load:** The voltage drop due to ripple is approximately $\frac{I_{load}}{2fC}$, where $f$ is the source frequency. For $n$ stages, the total ripple voltage is the sum of ripple in each stage. A simplified approximation for voltage drop in a multi-stage multiplier under load is $\frac{I_{load} \cdot n}{fC}$.
    *   Voltage Drop $\approx \frac{1 \text{ mA} \times 5}{50 \text{ Hz} \times 0.1 \text{ µF}} = \frac{10^{-3} \text{ A} \times 5}{50 \text{ Hz} \times 10^{-7} \text{ F}} = \frac{5 \times 10^{-3}}{5 \times 10^{-6}} = 1000 \text{ V} = 1 \text{ kV}$.
    *   Approximate output DC voltage = Theoretical Output - Voltage Drop $\approx 212.1 \text{ kV} - 1 \text{ kV} = 211.1 \text{ kV}$.

3.  **Potential Challenge:**
    *   **Component Voltage Rating:** Each capacitor in the Cockcroft-Walton multiplier needs to be rated for the voltage it will experience. For example, the capacitors in later stages will experience voltages significantly higher than the input AC peak. The voltage across the capacitors in the $k^{th}$ stage can be approximately $(2k-1)V_{peak}$. For the 5th stage, the last capacitor would experience roughly $9 \times V_{peak}$.
    *   **Corona Discharge:** At very high voltages, corona discharge can occur from sharp edges or points, leading to power loss and reduced output voltage.
    *   **Leakage Currents:** Leakage across insulators and through components can reduce efficiency.

**Question 5 (Conceptual - Applying Knowledge):**
A series resonant transformerless AC voltage multiplier is designed to produce 100 kV AC from a 10 kV AC source. If the resonant frequency is 50 Hz and the inductor has a resistance of 50 Ω, what is the required quality factor (Q) for the resonant circuit to achieve this voltage amplification? What is the minimum inductance required if the capacitance is 0.01 µF?

**Hint:**
1.  Use the voltage amplification formula $V_{out} = Q \times V_{source}$.
2.  Use the resonant frequency formula $\omega_0 = \frac{1}{\sqrt{LC}}$ and $Q = \frac{\omega_0 L}{R}$.

**Answer:**
1.  **Required Quality Factor (Q):**
    *   $V_{out} = Q \times V_{source}$
    *   $100 \text{ kV} = Q \times 10 \text{ kV}$
    *   $Q = \frac{100 \text{ kV}}{10 \text{ kV}} = 10$

2.  **Minimum Inductance Required:**
    *   First, find the resonant angular frequency: $\omega_0 = 2 \pi f = 2 \pi \times 50 \text{ Hz} = 100\pi \text{ rad/s}$.
    *   We know $Q = \frac{\omega_0 L}{R}$. Rearranging for L: $L = \frac{Q \times R}{\omega_0}$.
    *   $L = \frac{10 \times 50 \Omega}{100\pi \text{ rad/s}} = \frac{500}{100\pi} = \frac{5}{\pi} \text{ H} \approx 1.59 \text{ H}$.

    *   Let's verify with the capacitance: $\omega_0 = \frac{1}{\sqrt{LC}}$
    *   $L = \frac{1}{\omega_0^2 C} = \frac{1}{(100\pi)^2 \times 0.01 \times 10^{-6} \text{ F}} = \frac{1}{10000\pi^2 \times 10^{-8}} = \frac{1}{\pi^2} \text{ H} \approx 0.101 \text{ H}$.

    *   **Correction/Re-evaluation:** There seems to be a mismatch. The question implies a series resonant circuit used as a voltage multiplier, meaning the capacitor itself is the "multiplier" element. Let's assume the intended setup is a resonant transformer or a resonant circuit driving a voltage multiplier. If the question strictly refers to a series resonant circuit *as* the generator, the voltage across C or L is amplified.

    *   Let's re-read: "series resonant circuit". This implies L and C are in series. The output is taken across C (or L). The voltage gain is indeed Q.
    *   The value of Q (10) derived from the voltage requirement is correct.
    *   The calculation for L using Q and R is $L = \frac{Q \times R}{\omega_0} = \frac{10 \times 50}{100\pi} = \frac{5}{\pi} \approx 1.59 \text{ H}$.
    *   Now let's check if this inductance is compatible with the capacitance to resonate at 50 Hz.
    *   From $Q = \frac{1}{\omega_0 C R_{series}}$, we can also determine $R_{series}$. If Q=10 and $\omega_0=100\pi$ and $C=0.01 \mu F$, then $R_{series} = \frac{1}{\omega_0 C Q} = \frac{1}{(100\pi)(0.01 \times 10^{-6})(10)} = \frac{1}{\pi \times 10^{-6}} \approx 318 \text{ k}\Omega$. This resistance value is very high for a typical inductor, suggesting that the inductor's inherent resistance is not the only factor limiting Q.

    *   **Let's assume the question means the required L to *resonate* at 50 Hz with the given C, and then calculate the Q and voltage gain.**
        *   $L = \frac{1}{\omega_0^2 C} = \frac{1}{(100\pi)^2 \times 0.01 \times 10^{-6}} = \frac{1}{10000\pi^2 \times 10^{-8}} = \frac{1}{\pi^2} \text{ H} \approx 0.101 \text{ H}$.
        *   Now, the Q factor for this circuit would be $Q = \frac{\omega_0 L}{R_{series}} = \frac{(100\pi) \times (1/\pi^2)}{R_{series}} = \frac{100/\pi}{R_{series}}$.
        *   For a Q of 10, $R_{series} = \frac{100/\pi}{10} = \frac{10}{\pi} \approx 3.18 \Omega$. This is a more reasonable resistance for an inductor designed for resonance.

    *   **Therefore, reinterpreting the question:**
        *   To achieve 100 kV from 10 kV, a Q of 10 is needed.
        *   If a series resonant circuit with $C = 0.01 \mu F$ and resonant frequency $f=50 \text{ Hz}$ is used, the required inductance is approximately **0.101 H**.
        *   For this inductance and capacitance to resonate at 50 Hz with a Q of 10, the total series resistance must be $R_{series} = \frac{\omega_0 L}{Q} = \frac{(100\pi) \times (0.101)}{10} \approx 3.18 \Omega$.

---

### **Alignment with Course Outcomes**

*   **CO1: Identify different high voltage and current waveform generation circuits. (Knowledge Level: K1)**
    *   This module directly addresses CO1 by introducing and explaining the principles of half-wave rectifiers, Cockcroft-Walton voltage multipliers, Van de Graaff generators, cascaded transformers, and series resonant circuits, all of which are fundamental HV generation circuits. The detailed descriptions and circuit diagrams contribute to this outcome.

*   **CO2: Implement different sensing & measurement techniques for high voltage and current measurement. (Knowledge Level: K3)**
    *   While this module focuses on *generation*, understanding the output voltage and current is crucial for effective measurement. The discussion on ripple, voltage drop under load, and current limitations implicitly points towards the need for accurate measurement techniques, which are covered in subsequent modules. For instance, to verify the output of a Cockcroft-Walton multiplier, one would need high voltage DC measurement techniques.

*   **CO3: Describe insulation coordination and surge arrestor design. (Knowledge Level: K2)**
    *   This module provides the context for CO3. The generated high voltages must be managed within an insulation system. The limitations of these generators (e.g., corona discharge for Van de Graaff, component stress in Cockcroft-Walton) highlight the importance of insulation design and how voltage levels are managed. Understanding the sources of high voltage is a prerequisite for understanding how to insulate against them.

*   **CO4: Implement different testing methods for equipments and applications of HV systems. (Knowledge Level: K3)**
    *   The circuits discussed in this module are the *sources* for HV testing. For example, a Cockcroft-Walton generator might be used to perform dielectric strength tests on transformer oil, or a cascaded transformer might be used for AC withstand voltage tests on cables. This module provides the foundational knowledge of the equipment used for implementing these testing methods.

*   **CO5: Explain the various technologies for lightning protection. (Knowledge Level: K2)**
    *   While not directly about lightning protection, the understanding of generating high transient voltages (often associated with surges and lightning) is related. For instance, impulse voltage generators (which share principles with some of these DC generation techniques) are used for lightning impulse testing of equipment. The ability to generate controlled high voltages is key to understanding and mitigating the effects of natural high voltage phenomena like lightning.

---
This concludes the study notes for Module 1: Generation of High DC and AC Voltages. Remember to refer to your textbooks for more in-depth explanations and specific design formulas.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
