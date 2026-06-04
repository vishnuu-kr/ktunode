---
title: "Broad banding of microstrip antenna using stacked elements"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7de"
status: "completed"
scrapedAt: "2026-05-23T18:11:53.279Z"
---
# ANTENNA THEORY AND DESIGN

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Broadbanding of Microstrip Antenna Using Stacked Elements

---

### 1. Introduction to Microstrip Antennas and the Need for Bandwidth Enhancement

Microstrip antennas, also known as patch antennas, are popular due to their low profile, conformal nature, ease of integration with microwave integrated circuits (MICs), and low manufacturing cost. However, a significant limitation of conventional microstrip antennas is their inherently narrow bandwidth, typically on the order of 1-5% of the center frequency. This narrow bandwidth can be a constraint for many modern wireless communication systems that require wider frequency operation.

**Key Concepts:**

*   **Bandwidth:** The range of frequencies over which an antenna performs within acceptable limits (e.g., Voltage Standing Wave Ratio (VSWR) < 2, gain within 3 dB of the maximum).
*   **VSWR (Voltage Standing Wave Ratio):** A measure of impedance mismatch. A VSWR of 2:1 is often considered the upper limit for acceptable performance in many applications.
*   **Gain:** The ratio of the power radiated by an antenna in a given direction to the power that would be radiated by an isotropic antenna in the same direction.

**Need for Bandwidth Enhancement:**

*   **Frequency Agility:** Allows systems to switch frequencies to avoid interference or utilize different communication channels.
*   **Multi-band/Wideband Operation:** Enables operation across multiple frequency bands or a continuous wide frequency range.
*   **Tolerance to Component Variations:** Wider bandwidth makes the antenna less sensitive to manufacturing tolerances and environmental changes.

---

### 2. Radiation Mechanism in Stacked Microstrip Antennas

Stacked microstrip antennas achieve broadband operation by employing two or more radiating elements placed in close proximity, typically in parallel planes, and coupled electromagnetically. This coupling introduces new resonant modes or broadens existing ones.

**Core Principle:**

The fundamental idea behind stacking is to excite multiple resonant modes at different frequencies within a single antenna structure. By controlling the spacing, dielectric properties, and dimensions of the stacked elements, these modes can be made to merge or overlap, resulting in a wider overall bandwidth.

**Mechanisms of Coupling:**

*   **Perturbation of Resonance:** Introducing a second radiating element perturbs the electromagnetic field distribution of the primary radiating element, leading to changes in its resonant frequency and radiation resistance.
*   **Excitation of Additional Modes:** The interaction between the stacked elements can excite higher-order modes or new modes that have broader radiation characteristics.
*   **Parasitic Coupling:** The upper element can act as a parasitic radiator, coupled to the driven lower element, creating a multi-resonant structure.

**Reference:**

*   **Balanis, C. A. (4th ed., 2016), Chapter 13 (Microstrip Antennas):** Balanis provides a foundational understanding of microstrip antenna operation and introduces methods for bandwidth enhancement, including stacking.
*   **Garg, R. (2001), Chapter 3 (Design and Analysis of Microstrip Antennas) and Chapter 7 (Broadband Microstrip Antennas):** Garg's handbook delves deeply into various broadbanding techniques, with extensive coverage of stacked configurations and their design principles.

---

### 3. Common Configurations of Stacked Microstrip Antennas

Several configurations are used for stacked microstrip antennas to achieve broadband operation. These differ in the arrangement of the radiating elements and the feeding method.

#### 3.1. Stacked Patch Antennas with Air Gap

This is a widely used and effective method for broadbanding. Two or more patch elements are placed parallel to each other with an air gap (or low-permittivity dielectric material) between them.

*   **Configuration:**
    *   **Lower Element (Driven):** Typically a larger patch, fed by a microstrip line or probe.
    *   **Upper Element (Parasitic):** Typically a smaller patch, placed above the driven element.
    *   **Air Gap:** The dielectric layer separating the patches. The thickness and permittivity of this gap significantly influence the coupling and bandwidth.

*   **Operation:** The upper parasitic patch is excited by the electromagnetic fields radiating from the lower driven patch. This interaction creates two closely spaced resonant frequencies, which can be tailored to overlap and create a broadband response.

*   **Design Considerations:**
    *   **Patch Dimensions:** The dimensions of both patches determine their individual resonant frequencies. The lower patch usually resonates at a lower frequency, and the upper patch at a higher frequency.
    *   **Air Gap Thickness:** A thicker air gap (lower dielectric constant) generally leads to stronger coupling and broader bandwidth, but also increases the overall profile of the antenna.
    *   **Substrate Thickness:** The dielectric constant and thickness of the substrate supporting the driven element are crucial.

*   **Example:** A common configuration involves a square patch on a thin substrate, fed by a probe, with a larger square patch suspended above it with an air dielectric.

**Figure (Conceptual):**

```
      +--------------------+  (Upper Parasitic Patch)
      |                    |
      +--------------------+
              ^
              | Air Gap (Dielectric)
              v
      +--------------------+  (Lower Driven Patch)
      |   [Feed Point]     |
      +--------------------+
      ---------------------- (Ground Plane)
```

#### 3.2. Stacked Patch Antennas with Dielectric Spacer

Similar to the air gap configuration, but a dielectric material with a higher permittivity than air is used as the spacer.

*   **Configuration:** Similar to the air gap configuration, but the gap is filled with a dielectric material.

*   **Operation:** The dielectric material influences the coupling between the patches and can modify the resonant frequencies. A higher dielectric constant generally leads to tighter coupling and potentially a broader bandwidth, but can also increase the overall thickness.

*   **Design Considerations:**
    *   **Dielectric Constant of Spacer:** Lower dielectric constants (like air or foam) promote wider bandwidth with a given spacing, while higher dielectric constants require smaller spacing for similar coupling.
    *   **Substrate Materials:** The choice of substrate for the driven element remains critical.

#### 3.3. Stacked Patch Antennas with Different Polarizations

Stacked antennas can also be used to achieve dual-polarization or to enhance bandwidth for a specific polarization.

*   **Configuration:**
    *   **Linear Polarization:** Two stacked patches might be aligned with their radiating slots in the same orientation to enhance bandwidth for a single linear polarization.
    *   **Dual Polarization:** Patches can be oriented orthogonally, or fed in a way to excite orthogonal modes, allowing for dual-polarized operation, often with dual-band or broadband characteristics.

*   **Operation:** Coupling mechanisms are similar, but the feeding and orientation of the patches are critical for polarization control.

---

### 4. Design Considerations for Broadband Stacked Microstrip Antennas

Effective design of broadband stacked microstrip antennas requires careful consideration of various parameters.

#### 4.1. Matching Network Design

To achieve broadband performance, the antenna must be well-matched to the transmission line over the desired frequency range.

*   **Input Impedance:** The input impedance of the stacked structure needs to be matched to the characteristic impedance of the transmission line (e.g., 50 Ohms).
*   **Matching Techniques:**
    *   **Probe Feeding:** The position of the probe feed on the driven element is adjusted to achieve impedance matching.
    *   **Microstrip Line Feeding:** Using a stepped impedance transformer or a quarter-wavelength transformer.
    *   **Slot Coupling:** Coupling the driven element to the parasitic element via a slot in the ground plane can also provide broadband matching.

#### 4.2. Air Gap / Dielectric Spacer Thickness and Permittivity

These parameters are critical for controlling the electromagnetic coupling between the stacked elements.

*   **Trade-offs:**
    *   **Wider Bandwidth vs. Antenna Profile:** Thicker air gaps generally lead to wider bandwidth but increase the antenna's height.
    *   **Coupling Strength:** Higher dielectric constants increase coupling for a given spacing, potentially achieving broadbanding with a thinner profile but also increasing losses.

*   **Reference:**
    *   **Garg, R. (2001), Chapter 7:** Garg discusses the influence of the dielectric spacer on bandwidth and impedance characteristics in detail.

#### 4.3. Substrate Properties of the Driven Element

The substrate supporting the driven element plays a significant role in the antenna's performance, including bandwidth and radiation efficiency.

*   **Low Dielectric Constant Substrates:** Substrates with lower dielectric constants (e.g., foam, air) are generally preferred for broadband operation as they reduce surface wave excitation and increase the effective wavelength, leading to wider bandwidth.
*   **Substrate Thickness:** A thicker substrate can also contribute to broader bandwidth by increasing the antenna's radiation resistance.

#### 4.4. Element Dimensions and Spacing

The dimensions of the individual patches and the spacing between them are crucial for tuning the resonant frequencies and controlling the coupling.

*   **Resonant Frequencies:** The dimensions of each patch are chosen to create resonant frequencies that are close enough to overlap and form a broadband response.
*   **Spacing:** The vertical distance between the patches determines the strength of the electromagnetic coupling. Closer spacing leads to stronger coupling.

#### 4.5. Feed Point Location

The location of the feed point on the driven element is critical for impedance matching and exciting the desired modes.

*   **Edge Feeding vs. Center Feeding:** The impedance at the edge of a patch is higher than at the center. This can be used to achieve 50 Ohm matching without requiring a matching network.
*   **Probe Feed Location:** For probe feeding, the radial position of the probe is adjusted to match the input impedance to the transmission line.

---

### 5. Advantages and Disadvantages of Stacked Microstrip Antennas

Stacked microstrip antennas offer a compelling solution for broadbanding, but also come with certain trade-offs.

#### 5.1. Advantages

*   **Enhanced Bandwidth:** Significantly wider bandwidth compared to single-element microstrip antennas.
*   **Dual-Band Operation:** Can be designed to operate efficiently at two distinct frequencies.
*   **Flexibility in Design:** Allows for tailoring of bandwidth and impedance characteristics by adjusting dimensions, spacing, and dielectric materials.
*   **Good Radiation Efficiency:** When designed properly, they maintain good radiation efficiency, especially with air gaps.
*   **Conformal and Low Profile:** Maintains the inherent advantages of microstrip antennas.

#### 5.2. Disadvantages

*   **Increased Profile:** The stacked structure inherently has a larger vertical dimension (height) compared to a single-element antenna.
*   **Fabrication Complexity:** Requires precise alignment of multiple layers, which can increase manufacturing cost and complexity.
*   **Sensitivity to Manufacturing Tolerances:** Small variations in spacing or alignment can significantly affect performance.
*   **Potential for Increased Losses:** If a high-permittivity dielectric spacer is used, dielectric losses can become more significant.
*   **Complexity in Analysis:** The electromagnetic interaction between stacked elements makes the theoretical analysis more complex than for single elements.

---

### 6. Applications of Broadband Stacked Microstrip Antennas

The enhanced bandwidth of stacked microstrip antennas makes them suitable for a wide range of applications.

*   **Wireless Communication Systems:** Wi-Fi, cellular phones (multi-band operation), satellite communication.
*   **Radar Systems:** Wideband radar systems requiring frequency agility.
*   **Electronic Warfare (EW) Systems:** Broadband jamming or surveillance.
*   **Sensor Applications:** Multi-frequency sensing.
*   **Globally<bos>by Positioning System (GPS) Receivers:** Wideband signal reception.

---

### 7. Key Concepts and Formulas (Summary)

*   **Resonant Frequency (Rectangular Patch):**
    $f_{r} = \frac{c}{2\sqrt{\epsilon_r}(L + \Delta L)}$
    where:
    *   $c$ is the speed of light in free space
    *   $\epsilon_r$ is the relative dielectric constant of the substrate
    *   $L$ is the length of the patch
    *   $\Delta L$ is the fringing length

*   **Bandwidth:** Typically defined as the frequency range where VSWR < 2.

*   **VSWR:** $VSWR = \frac{1 + \sqrt{1 - |\Gamma|^2}}{1 - \sqrt{1 - |\Gamma|^2}}$, where $\Gamma$ is the reflection coefficient.

*   **Electromagnetic Coupling:** The interaction between the adjacent radiating elements, influenced by spacing, dielectric properties, and element dimensions.

---

### 8. Learning Outcomes Coverage

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** This section explains how stacked elements interact electromagnetically to create broadband characteristics, moving beyond the basic radiation mechanism of a single patch.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** The notes provide detailed design considerations (dimensions, spacing, substrates, feeding) for stacked antennas, which are crucial for their design. While measurement is not detailed, the design parameters directly influence measurable parameters like VSWR and bandwidth.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4):** Stacked microstrip antennas are considered advanced antennas due to their complex interaction and broadbanding capabilities. The notes cover the analysis of their design principles and configurations.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** While this topic focuses on the antenna itself, the broadband characteristics achieved by stacked antennas are directly relevant to how they interact with and transmit/receive radio waves across a wider frequency spectrum, which is a component of wave propagation.

---

### 9. Important Points to Remember

*   **Bandwidth Limitation:** Conventional microstrip antennas have narrow bandwidths.
*   **Stacking Principle:** Using two or more coupled elements (usually patches) to create broadband or dual-band response.
*   **Air Gap is Key:** An air gap (or low-permittivity dielectric) between stacked elements facilitates strong electromagnetic coupling.
*   **Dimensions and Spacing:** Critical for tuning resonant frequencies and controlling coupling.
*   **Lower Dielectric Constant Substrates:** Generally preferred for wider bandwidth.
*   **Trade-offs:** Increased profile and fabrication complexity are common trade-offs for achieving wider bandwidth.
*   **Applications:** Essential for modern wireless systems requiring frequency agility or multi-band operation.

---

### 10. Practice Questions and Exercises

**Question 1:**
What is the primary reason for using stacked elements in microstrip antennas?
(a) To increase the gain
(b) To improve the polarization purity
(c) To enhance the bandwidth
(d) To reduce the size of the antenna

**Answer:** (c) To enhance the bandwidth

**Question 2:**
Describe the role of the air gap in a typical two-element stacked microstrip antenna.
**Answer:** The air gap acts as a dielectric medium between the driven and parasitic patches. Its thickness and permittivity influence the strength of the electromagnetic coupling between the elements. This coupling is crucial for exciting multiple resonant modes that overlap to produce a broadband response. A thicker air gap (lower dielectric constant) generally leads to stronger coupling and wider bandwidth.

**Question 3:**
List three key design parameters that influence the bandwidth of a stacked microstrip antenna and explain their impact.
**Answer:**
1.  **Air Gap Thickness:** A thicker air gap increases electromagnetic coupling, leading to wider bandwidth.
2.  **Patch Dimensions:** The relative dimensions of the stacked patches determine their individual resonant frequencies. Their proximity is crucial for mode overlap and bandwidth.
3.  **Substrate Dielectric Constant (for the driven element):** Lower dielectric constants generally promote wider bandwidth by reducing surface waves and increasing the effective wavelength.

**Question 4:**
What is a major disadvantage of using stacked microstrip antennas compared to single-element antennas?
(a) Lower radiation efficiency
(b) Narrower bandwidth
(c) Increased profile (height)
(d) Higher manufacturing cost for single units

**Answer:** (c) Increased profile (height)

**Question 5 (Design Exercise):**
Consider a stacked microstrip antenna with two square patches. The lower patch is designed to resonate at 2 GHz, and the upper patch at 2.2 GHz. If these patches are separated by an air gap of 0.5 mm, and the substrate for the lower patch has $\epsilon_r = 2.2$ and thickness $h = 0.8$ mm, what are the potential benefits and challenges in achieving a bandwidth around 2.1 GHz?
**Hint:** Think about how the coupling from the air gap can bring these two resonant frequencies closer or merge them.

**Answer:**
*   **Potential Benefits:** The close resonant frequencies (2 GHz and 2.2 GHz) separated by a small air gap (0.5 mm) provide a good starting point for broadband operation. The air gap facilitates electromagnetic coupling, which can help to merge these two closely spaced resonances. A low-permittivity substrate ($\epsilon_r = 2.2$) for the driven element is beneficial for bandwidth.
*   **Potential Challenges:** Achieving a smooth transition between the two resonant frequencies to create a flat passband (wide bandwidth) will depend critically on the exact dimensions, spacing, and feed point. The narrow gap (0.5 mm) might provide sufficient coupling, but optimizing it is crucial. The overall bandwidth achieved might still be limited depending on the impedance match over the frequency range. Fabrication precision for the air gap and element alignment will be important. Further analysis or simulation would be required to precisely determine the bandwidth and VSWR.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 11. References and Further Reading

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.** (Chapter 13 is particularly relevant for microstrip antennas and broadbanding techniques).
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech.** (Chapter 7 specifically addresses broadband microstrip antennas and detailed design of stacked configurations).
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.** (Provides background on transmission lines, matching networks, and microwave circuit analysis relevant to antenna design).
*   **Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS, Wiley Interscience.** (Offers practical design insights into various antenna types, including microstrip antennas).

---