---
title: "Impedance"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7e6"
status: "completed"
scrapedAt: "2026-05-23T18:11:59.869Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Impedance

### Learning Outcomes Covered:

*   **LO1: Understand the fundamental concepts of impedance matching in microstrip antennas.** (Implicitly addressed as impedance is crucial for efficient power transfer from the feed line to the radiating patch.)
*   **LO2: Analyze the various methods for feeding microstrip antennas and their impact on impedance.** (Directly addressed as feeding methods are intrinsically linked to achieving desired impedance matching.)
*   **LO3: Evaluate the role of antenna dimensions and substrate properties in determining the input impedance of microstrip antennas.** (Directly addressed as these physical parameters directly influence the antenna's equivalent circuit and thus its impedance.)
*   **LO4: Understand the concept of VSWR and its relation to impedance mismatch in microstrip antennas.** (Directly addressed as VSWR is a direct consequence of impedance mismatch.)

---

### 1. Introduction to Impedance in Microstrip Antennas

*   **Definition of Impedance:** Impedance (Z) is a measure of the opposition to alternating current flow in an electrical circuit. It is a complex quantity, comprising a real part (resistance, R) and an imaginary part (reactance, X).
    *   $Z = R + jX$
*   **Importance of Impedance Matching:** For efficient power transfer from a transmission line (feed line) to an antenna, their impedances must be matched. An impedance mismatch leads to reflections, causing:
    *   **Reduced radiated power:** Less power is delivered to the antenna element.
    *   **Increased VSWR (Voltage Standing Wave Ratio):** Indicates significant reflections.
    *   **Potential for damage to the transmitter:** Reflected power can stress the transmitter components.
*   **Microstrip Antenna Impedance:** Microstrip antennas, due to their planar structure and integration with printed circuit boards, typically have a characteristic impedance that needs careful consideration and matching to standard transmission lines (e.g., 50-ohm coaxial cable or microstrip line).

---

### 2. Factors Affecting Microstrip Antenna Impedance

The input impedance of a microstrip antenna is primarily determined by:

#### 2.1. Antenna Dimensions

*   **Length (L) and Width (W) of the Radiating Patch:**
    *   The **length** of the patch significantly influences the resonant frequency and the impedance at the patch edges. As the length approaches resonance, the reactance tends to zero, and the impedance is primarily resistive.
    *   The **width** of the patch affects the input impedance and the radiation pattern. A wider patch generally leads to a lower input impedance.
    *   **Balanis (4th Ed.)** emphasizes that the input impedance varies significantly with the location of the feed point along the length of the patch.
*   **Substrate Thickness (h):**
    *   A thicker substrate generally results in a larger fringe field and a lower characteristic impedance for the antenna. This means a thicker substrate often leads to a lower input impedance at the patch edges.
    *   **Garg (2001)** discusses how substrate thickness influences the radiation resistance and reactance components of the input impedance.
*   **Dielectric Constant ($\epsilon_r$) of the Substrate:**
    *   A higher dielectric constant reduces the effective wavelength within the substrate and can lower the input impedance. It also contributes to fringing fields.
    *   **Pozar (4th Ed.)** provides detailed analytical expressions that show the dependence of impedance on $\epsilon_r$ and $h$.

#### 2.2. Radiation Mechanism and Equivalent Circuit

*   Microstrip antennas can be modeled using various equivalent circuits. A common approach is to consider them as resonant structures.
*   **Slot-Line Model:** The radiating patch can be viewed as a resonant cavity bounded by magnetic walls on the top and bottom, and radiating slots (fringing fields) at the edges. The impedance seen at the feed point is a combination of the resonant impedance of the cavity and the impedance of the radiating slots.
*   **Equivalent Circuit:** A simplified equivalent circuit at resonance can often be represented by a parallel or series RLC circuit. For a patch fed at its edge, the impedance can be approximated by a resistance in series with a reactance.
    *   **Radiation Resistance ($R_r$):** Represents the power radiated by the antenna. It is influenced by patch dimensions, substrate properties, and the operating mode.
    *   **Dielectric Loss Resistance ($R_d$):** Represents losses in the dielectric substrate.
    *   **Conductor Loss Resistance ($R_c$):** Represents losses in the conductive radiating patch and ground plane.
    *   **Reactance (X):** Primarily due to the fringing fields at the edges of the patch. It is capacitive or inductive depending on the operating frequency relative to resonance.

---

### 3. Input Impedance of Common Microstrip Antenna Configurations

The input impedance is highly dependent on the feeding mechanism.

#### 3.1. Microstrip Line Fed (Edge-Fed)

*   **Description:** A microstrip line is directly connected to the edge of the radiating patch.
*   **Impedance Variation:** The impedance at the edge of the patch is typically low (e.g., 50-100 ohms), but it varies significantly with the distance of the feed point from the center of the edge.
*   **Matching:** To achieve a desired impedance (e.g., 50 ohms), the feed point is precisely located at a position where the impedance of the patch matches the feed line.
    *   If the feed is at the center of the edge, the impedance is typically the lowest. Moving the feed point away from the center increases the impedance.
*   **Calculation:** The impedance $Z_{in}$ at a distance 'x' from the center of the edge can be approximated as:
    *   $Z_{in}(x) \approx R_p - jX_p + Z_0 \frac{Z_L \cosh(\gamma x) + Z_0 \sinh(\gamma x)}{Z_0 \cosh(\gamma x) + Z_L \sinh(\gamma x)}$
    *   Where $R_p - jX_p$ is the impedance at the edge center, $Z_0$ is the characteristic impedance of the feed line, and $\gamma$ is the propagation constant. For matching at resonance ($X_p \approx 0$), the impedance is primarily resistive and increases with 'x'.
*   **Example:** For a typical rectangular patch, the edge impedance might be around 75 ohms. To match to a 50-ohm feed line, the feed point is moved inward from the edge center.

#### 3.2. Probe Fed (Perpendicularly Fed)

*   **Description:** A coaxial probe is inserted through the ground plane and connected to the center of the radiating patch.
*   **Impedance Variation:** The impedance at the center of the patch is generally higher than at the edge. It is influenced by the probe's position relative to the center of the patch.
*   **Matching:** To achieve a desired impedance (e.g., 50 ohms), the probe's position (axial and radial) needs to be adjusted. Often, the probe is placed at the center for maximum impedance.
    *   If the probe is at the center, the impedance is highest.
    *   Moving the probe away from the center reduces the impedance.
*   **Equivalent Circuit:** The probe can be modeled as a series inductance and resistance, which affects the overall input impedance.
*   **Balanis (4th Ed.)** provides detailed analysis of probe-fed antennas, including the effect of probe penetration depth and offset.

#### 3.3. Aperture Coupled Fed

*   **Description:** The radiating patch is fed by a microstrip line on a separate substrate, coupled through an aperture (slot) in the ground plane separating the two substrates.
*   **Impedance:** This method offers flexibility in impedance matching as the aperture dimensions, shape, and position can be optimized to control the coupling and hence the input impedance.
*   **Advantages:** Provides good isolation between the feed network and the radiating element, which can be beneficial for reducing spurious radiation and improving performance.
*   **Garg (2001)** and **Pozar (4th Ed.)** extensively discuss aperture coupling techniques and their impact on impedance bandwidth and matching.

#### 3.4. Electromagnetic Coupled Fed

*   **Description:** The radiating patch is coupled to a feeding microstrip line via the fringing fields extending from the line.
*   **Impedance:** The coupling strength, determined by the proximity and spacing between the feed line and the patch, allows for impedance control.
*   **Choudhury (2nd Ed.)** might discuss this in the context of reconfigurable antennas where coupling can be varied.

---

### 4. Impedance Matching Techniques

To transform the antenna's intrinsic impedance to the desired system impedance (e.g., 50 ohms), various matching networks are employed.

*   **Direct Feed:** If the intrinsic impedance of the antenna at the feed point is already close to the desired impedance (e.g., 50 ohms), direct connection can be used.
*   **Moving the Feed Point:** As discussed for edge-fed and probe-fed antennas, adjusting the feed point location is a primary method to change the impedance.
*   **Matching Networks:**
    *   **Quarter-Wave Transformer:** A section of transmission line with a characteristic impedance $Z_m = \sqrt{Z_1 Z_2}$ (where $Z_1$ is the source impedance and $Z_2$ is the load impedance) and a length of $\lambda_g/4$ can be used for impedance transformation.
    *   **L-Matching Network:** Consists of a series or shunt inductor and capacitor to create a desired impedance transformation.
    *   **Stub Matching:** Using open-circuited or short-circuited stubs of specific lengths connected in shunt or series with the transmission line to absorb the mismatch.
*   **Patch Shape Modification:**
    *   **Notches:** Cutting a notch in the edge of the patch can alter its current distribution and modify the input impedance.
    *   **Protrusions:** Adding extensions to the patch can also influence impedance.
*   **Substrate Modification:** Using thicker substrates or substrates with different dielectric constants can alter the impedance.

---

### 5. Voltage Standing Wave Ratio (VSWR)

*   **Definition:** VSWR is a measure of the standing wave pattern on a transmission line caused by impedance mismatch. It is the ratio of the maximum voltage to the minimum voltage along the line.
*   **Formula:**
    *   $VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$
    *   Where $|\Gamma|$ is the magnitude of the reflection coefficient.
*   **Reflection Coefficient ($\Gamma$):**
    *   $\Gamma = \frac{Z_{in} - Z_0}{Z_{in} + Z_0}$
    *   Where $Z_{in}$ is the antenna impedance and $Z_0$ is the characteristic impedance of the feed line.
*   **Ideal Matching:** For perfect impedance matching, $Z_{in} = Z_0$, which results in $\Gamma = 0$ and $VSWR = 1$.
*   **Mismatch:** A VSWR greater than 1 indicates an impedance mismatch and reflected power.
*   **Balancing:** A low VSWR (typically below 2, corresponding to $|\Gamma| < 0.33$) is desirable for efficient operation.
*   **Collin (2/e)** provides a thorough treatment of reflection and VSWR in transmission line theory, applicable to antenna feed systems.

---

### 6. Important Points to Remember

*   **Impedance Matching is Crucial:** Efficient power transfer and minimal reflections are paramount for antenna performance.
*   **Intrinsic Impedance Varies:** The impedance of a microstrip patch is not constant; it depends on dimensions, substrate, and feed location.
*   **Feed Location is Key:** For edge and probe feeds, the feed point's position is a primary tool for impedance control.
*   **Matching Networks are Essential:** Often, transformers or reactive elements are needed to bridge the impedance gap.
*   **VSWR is a Performance Indicator:** A low VSWR signifies good impedance matching.
*   **Trade-offs Exist:** Achieving a specific impedance might involve trade-offs with bandwidth or radiation efficiency.

---

### 7. Practice Questions and Exercises

**Q1. What is the primary reason for ensuring impedance matching between a microstrip antenna and its feed line?**

**Answer:** To ensure maximum power transfer from the feed line to the antenna and minimize signal reflections, leading to efficient radiation and preventing damage to the transmitter.

**Q2. List three factors that significantly influence the input impedance of a microstrip antenna.**

**Answer:**
1.  Dimensions of the radiating patch (length and width).
2.  Substrate thickness ($h$).
3.  Dielectric constant of the substrate ($\epsilon_r$).
4.  Location of the feed point.
5.  Feeding mechanism.

**Q3. For a rectangular microstrip patch fed by a microstrip line at its edge, how would you increase the input impedance from 50 ohms to 75 ohms?**

**Answer:** Move the feed point closer to the center of the patch edge. The impedance is lowest at the edge center and increases as you move away from it.

**Q4. Define VSWR and explain its relationship with the reflection coefficient.**

**Answer:** VSWR (Voltage Standing Wave Ratio) is the ratio of the maximum to minimum voltage on a transmission line due to impedance mismatch. It is related to the reflection coefficient ($\Gamma$) by the formula: $VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$. A perfect match has $\Gamma=0$ and VSWR=1.

**Q5. A microstrip antenna has an input impedance of $Z_{in} = 30 + j10$ ohms at a frequency of 2 GHz. If it is connected to a 50-ohm feed line, calculate the reflection coefficient and the VSWR at this frequency.**

**Solution:**
*   Characteristic Impedance, $Z_0 = 50$ ohms.
*   Antenna Input Impedance, $Z_{in} = 30 + j10$ ohms.

**Reflection Coefficient ($\Gamma$):**
$\Gamma = \frac{Z_{in} - Z_0}{Z_{in} + Z_0} = \frac{(30 + j10) - 50}{(30 + j10) + 50} = \frac{-20 + j10}{80 + j10}$

To simplify, divide numerator and denominator by 10:
$\Gamma = \frac{-2 + j1}{8 + j1}$

Multiply by the conjugate of the denominator:
$\Gamma = \frac{(-2 + j1)(8 - j1)}{(8 + j1)(8 - j1)} = \frac{-16 + j2 + j8 - j^2}{64 - j^2} = \frac{-16 + j10 + 1}{64 + 1} = \frac{-15 + j10}{65}$
$\Gamma = -\frac{15}{65} + j\frac{10}{65} = -\frac{3}{13} + j\frac{2}{13}$

Magnitude of Reflection Coefficient ($|\Gamma|$):
$|\Gamma| = \sqrt{(-\frac{3}{13})^2 + (\frac{2}{13})^2} = \sqrt{\frac{9}{169} + \frac{4}{169}} = \sqrt{\frac{13}{169}} = \sqrt{\frac{1}{13}} \approx 0.277$

**VSWR:**
$VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0.277}{1 - 0.277} = \frac{1.277}{0.723} \approx 1.766$

**Answer:**
Reflection Coefficient, $\Gamma \approx -0.23 + j0.15$ (normalized to 50 ohms)
VSWR $\approx 1.77$

---

### 8. Alignment with Course Outcomes:

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   Understanding impedance is crucial for analyzing how effectively the generated currents at the antenna surface are converted into radiated power. Mismatched impedance leads to less power being delivered to the antenna for radiation.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   This topic directly supports the design aspect by highlighting how to control and match the input impedance. Measuring impedance (e.g., using a VNA) is a key parameter in characterizing the antenna's performance.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   Many advanced antenna concepts (e.g., reconfigurable antennas, wideband antennas) rely heavily on sophisticated impedance matching techniques and understanding how to manipulate the antenna's impedance.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While this topic is primarily focused on the antenna itself, efficient radiation (which impedance matching enables) is the starting point for radio wave propagation. Poor impedance matching means less power is coupled into the propagation medium.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References:

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.**
    *   Provides foundational principles of antenna impedance, detailed analysis of various feeding methods for microstrip antennas, and mathematical models for calculating input impedance.
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech.**
    *   Offers comprehensive coverage of microstrip antenna design, with specific emphasis on impedance characteristics, feeding techniques, and matching circuits.
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.**
    *   While a broader microwave engineering text, it provides essential background on transmission line theory, S-parameters, and impedance matching techniques that are fundamental to understanding antenna impedance.
*   **Collin, R. E. (2001). *Antennas and Radio Wave Propagation* (2nd ed.). McGraw Hill.**
    *   Covers the theoretical aspects of wave propagation and antenna theory, including detailed discussions on impedance, reflection, and matching from a rigorous electromagnetic perspective.
*   **Choudhury, S. (2023). *Reconfigurable antennas* (2nd ed.). IoP Publishing.**
    *   May include sections on how impedance tuning is critical for achieving reconfiguration in advanced antenna designs.

---