---
title: "Impedance"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff779"
status: "completed"
scrapedAt: "2026-05-23T18:12:37.194Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Impedance

---

### Learning Outcomes Covered:

*   **Analyze the radiation mechanism of antennas (CO1, K3):** Understanding the impedance of a microstrip antenna is crucial for analyzing its radiation mechanism, as impedance matching dictates the power transfer to and from the antenna.
*   **Design and measure the parameters of a microstrip antenna (CO2, K4):** Impedance is a fundamental parameter that must be considered during the design phase to ensure efficient operation and is a key parameter measured during testing.
*   **Analyze and design advanced antennas (CO3, K4):** The principles of impedance analysis for microstrip antennas extend to the design of more complex and advanced antenna structures.
*   **Explain the different modes and parameters of radio wave propagation (CO4, K2):** While not directly about propagation modes, efficient antenna impedance matching is necessary for effective transmission and reception of radio waves.

---

### Key Concepts and Definitions:

*   **Impedance (Z):** A measure of the opposition that a circuit presents to alternating current. It is a complex quantity, consisting of resistance ($R$) and reactance ($X$).
    *   $Z = R + jX$
    *   **Resistance ($R$):** The real part, representing energy dissipation (e.g., due to conductor losses and radiation).
    *   **Reactance ($X$):** The imaginary part, representing energy storage in electric and magnetic fields. It can be inductive ($+jX_L$) or capacitive ($-jX_C$).
*   **Characteristic Impedance ($Z_0$):** The impedance of a transmission line or a waveguide. For microstrip lines, it's typically 50 ohms, but can vary based on substrate properties and trace dimensions.
*   **Antenna Impedance ($Z_{ant}$):** The impedance seen at the terminals of an antenna. It comprises several components:
    *   **Radiation Resistance ($R_r$):** The equivalent resistance representing the power radiated by the antenna.
    *   **Loss Resistance ($R_l$):** The equivalent resistance representing power dissipated as heat in the antenna conductors and dielectric.
    *   **Reactance ($X_{ant}$):** The reactive component of the antenna impedance, which can be capacitive or inductive.
*   **Input Impedance ($Z_{in}$):** The impedance measured at the point where the antenna is fed (e.g., the connection point of a coaxial cable). This is influenced by the antenna's internal impedance and the transmission line connecting to it.
*   **Impedance Matching:** The process of ensuring that the impedance of the source (e.g., transmitter) is equal to the impedance of the load (e.g., antenna) to maximize power transfer and minimize reflections. This is crucial for efficient operation.
*   **Voltage Standing Wave Ratio (VSWR):** A measure of the impedance mismatch between a transmission line and a load. A VSWR of 1:1 indicates perfect impedance matching.
*   **Reflection Coefficient ($\Gamma$):** A complex quantity that represents the ratio of the reflected voltage wave to the incident voltage wave at the point of connection. $\Gamma = \frac{Z_{in} - Z_0}{Z_{in} + Z_0}$.

---

### Impedance of Microstrip Antennas:

Microstrip antennas, due to their planar structure, exhibit a unique impedance behavior influenced by several factors. The impedance at the feed point is critical for their performance.

#### 1. Components of Microstrip Antenna Impedance:

*   **Radiation Resistance ($R_r$):** This is the most significant component contributing to efficient radiation. It is determined by the antenna's geometry, substrate properties, and the mode of excitation. For a simple rectangular patch, the radiation resistance at its center is roughly inversely proportional to its width ($W$) and directly proportional to the substrate permittivity ($\epsilon_r$).
    *   **Refer to Balanis (Chapter 11):** Balanis discusses the derivation of radiation resistance for various antenna elements, and these principles apply to the radiating elements of microstrip antennas. The concept of equivalent magnetic current elements can be used to approximate the radiated power.
*   **Loss Resistance ($R_l$):** This component accounts for:
    *   **Conductor Losses:** Due to finite conductivity of the metallic patch and ground plane. This is dependent on the skin depth and the geometry of the conductor.
    *   **Dielectric Losses:** Due to the loss tangent ($\tan \delta$) of the substrate material.
    *   **Surface Wave Losses:** For certain substrate thicknesses and dielectric constants, surface waves can propagate along the dielectric-ground plane interface, representing a loss of power.
*   **Reactance ($X_{ant}$):** The reactive component is primarily determined by the fringing fields at the edges of the patch.
    *   **Edge Capacitance:** The fringing fields create an effective capacitance, leading to a capacitive reactance. This capacitance is influenced by the patch dimensions and the substrate permittivity.
    *   The length of the microstrip patch antenna is typically designed to be approximately half a guided wavelength ($\lambda_g/2$) for resonance. This means that the reactance component is ideally zero at the resonant frequency. However, in practice, slight inductive or capacitive reactance might be present due to non-ideal conditions.

#### 2. Factors Affecting Input Impedance:

*   **Feed Location:** The impedance at the feed point is highly dependent on where the patch is excited.
    *   **Probe Feed:** The input impedance is primarily determined by the position of the probe along the width of the patch. Moving the probe away from the center increases the impedance.
    *   **Edge Feed (Microstrip Line Feed):** The impedance is determined by the position of the edge of the patch relative to the end of the feed line. This method typically provides a lower impedance compared to probe feeding.
    *   **Garg (Chapter 3):** Garg provides detailed analysis of input impedance for different feed types and their dependence on feed location, along with design curves.
*   **Substrate Properties:**
    *   **Dielectric Constant ($\epsilon_r$):** Affects the guided wavelength and the fringing fields, thereby influencing both resistance and reactance. Higher $\epsilon_r$ generally leads to a lower radiation resistance and a smaller physical size.
    *   **Substrate Thickness ($h$):** A thicker substrate generally leads to broader bandwidth and higher radiation resistance but can also increase surface wave losses and fringing fields.
    *   **Loss Tangent ($\tan \delta$):** Directly impacts the loss resistance.
*   **Patch Dimensions:** The length ($L$) and width ($W$) of the patch significantly influence the resonant frequency and the input impedance.
*   **Ground Plane:** The size and shape of the ground plane can affect the radiation pattern and impedance, especially for smaller ground planes.
*   **Excitation Mode:** Different modes of operation (e.g., dominant TM$_{01}$ mode, TM$_{11}$ mode) have different impedance characteristics.

#### 3. Techniques for Impedance Matching:

Efficient power transfer from the transmission line to the microstrip antenna requires impedance matching. Common techniques include:

*   **Varying the Feed Location:** By moving the feed point on the patch, the impedance can be transformed. For example, to match a 50-ohm feed line to a patch with a higher input impedance, the feed point is moved closer to the edge.
    *   **Example:** If a patch has an input impedance of $R_{in} + jX_{in}$ at its center, and we want to match it to a 50-ohm line, we need to find a feed location that provides an impedance of 50 ohms. This involves using transmission line theory to transform the impedance.
*   **Using a Matching Network:** A reactive circuit (e.g., stubs, lumped elements, transmission line sections) can be inserted between the transmission line and the antenna feed point to transform the impedance.
    *   **Quarter-Wave Transformer:** A section of transmission line with a characteristic impedance $Z_{tr}$ can be used to match an impedance $Z_L$ to a source impedance $Z_S$ if $Z_S = (Z_{tr}^2) / Z_L$.
    *   **L-Section Matching Network:** Consists of a series and a shunt element (reactors), which can match a wide range of impedances.
*   **Antenna Element Design:** Modifying the shape of the microstrip patch itself can influence its inherent impedance.
    *   **Slotted Patches:** Incorporating slots can alter the current distribution and change the impedance.
    *   **Notched Patches:** Notches at the edges can be used for impedance tuning.
    *   **Chamfered Corners:** Rounding or chamfering the corners of the patch can influence the fringing fields and thus the impedance.
*   **Directly Feeding at a Specific Impedance Point:** For certain feed methods like aperture coupling, the feed line's impedance can be chosen to match the antenna's impedance.

#### 4. Impedance of Common Microstrip Antenna Types:

*   **Rectangular Microstrip Patch:**
    *   The input impedance at the center feed is typically high (around 200-300 ohms for typical dimensions).
    *   The impedance at the edges is much lower, suitable for microstrip line feeding.
    *   **Collin (Chapter 5):** Collin's book provides rigorous analysis of microstrip structures, including the field distribution and impedance of microstrip lines and radiating elements, which helps in understanding the impedance of a patch antenna.
*   **Circular Microstrip Patch:**
    *   The impedance characteristics are similar to rectangular patches, with the impedance varying based on the feed location.

---

### Relationship with Radiation Mechanism:

*   **Power Transfer:** Impedance matching ensures that the maximum power from the transmitter is delivered to the antenna for radiation. A significant mismatch leads to power reflection back to the transmitter, reducing radiated power and potentially damaging the transmitter.
*   **Bandwidth:** The impedance bandwidth of an antenna is related to the range of frequencies over which it maintains an acceptable VSWR. A well-matched antenna generally exhibits better bandwidth. Microstrip antennas are known for their narrow bandwidth, and impedance matching is crucial to optimize this.
*   **Efficiency:** While radiation resistance is a component of impedance, the overall antenna efficiency is also affected by loss resistance. Matching optimizes power transfer to the radiating part of the antenna.
*   **Directivity and Pattern:** While impedance primarily affects power transfer, extreme mismatches or operation far from resonance can alter the current distribution on the antenna, which in turn can subtly affect the radiation pattern and directivity.

---

### Important Points to Remember:

*   **Impedance is frequency-dependent:** The impedance of a microstrip antenna changes with frequency, especially around its resonant frequency.
*   **Feed location is critical:** The impedance at the feed point is directly controlled by where the antenna is connected to the transmission line.
*   **Matching is essential for efficiency:** Always aim for impedance matching (VSWR < 2:1 or reflection coefficient < 0.2) for optimal performance.
*   **Microstrip antennas have inherently narrow bandwidth:** Careful impedance matching is a key aspect of designing for acceptable bandwidth.
*   **Substrate properties significantly impact impedance:** Dielectric constant, thickness, and loss tangent all play a role.
*   **Garg and Balanis are primary resources:** These books provide detailed theoretical derivations and practical design considerations for microstrip antennas, including impedance analysis.

---

### Practice Questions and Exercises:

**Question 1:**

Explain the different components that constitute the input impedance of a microstrip patch antenna. How does the feed location affect these components?

**Answer:**

The input impedance of a microstrip patch antenna comprises:
1.  **Radiation Resistance ($R_r$):** Represents the power radiated by the antenna.
2.  **Loss Resistance ($R_l$):** Represents power dissipated as heat in conductors and the dielectric.
3.  **Reactance ($X_{ant}$):** Primarily due to fringing fields at the patch edges, it is usually capacitive.

The feed location significantly influences the input impedance.
*   **Center Feed:** Typically yields a higher input impedance (e.g., 200-300 ohms) as it is fed at a point of maximum voltage.
*   **Edge Feed:** Provides a lower input impedance (e.g., 50-100 ohms) as it is fed closer to a point of maximum current. By strategically choosing the feed point along the width of the patch, the desired impedance for matching to a transmission line (e.g., 50 ohms) can be achieved.

**Question 2:**

A rectangular microstrip patch antenna is designed to resonate at 2 GHz. At the center feed point, its input impedance is measured to be $Z_{in} = 150 + j100 \, \Omega$. The antenna is to be fed by a 50 $\Omega$ microstrip transmission line.
a) What type of impedance matching network would be most suitable here to achieve a match to the 50 $\Omega$ line? Briefly explain why.
b) If a quarter-wave transformer is considered, what would be its characteristic impedance?

**Answer:**

a) A suitable impedance matching network for this scenario would be an **L-section matching network**. This is because the antenna exhibits both a resistive component higher than the line impedance and a capacitive reactance. An L-section (consisting of a series inductor and a shunt capacitor, or vice-versa) is versatile enough to transform impedances and cancel out both the excess resistance and the reactance.

b) For a quarter-wave transformer to match an impedance $Z_L$ to a source impedance $Z_S$, the transformer's characteristic impedance $Z_{tr}$ must satisfy $Z_S = \frac{Z_{tr}^2}{Z_L}$.
In this case, $Z_S = 50 \, \Omega$ (source impedance, which is the transmission line) and $Z_L = 150 \, \Omega$ (the resistive part of the antenna impedance we want to match).
$50 = \frac{Z_{tr}^2}{150}$
$Z_{tr}^2 = 50 \times 150 = 7500$
$Z_{tr} = \sqrt{7500} \approx 86.6 \, \Omega$

*Note: This calculation assumes the reactive component has been dealt with separately or implicitly by the transformer's effective length in a more complex matching scenario. For a direct match using only a QWT, it's generally used for purely resistive matching, or it might be part of a larger network.*

**Question 3:**

Discuss two common methods used to achieve impedance matching for microstrip patch antennas and their advantages/disadvantages.

**Answer:**

Two common methods for impedance matching are:

1.  **Varying the Feed Location (Probe Feed):**
    *   **Description:** The position of the probe feeding the patch is adjusted along its width to achieve the desired input impedance (e.g., 50 $\Omega$).
    *   **Advantages:** Simple to implement, minimal additional components, can be effective for achieving a basic match.
    *   **Disadvantages:** Limited range of impedance transformation, can affect radiation pattern if the feed is too close to the edge, difficult to achieve a perfect match over a wide bandwidth.

2.  **Using an L-section Matching Network:**
    *   **Description:** A combination of a series and a shunt reactive element (inductor or capacitor) is placed between the transmission line and the antenna feed. This network transforms the impedance by canceling out the mismatch.
    *   **Advantages:** Can match a wide range of impedances, more flexibility in placement compared to probe feeding, can be designed to provide a good match over a slightly wider bandwidth.
    *   **Disadvantages:** Requires additional components (stubs or lumped elements), can add insertion loss, increases the overall size and complexity of the antenna system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References:

*   **Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016):** Chapters on antenna parameters, single-element antennas, and specific antenna types like dipoles and loops, which provide foundational understanding of impedance.
*   **Microstrip Antenna Design Handbook by Ramesh Garg (Artech, 1/e, 2001):** Specifically, chapters dealing with the basic microstrip antenna, feed techniques, and impedance matching networks.
*   **Antennas and radio Wave propagation by R.E.Collin (McGraw Hill, 2/e, 2001):** Provides theoretical background on electromagnetic waves and antenna theory, including impedance concepts.
*   **Microwave Engineering by David M. Pozar (Wiley India, 4/e, 2012):** Essential for understanding transmission line theory, impedance matching techniques (Smith Chart), and the behavior of microwave components.

---