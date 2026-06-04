---
title: "Input Impedance"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7d8"
status: "completed"
scrapedAt: "2026-05-23T18:11:48.263Z"
---
# ANTENNA THEORY AND DESIGN: Module 2: Microstrip antennas: Radiation mechanism

## Topic: Input Impedance

**Module Learning Outcome:** To understand the fundamental principles governing the input impedance of microstrip antennas.

**Course Outcomes Addressed:**

*   **CO1 (K3):** Analyse the radiation mechanism of antennas. (Understanding how the physical structure influences the electrical properties like input impedance is crucial for analyzing radiation.)
*   **CO2 (K4):** Design and measure the parameters of a microstrip antenna. (Input impedance is a key parameter that directly affects matching and efficiency, vital for design and measurement.)
*   **CO3 (K4):** Analyse and design advanced antennas. (The principles of input impedance apply to more complex microstrip antenna configurations.)

---

### 1. Introduction to Input Impedance in Microstrip Antennas

The **input impedance** ($Z_{in}$) of an antenna is the impedance seen by the source connected to the antenna's terminals. It's a complex quantity, comprising a **resistance** component ($R_{in}$) and a **reactance** component ($X_{in}$):

$Z_{in} = R_{in} + jX_{in}$

*   **Resistive Component ($R_{in}$):** Represents the power delivered to the antenna, including radiation resistance ($R_r$) and loss resistance ($R_l$).
    *   $R_{in} = R_r + R_l$
    *   $R_r$ is the resistance that dissipates power as radiation into space.
    *   $R_l$ accounts for losses due to finite conductivity of conductors (conductor losses) and dielectric losses in the substrate.
*   **Reactive Component ($X_{in}$):** Represents the energy stored in the electromagnetic field around the antenna. It can be inductive ($X_L > 0$) or capacitive ($X_C < 0$).

For efficient power transfer from the source to the antenna, the antenna's input impedance must be matched to the source impedance (typically 50 ohms for most RF systems). Impedance mismatch leads to reflections and reduced power delivery.

**Textbook Reference:** Balanis, Ch. 1, Section 1.3 "Antenna Parameters" (Discusses impedance concepts generally).

---

### 2. Factors Affecting Input Impedance of Microstrip Antennas

The input impedance of a microstrip antenna is highly dependent on its physical and electrical parameters. Key factors include:

*   **Antenna Geometry:**
    *   **Patch Shape:** Rectangular, circular, triangular, etc.
    *   **Patch Dimensions:** Length, width, radius.
    *   **Feed Point Location:** Where the transmission line connects to the patch.
*   **Substrate Properties:**
    *   **Dielectric Constant ($\epsilon_r$):** Higher $\epsilon_r$ generally leads to smaller antennas but can affect bandwidth and impedance.
    *   **Substrate Thickness ($h$):** Thicker substrates tend to offer wider bandwidth and lower characteristic impedance.
*   **Ground Plane:** Its size and proximity can influence the impedance.
*   **Feed Mechanism:** Probe feed, microstrip line feed, aperture coupling, etc.
*   **Operating Frequency:** The impedance is frequency-dependent.

**Textbook Reference:** Garg, Ch. 3 "Microstrip Antennas: Basic Concepts" (Details various factors influencing microstrip antenna parameters).

---

### 3. Radiation Mechanism and Input Impedance

The radiation mechanism in microstrip antennas is primarily attributed to the **fringing fields** at the edges of the patch. These fringing fields can be visualized as equivalent magnetic current sheets along the radiating edges.

*   **Radiating Edges:** For a rectangular patch, the dominant radiation comes from the electric field fringing across the width edges. These edges act as effective magnetic dipoles.
*   **Slotline Model:** The microstrip antenna can be conceptually modeled as a **slotline** (or radiating aperture) between the patch and the ground plane. The excitation of the antenna by the feed line creates fields that radiate from these slots.
*   **Effect of Resonant Modes:** The input impedance is critically dependent on whether the antenna is operating at a resonant frequency. At resonance, the reactive component ($X_{in}$) ideally becomes zero, and the impedance is purely resistive.

**CO1 Alignment:** This section directly links the physical structure and the fringing fields (radiation mechanism) to the electrical property of input impedance.

**Textbook Reference:** Balanis, Ch. 14, Section 14.2 "Microstrip Antenna" (Explains the radiating mechanism).

---

### 4. Common Microstrip Antenna Configurations and Their Input Impedance

#### 4.1. Microstrip Line-Fed Patch Antenna

*   **Configuration:** A microstrip transmission line is directly connected to the edge of the patch. The feed point is critical.
*   **Input Impedance Behavior:**
    *   The input impedance varies significantly with the position of the feed point along the length of the patch.
    *   At the center of the patch (along its length), the impedance is highest.
    *   As the feed point moves towards the edges, the impedance decreases.
    *   By strategically placing the feed point, it's possible to match the antenna to a desired impedance (e.g., 50 ohms) at resonance.
*   **Antenna as a Resonant Circuit:** A microstrip patch can be approximated as a resonant circuit consisting of radiation resistance, dielectric and conductor losses, and a parallel resonant circuit (inductance and capacitance).

**Example:** For a rectangular patch fed by a microstrip line, the input impedance at a distance 'y' from the center of the patch's length can be approximated (using the transmission line model) as:

$Z_{in}(y) = Z_0 \frac{Z_L \cos(\beta y) + jZ_0 \sin(\beta y)}{Z_0 \cos(\beta y) + jZ_L \sin(\beta y)}$

where $Z_0$ is the characteristic impedance of the microstrip feed line, $Z_L$ is the load impedance at the end of the transmission line (the patch's impedance at the edge), and $\beta$ is the propagation constant. However, a more common approach for the feed point is to consider the impedance transformation from the radiating edges.

A simplified approach considers the patch as a radiating slot. The impedance at the radiating edges is typically low. Moving the feed point from the edge towards the center transforms this low impedance to a higher value.

**Textbook Reference:** Garg, Ch. 4 "Feed Techniques for Microstrip Antennas" (Details various feeding methods and their impedance characteristics).

#### 4.2. Probe-Fed Patch Antenna

*   **Configuration:** A coaxial probe penetrates the ground plane and connects to the center of the patch.
*   **Input Impedance Behavior:**
    *   The impedance at the center of the patch is usually high.
    *   The probe position determines the impedance. Moving the probe slightly off-center can alter the impedance.
    *   The probe inductance also contributes to the overall input impedance.
*   **Matching:** Matching is achieved by adjusting the probe penetration depth and its radial position from the center.

**Example:** The input impedance of a probe-fed patch can be approximated by considering the patch as a resonant cavity. The probe acts as a capacitive coupling element. The impedance at the center is related to the quality factor (Q) of the antenna.

**Reference Book:** Pozar, Ch. 11, Section 11.6 "Microstrip Antennas" (Provides insight into probe feeding and its effect on impedance).

#### 4.3. Aperture-Coupled Patch Antenna

*   **Configuration:** The patch is fed by a microstrip line on a separate substrate beneath the ground plane, coupled through an aperture (slot) in the ground plane.
*   **Input Impedance Behavior:**
    *   The input impedance is determined by the slot dimensions, position, and the feed line's characteristic impedance.
    *   This method offers better isolation between the feed and the radiating element, often resulting in a cleaner impedance match.
    *   The aperture coupling introduces its own reactive components.

**Textbook Reference:** Garg, Ch. 4 "Feed Techniques for Microstrip Antennas" (Discusses aperture coupling in detail).

---

### 5. Modeling Input Impedance

Various models are used to predict and analyze the input impedance of microstrip antennas.

#### 5.1. Transmission Line Model

*   **Concept:** The microstrip patch is modeled as a section of a transmission line with radiating slots at its ends. The characteristic impedance and propagation constant of this effective transmission line are determined by the patch dimensions and substrate properties.
*   **Application:** Useful for understanding the resonant behavior and impedance variation with feed point location for simple rectangular patches.
*   **Limitations:** Assumes uniform fields, which is not entirely true due to fringing. Doesn't accurately account for all parasitic effects.

**Textbook Reference:** Balanis, Ch. 14, Section 14.2.1 "Transmission Line Model" (Explains the setup and impedance calculation).

#### 5.2. Cavity Model

*   **Concept:** The microstrip antenna is modeled as a resonant cavity bounded by magnetic walls at the radiating edges and electric walls at the non-radiating edges. The input impedance is then calculated based on the fields inside the cavity and the coupling mechanism at the feed point.
*   **Application:** Provides a more accurate prediction of resonant frequency and impedance, especially when considering the field distribution within the patch. It can also account for conductor and dielectric losses more effectively.
*   **Advantages:** Can predict radiation resistance more accurately by considering the power radiated from the apertures (fringing fields).

**Example Calculation (Conceptual):** The cavity model helps derive the radiation resistance ($R_r$) by summing the power radiated from the equivalent magnetic currents at the edges. The resonant impedance of the cavity can be expressed in terms of the Q-factor, substrate thickness, and dielectric constant.

**Textbook Reference:** Balanis, Ch. 14, Section 14.2.2 "Cavity Model" (Details the model and its application for impedance calculations).

#### 5.3. Equivalent Circuit Model

*   **Concept:** The microstrip antenna can be represented by an equivalent lumped-element circuit, typically an RLC parallel or series resonant circuit, depending on the feed method and operating point.
*   **Application:** Simplifies analysis and matching network design.
*   **Probe Feed:** Often modeled as a parallel RLC circuit, with the probe inductance adding to the overall inductance.
*   **Line Feed:** Can be modeled by considering the impedance transformation along the feed line and the radiating element at the end.

**Example:** A probe-fed patch operating near resonance can be approximated by a parallel RLC circuit where:
*   R represents the total resistance (radiation + loss).
*   L represents the inductance of the patch and probe.
*   C represents the capacitance of the patch.

The resonant frequency ($f_r$) is given by $f_r = \frac{1}{2\pi\sqrt{LC}}$. The input impedance at resonance is approximately R.

**Reference Book:** Raju, Ch. 5 "Microstrip Antennas" (Discusses equivalent circuit models for different microstrip antenna configurations).

---

### 6. Impedance Matching Techniques

Achieving a good impedance match is crucial for maximizing power transfer. Common techniques include:

*   **Varying Feed Point Location:** For microstrip line feeds, shifting the feed point along the length of the patch can adjust the impedance.
*   **Probe Depth and Position Adjustment:** For probe feeds, modifying the probe's penetration depth and its radial position can tune the impedance.
*   **Antenna Element Modification:**
    *   **Slotted Patches:** Introducing slots in the patch can alter its current distribution and impedance.
    *   **Corrugated Patches:** Similar effect to slots.
*   **Use of Matching Networks:**
    *   **L-Matching Networks:** Using series or parallel inductors and capacitors.
    *   **Quarter-Wave Transformers:** For impedance transformation.
    *   **Stub Tuning:** Using open- or short-circuited stubs.
*   **Notching Techniques:** Notching the edges of the patch can help match impedance by altering the current paths.

**CO2 Alignment:** This section directly addresses designing for a specific impedance by applying matching techniques.

**Textbook Reference:** Garg, Ch. 4 "Feed Techniques for Microstrip Antennas" (Covers various matching techniques for microstrip antennas).

---

### 7. Key Concepts and Definitions

*   **Input Impedance ($Z_{in}$):** The impedance seen at the antenna terminals.
*   **Radiation Resistance ($R_r$):** The equivalent resistance that dissipates power as radiation.
*   **Loss Resistance ($R_l$):** The resistance due to conductor and dielectric losses.
*   **Reactance ($X_{in}$):** The imaginary part of the impedance, representing stored energy.
*   **Impedance Matching:** The process of making the antenna's input impedance equal to the source impedance to maximize power transfer.
*   **Standing Wave Ratio (SWR):** A measure of impedance mismatch. Lower SWR indicates better matching.
*   **Resonance:** The condition where the antenna's reactance is zero, and the impedance is purely resistive.
*   **Fringing Fields:** Electric fields that extend beyond the physical boundaries of the patch, responsible for radiation.

---

### 8. Important Points to Remember

*   The input impedance of a microstrip antenna is highly sensitive to its physical dimensions, substrate properties, and feed point location.
*   The radiation mechanism is primarily due to the fringing fields at the edges of the patch, which can be modeled as radiating slots.
*   The transmission line and cavity models are key tools for understanding and predicting the input impedance.
*   Achieving impedance matching is crucial for efficient operation. Techniques include adjusting the feed point, modifying the antenna geometry, and using matching networks.
*   The impedance at different points on the patch varies, allowing for matching by selecting an appropriate feed location.

---

### 9. Practice Questions and Exercises

**Question 1:**
Explain how the location of the feed point on a microstrip line-fed rectangular patch antenna affects its input impedance.

**Answer:**
The input impedance of a microstrip line-fed rectangular patch varies along its length. At the center of the patch (along its length), the impedance is highest, and as the feed point moves towards the radiating edges, the impedance decreases. This variation is due to the distribution of surface currents on the patch. By placing the feed point at a specific distance from the center, one can transform the impedance of the radiating edges (which are typically low) to the desired characteristic impedance of the feed line (e.g., 50 ohms) at resonance.

**Question 2:**
What are the two main components of the input impedance of an antenna? Briefly describe what each component represents.

**Answer:**
The input impedance ($Z_{in}$) of an antenna is composed of:
1.  **Resistance ($R_{in}$):** This component represents the power delivered to the antenna. It includes:
    *   **Radiation Resistance ($R_r$):** The equivalent resistance that dissipates power as electromagnetic waves radiated into space.
    *   **Loss Resistance ($R_l$):** The equivalent resistance that accounts for power dissipated due to ohmic losses in conductors and dielectric losses in the substrate.
2.  **Reactance ($X_{in}$):** This component represents the energy stored in the electromagnetic fields around the antenna. It can be inductive (positive reactance) or capacitive (negative reactance).

**Question 3:**
For a probe-fed microstrip patch antenna, what are the primary factors that influence its input impedance? How can impedance matching be achieved?

**Answer:**
For a probe-fed microstrip patch antenna, the primary factors influencing its input impedance are:
*   **Probe position:** The radial distance of the probe from the center of the patch.
*   **Probe penetration depth:** How far the probe extends into the cavity formed by the patch and the ground plane.
*   **Antenna dimensions:** Length, width of the patch.
*   **Substrate properties:** Dielectric constant and thickness.

Impedance matching can be achieved by:
*   Adjusting the probe's radial position.
*   Adjusting the probe's penetration depth.
*   Slightly modifying the patch dimensions (e.g., tapering the edges).
*   Using parasitic elements or parasitic slots.

**Question 4:**
Discuss the fundamental difference between the transmission line model and the cavity model for analyzing microstrip antennas, particularly concerning input impedance.

**Answer:**
*   **Transmission Line Model:** Treats the microstrip patch as a section of a transmission line with radiating slots at the ends. It's simpler and provides good intuition about impedance variation with feed position. However, it often oversimplifies the field distribution and can be less accurate for radiation resistance.
*   **Cavity Model:** Models the patch as a resonant cavity bounded by magnetic walls at the radiating edges and electric walls at the non-radiating edges. This model considers the fields *within* the patch and calculates radiation resistance by integrating power radiated from the apertures. It's generally more accurate for predicting resonant frequency and radiation resistance, as it accounts for the detailed field distribution and loss mechanisms more effectively.

---

This concludes the study notes for the input impedance of microstrip antennas. Remember to consult the recommended textbooks for deeper insights and mathematical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
