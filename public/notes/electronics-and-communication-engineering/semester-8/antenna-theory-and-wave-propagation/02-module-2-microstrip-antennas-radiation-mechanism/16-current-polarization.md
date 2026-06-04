---
title: "Current Polarization"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff77a"
status: "completed"
scrapedAt: "2026-05-23T18:12:37.990Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Current Polarization

This topic delves into the crucial aspect of current polarization in microstrip antennas and its direct impact on the polarization characteristics of the radiated electromagnetic field. Understanding current distribution is fundamental to predicting and controlling the polarization of microstrip antennas.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **LO 2.1:** Describe the relationship between current distribution and the polarization of microstrip antennas.
*   **LO 2.2:** Identify different types of current distributions present in microstrip antennas.
*   **LO 2.3:** Explain how variations in the feeding mechanism and antenna geometry influence current polarization.
*   **LO 2.4:** Relate current polarization to the radiated field polarization (linear, circular, elliptical).
*   **LO 2.5:** Analyze the impact of surface waves on the current distribution and radiation mechanism.

---

### Key Concepts and Definitions:

*   **Current Distribution:** The spatial variation of electric current along the surface of the antenna. In microstrip antennas, this current flows on the radiating patch and is influenced by the substrate properties, feed point, and patch geometry.
*   **Polarization (of an antenna):** The orientation of the electric field vector of the radiated electromagnetic wave in space. This is directly determined by the current distribution on the antenna.
*   **Linear Polarization (LP):** The electric field vector oscillates along a straight line. This occurs when the currents are primarily flowing in a single direction.
*   **Circular Polarization (CP):** The electric field vector rotates in a circle, maintaining a constant amplitude. This typically arises from the interaction of two orthogonal currents with equal amplitude and a 90-degree phase difference.
*   **Elliptical Polarization (EP):** The electric field vector rotates in an ellipse, with varying amplitude and phase. This is a more general case of polarization, where the amplitudes and phase difference of orthogonal currents are not equal or 90 degrees, respectively.
*   **Surface Waves:** Electromagnetic waves that propagate along the interface between the dielectric substrate and the ground plane of a microstrip structure. These waves can affect the radiation pattern and efficiency of the antenna.
*   **Dominant Modes:** In microstrip antennas, the fundamental radiating modes are typically the TM$_{mn}$ modes, where the subscript 'm' and 'n' denote the number of half-wavelength variations in the length and width directions, respectively. For a rectangular patch, the TM$_{10}$ and TM$_{01}$ modes are often considered in simplified analyses, while the TM$_{11}$ mode is crucial for CP antennas.
*   **Feeding Mechanism:** The method used to supply RF power to the microstrip antenna (e.g., microstrip line feed, probe feed, aperture coupling). The feed location and type significantly influence the current distribution.
*   **Resonant Modes:** Microstrip antennas radiate most efficiently when operated at their resonant frequencies, which correspond to specific current distribution patterns.

---

### 2.1 Relationship between Current Distribution and Polarization (LO 2.1, LO 2.4)

The polarization of the radiated electromagnetic wave from a microstrip antenna is directly determined by the **direction and phase** of the electric currents flowing on the radiating patch.

*   **Linear Polarization:**
    *   If the current flows predominantly in one direction (e.g., along the length of a rectangular patch), the radiated electric field will be polarized in that same direction.
    *   **Example:** A simple rectangular patch fed at one end of its length will exhibit linearly polarized radiation along its width. The current will primarily flow along the length of the patch.

*   **Circular Polarization:**
    *   Achieving CP requires the generation of two orthogonal electric field components that are equal in amplitude and have a 90-degree phase difference. This, in turn, necessitates specific current distributions.
    *   This is typically achieved by exciting two orthogonal modes (e.g., TM$_{10}$ and TM$_{01}$ or TM$_{11}$ modes) with appropriate phase and amplitude relationships.
    *   **Example:** A square patch with a perturbation (like a notch or chamfered corners) or a circularly polarized feed (like a diagonal feed to a square patch) can excite these orthogonal modes, leading to CP radiation. The current distribution will have components in both the length and width directions that are in quadrature phase.

*   **Elliptical Polarization:**
    *   EP occurs when the two orthogonal current components have unequal amplitudes or a phase difference other than 0, 90, 180, or 270 degrees.
    *   This is the most common type of polarization unless specific design techniques are employed to achieve LP or CP.

---

### 2.2 Types of Current Distributions in Microstrip Antennas (LO 2.2)

The current distribution on a microstrip patch is complex and depends on the excitation mode. However, we can categorize them based on the dominant modes excited.

*   **Dominant Mode (TM$_{10}$ for Rectangular Patch):**
    *   The simplest and most common mode excited in a rectangular patch when fed along its length.
    *   The current flows primarily along the length of the patch, peaking at the center and nulls at the radiating edges.
    *   This distribution results in linearly polarized radiation along the width of the patch.
    *   **Diagrammatic Representation:** Imagine arrows showing current flow from the feed point towards the opposite edge, with density indicating current magnitude.

*   **Orthogonal Modes (e.g., TM$_{01}$ for Rectangular Patch):**
    *   When a rectangular patch is fed along its width, the TM$_{01}$ mode is excited.
    *   The current flows primarily along the width of the patch.
    *   This distribution results in linearly polarized radiation along the length of the patch.
    *   **Importance for CP:** Combining TM$_{10}$ and TM$_{01}$ modes with appropriate phase and amplitude can generate CP.

*   **Higher-Order Modes (e.g., TM$_{11}$):**
    *   Higher-order modes can be excited, especially in square or circularly polarized patches.
    *   These modes often involve currents flowing in more complex patterns, with components in both length and width directions.
    *   The TM$_{11}$ mode is particularly important for achieving CP in circularly polarized microstrip antennas (e.g., a square patch with a diagonal feed). The current distribution is often described as circulating around the center of the patch.

---

### 2.3 Influence of Feeding Mechanism and Geometry on Current Polarization (LO 2.3)

The way an antenna is fed and its physical dimensions are critical in shaping the current distribution and thus the polarization.

*   **Feed Location:**
    *   **Edge Feed (Microstrip Line Feed):** Feeding near the edge where the electric field is maximum (for TM$_{10}$) tends to excite that particular mode and results in linear polarization. The feed point determines the direction of the dominant current.
    *   **Center Feed:** Feeding at the center of the patch typically results in a null in the current, making it inefficient for radiation unless it's part of a more complex feed network.
    *   **Probe Feed:** A probe feed located off-center can excite multiple modes, potentially leading to CP if positioned correctly to excite orthogonal modes with the desired phase relationship.
    *   **Aperture Coupled Feed:** The coupling aperture's position and orientation on the ground plane dictate which modes are excited in the patch, influencing the current distribution and polarization.

*   **Antenna Geometry:**
    *   **Rectangular Patch:** Naturally supports TM$_{mn}$ modes, with the TM$_{10}$ and TM$_{01}$ modes being dominant and leading to linear polarization when excited individually.
    *   **Square Patch:** Degenerate modes (e.g., TM$_{10}$ and TM$_{01}$ have the same resonant frequency) make it easier to excite orthogonal modes for CP.
    *   **Circular Patch:** Exhibits degenerate TM$_{0n}$ modes. A feed point offset from the center can excite a rotating current, leading to CP.
    *   **Perturbations (Chamfered corners, notches, slots):** Modifying the patch geometry can break the symmetry and create different resonant frequencies for orthogonal modes, facilitating CP operation. These perturbations influence the local current flow.

---

### 2.4 Relating Current Polarization to Radiated Field Polarization (LO 2.4)

The principle of radiation from antennas states that the electric field vector of the radiated wave is generally parallel to the direction of the current flow.

*   **Linear Polarization:**
    *   If the dominant current flows along the 'y' direction, the radiated electric field will have a dominant component in the 'y' direction (E$_y$). The polarization will be linear and aligned with the direction of the current.
    *   **Balanis (4th Ed.)**: Discusses the relationship between the current distribution and the radiation integrals, showing how the orientation of the equivalent current elements dictates the polarization of the far field.

*   **Circular Polarization:**
    *   To achieve CP, two orthogonal current components ($J_x$ and $J_y$) are necessary.
    *   If $J_x$ leads $J_y$ by 90 degrees (or vice versa) and their magnitudes are equal, the radiated electric field vector will rotate, resulting in CP.
    *   **Example:** In a square patch designed for CP, current circulates around the patch. This circulating current can be seen as a combination of two linearly polarized currents phased 90 degrees apart, each propagating along a different axis.

*   **Elliptical Polarization:**
    *   If the amplitudes of the orthogonal current components are unequal, or the phase difference is not 90 degrees, the radiated electric field will trace an ellipse.
    *   **Garg (Microstrip Antenna Design Handbook)**: Provides detailed analysis of various microstrip antenna configurations and their current distributions, relating them to the resulting polarization characteristics.

---

### 2.5 Impact of Surface Waves on Current Distribution and Radiation (LO 2.5)

Surface waves are an unwanted phenomenon in microstrip antennas as they propagate along the dielectric-ground plane interface, consuming power that could otherwise be radiated. They can also distort the radiating current.

*   **Mechanism:** Surface waves are excited when the dielectric constant of the substrate is high, or the substrate thickness is large. They tend to be more pronounced at lower frequencies or for larger structures.
*   **Effect on Current Distribution:** Surface waves can induce additional current components on the patch and substrate surface, deviating from the ideal current distributions assumed in basic models. This can alter the resonant frequencies and radiation patterns.
*   **Effect on Radiation:**
    *   **Reduced Radiation Efficiency:** Power is lost to surface waves, leading to less power being radiated.
    *   **Altered Radiation Pattern:** Surface waves can couple back to the radiating structure or radiate from the edges, potentially broadening the beam or introducing spurious lobes.
    *   **Polarization Degradation:** Surface wave currents can interfere with the intended current distribution, leading to a degradation in the desired polarization purity (e.g., increased cross-polarization for CP antennas).
*   **Mitigation:** Using substrates with lower dielectric constants, reducing substrate thickness, or employing techniques like using parasitic elements or slots can help suppress surface waves.
*   **Reference:** **Pozar (Microwave Engineering)** often discusses substrate effects and wave propagation, including surface waves in planar transmission lines and their impact on antenna performance.

---

### Key Points to Remember:

*   The **current distribution** on a microstrip patch is the primary determinant of the radiated wave's **polarization**.
*   **Linear polarization** arises from currents flowing predominantly in a single direction.
*   **Circular polarization** requires orthogonal current components with equal amplitudes and a 90-degree phase difference.
*   The **feed location, antenna geometry, and any perturbations** are crucial in controlling the current distribution and hence the polarization.
*   **Surface waves** can negatively impact both the radiation efficiency and the polarization purity of microstrip antennas by altering the intended current distributions.

---

### Practice Questions/Exercises:

1.  **Explain how a linear polarization is achieved in a simple rectangular microstrip antenna fed by a microstrip line along its length. Illustrate the expected current distribution.** (LO 2.1, LO 2.2, LO 2.4)
2.  **Describe the conditions required on the current distribution to generate circularly polarized radiation from a microstrip antenna.** (LO 2.1, LO 2.4)
3.  **Consider a square microstrip patch. How can you modify its feeding mechanism or geometry to achieve circular polarization? Discuss the expected current behavior.** (LO 2.3, LO 2.2)
4.  **What are surface waves, and how do they affect the current distribution and radiation mechanism of a microstrip antenna? Mention at least two methods to mitigate their impact.** (LO 2.5)
5.  **A microstrip antenna is designed to produce linear polarization. If the feed point is moved from the center of the length edge towards the center of the patch, how would you expect the polarization to change and why?** (LO 2.3, LO 2.1)

---

### Answers to Practice Questions:

1.  **Answer:** For a rectangular microstrip antenna fed by a microstrip line along its length (say, along the 'x'-axis, with the patch extending along the 'y'-axis), the dominant mode excited is typically TM$_{10}$. The current will flow along the length ('y' direction) of the patch, peaking at the center of the patch (along the length) and having nulls at the radiating edges. This single dominant current component polarized along the 'y' direction will result in a radiated electric field also polarized along the 'y' direction, hence linear polarization.

    *   **Current Distribution Illustration:**
        Imagine a rectangular patch. If fed at the center of one length-wise edge, current flows from this feed point towards the opposite edge. The current density would be highest in the middle of the patch (along its length) and decrease towards the edges, with zero current at the radiating edges.

2.  **Answer:** To generate circularly polarized radiation, the microstrip antenna must support and excite two orthogonal modes (e.g., TM$_{10}$ and TM$_{01}$) or have a current distribution that rotates. These orthogonal current components must have:
    *   **Equal Amplitudes:** This ensures the radiated electric field vector traces a circle rather than an ellipse.
    *   **90-degree Phase Difference:** This quadrature phase relationship between the orthogonal current components causes the electric field vector to rotate at the desired polarization rate (e.g., CP).

3.  **Answer:** To achieve circular polarization in a square microstrip patch:
    *   **Feeding Mechanism:**
        *   **Diagonal Feed:** Feeding the square patch at two adjacent corners with signals that are 90 degrees out of phase will excite orthogonal modes and produce CP.
        *   **Offset Probe Feed:** A probe feed placed at a specific location off the center of the square patch can excite both TM$_{10}$ and TM$_{01}$ modes (which are degenerate in a square patch) with unequal current amplitudes and phase difference, leading to CP or EP. Careful placement is needed for pure CP.
    *   **Geometry Modification:**
        *   **Notches/Chamfers:** Introducing notches at two opposite corners or chamfering all four corners breaks the symmetry of the square patch. This creates two resonant frequencies for the otherwise degenerate modes, allowing for a 90-degree phase difference to be achieved over a range of frequencies, resulting in CP. The current distribution in this case becomes more complex, with components circulating around the patch.

4.  **Answer:**
    *   **Surface Waves:** Surface waves are electromagnetic waves that propagate along the interface between the dielectric substrate and the ground plane of a microstrip structure. They occur when the substrate material has a relatively high dielectric constant and/or thickness, and when the frequency is such that these parameters allow for surface wave propagation.
    *   **Impact on Current Distribution:** Surface waves can induce additional currents on the patch and substrate. These parasitic currents can interfere with the desired radiating currents, altering the amplitude and phase distribution on the patch. This can lead to a shift in resonant frequencies and a distortion of the intended radiation pattern.
    *   **Impact on Radiation:**
        *   **Reduced Radiation Efficiency:** Power is channeled into surface waves instead of radiating into space.
        *   **Altered Radiation Pattern:** Surface waves can radiate inefficiently from the edges of the substrate or couple back to the antenna, causing beam broadening or spurious lobes.
        *   **Polarization Degradation:** The presence of surface wave currents can reduce the purity of the desired polarization (e.g., increase cross-polarization levels in CP antennas).
    *   **Mitigation Methods:**
        *   Use substrates with lower dielectric constants.
        *   Reduce the substrate thickness.
        *   Employ parasitic elements or slots to suppress surface wave propagation.
        *   Consider the operating frequency relative to the substrate parameters.

5.  **Answer:** If the feed point is moved from the center of the length edge towards the center of the patch:
    *   **Expected Change in Polarization:** The polarization is likely to change from pure linear polarization towards **elliptical polarization**.
    *   **Reasoning:** Moving the feed point away from the edge and towards the center reduces the amplitude of the dominant current component (along the length). As the feed point moves closer to the center, it starts to excite higher-order modes or components of orthogonal modes (like TM$_{01}$ if it's a rectangular patch). The relative amplitudes of these currents will no longer be as dominant in one direction, and the phase relationships might also deviate from the ideal for pure linear polarization. If the feed point is exactly at the center, it creates a null for the primary radiating mode, and radiation might cease or become very weak and possibly associated with spurious modes. Generally, any deviation from an ideal feed location for a specific mode will introduce imperfections in the current distribution, leading to less pure linear polarization.

---

This study guide provides a foundational understanding of current polarization in microstrip antennas, directly linking it to the underlying current distributions and their influence on radiated field polarization. Refer to the textbooks for in-depth mathematical derivations and more complex antenna configurations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
