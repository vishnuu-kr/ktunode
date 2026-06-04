---
title: "Coupling"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7d9"
status: "completed"
scrapedAt: "2026-05-23T18:11:49.122Z"
---
## ANTENNA THEORY AND DESIGN: Module 2 - Microstrip Antennas: Radiation Mechanism

### Topic: Coupling

This module delves into the radiation mechanism of microstrip antennas, with a specific focus on the phenomenon of **Coupling**. Coupling, in the context of microstrip antennas, refers to the unwanted electromagnetic interaction between adjacent antenna elements or between antenna elements and other components in a complex antenna system. Understanding and controlling coupling is crucial for achieving desired antenna performance, especially in arrays and multi-band antennas.

---

### 1. Learning Outcomes Covered

This topic aims to address the following learning outcomes:

*   **LO: Understand the various coupling mechanisms in microstrip antennas.**
*   **LO: Analyze the effect of coupling on antenna parameters.**
*   **LO: Discuss techniques for minimizing or enhancing coupling in microstrip antennas.**
*   **LO: Relate coupling phenomena to the design of microstrip antenna arrays and multi-band antennas.**

---

### 2. Key Concepts and Definitions

#### 2.1. What is Coupling?

**Coupling** is the transfer of electromagnetic energy between two or more resonant structures (in this case, microstrip antenna elements) that are in proximity. This transfer can be through various electromagnetic fields:

*   **Radiated Fields:** Energy radiated by one antenna element is intercepted by another.
*   **Surface Waves:** Electromagnetic waves propagating along the dielectric-air interface of the substrate.
*   **Space Waves:** Direct field propagation from one element to another.
*   **Conducted Waves:** Energy propagating along the transmission lines connecting the elements.

**Coupling Coefficient ($S_{ij}$):**
In S-parameter notation, coupling is quantified by the off-diagonal scattering parameters. For two coupled antennas, $S_{21}$ represents the signal transmitted from antenna 1 to antenna 2, and $S_{12}$ represents the signal transmitted from antenna 2 to antenna 1. Ideally, for isolated antennas, $S_{21} = S_{12} = 0$.

**Mutual Impedance ($Z_{m}$):**
Coupling can also be described in terms of mutual impedance. When current flows in one antenna, it induces a voltage in a nearby antenna. This induced voltage is related to the mutual impedance ($Z_{m}$) between the two antennas.

#### 2.2. Types of Coupling Mechanisms

Microstrip antennas exhibit several coupling mechanisms, which can be categorized as follows:

*   **Radiative Coupling (Mutual Coupling due to Radiation):**
    *   This is the most intuitive form of coupling, where the electromagnetic waves radiated by one antenna are received by another.
    *   **Mechanism:** The radiating aperture of an antenna launches electromagnetic fields into space. If another antenna is in the vicinity, it intercepts these fields, inducing currents and voltages in it.
    *   **Factors Influencing:** Element spacing, orientation, polarization, and the radiation pattern of the individual elements. Closer spacing generally leads to stronger radiative coupling.
    *   **Textbook Reference:** Balanis (4th Ed.) discusses radiation patterns and how antennas radiate energy, implicitly covering radiative coupling in arrays.

*   **Surface Wave Coupling:**
    *   Microstrip antennas, especially when printed on substrates with high dielectric constants, can support surface waves. These waves propagate along the dielectric-air interface and can couple energy between adjacent elements.
    *   **Mechanism:** Surface waves are guided modes that propagate along the substrate. If two antenna elements are close enough, the surface wave launched by one element can be received by the other, transferring energy.
    *   **Factors Influencing:** Substrate dielectric constant ($\epsilon_r$), substrate thickness ($h$), dielectric loss, frequency, and element spacing. Higher $\epsilon_r$ and thicker substrates increase the likelihood and strength of surface waves.
    *   **Textbook Reference:** Garg (Microstrip Antenna Design Handbook) extensively covers substrate properties and their impact on antenna performance, including surface wave excitation. Collin (Antennas and Radio Wave Propagation) also details surface wave phenomena.
    *   **Important Point to Remember:** Surface wave coupling is particularly problematic in microstrip arrays as it degrades the overall efficiency and radiation pattern due to uncontrolled energy transfer and unintended radiation.

*   **Space Wave Coupling (Near-field Coupling):**
    *   This refers to the coupling through the reactive near-field components of the radiating elements. While often considered part of radiative coupling at a distance, in close proximity, the evanescent fields can also contribute significantly.
    *   **Mechanism:** The electromagnetic fields surrounding an antenna element consist of radiating and non-radiating (evanescent) components. In the near-field, the evanescent fields decay rapidly with distance but can contribute to coupling between closely spaced elements.
    *   **Factors Influencing:** Proximity of elements, element geometry, and the fundamental mode of excitation.
    *   **Textbook Reference:** Balanis and Collin discuss near-field and far-field concepts.

*   **Conducted Coupling (Line Coupling):**
    *   When microstrip antenna elements are interconnected by transmission lines (e.g., feed lines in an array), energy can be coupled between these lines.
    *   **Mechanism:** If feed lines are routed close to each other or to antenna elements, electromagnetic fields from one line or element can induce currents in another. This is essentially crosstalk between transmission lines.
    *   **Factors Influencing:** Proximity of feed lines, shielding, and impedance matching.
    *   **Textbook Reference:** Pozar (Microwave Engineering) is an excellent resource for transmission line theory and coupling in microwave circuits, which is directly applicable to feed networks of microstrip antennas.

#### 2.3. Effects of Coupling on Antenna Parameters

Uncontrolled coupling can significantly degrade the performance of microstrip antennas, especially in arrays:

*   **Impedance Mismatch and Bandwidth Reduction:**
    *   Coupling between elements alters their effective input impedance. This can lead to a mismatch between the antenna element and the feed network, resulting in reduced power transfer efficiency and narrower operational bandwidth.
    *   **Explanation:** When antenna elements are coupled, the impedance of one element is affected by the presence and excitation of the other. This mutual impedance term shifts the resonant frequency and can distort the impedance match.
    *   **Textbook Reference:** Garg and Balanis discuss input impedance and bandwidth of microstrip antennas and arrays.

*   **Degradation of Radiation Pattern:**
    *   Coupling can cause sidelobes to increase, nulls to fill, and beam squint (in steered arrays) to occur. The intended radiation pattern is distorted due to the unwanted energy transfer.
    *   **Explanation:** The coupling currents in the coupled antenna element radiate in a manner that interferes with the intended radiation from the primary element, thus altering the overall pattern.
    *   **Textbook Reference:** Balanis (Antenna Theory) provides detailed analyses of array factor and radiation patterns, where mutual coupling effects are discussed for multi-element antennas.

*   **Reduced Array Efficiency and Gain:**
    *   Energy transferred through coupling might be lost to surface waves or radiated in unwanted directions, reducing the overall efficiency of the array. This, in turn, leads to a decrease in the effective gain.
    *   **Explanation:** If coupling leads to excitation of surface waves or radiation from feed lines, this energy is not contributing to the desired main beam, thereby reducing gain and efficiency.
    *   **Textbook Reference:** Kraus (Antennas for All Applications) and Balanis cover array theory and efficiency calculations.

*   **Cross-Polarization:**
    *   Coupling can induce currents with different polarizations than the intended one, leading to increased cross-polarization levels.
    *   **Explanation:** If the coupling mechanism is not perfectly aligned with the primary polarization, it can excite orthogonal polarization components, increasing cross-polarization.
    *   **Textbook Reference:** Balanis and Singh et al. (Metamaterials for Antenna Applications) may touch upon polarization properties and how adjacent structures can affect them.

*   **Inter-element Isolation:**
    *   The degree of coupling is often referred to as the "isolation" between elements. Low isolation means high coupling, which is generally undesirable for array performance.
    *   **Definition:** Isolation is typically measured in dB, representing the power transmitted from one element to another (e.g., $-|S_{21}|$ dB). Higher isolation values indicate weaker coupling.

#### 2.4. Techniques for Minimizing or Enhancing Coupling

**2.4.1. Minimizing Coupling:**

The goal here is to reduce the unwanted transfer of energy between elements.

*   **Increasing Element Spacing:**
    *   This is the most straightforward method. As the distance between elements increases, the coupling strength (especially radiative and near-field) decreases significantly.
    *   **Trade-off:** Increasing spacing can lead to grating lobes in arrays, which is undesirable. A balance must be struck.
    *   **Textbook Reference:** Balanis (Array theory) demonstrates how the array factor is dependent on element spacing.

*   **Optimizing Element Orientation and Polarization:**
    *   Orienting elements such that their main beams or nulls are directed towards each other can reduce radiative coupling. Using orthogonal polarizations for adjacent elements is a highly effective method for minimizing coupling.
    *   **Example:** In a linear array, placing elements side-by-side and ensuring their radiation is linearly polarized in the same direction can lead to significant coupling. Rotating one element by 90 degrees can virtually eliminate coupling.
    *   **Textbook Reference:** Balanis covers polarization and array synthesis.

*   **Shielding:**
    *   Metallic shields (e.g., conducting walls) placed between elements can block or attenuate the coupling fields.
    *   **Types:**
        *   **Vertical Walls:** Placed between elements.
        *   **Cavities:** Enclosing elements.
    *   **Textbook Reference:** Milligan (Modern Antenna Design) might discuss shielding techniques for antenna arrays.

*   **Substrate Engineering:**
    *   **Low Dielectric Constant Substrates:** Using substrates with lower dielectric constants ($\epsilon_r$) reduces the excitation and propagation of surface waves.
    *   **Thin Substrates:** Thinner substrates also tend to reduce surface wave coupling.
    *   **Dielectric Lenses/Walls:** Using materials with specific dielectric properties or creating dielectric "walls" can help confine fields and reduce coupling.
    *   **Textbook Reference:** Garg (Microstrip Antenna Design Handbook) provides extensive details on substrate selection and its impact on surface waves.

*   **Slotted Waveguide Structures:**
    *   In some advanced designs, slots can be used to couple energy between elements, but controlled slot placement can also act as a barrier to unwanted coupling.

*   **Decoupling Structures:**
    *   Specialized parasitic elements or meta-materials can be designed and placed near the antenna elements to absorb or re-radiate the coupling fields in a way that cancels them out.
    *   **Textbook Reference:** Singh et al. (Metamaterials for Antenna Applications) and Choudhury (Reconfigurable Antennas) are highly relevant here, as metamaterials are often employed for decoupling and reconfigurability.

**2.4.2. Enhancing Coupling (Controlled Coupling):**

In some applications, controlled coupling is desirable.

*   **Dielectric Resonators and Slots:**
    *   These are often used to provide controlled coupling between elements in arrays or for creating specific radiation patterns.
    *   **Mechanism:** Dielectric resonators can support modes that couple electromagnetic energy between adjacent patches. Slots etched in the ground plane or in the patch itself can also facilitate controlled coupling.
    *   **Example:** Coupling via a slot in the ground plane between two microstrip patches can be used to create broadside arrays or to achieve specific polarization characteristics.
    *   **Textbook Reference:** Garg (Microstrip Antenna Design Handbook) and Raju (Antenna and Wave Propagation) discuss various microstrip antenna configurations, including those utilizing slots and resonators for coupling.

*   **Metamaterials:**
    *   Metamaterials can be engineered to exhibit unique electromagnetic properties, including strong and controllable coupling over specific frequency bands. They can be used to create compact and highly coupled antenna elements.
    *   **Textbook Reference:** Singh et al. (Metamaterials for Antenna Applications) is the primary resource for this.

*   **Reconfigurable Antennas:**
    *   In reconfigurable antennas, the coupling can be actively controlled using tunable components (e.g., PIN diodes, MEMS switches, varactors) to alter the electromagnetic interaction between elements. This allows for dynamic control of beam steering, polarization, or frequency.
    *   **Textbook Reference:** Choudhury (Reconfigurable Antennas) is directly relevant.

#### 2.5. Coupling in Specific Microstrip Antenna Designs

*   **Microstrip Patch Antenna Arrays:**
    *   This is where coupling is most critical. Elements are typically spaced by a fraction of a wavelength ($\lambda_g$).
    *   **Grating Lobes:** When elements are spaced $\ge \lambda_0$ (free-space wavelength), grating lobes can appear in the radiation pattern, which is generally undesirable. Coupling becomes stronger as elements are brought closer to avoid grating lobes.
    *   **Synthesis:** Array synthesis techniques often need to account for mutual coupling to achieve the desired pattern.

*   **Multi-band Microstrip Antennas:**
    *   In antennas designed to operate at multiple frequencies, coupling between elements or radiating structures operating at different bands can occur.
    *   **Example:** A dual-band antenna might use a parasitic element that is resonant at a second frequency, and this element will inevitably couple to the primary radiating element. This coupling can be exploited to improve bandwidth or bandwidth ratios.

---

### 3. Course Outcomes Alignment

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):** Understanding coupling mechanisms (radiative, surface wave, space wave, conducted) is fundamental to analyzing how energy is transferred and how it affects the overall radiation characteristics of microstrip antennas. This involves comprehending the underlying electromagnetic fields involved.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** To design a microstrip antenna (especially in an array), one must account for coupling effects. This involves selecting element spacing, substrate properties, and feed network configurations to manage coupling, aiming for acceptable isolation and minimal impact on impedance and pattern. Measurement of S-parameters directly quantifies coupling.

*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):** Advanced antennas, such as phased arrays, multi-band antennas, and reconfigurable antennas, heavily rely on controlling coupling. The techniques for minimizing or enhancing coupling discussed in this topic are essential for their design and performance optimization.

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** While not the primary focus, surface wave coupling is a direct consequence of specific propagation modes (surface waves) along the dielectric-air interface. Understanding these modes is crucial for predicting and mitigating surface wave coupling.

---

### 4. Examples

**Example 1: Radiative Coupling in a Two-Element Array**

Consider two identical microstrip patch antennas placed side-by-side with their radiating edges aligned.
*   If they are separated by $\lambda_0/2$ (free-space wavelength), radiative coupling will be significant, affecting their individual input impedances and the overall array pattern.
*   If one patch is rotated by 90 degrees relative to the other, the polarization mismatch will drastically reduce the radiative coupling.

**Example 2: Surface Wave Coupling in a High $\epsilon_r$ Substrate**

Two microstrip patches are printed on a substrate with $\epsilon_r = 10$ and thickness $h = 1.6$ mm, operating at 10 GHz.
*   Due to the high dielectric constant and substrate thickness, surface waves will be readily excited.
*   If the patches are spaced less than $\lambda_g/2$, significant surface wave coupling will occur, potentially causing parasitic radiation, reduced efficiency, and impedance shifts. The design must consider adding dielectric ridges or increasing spacing to mitigate this.

**Example 3: Minimizing Coupling with a Slot**

Imagine a $1 \times 2$ microstrip array where the elements are too close to achieve sufficient isolation.
*   A transverse slot can be etched in the ground plane between the two patches. By carefully choosing the slot dimensions and position, it can be used to facilitate controlled coupling between the patches, potentially creating a broadside radiation pattern or improving bandwidth.

---

### 5. Practice Questions and Exercises

**Q1. Define coupling in the context of microstrip antennas. List the primary mechanisms through which coupling occurs.**

**Answer:** Coupling is the unwanted transfer of electromagnetic energy between adjacent microstrip antenna elements or components. The primary mechanisms are radiative coupling, surface wave coupling, space wave (near-field) coupling, and conducted coupling.

**Q2. Explain how increasing the substrate thickness ($h$) can exacerbate surface wave coupling in microstrip antennas. (Relates to CO1, CO4)**

**Answer:** As substrate thickness increases, the substrate becomes more "electrically thick" relative to the wavelength. This allows for the excitation and propagation of higher-order surface wave modes (beyond the fundamental TEM-like mode) along the dielectric-air interface. These additional modes carry more energy and can couple more effectively between closely spaced elements, leading to increased surface wave coupling.

**Q3. You are designing a $2 \times 2$ microstrip patch array for a phased array radar. The elements are spaced at $0.7 \lambda_0$. Discuss two primary concerns related to coupling that you need to address during the design process. Suggest specific techniques to mitigate these concerns.**

**Answer:**
*   **Concern 1: Impedance Mismatch and Bandwidth Degradation:** Due to the close spacing ($0.7 \lambda_0$), significant mutual coupling (both radiative and potentially surface wave) will alter the input impedance of each element. This can lead to poor impedance matching to the feed network and reduced operational bandwidth.
    *   **Mitigation:**
        *   **Element Optimization:** Adjust the patch dimensions (length, width) to compensate for the impedance shift caused by coupling.
        *   **Inter-element Coupling Compensation:** Employ techniques like aperture coupling, parasitic elements, or dielectric loading between elements to control coupling.
        *   **Numerical Simulation:** Use full-wave electromagnetic simulators to accurately model the coupled array and iteratively adjust parameters for optimal impedance matching.

*   **Concern 2: Radiation Pattern Degradation:** Mutual coupling can cause sidelobe levels to increase, fill in nulls, and potentially lead to beam squint if not accounted for, especially in dynamic beam steering.
    *   **Mitigation:**
        *   **Array Synthesis with Mutual Coupling:** Use array synthesis algorithms that explicitly include the mutual impedance matrix of the array elements. This allows for designing the excitation amplitudes and phases to shape the radiation pattern despite the coupling.
        *   **Polarization Control:** If possible, orient elements or use polarization diversity to reduce coupling between specific elements.
        *   **Shielding:** Consider using dielectric walls or metallic enclosures between elements if radiative coupling is severe, although this adds complexity and cost.

**Q4. What is the role of S-parameters in characterizing coupling between microstrip antenna elements? (Relates to CO2)**

**Answer:** S-parameters (Scattering parameters) are used to describe the linear behavior of multiport networks, including antenna arrays. For two coupled microstrip antenna elements, $S_{21}$ represents the magnitude and phase of the signal transmitted from element 1 to element 2. A small magnitude of $S_{21}$ (e.g., less than -10 dB or -15 dB) indicates weak coupling and good isolation, which is generally desired. Conversely, a large magnitude of $S_{21}$ indicates strong coupling.

**Q5. How can metamaterials be used to enhance or suppress coupling between microstrip antenna elements? (Relates to CO3)**

**Answer:** Metamaterials can be engineered to exhibit extraordinary electromagnetic properties.
*   **To Suppress Coupling:** Metamaterial structures can be designed to act as electromagnetic "buffers" or "cloaks" that absorb and re-radiate the coupling fields in a way that cancels out the parasitic interaction between elements, thus increasing isolation.
*   **To Enhance Coupling:** Specific metamaterial unit cells can be designed to resonantly couple energy between closely spaced antenna elements, enabling compact and highly directive arrays or novel multi-band antenna designs. The ability to tailor the effective permittivity and permeability of metamaterials is key to controlling this coupling.

---

### 6. Important Points to Remember

*   **Coupling is inevitable** in closely spaced microstrip antenna elements.
*   **Surface wave coupling** is a major concern in microstrip antennas, especially on high $\epsilon_r$ and thick substrates.
*   **Mitigation strategies** for coupling involve increasing spacing, optimizing orientation/polarization, shielding, substrate engineering, and using decoupling structures.
*   **Controlled coupling** is essential for certain advanced antenna designs (e.g., lens antennas, specific array excitations).
*   **S-parameters** are the standard metric for quantifying inter-element coupling (isolation).
*   **Mutual impedance** is another way to characterize coupling and is crucial for array synthesis when coupling is significant.
*   **Design trade-offs** are always present: minimizing coupling might increase element spacing (leading to grating lobes) or add complexity.

---

This comprehensive set of notes provides a foundational understanding of coupling in microstrip antennas, its mechanisms, effects, and mitigation/enhancement techniques, directly aligning with the learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
