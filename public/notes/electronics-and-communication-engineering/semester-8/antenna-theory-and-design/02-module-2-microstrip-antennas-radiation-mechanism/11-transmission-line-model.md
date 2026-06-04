---
title: "Transmission line model"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7dd"
status: "completed"
scrapedAt: "2026-05-23T18:11:52.435Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Transmission Line Model

**Learning Outcomes:**

*   Understand the fundamental concept of the transmission line model for microstrip antennas.
*   Relate the parameters of a transmission line to the behavior of a microstrip antenna.
*   Analyze the radiation from microstrip antennas using the transmission line model.
*   Predict the resonant frequency and radiation characteristics of microstrip antennas based on the transmission line model.
*   Apply the transmission line model to understand the design principles of various microstrip antenna configurations.

---

### 1. Introduction to Microstrip Antennas and the Need for Modeling

Microstrip antennas, also known as patch antennas, are planar antennas constructed from a metallized patch on one side of a dielectric substrate and a ground plane on the other. They are popular due to their low profile, conformal nature, ease of integration with microwave circuits, and low manufacturing cost.

To analyze and design these antennas, we need simplified models that can predict their behavior. The **Transmission Line Model** is one of the earliest and most intuitive models used to understand the radiation mechanism and characteristics of microstrip patch antennas.

*   **Key Concept:** Simplifies the complex EM behavior of a microstrip patch into a more manageable transmission line structure.

---

### 2. The Transmission Line Model: Core Concepts

The transmission line model treats the microstrip patch antenna as a section of a uniform transmission line with a specific characteristic impedance ($Z_0$) and propagation constant ($\gamma$). The radiating elements are then considered to be the discontinuities at the ends of this transmission line, which are typically open circuits or connected to feed lines.

#### 2.1. Basic Structure of a Microstrip Patch Antenna

A basic microstrip patch antenna consists of:

*   **Radiating Patch:** A conductive element (usually rectangular or circular) on which the current distribution primarily exists.
*   **Dielectric Substrate:** A material with permittivity ($\epsilon_r$) and thickness ($h$) separating the patch and the ground plane.
*   **Ground Plane:** A conductive plane that forms the bottom layer of the structure.

**(See Balanis, 4th Ed., Chapter 13, Figure 13.1 for a typical microstrip antenna structure.)**

#### 2.2. Relating the Patch to a Transmission Line

The transmission line model conceptualizes the microstrip patch as a section of a two-dimensional transmission line formed by the patch and the ground plane. The fields propagating along the patch can be approximated as a dominant TEM (Transverse Electromagnetic) or quasi-TEM mode, similar to a standard transmission line.

*   **Key Concept:** The patch acts as a transmission line segment, with radiating slots at its edges.

#### 2.3. Characteristic Impedance of the Microstrip Line

The characteristic impedance ($Z_0$) of the microstrip line (the effective transmission line formed by the patch and ground plane) is a crucial parameter. It depends on the width of the patch ($W$), the thickness of the substrate ($h$), and the dielectric constant of the substrate ($\epsilon_r$).

*   **Formula (approximate, for calculating Z0):**
    *   For $W/h \ge 1$:
        $Z_0 \approx \frac{377}{\sqrt{\epsilon_{eff}}} \left( \frac{W}{h} + 1.393 + 0.667 \ln\left(\frac{W}{h} + 1.444\right) \right)^{-1}$
    *   For $W/h < 1$:
        $Z_0 \approx \frac{377}{\sqrt{\epsilon_{eff}}} \left( \frac{W}{h} + 0.430 \right)^{-1}$
    *   Where $\epsilon_{eff}$ is the effective dielectric constant, which accounts for the fringing fields.

**(Refer to Balanis, 4th Ed., Chapter 13, Section 13.2.1 for detailed formulas on characteristic impedance and effective dielectric constant.)**

*   **Important Point:** The effective dielectric constant ($\epsilon_{eff}$) is less than the actual dielectric constant ($\epsilon_r$) because some fields fringe into the air.

---

### 3. Radiation Mechanism in the Transmission Line Model

The transmission line model explains radiation by considering the microstrip patch as a transmission line with open-circuited ends. These open-circuited edges act as radiating slots.

#### 3.1. Radiating Slots

The edges of the microstrip patch, particularly the radiating edges (typically the edges parallel to the direction of current flow), are considered to be radiating slots. These slots support magnetic currents that radiate electromagnetic waves.

**(See Balanis, 4th Ed., Chapter 13, Figure 13.3 for illustration of radiating slots.)**

*   **Key Concept:** Radiation occurs due to the fringing fields at the open edges of the patch, which can be modeled as slots.

#### 3.2. Equivalent Circuit Model

The transmission line model can be represented by an equivalent circuit. A segment of microstrip line of length $L$ is modeled as a section of transmission line loaded at its ends with radiating slots. These slots are typically represented by a parallel combination of a resistor (radiation resistance) and a capacitor (edge capacitance or open-circuit susceptance).

*   **Model:** A uniform transmission line of length $L$ terminated by equivalent radiating slots.
*   **Radiating Slot Model:** Each slot can be modeled as a parallel combination of radiation resistance ($R_r$) and susceptance ($B_s$) representing the stored energy at the edges.

**(Refer to Garg, Chapter 3, Section 3.2.1 for detailed equivalent circuit models.)**

#### 3.3. Resonant Frequency

The resonant frequency of the microstrip patch occurs when the electrical length of the transmission line segment is approximately half a wavelength. In the transmission line model, this corresponds to the fundamental mode of propagation.

*   **Effective Length:** The physical length of the patch ($L$) is extended by "fringe lengths" ($\Delta L$) at each end due to the fringing fields. The effective length is $L_{eff} = L + 2\Delta L$.
*   **Resonant Condition:** For a rectangular patch, resonance occurs when the effective length is half a wavelength: $L_{eff} = \lambda_0/2$, where $\lambda_0$ is the wavelength in the dielectric medium.
*   **Effective Wavelength:** $\lambda_g = \frac{\lambda_0}{\sqrt{\epsilon_{eff}}}$
*   **Resonant Frequency (f_r):** $f_r = \frac{c}{2 L_{eff} \sqrt{\epsilon_{eff}}} = \frac{c}{2 (L + 2\Delta L) \sqrt{\epsilon_{eff}}}$, where $c$ is the speed of light in vacuum.

*   **Fringe Length ($\Delta L$):** An empirical formula for $\Delta L$ is:
    $\Delta L \approx 0.412 h \frac{(\epsilon_{eff} + 0.3)}{\left(\epsilon_{eff} - 0.255\right)} \frac{(W/h + 0.69)}{\left(W/h + 0.42\right)}$

**(Refer to Balanis, 4th Ed., Chapter 13, Section 13.2.2 for derivation of resonant frequency and fringe length.)**

*   **Example:** A rectangular patch of length $L=3$ cm, width $W=4$ cm, on a substrate with $\epsilon_r=2.32$ and $h=0.16$ cm. If the effective dielectric constant $\epsilon_{eff} \approx 2.18$ and the fringe length $\Delta L \approx 0.05$ cm, calculate the resonant frequency.

    *   $L_{eff} = L + 2\Delta L = 3 + 2(0.05) = 3.1$ cm.
    *   $f_r = \frac{3 \times 10^8 \text{ m/s}}{2 \times (3.1 \times 10^{-2} \text{ m}) \times \sqrt{2.18}}$
    *   $f_r \approx \frac{3 \times 10^{10}}{6.2 \times 1.476} \approx \frac{3 \times 10^{10}}{9.1512} \approx 3.278 \times 10^9 \text{ Hz} = 3.278 \text{ GHz}$

#### 3.4. Radiation Resistance

The radiation resistance ($R_r$) represents the equivalent resistance that dissipates power in the form of radiated electromagnetic waves. In the transmission line model, it's associated with the radiating slots.

*   **Calculation:** The radiation resistance can be calculated by considering the fields radiated by the slots at the edges. For a rectangular patch, the radiation resistance is typically calculated for the dominant modes at the radiating edges.

    *   For the edges parallel to the $E$-field (length $L$): $R_r \approx \frac{2}{\pi} \eta_0 \frac{L}{W} \frac{1}{\epsilon_{eff}} (\frac{\pi}{2})^2$ (simplified, actual formulas are more complex and depend on the mode and edge).
    *   More accurately, considering the aperture radiation from the slots at the edges, the radiation resistance at the edges parallel to the current can be calculated.

**(Refer to Balanis, 4th Ed., Chapter 13, Section 13.2.3 for detailed radiation resistance calculations.)**

*   **Effect of Substrate Thickness:** Thicker substrates generally lead to higher radiation resistance and wider bandwidth.
*   **Effect of Dielectric Constant:** Lower dielectric constants generally lead to higher radiation resistance and wider bandwidth.

---

### 4. Transmission Line Model for Different Patch Configurations

The transmission line model can be extended to analyze various microstrip antenna configurations.

#### 4.1. Rectangular Microstrip Patch Antenna

This is the most common configuration analyzed using the transmission line model. The radiating edges are the ones parallel to the electric field lines, typically the shorter edges in a standard rectangular patch.

**(See Balanis, 4th Ed., Chapter 13, Section 13.2 for detailed analysis.)**

#### 4.2. Circular Microstrip Patch Antenna

For a circular patch, the analysis is more complex. It's often modeled as a shorted radial transmission line. The resonant frequencies correspond to the modes of propagation in this structure.

*   **Key Concept:** Circular patches have TM$_{nm}$ modes, and their resonant frequencies are determined by the roots of Bessel functions.
*   **Radiating Edges:** The entire circumference of the circular patch acts as a radiating aperture.

**(Refer to Garg, Chapter 3, Section 3.4 for analysis of circular patches.)**

#### 4.3. Other Patch Shapes (e.g., Triangular, Annular Ring)

The transmission line model can be adapted, though the complexity increases. For shapes with straight edges, an approximation to transmission line segments with appropriate end effects might still be applicable. For more complex shapes, other modeling techniques (e.g., cavity model, full-wave EM simulators) become more suitable.

---

### 5. Advantages and Limitations of the Transmission Line Model

#### 5.1. Advantages

*   **Intuitive Understanding:** Provides a simple and intuitive way to understand the basic radiation mechanism and resonance of microstrip antennas.
*   **Ease of Calculation:** Allows for relatively straightforward calculations of resonant frequency and impedance, especially for rectangular patches.
*   **Design Guidance:** Offers good initial design guidelines for selecting parameters like patch dimensions.
*   **Foundation for More Complex Models:** Serves as a foundational model for understanding more sophisticated analyses.

#### 5.2. Limitations

*   **Quasi-TEM Assumption:** Assumes a quasi-TEM mode of propagation, which is not strictly true for microstrip lines due to the dielectric interface and fringing fields. This leads to approximations.
*   **Neglect of Higher-Order Modes:** Primarily focuses on the dominant mode and may not accurately predict the behavior related to higher-order modes.
*   **Approximations in Radiation:** The modeling of radiating slots and their associated impedance is an approximation.
*   **Limited for Complex Structures:** Becomes less accurate for complex patch shapes, thick substrates, or antennas with significant mutual coupling.
*   **Does Not Directly Account for Feed Line Coupling:** While it helps in impedance matching, it doesn't explicitly model the coupling mechanism from the feed line into the radiating patch.

**(Refer to Pozar, 4th Ed., Chapter 12, Section 12.2 for discussion on limitations and comparison with other models.)**

---

### 6. Practical Implications and Design Considerations

*   **Bandwidth:** The transmission line model helps understand how parameters like substrate thickness and dielectric constant affect bandwidth. Thicker substrates and lower dielectric constants generally lead to wider bandwidth by increasing the radiation resistance and stored energy.
*   **Impedance Matching:** By adjusting the feed point location on the patch (which is modeled as a transmission line), impedance matching to the feed network can be achieved. For a 50-ohm feed line, the feed point is typically located closer to the center of the radiating edge for higher impedance patches and further away for lower impedance patches.
*   **Polarization:** The transmission line model, by itself, primarily describes linearly polarized radiation. To achieve circular polarization, modifications like introducing a perturbation on the patch or using specific feed techniques are required, which are extensions beyond the basic transmission line model.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the fundamental principle of the transmission line model for microstrip antennas. How does it simplify the analysis of radiation?

**Answer:**
The transmission line model simplifies the analysis of a microstrip antenna by treating the patch as a section of a uniform transmission line. The radiating elements are modeled as slots at the edges of this transmission line. This approach allows us to use well-established transmission line theory to predict parameters like resonant frequency and impedance. Radiation occurs due to the fringing fields at the open-circuited edges, which are conceptualized as radiating slots.

**Question 2:**
For a rectangular microstrip patch antenna, which edges are typically considered the primary radiating edges in the transmission line model?

**Answer:**
The edges parallel to the direction of the dominant electric field, which are typically the shorter edges of a rectangular patch, are considered the primary radiating edges in the transmission line model. These edges support the fringing fields that radiate electromagnetic energy.

**Question 3:**
What is the role of "effective length" and "fringe length" in determining the resonant frequency of a microstrip patch using the transmission line model?

**Answer:**
The "effective length" ($L_{eff}$) is the physical length of the patch plus the fringe lengths ($\Delta L$) at both ends. This accounts for the extension of the electrical length due to the fringing fields at the edges. The resonant frequency is determined by the condition where the effective length is approximately half a wavelength in the dielectric medium ($L_{eff} = \lambda_g/2$). The "fringe length" itself quantifies this electrical extension at each edge.

**Question 4:**
A rectangular microstrip patch has a physical length of 2 cm, width of 3 cm, and is fabricated on a substrate with $\epsilon_r = 4.4$ and thickness $h = 0.15$ cm. If the effective dielectric constant is $\epsilon_{eff} \approx 3.8$ and the fringe length $\Delta L \approx 0.04$ cm, calculate the resonant frequency.

**Answer:**
Given:
$L = 2$ cm
$W = 3$ cm
$\epsilon_r = 4.4$
$h = 0.15$ cm
$\epsilon_{eff} \approx 3.8$
$\Delta L \approx 0.04$ cm

Effective length, $L_{eff} = L + 2\Delta L = 2 \text{ cm} + 2 \times 0.04 \text{ cm} = 2.08 \text{ cm}$.

The resonant frequency is given by:
$f_r = \frac{c}{2 L_{eff} \sqrt{\epsilon_{eff}}}$

Where $c = 3 \times 10^8$ m/s.
$L_{eff} = 2.08 \text{ cm} = 0.0208 \text{ m}$.

$f_r = \frac{3 \times 10^8 \text{ m/s}}{2 \times 0.0208 \text{ m} \times \sqrt{3.8}}$
$f_r = \frac{3 \times 10^8}{0.0416 \times 1.94936}$
$f_r = \frac{3 \times 10^8}{0.081153}$
$f_r \approx 3.696 \times 10^9 \text{ Hz}$
$f_r \approx 3.70 \text{ GHz}$

**Question 5:**
Discuss two limitations of the transmission line model for microstrip antennas.

**Answer:**
Two limitations of the transmission line model are:
1.  **Quasi-TEM Assumption:** The model assumes a quasi-TEM mode of propagation, which is an approximation. In reality, microstrip lines have a non-TEM mode due to the dielectric interface and fringing fields, leading to inaccuracies in propagation constant and characteristic impedance calculations, especially for thicker substrates.
2.  **Approximation of Radiating Slots:** The model simplifies the radiating edges into equivalent slots. The impedance (radiation resistance and reactance) of these slots is approximated, and this simplification can limit the accuracy in predicting radiation efficiency and pattern, particularly for complex geometries or thick substrates. It also doesn't explicitly account for higher-order modes that can contribute to radiation.

---

### 8. Important Points to Remember

*   The transmission line model treats the microstrip patch as a transmission line segment loaded by radiating slots at its edges.
*   Radiation primarily occurs from the fringing fields at the open-circuited edges.
*   The resonant frequency is determined by the effective length of the patch, which includes fringe lengths due to fringing fields.
*   Characteristic impedance and effective dielectric constant are critical parameters in the model.
*   Thicker substrates and lower dielectric constants generally lead to higher radiation resistance and wider bandwidth.
*   The model is most accurate for thin substrates and for rectangular patches operating in the dominant mode.
*   It's a powerful tool for initial design and conceptual understanding but has limitations for complex scenarios.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References and Further Reading

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.** (Chapter 13 - Microstrip Antennas)
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech House.** (Chapter 3 - Transmission Line Model)
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.** (Chapter 12 - Planar Transmission Lines and Printed Circuit Antennas)

---

**Alignment with Course Outcomes:**

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic directly addresses the radiation mechanism of microstrip antennas by explaining it through the lens of the transmission line model and radiating slots. Students can analyze how the structure and parameters influence radiation.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   The transmission line model provides the theoretical basis for designing microstrip antennas, enabling students to calculate resonant frequencies and understand impedance matching. This knowledge is crucial for subsequent design and measurement activities.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4)**
    *   While the transmission line model is basic, it forms the foundation for understanding more complex microstrip antenna structures and variations. It's a stepping stone to analyzing and designing advanced antennas that may incorporate principles derived from this model.

---