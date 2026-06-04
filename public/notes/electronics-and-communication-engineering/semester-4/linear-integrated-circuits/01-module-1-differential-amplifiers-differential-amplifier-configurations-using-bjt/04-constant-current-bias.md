---
title: "constant current bias"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe564"
status: "completed"
scrapedAt: "2026-05-23T17:49:37.955Z"
---
# LINEAR INTEGRATED CIRCUITS

## Module 1: Differential Amplifiers

### Topic: Constant Current Bias using BJT

**Learning Outcomes:**

*   Understand the concept and necessity of constant current bias in differential amplifiers.
*   Analyze the operation of a differential amplifier with a constant current bias source.
*   Evaluate the performance improvements achieved by using constant current bias.
*   Identify and analyze different methods for implementing constant current bias.

---

### 1. Introduction to Differential Amplifiers and the Need for Constant Current Bias

**1.1 What is a Differential Amplifier?**

A differential amplifier is an electronic circuit that amplifies the *difference* between two input voltages and rejects any voltage common to both inputs. This property makes them fundamental building blocks in many analog integrated circuits, especially operational amplifiers (op-amps).

**1.2 Basic Differential Amplifier Configuration (BJT)**

The most basic differential amplifier uses two matched bipolar junction transistors (BJTs), often denoted as $Q_1$ and $Q_2$.

*   **Input Signals:** $V_{in1}$ and $V_{in2}$ are applied to the emitters of $Q_1$ and $Q_2$ respectively (in emitter-coupled configuration, which is common for differential amplifiers).
*   **Common Emitter Resistor:** A resistor ($R_E$) is connected to the emitters of both transistors.
*   **Collector Loads:** Resistors ($R_C$) are connected to the collectors of $Q_1$ and $Q_2$, and the output is typically taken from the collectors.

**(Refer to Roy D. C. and S. B. Jain, Chapter 7: Differential Amplifiers for detailed diagrams and basic analysis.)**

**1.3 Limitations of a Simple Differential Amplifier with a Resistor at the Emitter:**

When a simple resistor ($R_E$) is used as the emitter load in a differential amplifier, it suffers from several drawbacks:

*   **Poor Common-Mode Rejection Ratio (CMRR):** The common-mode gain is not sufficiently low. This means that unwanted signals common to both inputs (e.g., noise) are amplified along with the differential signal.
*   **Limited Voltage Gain:** The voltage gain is dependent on the emitter current, which can fluctuate due to variations in input signals or supply voltages.
*   **Dependence on Emitter Current:** The quiescent emitter current is determined by the supply voltage and $R_E$, which is often not precise and can drift with temperature.
*   **Trade-off between Gain and Impedance:** To achieve a high CMRR and high gain, a very large $R_E$ would be required. This is impractical in integrated circuit fabrication due to area and power consumption constraints.

**1.4 The Role of Constant Current Bias**

To overcome these limitations, the emitter resistor ($R_E$) is replaced by a circuit that provides a **constant current** to the emitters of the differential pair, irrespective of the input signal variations or temperature changes. This is known as **constant current bias**.

**(Refer to Sedra A. S. and K. C. Smith, Chapter 8: Differential Amplifiers for an in-depth discussion on the necessity of constant current sources.)**

---

### 2. Benefits of Constant Current Bias

Implementing constant current bias in a differential amplifier offers significant performance advantages:

*   **High Common-Mode Rejection Ratio (CMRR):** A constant current source acts as a high impedance load at the emitters. This dramatically reduces the common-mode gain, leading to a very high CMRR.
*   **Increased Differential Voltage Gain:** The differential voltage gain becomes largely independent of the emitter current variations and is primarily determined by the collector resistor and the transistor's transconductance.
*   **Improved Linearity:** By maintaining a stable quiescent current, the transistors operate more linearly.
*   **Reduced Sensitivity to Supply Variations:** The circuit becomes less susceptible to fluctuations in the power supply voltages.
*   **Temperature Stability:** A well-designed constant current source can significantly improve the circuit's thermal stability.

**(Refer to Gayakwad R. A., Chapter 3: Differential Amplifiers, for explanations of CMRR and voltage gain improvements.)**

---

### 3. Implementing Constant Current Bias using BJTs

Several BJT-based circuits can be used to generate a constant current. Here are some common methods:

**3.1 Simple Current Mirror as a Constant Current Source**

A basic current mirror circuit can be used to set a constant current. However, for a robust constant current source, a more advanced Wilson mirror or a diode-compensated mirror is preferred for better accuracy.

*   **Basic Current Mirror:** Consists of two matched BJTs where the base of one transistor is connected to its collector. The collector current of the reference transistor dictates the current flowing through the other transistor.
    *   **Limitation:** The output current is sensitive to the Early voltage ($V_A$) of the output transistor, meaning it's not perfectly constant with voltage variations.

**(Refer to Roy D. C. and S. B. Jain, Chapter 7: Differential Amplifiers, for basic current mirror circuits.)**

**3.2 Diode-Connected Transistor Biased by a Resistor**

A single BJT configured as a diode (collector tied to base) can be biased by a resistor to set a current. This current then drives another transistor to provide the desired constant current.

*   **Circuit:** A diode-connected transistor ($Q_D$) with its collector connected to its base. A resistor $R_1$ is connected from a supply voltage to the emitter of $Q_D$. The emitter of $Q_D$ is connected to the base of a second transistor ($Q_C$), which acts as the current source. The emitter of $Q_C$ is connected to the emitters of the differential pair.

    *   The current through $R_1$ is approximately $(V_{CC} - V_{BE}) / R_1$.
    *   This current is mirrored by $Q_C$ to the differential pair.

*   **Limitations:** The current is still sensitive to $V_{BE}$ variations and the $V_A$ of $Q_D$.

**3.3 Using a Zener Diode and a Transistor**

A Zener diode can provide a stable reference voltage, which can then be used to bias a transistor to provide a constant current.

*   **Circuit:** A Zener diode connected in series with a resistor $R_Z$ from the supply voltage $V_{CC}$. The voltage across the Zener diode ($V_Z$) is relatively constant. This voltage is used to bias the base of a transistor ($Q_C$) through a resistor ($R_B$). The emitter of $Q_C$ is connected to the emitters of the differential pair.

    *   The base voltage of $Q_C$ is approximately $V_Z$.
    *   The emitter current of $Q_C$ is approximately $(V_Z - V_{BE}) / R_{E\_source}$, where $R_{E\_source}$ might be an emitter resistor for the current source transistor. For a pure current source, this resistor would be zero.

*   **Advantages:** Offers better stability than circuits without a Zener diode.
*   **Limitations:** Zener diodes have a temperature coefficient, and their voltage can vary slightly.

**(Refer to Sedra A. S. and K. C. Smith, Chapter 8: Differential Amplifiers, for more sophisticated current source designs.)**

**3.4 Widlar Current Source**

The Widlar current source is a common and effective way to generate a low, stable current using a minimum number of components. It uses a resistor ($R_E$) in the emitter of the current source transistor, which is chosen to be large.

*   **Circuit:** A transistor ($Q_C$) with its collector connected to the emitters of the differential pair. Its base is biased by a current mirror or a voltage divider. A large resistor ($R_E$) is placed in its emitter. A small resistor ($R_C$) might be placed in series with $R_E$ to improve performance further.

    *   The voltage drop across $R_E$ is determined by the large emitter current and the resistor value, leading to a low $V_{BE}$ for $Q_C$. This in turn reduces the base current required, making the current source more stable.
    *   The current is set by the base current and the ratio of resistances.

*   **Advantages:** Achieves a low and stable current with a single transistor and a large resistor, which can be implemented using active resistors (transistors in the diode-connected configuration) in ICs.

**(Refer to Franco S., Chapter 4: Basic Analog Circuits, for detailed analysis of the Widlar current source.)**

**3.5 Using an Op-Amp and a Transistor**

An operational amplifier can be used to create a very precise constant current source.

*   **Circuit:** An op-amp compares a reference voltage ($V_{ref}$) with the voltage across a sense resistor ($R_S$) placed in the emitter of a transistor ($Q_C$). The output of the op-amp drives the base of $Q_C$ to maintain the voltage across $R_S$ equal to $V_{ref}$.

    *   The emitter current of $Q_C$ becomes $I_E = V_{ref} / R_S$. This current is then supplied to the differential pair.
    *   This configuration provides excellent accuracy and regulation.

*   **Advantages:** High precision, good regulation, and easy adjustment of the current by changing $V_{ref}$ or $R_S$.
*   **Disadvantages:** Requires an op-amp, which consumes more power and space.

**(Refer to Gayakwad R. A., Chapter 5: Introduction to Integrated Circuits, for examples of op-amp based current sources.)**

---

### 4. Analysis of Differential Amplifier with Constant Current Bias

Let's consider a differential amplifier with a constant current source ($I_{EE}$) replacing the emitter resistor.

**(Refer to Roy D. C. and S. B. Jain, Chapter 7: Differential Amplifiers for detailed analysis.)**

**Assumptions:**

*   The differential pair transistors ($Q_1$, $Q_2$) are matched.
*   The constant current source provides a stable current $I_{EE}$.
*   The quiescent current in each transistor is $I_{EQ} = I_{EE} / 2$.
*   The collector resistors ($R_C$) are equal.

**4.1 DC Analysis:**

*   Collector current for $Q_1$: $I_{C1} = I_{EQ} = I_{EE} / 2$.
*   Collector current for $Q_2$: $I_{C2} = I_{EQ} = I_{EE} / 2$.
*   Collector voltage for $Q_1$: $V_{C1} = V_{CC} - I_{C1}R_C = V_{CC} - (I_{EE}/2)R_C$.
*   Collector voltage for $Q_2$: $V_{C2} = V_{CC} - I_{C2}R_C = V_{CC} - (I_{EE}/2)R_C$.
*   The quiescent collector voltages are equal if the transistors and resistors are perfectly matched.

**4.2 AC Analysis (Differential Mode):**

*   Input signals: $v_{d1}$ and $v_{d2}$, where $v_d = (v_{in1} - v_{in2})/2$.
*   Emitter current variation for $Q_1$: $i_{e1}$.
*   Emitter current variation for $Q_2$: $i_{e2}$.
*   Since the total emitter current is constant ($i_{e1} + i_{e2} = 0$), if $i_{e1}$ increases, $i_{e2}$ must decrease by the same amount.
*   Let $v_{in1}$ be the differential input, so $v_{in2} = -v_{in1}$.
*   Emitter current of $Q_1$: $i_{e1} = \frac{v_{in1}}{2r_e}$ (assuming $r_e = \frac{V_{TE}}{I_{EQ}}$ and the current source has infinite impedance).
*   Emitter current of $Q_2$: $i_{e2} = -\frac{v_{in1}}{2r_e}$.
*   Collector current of $Q_1$: $i_{c1} = \alpha i_{e1} = \alpha \frac{v_{in1}}{2r_e}$.
*   Collector current of $Q_2$: $i_{c2} = \alpha i_{e2} = -\alpha \frac{v_{in1}}{2r_e}$.
*   Differential output voltage: $v_{out} = v_{c2} - v_{c1} = -i_{c2}R_C - (-i_{c1}R_C) = (i_{c1} - i_{c2})R_C$.
*   $v_{out} = (\alpha \frac{v_{in1}}{2r_e} - (-\alpha \frac{v_{in1}}{2r_e}))R_C = \alpha \frac{v_{in1}}{r_e}R_C$.
*   Since $\alpha \approx 1$ and $r_e = V_{TE}/I_{EQ}$, the differential voltage gain ($A_d$) is:
    $A_d = \frac{v_{out}}{v_{in1}} = \frac{R_C}{r_e} = \frac{I_{EQ}R_C}{V_{TE}} = \frac{(I_{EE}/2)R_C}{V_{TE}}$.

**4.3 AC Analysis (Common Mode):**

*   Input signals: $v_{in1} = v_{in2} = v_{cm}$.
*   Emitter current variation: $i_{e1} = i_{e2}$. However, the total emitter current is fixed at $I_{EE}$. This means that for common-mode inputs, the current source must have a high output impedance to prevent its current from varying.
*   If the current source is ideal (infinite impedance), then $i_{e1} = i_{e2} = 0$ for common mode signals. This leads to $i_{c1} = i_{c2} = 0$, and thus $v_{out} = 0$.
*   In reality, the current source has a finite output impedance ($R_o$). This results in a small common-mode gain.
*   The common-mode gain is very low because the effective impedance at the emitters is the impedance of the current source, which is designed to be very high.

**4.4 Common-Mode Rejection Ratio (CMRR):**

CMRR is defined as the ratio of differential gain to common-mode gain ($CMRR = |A_d / A_{cm}|$).

*   With a constant current source, $A_{cm}$ is very small due to the high output impedance of the current source. This results in a very high CMRR.
*   For circuits using a simple emitter resistor $R_E$, $A_{cm} = -1 / (2r_e + R_E)$. A high $R_E$ is needed for good CMRR, which is impractical.

**(Refer to Sedra A. S. and K. C. Smith, Chapter 8: Differential Amplifiers, for a comprehensive comparison of CMRR with emitter resistors vs. current sources.)**

---

### 5. Important Points to Remember

*   Constant current bias is crucial for achieving high CMRR and stable gain in differential amplifiers.
*   It replaces the emitter resistor ($R_E$) with a high-impedance current source.
*   Benefits include improved CMRR, higher and more stable gain, better linearity, and reduced sensitivity to supply/temperature variations.
*   Common BJT-based current sources include current mirrors, Zener diode-based circuits, and Widlar sources.
*   Op-amp based current sources offer the highest precision.
*   The key to the improved performance is the high output impedance of the constant current source.

---

### 6. Practice Questions and Exercises

**Question 1:**
Explain why a simple emitter resistor in a differential amplifier limits its Common-Mode Rejection Ratio (CMRR).

**Answer:**
In a simple differential amplifier with an emitter resistor ($R_E$), the common-mode gain is $A_{cm} \approx -1 / (2r_e + R_E)$. For a high CMRR, $A_{cm}$ needs to be very small. This requires a very large $R_E$, which is impractical to implement in integrated circuits due to area and power constraints.

**Question 2:**
List three advantages of using a constant current bias source in a differential amplifier.

**Answer:**
1.  **High CMRR:** Achieved due to the high output impedance of the current source.
2.  **Improved Gain Stability:** The differential gain becomes less dependent on emitter current variations.
3.  **Better Linearity:** Stable quiescent current leads to more linear operation.
4.  **Reduced Sensitivity to Supply Variations:** Less susceptible to power supply fluctuations.

**Question 3:**
Sketch a basic BJT differential amplifier with a constant current source implemented using a current mirror. Label all components.

**Answer:**
*(Sketch a differential amplifier with two BJTs $Q_1, Q_2$. Their emitters are connected together and to the collector of a third BJT, $Q_3$. $Q_3$'s emitter is connected to ground (or a negative supply). $Q_3$'s collector is connected to its base (forming a diode). A resistor $R_1$ is connected from $V_{CC}$ to the emitter of $Q_3$. The bases of $Q_1$ and $Q_2$ are the input terminals. The collectors of $Q_1$ and $Q_2$ are connected to $V_{CC}$ through collector resistors $R_C$. The output is taken from the collectors of $Q_1$ and $Q_2$.)*

**Question 4:**
A differential amplifier uses a constant current source providing $I_{EE} = 1$ mA. The collector resistors are $R_C = 10$ k$\Omega$. The transistors are operating at a quiescent current of $I_{EQ} = 0.5$ mA. Assuming $V_{TE} = 25$ mV, calculate the differential voltage gain ($A_d$).

**Answer:**
The differential voltage gain is given by $A_d = R_C / r_e$.
First, calculate $r_e$:
$r_e = V_{TE} / I_{EQ} = 25 \text{ mV} / 0.5 \text{ mA} = 0.025 \text{ V} / 0.0005 \text{ A} = 50 \Omega$.

Now, calculate $A_d$:
$A_d = R_C / r_e = 10 \text{ k}\Omega / 50 \Omega = 10000 / 50 = 200$.

The differential voltage gain is 200.

**Question 5:**
Consider a constant current source using a Widlar configuration. Briefly explain how the large emitter resistor in the Widlar source contributes to creating a low and stable current.

**Answer:**
In the Widlar current source, a large emitter resistor ($R_E$) is placed in the emitter of the current source transistor. This resistor causes a significant voltage drop. According to the Ebers-Moll model, $I_E \approx I_S e^{V_{BE}/V_T}$. For the transistor to conduct a specific current with a large $R_E$, a much lower $V_{BE}$ is required compared to a circuit without $R_E$. A lower $V_{BE}$ means a lower base current is needed, which makes the current source less dependent on the initial current gain ($\beta$) of the transistor and more stable. It effectively establishes a stable operating point for the current source transistor.

---

**Alignment with Course Outcomes:**

*   **CO1 (Summarize concepts of differential amplifier configurations):** This topic directly addresses the functioning and benefits of a key configuration (constant current bias) within differential amplifiers.
*   **CO2 (Design operational amplifier circuits):** Understanding constant current bias is fundamental to designing stable and high-performance op-amps, as differential amplifiers are the input stages.
*   **CO3 (Choose IC chips):** Knowledge of the importance of constant current bias helps in selecting ICs that offer good performance characteristics (like high CMRR) due to their internal biasing techniques.
*   **CO4 (Implement various applications):** The principles learned here are applied when building analog circuits that require stable amplification and noise rejection, such as amplifiers and comparators.

---

This concludes the study notes on Constant Current Bias using BJT in Differential Amplifiers. It is recommended to revisit the specified textbook chapters for detailed circuit diagrams, mathematical derivations, and further examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
