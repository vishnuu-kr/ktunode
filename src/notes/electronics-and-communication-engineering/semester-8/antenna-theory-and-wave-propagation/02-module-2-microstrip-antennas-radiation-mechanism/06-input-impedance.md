---
title: "Input Impedance"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff770"
status: "completed"
scrapedAt: "2026-05-23T18:12:29.887Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas - Radiation Mechanism

### Topic: Input Impedance of Microstrip Antennas

---

### 1. Introduction to Input Impedance in Microstrip Antennas

The input impedance ($Z_{in}$) of a microstrip antenna is a crucial parameter that dictates how efficiently power is transferred from the transmission line (feeder) to the antenna element. It's a complex quantity, comprising a resistive part (radiation resistance and loss resistance) and a reactive part (inductance and capacitance). An impedance match between the source and the antenna is essential for maximizing power transfer and minimizing reflections.

**Key Concepts:**

*   **Impedance Matching:** The process of ensuring that the impedance of the source (e.g., transmission line) is equal to the impedance of the load (the antenna) to achieve maximum power transfer and minimize standing waves.
*   **Reflection Coefficient ($\Gamma$):** A measure of the reflected wave's amplitude relative to the incident wave's amplitude at the antenna's input.
*   **Voltage Standing Wave Ratio (VSWR):** A measure of the impedance mismatch, indicating how much the voltage varies along the transmission line. A VSWR of 1:1 indicates a perfect match.
*   **Return Loss:** The ratio of the power delivered to the load to the power reflected back to the source, expressed in decibels (dB). A higher return loss indicates a better match.

**Learning Outcome Addressed:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding input impedance is fundamental to analyzing how energy is coupled into the antenna structure, which is part of its radiation mechanism.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 1 (Introduction to Antennas) and Chapter 13 (Microstrip Antennas) discuss input impedance, matching techniques, and their impact on antenna performance.
*   **Garg (2001):** Chapter 4 (Microstrip Line) and Chapter 6 (Microstrip Antennas) provide detailed analysis of transmission line theory applied to microstrip structures and the calculation of input impedance.
*   **Pozar (4th Ed.):** Chapter 11 (Antennas) offers a broad perspective on antenna impedance and matching, which is applicable to microstrip antennas.

---

### 2. Factors Affecting Input Impedance

The input impedance of a microstrip antenna is influenced by several factors related to its physical dimensions, the dielectric substrate, and the feeding mechanism.

**Key Factors and Their Impact:**

*   **Antenna Dimensions:**
    *   **Length (L):** Affects the resonant frequency and the reactive component of the impedance. For a rectangular patch, length is typically around $\lambda_g/2$.
    *   **Width (W):** Influences the bandwidth and the radiation resistance. A wider patch generally has a higher radiation resistance and broader bandwidth.
    *   **Thickness (h):** A thicker substrate leads to a larger fringing field, resulting in a lower characteristic impedance of the equivalent transmission line and higher radiation resistance.
*   **Dielectric Substrate Properties:**
    *   **Dielectric Constant ($\epsilon_r$):** A higher $\epsilon_r$ leads to a shorter wavelength within the substrate ($\lambda_g = \lambda_0 / \sqrt{\epsilon_{eff}}$), affecting resonant dimensions and impedance. It also tends to reduce radiation resistance.
    *   **Loss Tangent ($\tan \delta$):** Contributes to dielectric losses, which affect the resistive part of the input impedance and the antenna's efficiency.
*   **Feeding Point Location:** The position of the feed point (e.g., coaxial probe, microstrip line) critically determines the input impedance. Moving the feed point towards the edge of the patch increases the impedance.
*   **Polarization:** The orientation of the feeding mechanism can influence the polarization and, consequently, the input impedance.
*   **Mounting Structure:** The ground plane and surrounding structures can affect the fringing fields and thus the input impedance.

**Example:**

Consider a rectangular microstrip patch antenna. If the feed point is located at the center of the patch's edge, the input impedance will be lower (typically around 50 Ohms for a well-designed patch). Moving the feed point closer to the center of the patch (along the length) would increase the input impedance due to the lower voltage and higher current at that point in the equivalent transmission line model.

**Learning Outcome Addressed:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding how these factors influence impedance helps in analyzing how the antenna couples electromagnetic energy.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - This knowledge is directly applied in the design process to achieve a desired input impedance.

**Textbook References:**

*   **Garg (2001):** Chapter 6 provides detailed discussions on how various parameters influence the input impedance of different microstrip antenna configurations.
*   **Balanis (4th Ed.):** Chapter 13 elaborates on the impact of substrate thickness, dielectric constant, and feed location on the input impedance.

---

### 3. Models for Calculating Input Impedance

Several models are used to predict and calculate the input impedance of microstrip antennas. These models simplify the complex electromagnetic behavior of the antenna.

**Key Models:**

*   **Transmission Line Model:**
    *   **Concept:** Treats the microstrip patch as a section of a uniform transmission line terminated by radiating slots at its ends. The radiating slots are modeled as admittances (conductance for radiation, susceptance for stored energy).
    *   **Application:** Primarily used for rectangular and circular patch antennas. The input impedance is calculated based on the transmission line characteristic impedance, propagation constant, and the terminating admittances.
    *   **Formula (Simplified for a Rectangular Patch):**
        $Z_{in} = R_{in} + jX_{in}$
        Where $R_{in}$ is the input resistance and $X_{in}$ is the input reactance. The radiation resistance of the patch is approximately $R_s = \frac{90 \pi^2}{2 \eta_0} (\frac{L}{h})^2$ at resonance, where $\eta_0$ is the impedance of free space. The feed point impedance depends on the position along the transmission line.
    *   **Limitations:** Assumes the radiating edges behave like slots, and fringing fields are uniform. Doesn't accurately account for higher-order modes or complex geometries.

*   **Equivalent Circuit Model (Cavity Model):**
    *   **Concept:** Views the microstrip patch as a resonant cavity bounded by magnetic walls (sides) and electric walls (top and bottom). The radiation from the patch is then modeled as a coupling mechanism between the cavity and the external space, often represented by conductances shunting the cavity resonators.
    *   **Application:** Provides a more accurate prediction of impedance, especially for off-resonance behavior and when considering various modes. It accounts for fringing fields more rigorously.
    *   **Components:** Consists of an inductor (L), capacitor (C) representing the resonant behavior, and shunt conductances (G) representing radiation and dielectric/conductor losses. The input impedance is then calculated from this equivalent circuit.

*   **Full-Wave Electromagnetic (EM) Solvers:**
    *   **Concept:** Utilizes sophisticated numerical methods (e.g., Method of Moments (MoM), Finite Element Method (FEM), Finite Difference Time Domain (FDTD)) to solve Maxwell's equations directly for the antenna structure.
    *   **Application:** Provides the most accurate results for arbitrary geometries and complex feeding structures. Essential for advanced designs and optimization.
    *   **Examples:** HFSS, CST Microwave Studio, FEKO.

**Example:**

Using the transmission line model for a rectangular patch fed by a coaxial probe at a distance $y$ from the center, the input impedance can be calculated by transforming the radiation resistance at the edge ($R_s$) to the feed point. If $Z_{patch}$ is the impedance at the center of the patch, then:

$Z_{in} = Z_{patch} \cos^2(\beta y) + j Z_{patch} \sin(\beta y) \cos(\beta y)$ (simplified, assuming matched slots)

A more practical approach considers the impedance at the edges to be $R_s$, and the impedance at the feed point is derived from this.

**Learning Outcome Addressed:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding these models helps in dissecting the electromagnetic behavior and how power enters the radiating structure.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - These models are the basis for designing antennas with specific input impedance characteristics.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 13 provides a thorough explanation of the transmission line model and introduces the cavity model for microstrip antennas.
*   **Garg (2001):** Chapter 6 extensively covers the transmission line model and its application to various microstrip configurations. It also touches upon the cavity model.
*   **Collin (2001):** Chapter 13 offers a more theoretical treatment of microstrip antenna analysis, including modeling approaches.
*   **Pozar (4th Ed.):** Chapter 11 discusses general antenna modeling techniques, including equivalent circuits and aperture theory, which can be adapted to microstrip antennas.

---

### 4. Methods for Achieving Impedance Matching

To ensure maximum power transfer, the input impedance of the microstrip antenna must be matched to the characteristic impedance of the transmission line (typically 50 Ohms).

**Key Matching Techniques:**

*   **Varying the Feed Point Location:**
    *   **Principle:** The input impedance of a microstrip patch varies along its length. By strategically placing the feed point (e.g., coaxial probe or microstrip line), the desired impedance (e.g., 50 Ohms) can be achieved.
    *   **Method:** Calculate the required feed point distance from the edge based on the transmission line model and the target impedance.
    *   **Example:** For a rectangular patch, if the impedance at the edge is $R_s$, and you want to match to $R_0$, the feed point should be at a distance $y$ from the edge such that the impedance at that point is $R_0$. This is often done by transforming the radiation resistance using transmission line equations.

*   **Using a Quarter-Wavelength Transformer:**
    *   **Principle:** A quarter-wavelength ($\lambda/4$) transmission line section with a specific characteristic impedance ($Z_{TF}$) can be inserted between the source and the antenna to transform the impedance.
    *   **Method:** If the antenna impedance is $Z_{ant}$ and the source impedance is $Z_0$, then $Z_{TF} = \sqrt{Z_0 Z_{ant}}$.
    *   **Application:** Can be implemented as a wider or narrower microstrip line section.

*   **Using a Matching Network:**
    *   **Principle:** Employing lumped elements (capacitors and inductors) or distributed elements (stubs) to create an impedance transformation circuit.
    *   **Types of Matching Networks:**
        *   **L-matching:** Uses one series/shunt element and one shunt/series element.
        *   **Pi-matching:** Uses three elements.
        *   **Stub Matching:** Uses open-circuited or short-circuited stubs of a specific length to cancel out the reactive part of the impedance.

*   **Slot-Coupled and Aperture-Coupled Antennas:**
    *   **Principle:** The antenna element is fed through a slot in the ground plane. The dimensions and position of the slot, along with the feed line characteristics, are optimized to achieve impedance matching.
    *   **Advantage:** Offers good isolation between the feed and radiating element, allowing for more flexible impedance matching.

*   **Proximity-Coupled Antennas:**
    *   **Principle:** The feed line is placed parallel to the patch, separated by a small gap. The coupling between the feed line and the patch is adjusted by the gap width and the length of the coupled section.
    *   **Advantage:** Good isolation and flexible impedance control.

**Example:**

To match a microstrip patch with an input impedance of $100 + j0$ Ohms to a 50 Ohm system using feed point variation. If the impedance at the edge is $R_s = 200$ Ohms, and the propagation constant in the patch is $\beta$, the feed point distance $y$ from the edge can be found by:

$Z_{in} = R_s \cos^2(\beta y) = 50$
$\cos^2(\beta y) = 50 / 200 = 0.25$
$\cos(\beta y) = 0.5$
$\beta y = \pi/3$ (or 60 degrees)
$y = (\pi/3) / \beta$

This calculation, using the transmission line model, helps determine the optimal feed location for matching.

**Learning Outcome Addressed:**

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - This section directly relates to the design process for achieving impedance matching.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - Understanding these matching techniques is crucial for designing more complex and efficient advanced antennas.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 13 details various feeding techniques and impedance matching methods for microstrip antennas.
*   **Garg (2001):** Chapter 6 provides practical examples and detailed derivations for matching techniques.
*   **Milligan (2/e):** Chapter 5 offers comprehensive coverage of impedance matching techniques applicable to various antenna types, including microstrip.
*   **Kraus (3/e):** Chapter 12 discusses impedance matching in general antenna applications, providing fundamental principles.

---

### 5. Measurement of Input Impedance

Once an antenna is designed and fabricated, its input impedance needs to be measured to verify the design and to characterize its performance.

**Key Measurement Techniques:**

*   **Vector Network Analyzer (VNA):**
    *   **Principle:** A VNA is the primary instrument for measuring the scattering parameters (S-parameters) of a two-port network (the antenna). From S-parameters, input impedance, reflection coefficient ($\Gamma$), VSWR, and return loss can be directly calculated.
    *   **Procedure:**
        1.  **Calibration:** The VNA is calibrated using standard calibration kits to remove the effects of cables and connectors.
        2.  **Connection:** The antenna's input port is connected to one port of the VNA using a suitable transmission line and connector.
        3.  **Measurement:** The VNA sweeps across a range of frequencies, measuring $S_{11}$ (the reflection coefficient at the input port).
        4.  **Data Extraction:** The measured $S_{11}$ is used to derive $Z_{in} = Z_0 \frac{1+S_{11}}{1-S_{11}}$, VSWR, and return loss.
    *   **Advantages:** Provides accurate, frequency-dependent measurements of impedance and matching parameters.

*   **Slotted Line Measurement:**
    *   **Principle:** A slotted line is a section of a transmission line with a longitudinal slot, allowing a probe to measure the voltage distribution along the line.
    *   **Procedure:**
        1.  The antenna is connected to the end of the slotted line (terminated with the antenna's impedance).
        2.  The voltage along the line is measured using the probe. The locations of voltage minima (nodes) and maxima (antinodes) indicate the standing wave pattern.
        3.  From the VSWR (ratio of maximum to minimum voltage) and the position of the first voltage minimum relative to the reference plane, the impedance of the antenna can be determined.
    *   **Limitations:** Less accurate than VNA, primarily used for DC or lower RF frequencies, and requires careful setup.

**Example:**

When measuring $S_{11}$ with a VNA, if the antenna is perfectly matched to 50 Ohms, the $S_{11}$ value will be very small (close to 0) across the operating frequency band. This would correspond to a VSWR close to 1:1 and a high return loss (e.g., -20 dB or better).

**Learning Outcome Addressed:**

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - This is directly related to the practical measurement of antenna parameters.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 14 (Antenna Measurements) discusses techniques like VNA measurements for characterizing antenna impedance.
*   **Garg (2001):** Chapter 12 (Measurement Techniques) covers practical aspects of measuring antenna parameters, including impedance.
*   **Milligan (2/e):** Chapter 12 focuses on antenna measurements and test procedures, including impedance measurements using VNAs.

---

### 6. Resonant Behavior and Input Impedance

The input impedance of a microstrip antenna exhibits a resonant behavior. At resonance, the reactance component of the input impedance is ideally zero, and the impedance is purely resistive.

**Key Aspects:**

*   **Resonant Frequency:** The frequency at which the antenna is designed to operate. At this frequency, the antenna exhibits maximum radiation efficiency and the imaginary part of the input impedance is zero.
*   **Input Resistance at Resonance ($R_{in}$):** This comprises the radiation resistance ($R_r$) and the loss resistance ($R_l$). $R_{in} = R_r + R_l$.
    *   **Radiation Resistance:** The equivalent resistance that would dissipate the same power as the antenna radiates.
    *   **Loss Resistance:** The resistance due to dielectric losses and conductor losses.
*   **Off-Resonance Behavior:**
    *   Below resonance, the antenna typically behaves inductively (positive reactance).
    *   Above resonance, the antenna typically behaves capacitively (negative reactance).
*   **Bandwidth:** The range of frequencies over which the antenna maintains a satisfactory impedance match (e.g., VSWR < 2:1 or return loss > 10 dB). The input impedance's resistive component and how it changes with frequency influence the antenna's bandwidth. A higher radiation resistance generally leads to a broader bandwidth.

**Example:**

A microstrip patch designed to resonate at 2 GHz might have an input impedance of, say, $50 + j0$ Ohms at 2 GHz. At 1.9 GHz, the impedance might be approximately $30 - j50$ Ohms (inductive), and at 2.1 GHz, it might be $35 + j45$ Ohms (capacitive).

**Learning Outcome Addressed:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding the resonant behavior is crucial for analyzing the energy transfer and radiation efficiency.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)** - This knowledge is vital for designing the antenna to resonate at the desired frequency and achieve the required bandwidth.

**Textbook References:**

*   **Balanis (4th Ed.):** Chapter 13 provides detailed discussions on the resonant behavior and bandwidth of microstrip antennas.
*   **Garg (2001):** Chapter 6 explains how the input impedance varies around the resonant frequency and its implications for bandwidth.

---

### 7. Important Points to Remember

*   **Input Impedance is Complex:** It has both resistive ($R_{in}$) and reactive ($X_{in}$) components.
*   **Impedance Matching is Key:** To maximize power transfer and minimize reflections, $Z_{in}$ should match the characteristic impedance of the feed line.
*   **Feed Point Location is Critical:** Moving the feed point changes the impedance seen at the input.
*   **Antenna Dimensions and Substrate Properties Influence $Z_{in}$:** Length, width, thickness, and dielectric constant all play significant roles.
*   **Models Simplify Analysis:** Transmission line and cavity models are useful for prediction, but full-wave EM solvers offer the highest accuracy.
*   **VNA is the Standard Measurement Tool:** It measures S-parameters from which impedance and matching parameters are derived.
*   **Resonance:** At resonance, reactance is zero, and impedance is purely resistive, ideally matching the feed line impedance.
*   **Bandwidth is Related to Impedance Behavior:** Wider bandwidth is generally achieved when the resistive part of the impedance is higher and the reactive part changes slowly around resonance.

---

### 8. Practice Questions and Exercises

**Question 1:**

Explain how the width of a rectangular microstrip patch antenna affects its input impedance, particularly its radiation resistance. (CO1 - K3)

**Answer:**
Increasing the width of a rectangular microstrip patch antenna increases the effective aperture for radiation. This leads to an increase in the radiation resistance ($R_r$). A higher radiation resistance generally results in a better impedance match to a standard 50 Ohm system and can also contribute to a broader bandwidth. The transmission line model indicates that the radiation resistance is proportional to $(W/\lambda_0)^2$, where W is the width and $\lambda_0$ is the free-space wavelength, but this is a simplification. More accurate models show a direct relationship between width and radiation resistance.

**Question 2:**

Describe the main principle behind the transmission line model for calculating the input impedance of a microstrip patch antenna. What are its limitations? (CO1 - K3)

**Answer:**
The transmission line model treats the microstrip patch as a section of a uniform transmission line (approximately $\lambda_g/2$ long for a dominant mode) terminated at its radiating edges by slots. These slots are modeled as admittances, representing the radiation and stored energy at the edges. The input impedance is calculated by transforming the terminating admittances along the transmission line to the feed point using transmission line equations.

**Limitations:**
*   It assumes the radiating edges behave like uniform slots.
*   It simplifies the fringing fields and their contributions to radiation.
*   It is less accurate for higher-order modes or complex patch geometries.
*   It doesn't precisely account for all loss mechanisms.

**Question 3:**

You have fabricated a rectangular microstrip patch antenna designed to resonate at 2 GHz and match to a 50 Ohm coaxial line. Upon measurement with a VNA, you observe the following $S_{11}$ values:
*   At 2.0 GHz: $S_{11} = -15$ dB
*   At 1.95 GHz: $S_{11} = -8$ dB
*   At 2.05 GHz: $S_{11} = -7$ dB

Calculate the VSWR at 2.0 GHz and estimate the bandwidth of the antenna for a VSWR of 2:1. (CO2 - K4)

**Answer:**

**VSWR Calculation at 2.0 GHz:**
The relationship between $S_{11}$ (in dB) and the reflection coefficient $|\Gamma|$ is:
$|\Gamma| = 10^{S_{11}(dB)/20}$

At 2.0 GHz, $S_{11} = -15$ dB:
$|\Gamma|_{2.0 GHz} = 10^{-15/20} = 10^{-0.75} \approx 0.1778$

The VSWR is related to $|\Gamma|$ by:
$VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$

$VSWR|_{2.0 GHz} = \frac{1 + 0.1778}{1 - 0.1778} = \frac{1.1778}{0.8222} \approx 1.432$

So, the VSWR at 2.0 GHz is approximately 1.43:1.

**Bandwidth Estimation for VSWR = 2:1:**
A VSWR of 2:1 corresponds to a reflection coefficient $|\Gamma|$:
$2 = \frac{1 + |\Gamma|}{1 - |\Gamma|}$
$2(1 - |\Gamma|) = 1 + |\Gamma|$
$2 - 2|\Gamma| = 1 + |\Gamma|$
$1 = 3|\Gamma|$
$|\Gamma| = 1/3 \approx 0.333$

In dB, $|\Gamma|_{dB} = 20 \log_{10}(1/3) \approx 20 \log_{10}(0.333) \approx 20 \times (-0.477) \approx -9.54$ dB.

From the given data:
*   At 1.95 GHz, $S_{11} = -8$ dB, which is better than -9.54 dB (meaning $|\Gamma|$ is smaller).
*   At 2.05 GHz, $S_{11} = -7$ dB, which is better than -9.54 dB.

The bandwidth for VSWR $\leq$ 2:1 is typically defined as the frequency range where $S_{11} \leq -9.54$ dB.
Since both 1.95 GHz and 2.05 GHz have $S_{11}$ values better than -9.54 dB, the bandwidth appears to be at least from 1.95 GHz to 2.05 GHz.

**Estimated Bandwidth:**
The lower frequency edge is at least 1.95 GHz. To estimate the upper edge, we'd need more data points or assume a symmetric behavior around the resonant frequency. However, based on the limited data, we know that 1.95 GHz and 2.05 GHz are within the 2:1 VSWR bandwidth.

Let's assume the $-8$ dB point at 1.95 GHz and the $-7$ dB point at 2.05 GHz are close to the edges of the bandwidth of interest for a broader definition or if the target was slightly higher than 2:1. For a strict 2:1 VSWR (approx -9.54 dB):
The frequency where $S_{11}$ crosses -9.54 dB is the bandwidth limit. Based on the values, the bandwidth seems to be roughly from 1.95 GHz up to at least 2.05 GHz. If we extrapolate, the $-9.54$ dB points would be slightly lower than 1.95 GHz and slightly higher than 2.05 GHz.

Let's assume the question implies that these are the critical points. The bandwidth is approximately $2.05 - 1.95 = 0.1$ GHz or 100 MHz, centered around 2 GHz.

**Question 4:**

What is the role of the dielectric substrate thickness ($h$) in the input impedance of a microstrip antenna? (CO1 - K3, CO2 - K4)

**Answer:**
Increasing the dielectric substrate thickness ($h$) has several effects on the input impedance:
1.  **Increased Radiation Resistance:** A thicker substrate leads to more fringing fields, which spread out more. This increases the effective aperture for radiation and, consequently, the radiation resistance of the patch.
2.  **Lower Characteristic Impedance of Equivalent Transmission Line:** The effective permittivity of the microstrip line decreases with increasing thickness, leading to a lower characteristic impedance for the equivalent transmission line model.
3.  **Broader Bandwidth:** A higher radiation resistance and a lower characteristic impedance can contribute to a broader operational bandwidth for the antenna.
4.  **Increased Surface Wave Excitation:** For very thick substrates, the excitation of surface waves can become significant, which can lead to power loss and affect the impedance matching.

---

This concludes the study notes for the Input Impedance of Microstrip Antennas. Remember to refer to the provided textbooks for further details and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
