---
title: "Quarter wave transformer"
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff49a"
status: "completed"
scrapedAt: "2026-05-23T18:07:53.645Z"
---
# MICROWAVE DEVICES & CIRCUITS - Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

## Topic: Quarter-Wave Transformer (QWT)

---

### 1. Introduction to Impedance Matching and the Need for Quarter-Wave Transformers

At microwave frequencies, efficient transfer of power between different components is crucial. This is achieved by ensuring that the impedances of connected components are matched. Mismatched impedances lead to reflections, power loss, and reduced performance.

**Key Concept:** Impedance Matching

*   **Definition:** The process of making the impedance of a source equal to the impedance of a load, or the impedance of a transmission line equal to the impedance of the connected component, to maximize power transfer and minimize reflections.

**Why QWT?**

Quarter-wave transformers are a fundamental impedance matching technique used in microwave circuits. They offer a simple and effective way to transform a specific impedance to another, particularly when the impedances differ by a significant ratio.

*   **Applications:**
    *   Matching antenna impedance to transmission line impedance.
    *   Matching amplifier input/output impedances to transmission line impedances.
    *   Connecting different impedance sections of transmission lines.

---

### 2. The Quarter-Wave Transformer: Principle of Operation

A quarter-wave transformer is a section of transmission line with a characteristic impedance ($Z_0'$) that is different from the characteristic impedance of the main transmission line ($Z_0$). Its length is specifically designed to be one-quarter of the wavelength ($\lambda/4$) at the desired operating frequency.

**Key Concepts:**

*   **Characteristic Impedance ($Z_0$):** The ratio of voltage to current for a traveling wave on a lossless transmission line. It depends on the physical geometry and dielectric properties of the line.
*   **Wavelength ($\lambda$):** The spatial period of the wave.
*   **Phase Shift:** A transmission line section introduces a phase shift to the traveling wave. A $\lambda/4$ line introduces a 90-degree ($\pi/2$ radians) phase shift.

**Derivation of the Transformation Ratio (Pozar, Chapter 5):**

Consider a transmission line with characteristic impedance $Z_0$ terminated by a load impedance $Z_L$. We insert a quarter-wave transformer section with characteristic impedance $Z_0'$ and length $l = \lambda/4$. The characteristic impedance of the main transmission line is $Z_0$.

Let the input impedance looking into the quarter-wave transformer be $Z_{in}$. We can derive this using the transmission line equation for input impedance:

$Z_{in} = Z_0' \frac{Z_L + j Z_0' \tan(\beta l)}{Z_0' + j Z_L \tan(\beta l)}$

where:
*   $Z_{in}$ is the input impedance of the quarter-wave transformer.
*   $Z_0'$ is the characteristic impedance of the transformer section.
*   $Z_L$ is the load impedance.
*   $\beta$ is the phase constant ($\beta = 2\pi/\lambda$).
*   $l$ is the length of the transformer section.

At the operating frequency, $l = \lambda/4$, so $\beta l = (2\pi/\lambda) (\lambda/4) = \pi/2$.

We know that $\tan(\pi/2)$ approaches infinity. Therefore, the expression simplifies to:

$Z_{in} = Z_0' \frac{Z_L + j Z_0' \tan(\beta l)}{Z_0' + j Z_L \tan(\beta l)}$

As $\tan(\beta l) \to \infty$, we can divide the numerator and denominator by $\tan(\beta l)$:

$Z_{in} = Z_0' \frac{(Z_L / \tan(\beta l)) + j Z_0'}{ (Z_0' / \tan(\beta l)) + j Z_L}$

As $\tan(\beta l) \to \infty$, $(1 / \tan(\beta l)) \to 0$:

$Z_{in} = Z_0' \frac{0 + j Z_0'}{0 + j Z_L} = Z_0' \frac{j Z_0'}{j Z_L} = \frac{(Z_0')^2}{Z_L}$

**Transformation Ratio:**

If we want to match an impedance $Z_1$ to an impedance $Z_2$ using a quarter-wave transformer, the characteristic impedance of the transformer section ($Z_0'$) should be the geometric mean of $Z_1$ and $Z_2$:

$Z_0' = \sqrt{Z_1 Z_2}$

This means that if we have a transmission line with characteristic impedance $Z_0$ and a load $Z_L$, and we want to match $Z_0$ to $Z_L$, we insert a quarter-wave transformer with characteristic impedance $Z_0' = \sqrt{Z_0 Z_L}$. The input impedance of this transformer will then be:

$Z_{in} = \frac{(Z_0')^2}{Z_L} = \frac{(\sqrt{Z_0 Z_L})^2}{Z_L} = \frac{Z_0 Z_L}{Z_L} = Z_0$

Thus, the quarter-wave transformer transforms the load impedance $Z_L$ to an impedance $Z_0$ at its input.

**Example (Pozar, Chapter 5):**

Suppose we have a 50 $\Omega$ transmission line connected to a load $Z_L = 200 \Omega$. We want to match this load to the transmission line. We can use a quarter-wave transformer.

The required characteristic impedance of the transformer section is:
$Z_0' = \sqrt{Z_0 Z_L} = \sqrt{50 \Omega \times 200 \Omega} = \sqrt{10000} \Omega = 100 \Omega$.

The length of the transformer section should be $\lambda/4$ at the operating frequency.

---

### 3. Equivalent Voltages and Currents in a Quarter-Wave Transformer

While the characteristic impedance of the transformer section is $Z_0'$, the characteristic impedance of the main transmission line is $Z_0$. This can lead to different voltage and current levels at the two ends of the transformer.

**Key Concepts:**

*   **Voltage and Current Relationship:** On a transmission line with characteristic impedance $Z_0$, the voltage ($V$) and current ($I$) are related by $V = I Z_0$.
*   **Wave Impedance:** The characteristic impedance is also referred to as wave impedance for a traveling wave.

**Analysis:**

Let the quarter-wave transformer section have characteristic impedance $Z_0'$ and length $\lambda/4$. It connects a transmission line of characteristic impedance $Z_0$ to a load $Z_L$. For perfect matching, we have $Z_0' = \sqrt{Z_0 Z_L}$.

At the load end (across $Z_L$), let the voltage be $V_L$ and current be $I_L$.
$V_L = I_L Z_L$.

At the input end of the quarter-wave transformer (connected to the main transmission line of impedance $Z_0$), let the voltage be $V_{in}$ and current be $I_{in}$. For a matched system, $V_{in} = I_{in} Z_0$.

**Relationship between Voltages and Currents at the Transformer Ends:**

Since the transformer section has characteristic impedance $Z_0'$, the voltage and current at its ends are related by:

*   At the load end (assuming the transformer connects directly to $Z_L$): $V_L = I'_L Z_0'$, where $I'_L$ is the current flowing into the transformer at the load end.
*   At the input end: $V_{in} = I_{in} Z_0'$.

However, the primary goal is to match the load $Z_L$ to the transmission line of impedance $Z_0$.

**Using the Transformation Ratio:**

We found $Z_{in} = (Z_0')^2 / Z_L$. If $Z_0' = \sqrt{Z_0 Z_L}$, then $Z_{in} = Z_0$.

This means that the input impedance seen by the main transmission line is $Z_0$.

Now consider the voltage and current at the junction between the main transmission line ($Z_0$) and the transformer section ($Z_0'$).

Let $V_1, I_1$ be the voltage and current at the input of the QWT (connected to the $Z_0$ line).
Let $V_2, I_2$ be the voltage and current at the output of the QWT (connected to $Z_L$).

For a perfect match, $V_1 = I_1 Z_0$.
The QWT itself has characteristic impedance $Z_0'$.

The relationship between $V_1, I_1$ and $V_2, I_2$ through the QWT section is derived from the transmission line equations. For a $\lambda/4$ line:

$V_1 = j (Z_0') I_2$
$I_1 = j (V_2 / Z_0')$

Substituting $V_2 = I_2 Z_L$:

$V_1 = j (Z_0') (I_2)$
$I_1 = j (I_2 Z_L / Z_0')$

Since $V_1 = I_1 Z_0$:

$I_1 Z_0 = j (Z_0') I_2 \quad \Rightarrow \quad I_2 = \frac{I_1 Z_0}{j Z_0'} = -j \frac{Z_0}{Z_0'} I_1$

Also, $V_2 = I_2 Z_L$.

$V_1 = j (Z_0') I_2 = j (Z_0') (-j \frac{Z_0}{Z_0'} I_1) = -j^2 \frac{Z_0' Z_0}{Z_0'} I_1 = Z_0 I_1$. This is consistent.

Now let's consider the ratio of voltages and currents at the junction if we are dealing with the equivalent voltages and currents of the entire matched system.

If $Z_0' = \sqrt{Z_0 Z_L}$, then the ratio of characteristic impedances is $Z_0'/Z_0 = \sqrt{Z_0 Z_L}/Z_0 = \sqrt{Z_L/Z_0}$.
And $Z_0'/Z_L = \sqrt{Z_0 Z_L}/Z_L = \sqrt{Z_0/Z_L}$.

From $V_1 = j (Z_0') I_2$, and $I_2 = V_2/Z_L$, we get $V_1 = j (Z_0') (V_2/Z_L)$.
$V_1/V_2 = j Z_0'/Z_L = j \sqrt{Z_0 Z_L}/Z_L = j \sqrt{Z_0/Z_L}$.
The magnitude $|V_1/V_2| = \sqrt{Z_0/Z_L}$.

From $I_1 = j (V_2 / Z_0')$, and $V_2 = I_2 Z_L$, we get $I_1 = j (I_2 Z_L / Z_0')$.
$I_1/I_2 = j Z_L/Z_0' = j Z_L/\sqrt{Z_0 Z_L} = j \sqrt{Z_L/Z_0}$.
The magnitude $|I_1/I_2| = \sqrt{Z_L/Z_0}$.

**Important Observation:** The equivalent voltages and currents can differ in magnitude at the two ends of the quarter-wave transformer due to the change in characteristic impedance.

*   If $Z_L > Z_0$, then $\sqrt{Z_L/Z_0} > 1$. This implies $|I_1/I_2| > 1$ and $|V_1/V_2| < 1$. The current is higher on the transmission line side ($Z_0$) compared to the transformer section side connected to $Z_L$, and the voltage is lower.
*   If $Z_L < Z_0$, then $\sqrt{Z_L/Z_0} < 1$. This implies $|I_1/I_2| < 1$ and $|V_1/V_2| > 1$. The current is lower on the transmission line side ($Z_0$) compared to the transformer section side connected to $Z_L$, and the voltage is higher.

This behaviour can be understood by considering the impedance transformation: a lower impedance ($Z_0$) is being "matched" to a higher impedance ($Z_L$) via the intermediate impedance ($Z_0'$). To maintain power flow, if impedance increases, voltage tends to increase and current tends to decrease, and vice-versa.

**Reference (Collin, Chapter 4):** Collin's "Foundations of Microwave Engineering" often discusses these impedance transformations in detail, emphasizing the role of the characteristic impedance and the phase shift introduced by the transmission line section. The concept of equivalent voltages and currents is tied to the wave propagation on these lines and their impedance.

---

### 4. Design of Quarter-Wave Transformers

The design of a QWT involves determining the characteristic impedance ($Z_0'$) and the physical length of the transformer section.

**Steps:**

1.  **Identify the impedances to be matched:** $Z_1$ (e.g., source or transmission line impedance) and $Z_2$ (e.g., load impedance).
2.  **Calculate the required characteristic impedance of the transformer section:**
    $Z_0' = \sqrt{Z_1 Z_2}$
3.  **Determine the physical length:**
    The electrical length is $\lambda/4$. The physical length ($l$) depends on the propagation constant ($\beta$) in the medium of the transmission line:
    $l = \frac{\lambda}{4} = \frac{v_p}{4f}$
    where $v_p$ is the phase velocity and $f$ is the operating frequency.
    The phase velocity is related to the speed of light ($c$) and the dielectric constant ($\epsilon_r$) of the medium:
    $v_p = \frac{c}{\sqrt{\epsilon_{eff}}}$
    where $\epsilon_{eff}$ is the effective dielectric constant of the transmission line structure.
    So, $l = \frac{c}{4f\sqrt{\epsilon_{eff}}}$.

**Practical Considerations:**

*   **Bandwidth:** A single QWT is a single-section transformer and is inherently narrow-band. Its performance degrades significantly away from the design frequency because the phase shift will no longer be exactly 90 degrees.
*   **Implementation:** QWTs can be implemented using various transmission line structures:
    *   **Microstrip lines:** The width of the microstrip line determines its characteristic impedance.
    *   **Striplines:** Similar to microstrip, the dimensions of the conductor and dielectric determine $Z_0'$.
    *   **Coaxial lines:** The ratio of the inner and outer conductor radii determines $Z_0'$.
    *   **Waveguides:** Impedance matching in waveguides is achieved by introducing irises, posts, or quarter-wave transformers using posts or discontinuities at specific locations.

**Example (Liao, Chapter 7):**

Design a quarter-wave transformer to match a 50 $\Omega$ transmission line to a $12.5 \Omega$ antenna at 1 GHz. The transmission line is microstrip on a substrate with $\epsilon_r = 2.32$. Assume the effective dielectric constant is approximately equal to $\epsilon_r$ for simplicity in this example (in reality, it's a more complex calculation based on geometry).

1.  **Impedances:** $Z_1 = 50 \Omega$, $Z_2 = 12.5 \Omega$.
2.  **Characteristic Impedance of QWT:**
    $Z_0' = \sqrt{50 \Omega \times 12.5 \Omega} = \sqrt{625} \Omega = 25 \Omega$.
3.  **Physical Length:**
    Operating frequency $f = 1$ GHz.
    Speed of light $c \approx 3 \times 10^8$ m/s.
    Phase velocity $v_p = \frac{c}{\sqrt{\epsilon_r}} = \frac{3 \times 10^8 \text{ m/s}}{\sqrt{2.32}} \approx \frac{3 \times 10^8}{1.523} \approx 1.97 \times 10^8$ m/s.
    Physical length $l = \frac{v_p}{4f} = \frac{1.97 \times 10^8 \text{ m/s}}{4 \times 1 \times 10^9 \text{ Hz}} \approx \frac{1.97 \times 10^8}{4 \times 10^9}$ m $\approx 0.04925$ m $\approx 4.925$ cm.

To implement this using microstrip, one would need to determine the width of a 25 $\Omega$ microstrip line on the given substrate at 1 GHz using microstrip design formulas (as found in Liao or Pozar's appendices).

---

### 5. Limitations of Quarter-Wave Transformers

*   **Narrow Bandwidth:** The primary limitation is its performance only around the design frequency. Any deviation in frequency changes the phase shift, leading to mismatch.
*   **Physical Length:** At lower frequencies, the $\lambda/4$ length can become physically large and impractical.
*   **Losses:** The transformer section itself is a transmission line and will have conductor and dielectric losses, which are more pronounced for non-standard characteristic impedances (e.g., very narrow or very wide lines).

**Solutions for Wider Bandwidth:**

For applications requiring wider bandwidth, multi-section quarter-wave transformers or other impedance matching networks (like Chebyshev or Butterworth filters) are used. These are essentially cascaded QWTs with different characteristic impedances and lengths, designed to provide a smoother impedance transformation over a wider frequency range.

**Reference (Konishi, Chapter 5):** Konishi's "Microwave Integrated Circuits" discusses various transmission line structures and impedance matching techniques, including multi-section transformers, within the context of MICs.

---

### 6. Practice Questions and Exercises

**Question 1:**

A quarter-wave transformer is used to match a 50 $\Omega$ transmission line to a load impedance of $Z_L = 200 \Omega$. What is the characteristic impedance of the quarter-wave transformer section?

**Answer:**
The characteristic impedance of the quarter-wave transformer is the geometric mean of the two impedances:
$Z_0' = \sqrt{Z_1 Z_2} = \sqrt{50 \Omega \times 200 \Omega} = \sqrt{10000} \Omega = 100 \Omega$.

**Question 2:**

If the operating frequency is 2 GHz and the quarter-wave transformer is built in a material with an effective dielectric constant $\epsilon_{eff} = 2.5$, what is the physical length of the transformer section?

**Answer:**
First, calculate the phase velocity:
$v_p = \frac{c}{\sqrt{\epsilon_{eff}}} = \frac{3 \times 10^8 \text{ m/s}}{\sqrt{2.5}} \approx \frac{3 \times 10^8}{1.581} \approx 1.897 \times 10^8$ m/s.

The physical length of a quarter-wave transformer is $l = \lambda/4$.
$\lambda = \frac{v_p}{f} = \frac{1.897 \times 10^8 \text{ m/s}}{2 \times 10^9 \text{ Hz}} \approx 0.09485$ m.
$l = \frac{\lambda}{4} = \frac{0.09485 \text{ m}}{4} \approx 0.0237$ m $= 2.37$ cm.

Alternatively, using the direct formula:
$l = \frac{c}{4f\sqrt{\epsilon_{eff}}} = \frac{3 \times 10^8 \text{ m/s}}{4 \times (2 \times 10^9 \text{ Hz}) \times \sqrt{2.5}} = \frac{3 \times 10^8}{8 \times 10^9 \times 1.581} \approx \frac{3 \times 10^8}{12.648 \times 10^9} \approx 0.0237$ m $= 2.37$ cm.

**Question 3:**

Consider a quarter-wave transformer matching a 50 $\Omega$ line to a 12.5 $\Omega$ load at 3 GHz. If the voltage on the 50 $\Omega$ line at the junction to the transformer is $V_1$, and the voltage on the transformer section at the junction to the load is $V_2$, what is the ratio $V_1/V_2$ in terms of impedance magnitudes?

**Answer:**
The characteristic impedance of the QWT is $Z_0' = \sqrt{50 \Omega \times 12.5 \Omega} = 25 \Omega$.
The ratio of voltages at the ends of the QWT is given by:
$V_1/V_2 = j Z_0'/Z_L$
$V_1/V_2 = j (25 \Omega / 12.5 \Omega) = j 2$.
The magnitude is $|V_1/V_2| = 2$.
This can also be derived from $|V_1/V_2| = \sqrt{Z_0/Z_L} = \sqrt{50/12.5} = \sqrt{4} = 2$.

---

### 7. Important Points to Remember

*   **Purpose:** Impedance matching for maximum power transfer and minimum reflection.
*   **Structure:** A transmission line section of length $\lambda/4$ at the operating frequency.
*   **Characteristic Impedance:** $Z_0' = \sqrt{Z_1 Z_2}$ to match $Z_1$ and $Z_2$.
*   **Phase Shift:** Introduces a 90-degree phase shift.
*   **Equivalent Voltages/Currents:** Magnitudes of voltages and currents can differ at the ends of the transformer due to the change in characteristic impedance. $|V_1/V_2| = \sqrt{Z_0/Z_L}$ and $|I_1/I_2| = \sqrt{Z_L/Z_0}$.
*   **Bandwidth:** Inherently narrow-band.
*   **Implementation:** Can be implemented using various transmission line structures (microstrip, stripline, coax, waveguide).
*   **Design:** Requires calculating $Z_0'$ and physical length based on frequency and dielectric properties.

---

### 8. Alignment with Course Outcomes

*   **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers. (Knowledge Level: K2)**
    *   While this topic doesn't directly cover active devices, understanding impedance matching is fundamental for the proper operation and performance of these microwave components (amplifiers, generators, etc.) when interfaced with transmission lines and loads. The QWT is a passive component used to facilitate this.

*   **CO2: Analyse Microwave Networks using signal flow graphs (Knowledge Level: K3)**
    *   The QWT is a basic building block in microwave network analysis. Its input and output impedances, and the reflection coefficients at its ports, can be analyzed using scattering parameters (S-parameters) and then incorporated into larger network analysis using signal flow graphs or block diagrams. The transformation properties are key to understanding how a network behaves.

*   **CO3: Design microwave filters by different methods (Knowledge Level: K3)**
    *   QWTs are the fundamental building blocks for many microwave filters. Multi-section quarter-wave transformers are directly used to design Chebyshev, Butterworth, and other types of bandpass filters by cascading sections with specific impedance ratios. The concept of transforming impedances using $\lambda/4$ sections is central to filter design.

*   **CO4: Illustrate the basic concepts of Monolithic Integrated Circuits (Knowledge Level: K2)**
    *   Impedance matching is critical in MICs and MMICs. QWTs are often implemented on-chip as transmission line segments with specific widths to achieve impedance transformations between different active or passive components within the integrated circuit. Understanding their function is essential for designing and analyzing these circuits.

---
*(End of Study Notes for Quarter-Wave Transformer)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
