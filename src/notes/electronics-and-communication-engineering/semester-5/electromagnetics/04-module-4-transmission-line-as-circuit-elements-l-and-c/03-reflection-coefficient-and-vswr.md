---
title: "Reflection coefficient and VSWR."
subject: "ELECTROMAGNETICS"
module: "Module 4: Transmission line as circuit elements (L and C)."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8db"
status: "completed"
scrapedAt: "2026-05-23T17:56:35.403Z"
---
# ELECTROMAGNETICS - Module 4: Transmission Lines as Circuit Elements (L and C)

## Topic: Reflection Coefficient and VSWR

---

### **Introduction**

This topic delves into the behavior of electromagnetic waves when they encounter discontinuities on a transmission line. We will explore how these discontinuities lead to reflections and the quantification of these reflections through the reflection coefficient and Voltage Standing Wave Ratio (VSWR). Understanding these concepts is crucial for efficient power transfer and system performance in various applications, from RF circuits to high-speed digital interconnects.

---

### **1. Reflection of EM Waves on Transmission Lines**

When an electromagnetic wave propagates along a transmission line and encounters a change in its characteristic impedance ($Z_0$), a portion of the wave is reflected back towards the source. This phenomenon is analogous to light reflecting off a surface.

*   **Source of Reflection:** Discontinuities in the transmission line's properties, such as:
    *   Changes in characteristic impedance ($Z_0$).
    *   Termination with a load impedance ($Z_L$) different from $Z_0$.
    *   Series or shunt discontinuities (e.g., a gap, a change in conductor width).
*   **Types of Waves:**
    *   **Incident Wave:** The wave traveling from the source towards the load.
    *   **Reflected Wave:** The wave traveling back from the discontinuity towards the source.
    *   **Transmitted Wave:** The portion of the wave that continues to propagate beyond the discontinuity.

---

### **2. Characteristic Impedance ($Z_0$)**

The characteristic impedance of a transmission line is a fundamental parameter that defines the ratio of the voltage wave to the current wave along the line when there are no reflections. It's determined by the physical properties of the line (e.g., conductor dimensions, dielectric material).

*   **Definition:** For a lossless transmission line, $Z_0 = \sqrt{L'/C'}$, where $L'$ is the inductance per unit length and $C'$ is the capacitance per unit length.
*   **Importance:** A perfect match between the load impedance ($Z_L$) and the characteristic impedance ($Z_0$) results in no reflection, allowing maximum power transfer.

---

### **3. Load Impedance ($Z_L$) and Its Effect**

The impedance of the load connected to the end of the transmission line significantly influences reflection.

*   **Matched Load ($Z_L = Z_0$):** No reflection occurs. The entire incident power is delivered to the load.
*   **Mismatched Load ($Z_L \neq Z_0$):** A portion of the incident power is reflected back. The degree of mismatch determines the strength of the reflection.

---

### **4. Reflection Coefficient ($\Gamma$)**

The reflection coefficient quantifies the ratio of the reflected voltage wave to the incident voltage wave at the point of reflection (typically at the load).

*   **Definition:**
    $$ \Gamma = \frac{V_{ref}}{V_{inc}} $$
    Where:
    *   $V_{ref}$ is the phasor representation of the reflected voltage wave.
    *   $V_{inc}$ is the phasor representation of the incident voltage wave.

*   **Calculation at the Load:** For a transmission line terminated with a load impedance $Z_L$ and characteristic impedance $Z_0$:
    $$ \Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} $$

*   **Properties of $\Gamma$:**
    *   **Magnitude ($|\Gamma|$):** Represents the ratio of the amplitude of the reflected voltage to the amplitude of the incident voltage.
        *   $0 \le |\Gamma| \le 1$.
        *   $|\Gamma| = 0$ for a matched load ($Z_L = Z_0$).
        *   $|\Gamma| = 1$ for a short circuit ($Z_L = 0$) or an open circuit ($Z_L = \infty$).
    *   **Phase ($\phi_\Gamma$):** Indicates the phase shift introduced by the reflection.
        *   If $Z_L$ is purely resistive and $Z_L < Z_0$, $\Gamma$ is negative (180° phase shift).
        *   If $Z_L$ is purely resistive and $Z_L > Z_0$, $\Gamma$ is positive (0° phase shift).
        *   If $Z_L$ is reactive, $\Gamma$ will have a phase angle between -180° and +180°.

*   **Types of Loads and their Reflection Coefficients:**
    *   **Short Circuit ($Z_L = 0$):**
        $$ \Gamma = \frac{0 - Z_0}{0 + Z_0} = -1 $$
        (Complete reflection with a 180° phase shift)
    *   **Open Circuit ($Z_L = \infty$):**
        $$ \Gamma = \frac{\infty - Z_0}{\infty + Z_0} = 1 $$
        (Complete reflection with a 0° phase shift)
    *   **Matched Load ($Z_L = Z_0$):**
        $$ \Gamma = \frac{Z_0 - Z_0}{Z_0 + Z_0} = 0 $$
        (No reflection)

*   **Reflection Coefficient in the Complex Plane:** $\Gamma$ is a complex number, which can be represented as $\Gamma = |\Gamma|e^{j\phi_\Gamma}$.

---

### **5. Voltage and Current Waves**

With reflections, the total voltage and current along the line become a superposition of the incident and reflected waves.

*   **Total Voltage:** $V(z) = V_{inc}(z) + V_{ref}(z) = V_{inc}e^{-j\beta z} + V_{inc}\Gamma e^{j\beta z}$
    *   Where $z$ is the distance from the source.
*   **Total Current:** $I(z) = I_{inc}(z) + I_{ref}(z) = \frac{V_{inc}}{Z_0}e^{-j\beta z} - \frac{V_{inc}}{Z_0}\Gamma e^{j\beta z}$

*   **Reference Point:** It's often convenient to define $z=0$ at the load. In this case, the incident voltage at the load is $V_{inc}^+$.
    *   $V(z) = V_{inc}^+ (1 + \Gamma e^{-2j\beta z})$
    *   $I(z) = \frac{V_{inc}^+}{Z_0} (1 - \Gamma e^{-2j\beta z})$

---

### **6. Standing Waves**

When incident and reflected waves coexist and propagate in opposite directions, they interfere, creating a pattern of maximum and minimum voltage and current along the line. This pattern is called a standing wave.

*   **Formation:** Standing waves occur when $|\Gamma| > 0$.
*   **Nodes and Antinodes:**
    *   **Voltage Nodes:** Points of minimum voltage. Occur where the incident and reflected voltage waves are out of phase (180° difference).
    *   **Voltage Antinodes:** Points of maximum voltage. Occur where the incident and reflected voltage waves are in phase (0° difference).
    *   **Current Nodes:** Points of minimum current.
    *   **Current Antinodes:** Points of maximum current.

*   **Relationship between Voltage and Current Nodes/Antinodes:** Voltage and current nodes and antinodes occur at complementary positions. Where voltage is maximum, current is minimum, and vice versa.

---

### **7. Voltage Standing Wave Ratio (VSWR)**

VSWR is a dimensionless parameter that quantifies the degree of mismatch on a transmission line by measuring the ratio of the maximum voltage to the minimum voltage along the line. It's a measure of the "standingness" of the wave.

*   **Definition:**
    $$ \text{VSWR} = \frac{|V_{max}|}{|V_{min}|} $$

*   **Relation to Reflection Coefficient:**
    *   The maximum voltage occurs where the incident and reflected waves add constructively.
    *   The minimum voltage occurs where the incident and reflected waves cancel destructively.
    *   Using the voltage equation $V(z) = V_{inc}^+ (1 + \Gamma e^{-2j\beta z})$ and considering $z$ to be the distance from the load, $V_{max}$ occurs when $|\Gamma e^{-2j\beta z}| = |\Gamma|$ and the phase is 0, and $V_{min}$ occurs when $|\Gamma e^{-2j\beta z}| = |\Gamma|$ and the phase is 180°.
    *   Therefore,
        $$ V_{max} = |V_{inc}^+| (1 + |\Gamma|) $$
        $$ V_{min} = |V_{inc}^+| (1 - |\Gamma|) $$
    *   Substituting these into the VSWR definition:
        $$ \text{VSWR} = \frac{|V_{inc}^+| (1 + |\Gamma|)}{|V_{inc}^+| (1 - |\Gamma|)} = \frac{1 + |\Gamma|}{1 - |\Gamma|} $$

*   **Properties of VSWR:**
    *   VSWR $\ge 1$.
    *   VSWR = 1 for a perfectly matched load ($|\Gamma| = 0$). This is the ideal scenario for maximum power transfer.
    *   VSWR $\to \infty$ for a short circuit or open circuit ($|\Gamma| = 1$). This indicates maximum reflection.
    *   A higher VSWR indicates a greater mismatch and more significant reflections.

*   **Relationship between $\Gamma$ and VSWR:**
    *   From the VSWR equation, we can also express $|\Gamma|$ in terms of VSWR:
        $$ \text{VSWR}(1 - |\Gamma|) = 1 + |\Gamma| $$
        $$ \text{VSWR} - \text{VSWR}|\Gamma| = 1 + |\Gamma| $$
        $$ \text{VSWR} - 1 = |\Gamma|(\text{VSWR} + 1) $$
        $$ |\Gamma| = \frac{\text{VSWR} - 1}{\text{VSWR} + 1} $$

---

### **8. Power Transfer and Mismatch Loss**

The presence of reflections due to impedance mismatch affects the power delivered to the load.

*   **Incident Power ($P_{inc}$):** The power carried by the incident wave.
*   **Reflected Power ($P_{ref}$):** The power carried by the reflected wave.
*   **Transmitted Power ($P_{trans}$):** The power delivered to the load.

*   **Relationship:** $P_{inc} = P_{ref} + P_{trans}$ (for lossless lines).

*   **Power Reflection Coefficient:** The ratio of reflected power to incident power.
    $$ |\Gamma|^2 = \frac{P_{ref}}{P_{inc}} $$

*   **Transmitted Power:**
    $$ P_{trans} = P_{inc} - P_{ref} = P_{inc} (1 - |\Gamma|^2) $$

*   **Mismatch Loss ($L_m$):** The ratio of incident power to transmitted power, expressed in dB.
    $$ L_m (\text{dB}) = 10 \log_{10} \left( \frac{P_{inc}}{P_{trans}} \right) = 10 \log_{10} \left( \frac{1}{1 - |\Gamma|^2} \right) $$
    *   Mismatch loss is always non-negative and indicates the power lost due to reflection.

---

### **9. Practical Implications and Importance**

*   **Maximum Power Transfer:** Achieving a VSWR of 1 (matched load) ensures maximum power is delivered to the load, crucial for efficient transmission.
*   **System Efficiency:** High VSWR in RF systems can lead to reduced power output, increased heating of components, and potential damage.
*   **Signal Integrity:** In high-speed digital systems, reflections can cause inter-symbol interference (ISI) and data corruption.
*   **Antenna Systems:** Mismatch between a transmitter/receiver and its antenna results in reflections, reducing the efficiency of signal transmission and reception.
*   **Measurements:** VSWR is a key parameter measured to assess the quality of impedance matching in RF circuits and systems.

---

### **10. Key Concepts and Definitions Summary**

*   **Characteristic Impedance ($Z_0$):** Impedance of the transmission line itself.
*   **Load Impedance ($Z_L$):** Impedance of the component connected to the end of the line.
*   **Reflection Coefficient ($\Gamma$):** Ratio of reflected voltage to incident voltage at a discontinuity ($ \Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} $).
*   **Standing Waves:** Result of superposition of incident and reflected waves.
*   **Voltage Standing Wave Ratio (VSWR):** Ratio of maximum to minimum voltage along the line ($ \text{VSWR} = \frac{1 + |\Gamma|}{1 - |\Gamma|} $).
*   **Mismatch Loss ($L_m$):** Power loss due to impedance mismatch.

---

### **11. Practice Questions and Exercises**

**Question 1:** A transmission line with a characteristic impedance of $Z_0 = 50 \, \Omega$ is terminated with a load impedance of $Z_L = 100 + j50 \, \Omega$. Calculate the reflection coefficient ($\Gamma$) and the VSWR.

**Answer 1:**
*   **Reflection Coefficient Calculation:**
    $$ \Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{(100 + j50) - 50}{(100 + j50) + 50} = \frac{50 + j50}{150 + j50} $$
    To simplify, divide numerator and denominator by 50:
    $$ \Gamma = \frac{1 + j1}{3 + j1} $$
    Multiply by the conjugate of the denominator:
    $$ \Gamma = \frac{(1 + j1)(3 - j1)}{(3 + j1)(3 - j1)} = \frac{3 - j1 + j3 - j^21}{9 - j3 + j3 - j^21} = \frac{3 + j2 + 1}{9 + 1} = \frac{4 + j2}{10} $$
    $$ \Gamma = 0.4 + j0.2 $$
    The magnitude of $\Gamma$ is:
    $$ |\Gamma| = \sqrt{0.4^2 + 0.2^2} = \sqrt{0.16 + 0.04} = \sqrt{0.20} \approx 0.447 $$
*   **VSWR Calculation:**
    $$ \text{VSWR} = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0.447}{1 - 0.447} = \frac{1.447}{0.553} \approx 2.617 $$

**Question 2:** If the VSWR on a transmission line is 3, what is the magnitude of the reflection coefficient? What does this imply about the load impedance?

**Answer 2:**
*   **Magnitude of Reflection Coefficient:**
    $$ |\Gamma| = \frac{\text{VSWR} - 1}{\text{VSWR} + 1} = \frac{3 - 1}{3 + 1} = \frac{2}{4} = 0.5 $$
*   **Implication for Load Impedance:** A magnitude of the reflection coefficient of 0.5 means that 50% of the incident voltage is reflected. This indicates a significant impedance mismatch between the transmission line and the load. The load impedance is not equal to the characteristic impedance of the line.

**Question 3:** A lossless transmission line with $Z_0 = 75 \, \Omega$ is terminated with a short circuit ($Z_L = 0$).
    a) Calculate the reflection coefficient at the load.
    b) Calculate the VSWR.
    c) Describe the voltage and current standing wave patterns.

**Answer 3:**
    a) **Reflection Coefficient:**
        $$ \Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{0 - 75}{0 + 75} = -1 $$
    b) **VSWR:**
        $$ \text{VSWR} = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + |-1|}{1 - |-1|} = \frac{1 + 1}{1 - 1} = \frac{2}{0} \rightarrow \infty $$
    c) **Standing Wave Patterns:**
        *   **Voltage:** With $\Gamma = -1$, voltage nodes occur where the incident and reflected waves cancel out completely. The voltage is zero at the load ($z=0$) and at multiples of $\lambda/2$ from the load. Voltage antinodes occur halfway between the nodes, at multiples of $\lambda/4$ from the load, where the voltage is maximum.
        *   **Current:** With $\Gamma = -1$, the current reflection coefficient is $- \Gamma = 1$. Current antinodes occur at the load ($z=0$) and at multiples of $\lambda/2$ from the load, where the current is maximum. Current nodes occur halfway between the antinodes, at multiples of $\lambda/4$ from the load, where the current is minimum (zero).

---

### **12. Important Points to Remember**

*   **Reflection is caused by impedance mismatch.** The greater the mismatch, the larger the reflection coefficient and VSWR.
*   **A matched load ($Z_L = Z_0$) results in zero reflection coefficient and a VSWR of 1.** This is the ideal condition for maximum power transfer.
*   **VSWR is always greater than or equal to 1.**
*   **Short circuits and open circuits cause total reflection ($|\Gamma|=1$), leading to infinite VSWR.**
*   **The reflection coefficient is a complex quantity**, indicating both the magnitude and phase of the reflected wave.
*   **VSWR only relates to the magnitude of the reflection coefficient.** It doesn't provide information about the phase of the mismatch.
*   **Mismatch loss quantifies the power lost due to reflections.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **13. Textbook and Reference Material Insights**

*   **Sadiku's "Elements of Electromagnetics"**: Provides a clear introduction to transmission line parameters, characteristic impedance, and the derivation of the reflection coefficient and VSWR, often using phasor analysis. Emphasis on the physical interpretation of standing waves. (Chapter on Transmission Lines)
*   **Hayt and Buck's "Engineering Electromagnetics"**: Offers a rigorous mathematical treatment of wave propagation on transmission lines, including the concept of impedance matching and the effects of reflections. Often uses the $Z$ parameter notation and discusses ABCD parameters. (Chapter on Transmission Lines)
*   **Reddy's "Electromagnetic Waves and Transmission Lines"**: Likely covers the topic with a focus on practical applications and circuit theory aspects of transmission lines, potentially including more numerical examples. (Chapter on Transmission Lines)
*   **Nahvi & Edminister's "Schaum's Outline of Electromagnetics"**: Excellent for supplementary problems and step-by-step solutions, providing a hands-on approach to mastering reflection coefficient and VSWR calculations.
*   **Basu's "Engineering Electromagnetics Essentials"**: A good resource for a concise overview and essential formulas, making it ideal for quick review and reinforcing key concepts.

---

### **14. Alignment with Course Outcomes**

*   **CO1 (Summarize basic mathematical concepts related to electromagnetic vector fields):** While this topic focuses on transmission lines, the underlying wave phenomena are rooted in EM fields. Concepts like wave superposition and phasor analysis are implicitly used.
*   **CO2 (Apply Maxwell’s equations in different forms to diverse electromagnetic problems):** The behavior on transmission lines is a specific application derived from Maxwell's equations. Understanding $Z_0$ and the wave equations on the line is a direct consequence.
*   **CO3 (Analyze reflection, refraction and power density of electromagnetic waves):** This topic directly addresses the **reflection** of EM waves and the calculation of **power density** (implicitly through incident and transmitted power). Refraction is more relevant for wave propagation in different media, but the principles of wave behavior at boundaries are related.
*   **CO4 (Analyse the propagation of EM waves in transmission lines and wave guides):** This is the core outcome addressed. Understanding reflection coefficient and VSWR is fundamental to analyzing how EM waves propagate and behave on transmission lines, especially when dealing with terminations and discontinuities.

---
This concludes the study notes for Reflection Coefficient and VSWR. Remember to practice the problems to solidify your understanding.