---
title: "Oscillators  – Phase Shift Oscillator (Expression of frequency oscillation)–"
subject: "ANALOG ELECTRONICS"
module: "Module 2: Introduction to JFET  – JFET biasing circuits – Common Source Amplifier"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b61"
status: "completed"
scrapedAt: "2026-05-23T16:10:54.605Z"
---
# ANALOG ELECTRONICS: Module 2 - Introduction to JFET & Common Source Amplifier

## Topic: Oscillators – Phase Shift Oscillator (Expression of Frequency of Oscillation)

---

### **1. Introduction to Oscillators**

Oscillators are electronic circuits that produce a repetitive, oscillating electronic signal, typically a sine wave, square wave, or triangular wave. Unlike amplifiers, which require an input signal to produce an amplified output, oscillators generate their own output signal without any external input.

**Key Concepts:**

*   **Feedback:** A portion of the output signal is fed back to the input of the amplifier.
*   **Amplifier:** Provides gain to overcome losses in the feedback network.
*   **Feedback Network:** Determines the frequency and phase of the oscillation.
*   **Positive Feedback:** For sustained oscillations, the feedback signal must be in phase with the input signal (180° phase shift from amplifier + 180° phase shift from feedback network = 360° or 0° total phase shift).
*   **Barkhausen Criterion:** For sustained oscillations, two conditions must be met:
    1.  The **loop gain** ($A\beta$) must be equal to or greater than unity ($|A\beta| \ge 1$). This ensures that the signal amplitude is maintained.
    2.  The **phase shift** around the loop must be 0° or an integer multiple of 360° ($ \phi_{loop} = 0^\circ \text{ or } 360^\circ n $). This ensures that the feedback is positive.

**Relevance to Course Outcomes:**

*   **CO2: Design Oscillator circuits (Knowledge Level: K3):** Understanding the fundamental principles of oscillation, including feedback and the Barkhausen criterion, is crucial for designing oscillator circuits.

**Textbook/Reference Material:**

*   **Boylestad & Nashelsky:** Likely covers the basic principles of feedback and oscillators.
*   **Neaman:** May delve deeper into the stability analysis and practical implementation of oscillators.
*   **Floyd:** Provides a good overview of various oscillator types and their applications.

---

### **2. Phase Shift Oscillator**

A Phase Shift Oscillator is a type of electronic oscillator that uses an amplifier and an all-pass filter (typically RC networks) to create the necessary 180° phase shift required for oscillation.

**Circuit Configuration:**

A typical phase shift oscillator consists of:

1.  **An Amplifier:** Usually a common-source amplifier using a JFET or a common-emitter amplifier using a BJT. In this context, we are focusing on JFETs, so a common-source JFET amplifier is used.
2.  **RC Phase Shift Network:** Consists of a series of cascaded RC sections. Each RC section provides a phase shift. To achieve the required 180° phase shift, typically three such sections are used, with each section contributing approximately 60° of phase shift.

**Working Principle:**

*   The JFET common-source amplifier provides a 180° phase shift between its input and output.
*   The RC phase shift network is designed to provide an additional 180° phase shift at a specific frequency.
*   When the output of the amplifier is fed back to its input through the RC network, the total phase shift around the loop is 360° (180° from amplifier + 180° from RC network).
*   If the loop gain is also greater than or equal to unity at this frequency, sustained oscillations will occur.

---

### **3. JFET Common Source Amplifier (Brief Recap)**

While not the primary focus of this section, it's important to remember the role of the JFET common-source amplifier.

*   **Function:** Amplifies the input signal.
*   **Phase Shift:** Introduces a 180° phase shift between input and output.
*   **Gain:** The voltage gain ($A_v$) of a common-source amplifier is approximately given by:
    $A_v = -g_m r_d || R_L$
    where:
    *   $g_m$ is the transconductance of the JFET.
    *   $r_d$ is the drain resistance of the JFET.
    *   $R_L$ is the load resistance.
    In many practical cases, $r_d$ is much larger than $R_L$, so $A_v \approx -g_m R_L$.

**Relevance to Course Outcomes:**

*   **CO1: Design BJT and FET amplifier circuits (Knowledge Level: K3):** This topic builds upon the understanding of JFET amplifier design.

**Textbook/Reference Material:**

*   **Paynter:** Likely covers JFET amplifiers in detail.
*   **Boylestad & Nashelsky:** Will have extensive coverage of amplifier circuits, including JFETs.
*   **Neaman:** May provide a more analytical approach to amplifier design.
*   **Bell:** Offers practical insights into amplifier configurations.

---

### **4. The RC Phase Shift Network**

The heart of the phase shift oscillator is the RC network that provides the additional 180° phase shift. A common configuration uses three cascaded RC sections.

**Analysis of a Single RC Section:**

Consider a single RC section where the output is taken across the capacitor:

```
      R
Vin ----/\/\/\----o Vout
               |
              ---
              --- C
               |
              GND
```

The impedance of the capacitor is $Z_C = \frac{1}{j\omega C}$.
The voltage division gives:

$V_{out} = V_{in} \frac{Z_C}{R + Z_C} = V_{in} \frac{\frac{1}{j\omega C}}{R + \frac{1}{j\omega C}}$

$V_{out} = V_{in} \frac{1}{1 + j\omega RC}$

The phase angle $\phi$ of this output voltage with respect to the input voltage is given by the argument of the denominator:

$\phi = \arctan\left(\frac{\omega RC}{1}\right)$

This shows that the output voltage lags the input voltage. The phase shift is between 0° and 90°.

**Analysis of Three Cascaded RC Sections:**

For a phase shift oscillator to work, we need a total of 180° phase shift from the feedback network. If we cascade three identical RC sections, each providing a phase shift of approximately 60°, the total phase shift will be 180°.

Consider three identical RC sections, each with resistance $R$ and capacitance $C$. The output of each section is connected to the input of the next section. The load on each section must be considered. If the sections are identical and the load is very high (which is usually the case for the amplifier's input impedance), we can make a simplifying assumption.

**Simplifying Assumption for High Impedance Input:**

If the input impedance of the amplifier ($R_{in}$) is much larger than the resistance ($R$) of each RC section ($R_{in} >> R$), then each RC section acts as if it's driving an infinite impedance. This means the loading effect between sections is minimal, and we can analyze each section independently for phase shift calculation.

Let's assume that at the oscillation frequency $\omega_0$, each RC section provides a 60° phase shift.
The condition for 60° phase shift in a single RC section (output across C) is when the impedance of the resistor and capacitor are equal in magnitude, i.e., $R = \frac{1}{\omega_0 C}$.
This implies $\omega_0 RC = 1$.

At this frequency, the phase shift of a single RC section is:

$\phi = \arctan\left(\frac{\omega_0 RC}{1}\right) = \arctan(1) = 45^\circ$.

This simple analysis suggests that three sections would give $3 \times 45^\circ = 135^\circ$. This is not 180°.

**More Accurate Analysis for 180° Phase Shift:**

To achieve a precise 180° phase shift with three identical RC sections, the resistances and capacitances must be carefully chosen, and the frequency of oscillation is determined by this choice.

Consider the circuit with three cascaded RC sections, where each section consists of a resistance $R$ and capacitance $C$. The output is taken from the last capacitor. The input impedance of the amplifier is assumed to be high, so it doesn't significantly load the last stage.

Let the three sections be $RC_1, RC_2, RC_3$. The total phase shift required from this network is 180°. For identical sections, each must contribute 60°.

The condition for a 60° phase shift for a single RC section (output across C) is given by:
$\omega_0 RC = \sqrt{3}$

This is derived by analyzing the voltage division of the cascaded network, which becomes complex. A common and practical design uses three identical sections where each section has resistance $R$ and capacitance $C$.

**Expression for Frequency of Oscillation (for three identical RC sections):**

For a phase shift oscillator with three identical cascaded RC sections (each of resistance $R$ and capacitance $C$), the frequency of oscillation is given by:

$$f_0 = \frac{1}{2\pi RC\sqrt{6}}$$

**Derivation (Simplified conceptual understanding):**

The derivation involves complex number analysis of the cascaded RC networks. Each stage introduces a phase lag. When the total phase lag from the three stages is 180°, and the amplifier provides its own 180° phase shift, the loop condition is met. The specific frequency at which this 180° phase shift occurs in the RC network is determined by the values of $R$ and $C$.

The gain of each RC section at the oscillation frequency needs to be considered, and the amplifier's gain must be sufficient to compensate for the attenuation in the RC network and any internal amplifier losses.

**Gain Condition for Oscillation:**

For sustained oscillations, the loop gain $|A\beta|$ must be at least 1.
*   The amplifier (JFET common-source) has a gain $A_v$.
*   The $\beta$ network (RC sections) attenuates the signal and introduces phase shift. The attenuation factor for three identical RC sections at $\omega_0 = \frac{1}{RC\sqrt{6}}$ is $\frac{1}{29}$.

Therefore, the amplifier gain must be at least 29 for oscillations to start and be sustained.
$|A_v| \ge 29$

**Important Points to Remember:**

*   The frequency of oscillation is primarily determined by the $R$ and $C$ values in the phase shift network.
*   The gain of the amplifier must be sufficiently high to overcome the attenuation of the RC network.
*   The phase shift oscillator is generally used for audio frequencies due to the bulky component sizes required for higher frequencies.
*   The output waveform is a sine wave.

**Textbook/Reference Material for Derivation and Gain:**

*   **Boylestad & Nashelsky:** Likely provides the derivation for the frequency and discusses the gain requirement.
*   **Neaman:** May offer a rigorous mathematical derivation using complex impedances.
*   **Gayakward (Op-Amps):** While focused on Op-Amps, the fundamental principles of oscillators and phase shift networks are transferable.
*   **Floyd:** Presents a clear explanation of the working and frequency formula.

---

### **5. Practice Questions and Exercises**

**Question 1:**

What are the two fundamental conditions required for sustained oscillations in any oscillator circuit, according to the Barkhausen criterion?

**Answer:**
1.  The loop gain must be equal to or greater than unity ($|A\beta| \ge 1$).
2.  The total phase shift around the feedback loop must be 0° or a multiple of 360° ($ \phi_{loop} = 0^\circ \text{ or } 360^\circ n $).

---

**Question 2:**

In a phase shift oscillator using three identical RC sections, each with resistance $R$ and capacitance $C$, what is the expression for the frequency of oscillation?

**Answer:**
$$f_0 = \frac{1}{2\pi RC\sqrt{6}}$$

---

**Question 3:**

If a phase shift oscillator uses an amplifier with a voltage gain of $A_v$ and a feedback network with a transfer function $\beta$, what is the minimum voltage gain required from the amplifier to sustain oscillations, assuming the RC network provides an attenuation of 29 at the oscillation frequency?

**Answer:**
The minimum voltage gain required is $|A_v| \ge 29$ to meet the $|A\beta| \ge 1$ condition.

---

**Question 4:**

A phase shift oscillator is constructed using three identical RC sections, each with $R = 10 k\Omega$ and $C = 0.01 \mu F$. Calculate the frequency of oscillation.

**Answer:**
Given:
$R = 10 k\Omega = 10 \times 10^3 \Omega$
$C = 0.01 \mu F = 0.01 \times 10^{-6} F$

Using the formula:
$$f_0 = \frac{1}{2\pi RC\sqrt{6}}$$
$$f_0 = \frac{1}{2\pi (10 \times 10^3 \Omega)(0.01 \times 10^{-6} F)\sqrt{6}}$$
$$f_0 = \frac{1}{2\pi (10 \times 10^{-5})\sqrt{6}}$$
$$f_0 = \frac{1}{2\pi (10^{-4})\sqrt{6}}$$
$$f_0 = \frac{10^4}{2\pi \sqrt{6}}$$
$$f_0 = \frac{10000}{2 \times 3.14159 \times 2.44949}$$
$$f_0 = \frac{10000}{15.3925}$$
$$f_0 \approx 649.6 \text{ Hz}$$

---

**Question 5:**

Why is a JFET common-source amplifier suitable for use in a phase shift oscillator?

**Answer:**
A JFET common-source amplifier is suitable because:
1.  It provides the necessary 180° phase shift between its input and output.
2.  It can offer sufficient gain ($> 29$) to overcome the attenuation of the RC phase shift network.
3.  The high input impedance of a JFET amplifier helps to minimize the loading effect on the RC feedback network, allowing for more accurate frequency determination.

---

### **6. Important Points to Remember**

*   **Positive Feedback:** Essential for oscillation.
*   **Barkhausen Criterion:** Loop gain $\ge 1$ and loop phase shift = $360^\circ n$.
*   **Phase Shift Oscillator:** Uses an amplifier (e.g., JFET common-source) and an RC network to achieve 180° + 180° = 360° phase shift.
*   **RC Network:** Typically three identical RC sections, each providing approximately 60° phase shift.
*   **Frequency Formula:** $f_0 = \frac{1}{2\pi RC\sqrt{6}}$ for three identical RC sections.
*   **Gain Requirement:** Amplifier gain must be at least 29.
*   **Applications:** Generally used for audio frequencies.

---

### **7. Alignment with Course Outcomes**

*   **CO1: Design BJT and FET amplifier circuits (Knowledge Level: K3):** This topic requires understanding the properties of a JFET common-source amplifier, including its gain and phase shift, which are essential for designing any amplifier circuit.
*   **CO2: Design Oscillator circuits (Knowledge Level: K3):** This entire topic is dedicated to understanding and deriving the frequency of oscillation for a phase shift oscillator, a fundamental skill for designing oscillator circuits.
*   **CO3: Design and develop various OPAMP application circuits. (Knowledge Level: K3):** While the example uses a JFET, the principles of oscillators and phase shift networks are general and are also applied in Op-Amp based oscillators.
*   **CO4: Implementation of active filters (Knowledge Level: K4):** The RC network in a phase shift oscillator can be viewed as a type of frequency-selective filter. Understanding how these networks affect phase and gain is related to filter design.
*   **CO5: Implement an electronic hardware circuit for the solution of a real time problem (Knowledge Level: K4):** Oscillators are fundamental building blocks in many electronic systems (e.g., signal generators, timing circuits, communication systems). Designing and understanding them is a step towards practical implementation.

---
