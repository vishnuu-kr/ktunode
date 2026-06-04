---
title: "compact circularly polarised antennas"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7df"
status: "completed"
scrapedAt: "2026-05-23T18:11:54.107Z"
---
# ANTENNA THEORY AND DESIGN - Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Compact Circularly Polarized Antennas

**Course Outcomes Addressed:**
*   **CO1:** Analyze the radiation mechanism of antennas (Knowledge Level: K3)
*   **CO2:** Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)
*   **CO3:** Analyze and design advanced antennas (Knowledge Level: K4)

**Learning Outcomes:**
*   Understanding of CP microstrip antennas and their radiation mechanism.
*   Familiarity with various techniques for achieving CP in microstrip antennas.
*   Knowledge of design considerations for compact CP microstrip antennas.
*   Ability to analyze the trade-offs between size, bandwidth, and axial ratio.

---

### 1. Introduction to Circular Polarization (CP) in Microstrip Antennas

**Key Concept:** Circular Polarization (CP) refers to an electromagnetic wave whose electric field vector rotates in a circular path as it propagates. This rotation can be either right-hand circular polarization (RHCP) or left-hand circular polarization (LHCP).

**Why CP is Important for Microstrip Antennas:**

*   **Polarization Matching:** Eliminates polarization mismatch losses when communicating with a circularly polarized receiving antenna. This is crucial in satellite communication, GPS, radar, and some mobile communication systems.
*   **Reduced Multipath Effects:** CP signals are less susceptible to fading caused by multipath propagation, as the reflected waves often experience a reversal in their polarization sense.
*   **Interference Rejection:** Can reject interference from linearly polarized signals or signals with opposite circular polarization.

**Radiation Mechanism of Microstrip Antennas (Brief Recap):**

Microstrip antennas, also known as patch antennas, typically radiate from the fringing fields along the edges of the radiating patch. The radiation mechanism is primarily due to the currents flowing on the patch and the ground plane. For linearly polarized (LP) antennas, these currents are predominantly unidirectional.

**Reference:** Balanis, Chapter 1 (Introduction to Antennas), Chapter 12 (Microstrip Antennas).

---

### 2. Achieving Circular Polarization in Microstrip Antennas

For a microstrip antenna to radiate circularly polarized waves, it needs to excite two orthogonal modes with equal amplitude and a 90-degree phase difference.

**Key Concept:** **Orthogonal Modes:** Two electromagnetic field components that are perpendicular to each other in both space and time.

**Methods to Achieve CP:**

There are several techniques to generate the required orthogonal modes with the correct phase relationship. These methods often involve breaking the inherent symmetry of a simple rectangular patch.

#### 2.1. Perturbation Techniques

These methods involve introducing slight asymmetries in a standard linearly polarized patch to excite orthogonal modes.

**2.1.1. Notched Corners (Corner Cutting)**

*   **Description:** Removing small triangular or rectangular sections from the corners of a rectangular patch. This breaks the symmetry and creates radiation elements that are not perfectly in phase.
*   **Mechanism:** The cutting introduces asymmetry in the current distribution, leading to the excitation of nearly orthogonal modes. By carefully choosing the cut size and shape, the phase difference between these modes can be controlled to approach 90 degrees.
*   **Reference:** Garg, Chapter 4 (Types of Microstrip Antennas), Section 4.3.1 (Circularly Polarized Microstrip Antennas).
*   **Important Point:** The size of the cut is critical for achieving good axial ratio.

**2.1.2. Slotted Patch**

*   **Description:** Introducing a slot on the radiating patch. Common slot shapes include H-shaped, U-shaped, or simple linear slots.
*   **Mechanism:** The slot disrupts the current flow on the patch, effectively creating radiating elements that are out of phase. The position, width, and length of the slot play a crucial role in determining the polarization characteristics.
*   **Example:** A linearly polarized patch with a slot perpendicular to the polarization direction can generate CP.
*   **Reference:** Garg, Section 4.3.1.

**2.1.3. Truncated Edges (Edge Cutting)**

*   **Description:** Similar to notched corners, but cuts are made along the edges of the patch, not just the corners.
*   **Mechanism:** Alters the effective length and width of the radiating elements, thus influencing the current distribution and mode phasing.
*   **Reference:** Garg, Section 4.3.1.

#### 2.2. Feeding Techniques

These methods involve feeding the antenna in a way that inherently excites orthogonal modes with a phase difference.

**2.2.1. Dual-Feed with 90-Degree Hybrid Coupler**

*   **Description:** Two adjacent radiating elements (or the same element fed at two points) are excited by two signals with equal amplitude and a 90-degree phase difference. This is typically achieved using a 90-degree hybrid coupler (e.g., a branch-line coupler or a Lange coupler).
*   **Mechanism:** The hybrid coupler splits the input signal into two equal amplitude signals with a 90-degree phase shift. These signals are then fed to the two feeding points on the antenna, which are designed to excite orthogonal modes.
*   **Reference:** Balanis, Chapter 12.3.2 (Dual-fed Microstrip Antennas). Pozar, Chapter 6 (Couplers and Hybrid Junctions).
*   **Advantages:** Can achieve good CP performance (low axial ratio) over a wider bandwidth.
*   **Disadvantages:** Increased complexity and size due to the hybrid coupler.

**2.2.2. Single-Feed with Perturbed Geometry**

*   **Description:** Feeding a single patch that has an inherent asymmetry to generate CP.
*   **Examples:**
    *   **Squinted Patch:** A patch with a slightly elliptical shape or a rectangular patch with a chamfered or rounded corner, fed at a specific point.
    *   **Circularly Polarized Patch (e.g., Circular, Annular Ring, or Square Patch with Corner Cuts):** These geometries are inherently designed to have degenerate or nearly degenerate orthogonal modes.
*   **Mechanism:** The feeding point is strategically located to excite the desired orthogonal modes with the correct phase relationship. For a circular or square patch, the fundamental modes are degenerate, meaning they have the same resonant frequency. Introducing a small perturbation (like corner cuts or an eccentric feed) breaks this degeneracy and allows for CP operation.
*   **Reference:** Garg, Section 4.3.1. Milligan, Chapter 5 (Microstrip Antennas), Section 5.6 (Circularly Polarized Microstrip Antennas).

#### 2.3. Using Different Patch Shapes

Certain patch geometries naturally support CP radiation or can be easily modified.

**2.3.1. Circular Patch Antenna**

*   **Description:** A simple circular patch.
*   **Mechanism:** A circular patch theoretically supports two degenerate modes (TM110 and TM110') which are orthogonal. If fed eccentrically, these modes can be excited with the required phase difference.
*   **Reference:** Balanis, Chapter 12.2.1 (Circularly Polarized Microstrip Antennas).
*   **Limitation:** Degeneracy is sensitive to manufacturing tolerances and substrate variations, which can degrade CP performance.

**2.3.2. Annular Ring Antenna**

*   **Description:** A ring-shaped patch with a central hole.
*   **Mechanism:** Similar to the circular patch, it supports degenerate modes. The inner and outer radii can be adjusted to tune the resonant frequencies and achieve CP.
*   **Reference:** Garg, Section 4.3.1.

**2.3.3. Square Patch with Corner Cuts**

*   **Description:** A square patch with diagonally opposite corners cut.
*   **Mechanism:** The corner cuts break the symmetry of the square patch, exciting orthogonal modes. The size of the cuts determines the axial ratio.
*   **Reference:** Garg, Section 4.3.1.

**2.3.4. Slot-Fed Circularly Polarized Antennas**

*   **Description:** A patch is fed through a slot in the ground plane. The slot can be oriented to excite orthogonal modes.
*   **Mechanism:** The orientation and shape of the slot in the ground plane, in conjunction with the patch, can create the necessary conditions for CP radiation.
*   **Reference:** Garg, Section 4.3.1.

---

### 3. Compact Circularly Polarized Microstrip Antennas

**Key Challenge:** Microstrip antennas, especially those operating at lower frequencies, tend to be electrically large. Achieving compact size while maintaining CP performance requires specific design strategies.

**Techniques for Miniaturization:**

*   **Loading Techniques:**
    *   **Slotted Ground Plane:** Introducing slots or apertures in the ground plane beneath the patch can alter the effective permittivity and inductance, leading to miniaturization.
    *   **Parasitic Elements:** Placing parasitic patches above or below the main radiating patch can affect its electrical size and impedance matching.
    *   **Inductive Loading:** Incorporating inductors (e.g., using slots or vias) can increase the electrical length and lower the resonant frequency for a given physical size.
*   **Dielectric Loading:**
    *   **Thick Substrates:** Using thicker substrates with lower dielectric constants can increase radiation efficiency and impedance bandwidth but also increase size.
    *   **High Permittivity Materials:** Using substrates with high dielectric constants ($\epsilon_r > 10$) can significantly reduce the wavelength and thus the physical size of the antenna. However, this often comes with reduced bandwidth and increased surface wave losses.
*   **Patch Geometry Modifications:**
    *   **Meandered Patches:** Folding or meandering the patch shape increases its electrical length within a smaller physical area.
    *   **Fractal Antennas:** Using fractal geometries for the patch can achieve multi-band operation and miniaturization by effectively increasing the perimeter within a given area.
*   **Resonant Cavity/Substrate Design:**
    *   **Thick Substrates with Aperture Coupling:** Thicker substrates can be used with aperture coupling, which helps in miniaturization.
    *   **Metamaterial Superstrates/Substrates:** Incorporating metamaterials can manipulate electromagnetic waves to achieve miniaturization and enhanced CP performance. (Reference: Singh et al., "Metamaterials for Antenna Applications"). Metamaterials can exhibit negative permittivity or permeability, leading to a reduction in effective wavelength.
*   **Slot Ring Antenna (SRRA):** A resonant slot ring, when properly designed, can exhibit CP characteristics and can be more compact than some patch-based designs.

**Combining CP and Miniaturization Techniques:**

Often, a combination of feeding, shape modification, and loading techniques is used to achieve a compact circularly polarized antenna.

**Example:** A square patch with etched slots on its surface and corner cuts, fed eccentrically, can be a compact CP antenna.

**Trade-offs:**

*   **Size vs. Bandwidth:** Miniaturization techniques often lead to a reduction in bandwidth.
*   **Size vs. Axial Ratio:** Achieving very high CP (low axial ratio) might require a slightly larger antenna or more complex feeding.
*   **Size vs. Efficiency:** Miniaturization can sometimes lead to lower radiation efficiency due to increased conductor and dielectric losses.

**Reference:** Garg, Chapter 4 (Types of Microstrip Antennas), Section 4.3.3 (Compact Microstrip Antennas for CP). Choudhury, Chapter 4 (Reconfigurable Microstrip Antennas), discussing compact reconfigurable CP antennas.

---

### 4. Design Considerations for Compact CP Microstrip Antennas

**Key Parameters to Optimize:**

*   **Axial Ratio (AR):** The ratio of the major axis to the minor axis of the polarization ellipse. For perfect CP, AR = 1 (or 0 dB). In practice, AR < 3 dB is often considered acceptable.
*   **Bandwidth:** The frequency range over which the antenna meets specified performance criteria (e.g., VSWR < 2, AR < 3 dB). CP bandwidth is typically narrower than LP bandwidth for the same antenna geometry.
*   **Radiation Efficiency:** The ratio of power radiated to the power delivered to the antenna.
*   **Gain:** The directive gain of the antenna.
*   **Impedance Matching:** Ensuring the antenna is matched to the transmission line (typically 50 ohms).
*   **Polarization Purity:** Ensuring the desired sense of circular polarization (RHCP or LHCP) with minimal cross-polarization.

**Design Steps (General Approach):**

1.  **Determine Operating Frequency:** This sets the initial dimensions based on the wavelength ($\lambda$). For a half-wave patch, the length $L \approx 0.45\lambda - 0.5\lambda$ depending on the dielectric and fringing fields.
2.  **Select CP Generation Technique:** Choose a method based on desired performance, complexity, and space constraints (e.g., corner cuts, dual feed, specific patch shapes).
3.  **Initial Geometry Design:**
    *   For a simple patch, calculate length ($L$) and width ($W$) based on the desired frequency and substrate properties (using formulas that account for fringing fields).
    *   For CP, the dimensions will be such that the modes are close to degeneracy or the feeding structure creates the 90-degree phase shift. For a square patch, $L=W$.
4.  **Introduce Perturbations/Feeding:**
    *   If using corner cuts, determine the size and shape of the cuts to achieve the desired AR. This often requires iterative design.
    *   If using dual feeds, design the 90-degree hybrid coupler and feeding points.
    *   If using single feed with an asymmetric patch, determine the feed location to excite the orthogonal modes.
5.  **Miniaturization Techniques (if needed):** Incorporate slots, high-k substrates, meandered shapes, etc.
6.  **Electromagnetic Simulation:** Use full-wave EM simulation software (e.g., HFSS, CST Microwave Studio) to analyze the antenna's performance (S-parameters, AR, radiation pattern, gain, efficiency).
7.  **Parameter Optimization:** Adjust the dimensions of the patch, slots, feed points, and dielectric properties to meet the design specifications (especially AR and impedance matching).
8.  **Fabrication and Measurement:** Fabricate the antenna and measure its performance using a Vector Network Analyzer (VNA) and an anechoic chamber.

**Example Design Process (Square Patch with Corner Cuts):**

1.  **Target Frequency:** 2.45 GHz.
2.  **Substrate:** FR4 ($\epsilon_r = 4.4$, $h = 1.6$ mm).
3.  **Initial Square Patch Size:** $L = W \approx \frac{c}{2f\sqrt{\epsilon_{eff}}} \approx \frac{3 \times 10^8}{2 \times 2.45 \times 10^9 \sqrt{4.4}} \approx 0.043$ m (or 43 mm). (This is a simplified calculation; more accurate formulas considering fringing are needed).
4.  **Corner Cuts:** Introduce triangular cuts at the corners. The side length of the triangle ($x$) is a critical parameter. Start with a small value (e.g., 1-3 mm) and iterate.
5.  **Feed Point:** Feed at an off-center location on one edge to excite orthogonal modes. For a square patch fed at the center of an edge, the distance from the center of the patch to the feed point is important.
6.  **Simulation:** Simulate the design in an EM software.
7.  **Optimization:** Adjust the cut size and feed location to achieve AR < 3 dB across the desired band, and a VSWR < 2.

**Reference:** Balanis, Chapter 12 (Design Procedure for Microstrip Antennas), including design formulas and examples. Garg, Chapter 4, providing detailed design examples. Milligan, Chapter 5, offering practical design aspects.

---

### 5. Practice Questions and Answers

**Q1. What are the two fundamental requirements for achieving circular polarization in microstrip antennas?**

**Answer:**
1.  **Excitation of two orthogonal modes:** The antenna must be designed to excite two modes that are independent of each other (orthogonal).
2.  **Equal amplitude and 90-degree phase difference:** These two orthogonal modes must have equal amplitudes and a phase difference of 90 degrees between them.

**Q2. Describe one method of achieving circular polarization using a feeding technique and one method using a geometrical perturbation. What are the pros and cons of each?**

**Answer:**

*   **Feeding Technique: Dual-Feed with 90-degree Hybrid Coupler**
    *   **Description:** The patch is fed at two points by two signals that are equal in amplitude and 90 degrees out of phase, typically generated by a 90-degree hybrid coupler.
    *   **Pros:** Can achieve good CP (low axial ratio) over a relatively wider bandwidth. Performance is less sensitive to manufacturing tolerances compared to some perturbation methods.
    *   **Cons:** Increased complexity and physical size due to the need for the hybrid coupler. Higher cost.

*   **Geometrical Perturbation: Square Patch with Corner Cuts**
    *   **Description:** A square patch antenna has small triangular or rectangular sections removed from its corners.
    *   **Pros:** Simpler to implement than complex feeding networks. Can lead to compact designs.
    *   **Cons:** The CP performance (especially axial ratio) can be sensitive to the size of the cuts and manufacturing accuracy. The bandwidth for good CP is generally narrower than dual-fed antennas.

**Q3. What is the main challenge in designing *compact* circularly polarized microstrip antennas, and what are two techniques to address this challenge?**

**Answer:**
The main challenge is that microstrip antennas operating at lower frequencies tend to be electrically large. Reducing the physical size of the antenna often degrades its performance, particularly its bandwidth and radiation efficiency.

Two techniques to address this challenge are:
1.  **Using High Permittivity Substrates:** Employing dielectric materials with a high dielectric constant ($\epsilon_r > 10$) reduces the wavelength of the electromagnetic wave within the substrate, allowing for smaller antenna dimensions. However, this can lead to reduced bandwidth and increased surface wave losses.
2.  **Meandered Patch Designs:** Folding or meandering the radiating patch increases its electrical length within a smaller physical area, thereby lowering the resonant frequency for a given size or achieving a smaller size for a given frequency.

**Q4. How can metamaterials be used to create compact circularly polarized antennas?**

**Answer:**
Metamaterials are artificially engineered materials with electromagnetic properties not found in nature. They can be used in antenna design by:
*   **Effective Wavelength Reduction:** Metamaterials can exhibit properties that effectively reduce the wavelength of electromagnetic waves, allowing for miniaturization of antenna elements.
*   **Enhanced Field Manipulation:** Metamaterials can manipulate electromagnetic fields in ways that facilitate the excitation of orthogonal modes with the required phase difference for CP radiation, even in compact structures. For example, metamaterial superstrates or substrates can be designed to resonate and alter the antenna's electrical characteristics for CP operation.
*   **Creating Artificial Magnetic/Electric Resonances:** Metamaterials can create strong resonances at desired frequencies, which can be harnessed to generate CP in compact antenna geometries.

**Q5. True or False: The bandwidth of a circularly polarized microstrip antenna is typically wider than that of a linearly polarized microstrip antenna of similar dimensions.**

**Answer:** False. The bandwidth of a circularly polarized microstrip antenna is generally narrower than that of a linearly polarized antenna of similar dimensions. This is because achieving the precise 90-degree phase difference between orthogonal modes over a broad frequency range is more challenging.

---

### 6. Important Points to Remember

*   **CP Requires Orthogonal Modes:** The fundamental principle of CP is exciting two orthogonal modes with equal amplitude and a 90° phase difference.
*   **Symmetry Breaking:** Most CP microstrip antenna designs achieve this by breaking the symmetry of a standard linearly polarized patch.
*   **Trade-offs are Inherent:** Compactness, bandwidth, and axial ratio are interconnected. Improving one often compromises another.
*   **Design Iteration is Key:** Achieving good CP performance, especially low axial ratio, usually requires iterative design and optimization using EM simulation tools.
*   **Feed Point Location is Crucial:** For single-feed CP antennas, the feed point's position is critical for exciting the correct modes.
*   **Substrate Properties Matter:** Dielectric constant and thickness significantly influence both size and performance. High-k substrates aid miniaturization but reduce bandwidth.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References and Further Reading

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.** (Chapters on Microstrip Antennas, Polarization).
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech.** (Chapter on CP Antennas, Compact Designs).
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.** (Chapters on Microwave Components, including couplers).
*   **Singh, A. K., Abegaonkar, M. P., & Koul, S. K. (2021). *Metamaterials for Antenna Applications* (2nd ed.). CRC Press.** (Chapters on metamaterial applications for antenna miniaturization and polarization control).
*   **Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS.** (Chapters on Microstrip Antennas, practical design considerations).

This concludes the study notes for compact circularly polarized microstrip antennas. Remember to consult the textbooks for detailed mathematical derivations and design examples.