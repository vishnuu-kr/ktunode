---
title: "Coupling"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff771"
status: "completed"
scrapedAt: "2026-05-23T18:12:30.705Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Coupling

---

### 1. Introduction to Coupling in Microstrip Antennas

Coupling refers to the transfer of electromagnetic energy between adjacent radiating elements or between a feeding mechanism and a radiating element in an array or a complex microstrip antenna structure. In microstrip antennas, understanding and controlling coupling is crucial for optimizing performance, particularly in terms of bandwidth, impedance matching, radiation pattern, and mutual interaction between elements.

**Key Concept:** Coupling can be both beneficial (e.g., for achieving wide bandwidth or specific array excitations) and detrimental (e.g., causing unwanted cross-polarization or detuning).

**Relevance to Learning Outcomes:**
*   **LO: Understand different coupling mechanisms in microstrip antennas.** (CO1, CO3)
*   **LO: Analyze the effect of coupling on antenna performance parameters.** (CO1, CO3)
*   **LO: Discuss techniques to control or enhance coupling for specific applications.** (CO3)

**References:**
*   Balanis, "Antenna Theory: Analysis and Design," 4th Ed., Chapter 12 (Mutual coupling).
*   Garg, "Microstrip Antenna Design Handbook," Chapter 6 (Mutual Coupling).
*   Pozar, "Microwave Engineering," Chapter 7 (Coupling and Directional Couplers - applicable concepts).

---

### 2. Mechanisms of Coupling in Microstrip Antennas

Coupling in microstrip antennas primarily occurs through two mechanisms:

*   **Surface Waves:** Electromagnetic energy propagating along the dielectric substrate as surface waves can couple from one element to another. These waves are guided by the dielectric-air interface.
*   **Space Waves (Leaky Waves/Surface Waves):** Electromagnetic energy can also radiate into space and be captured by another element, or radiate into the substrate and propagate as leaky waves that can then couple to other elements.

**Key Concepts:**
*   **Surface Wave Coupling:** Propagating modes supported by the dielectric substrate. The strength depends on substrate thickness, dielectric constant, and frequency.
*   **Space Wave Coupling:** Direct radiation from one element to another, similar to free-space propagation. This is more dominant at higher frequencies or for elements that are not well-shielded.

**Details:**

*   **Surface Wave Coupling:**
    *   **Mechanism:** When a microstrip element radiates energy, it can excite surface waves on the dielectric substrate. These surface waves propagate along the substrate and can be re-radiated by another nearby microstrip element.
    *   **Factors Affecting Strength:**
        *   **Substrate Thickness (h):** Thicker substrates support more surface wave modes, leading to stronger coupling.
        *   **Dielectric Constant ($\epsilon_r$):** Higher dielectric constants tend to confine fields more, potentially increasing surface wave coupling.
        *   **Frequency:** Surface wave propagation is more pronounced at higher frequencies.
        *   **Element Spacing:** Coupling strength decreases rapidly with increasing spacing.
    *   **Impact:** Can lead to unwanted gain/loss variations in an array, pattern distortion, and reduced isolation between elements.

*   **Space Wave Coupling:**
    *   **Mechanism:** This is the direct electromagnetic coupling through the radiated fields in the surrounding space. It's analogous to the mutual coupling between conventional antennas.
    *   **Factors Affecting Strength:**
        *   **Element Spacing:** Decreases with the square of the distance (for far-field coupling).
        *   **Element Orientation and Polarization:** Strongest when elements are similarly oriented and polarized.
        *   **Radiation Pattern of Individual Elements:** Coupling is strongest when the main beam of one element points towards another.
    *   **Impact:** Similar to surface wave coupling, affecting array performance and isolation.

**Example:** Consider a two-element microstrip patch array. Energy fed to one patch can travel to the other patch via surface waves propagating along the substrate or via space waves radiating from the first patch to the second.

**Highlight to Remember:** The relative importance of surface wave and space wave coupling depends on the substrate properties, operating frequency, and element spacing. Surface wave coupling is often a dominant factor in microstrip arrays, especially with thicker substrates.

**References:**
*   Balanis, 4th Ed., Chapter 12.
*   Garg, Chapter 6.

---

### 3. Effect of Coupling on Microstrip Antenna Performance

Coupling between microstrip antenna elements can significantly impact various performance parameters:

*   **Impedance Matching:** Mutual coupling can alter the input impedance of individual elements, leading to a mismatch and reduced power transfer. This is especially critical in arrays where elements are closely spaced.
*   **Bandwidth:** Coupling can sometimes broaden the bandwidth of microstrip antennas, particularly when intentionally designed to do so (e.g., in wideband arrays). However, excessive coupling can also lead to impedance mismatches that limit the usable bandwidth.
*   **Radiation Pattern:**
    *   **Mutual Coupling:** Can distort the main beam, introduce sidelobes, and affect the beamwidth.
    *   **Grating Lobes:** In periodic arrays, coupling can influence the position and amplitude of grating lobes.
*   **Polarization Purity:** Coupling can excite orthogonal polarizations, leading to reduced cross-polarization discrimination.
*   **Array Efficiency:** Unwanted coupling can lead to power transfer to unintended directions or modes, reducing the overall efficiency of the array.
*   **Isolation:** Poor isolation between elements (high coupling) can make it difficult to control the excitation of each element independently, which is crucial for beamforming and adaptive arrays.

**Key Concepts:**
*   **Mutual Impedance:** The impedance seen at the terminals of one antenna when a current is driven into another antenna.
*   **Mutual Coupling Coefficient (Mutual Admittance/Impedance):** Quantifies the strength of the coupling between elements.

**Details:**

*   **Impedance and Bandwidth:**
    *   In an array, the input impedance of an element is affected by the presence and excitation of neighboring elements due to coupling. This leads to a change in the self-impedance.
    *   *Example:* For two closely spaced resonant patches, the coupling can shift the resonant frequency and alter the bandwidth.

*   **Radiation Pattern Distortion:**
    *   The total field at any point is the vector sum of the fields radiated by all elements, including the effects of mutual coupling on their excitations.
    *   *Example:* If element 2 couples strongly to element 1, the signal driving element 1 will not only be the excitation signal but will also contain a component from element 2, altering the overall radiation.

*   **Polarization Degradation:**
    *   Coupling can be polarized differently from the intended polarization, introducing cross-polarized components.
    *   *Example:* If two linearly polarized patches are placed side-by-side with their polarization axes parallel, coupling can induce a cross-polarized component.

**Highlight to Remember:** Coupling effects are often analyzed using the concept of mutual impedance (or admittance) in circuit models of antenna arrays.

**References:**
*   Balanis, 4th Ed., Chapter 12.
*   Garg, Chapter 6.
*   Collin, "Antennas and Radio Wave Propagation," Chapter 5 (Mutual coupling).

---

### 4. Quantifying Coupling: Mutual Impedance and Admittance

Coupling can be mathematically represented using mutual impedance ($Z_{ij}$) or mutual admittance ($Y_{ij}$), which are off-diagonal terms in the impedance or admittance matrix, respectively.

**Key Concepts:**
*   **Impedance Matrix ($[Z]$):** Relates voltages and currents in an N-port network: $[V] = [Z][I]$.
    *   $Z_{ii}$: Self-impedance of element $i$.
    *   $Z_{ij}$ ($i \neq j$): Mutual impedance between element $i$ and element $j$. It represents the voltage induced at port $i$ due to a unit current at port $j$.
*   **Admittance Matrix ($[Y]$):** Relates currents and voltages in an N-port network: $[I] = [Y][V]$.
    *   $Y_{ii}$: Self-admittance of element $i$.
    *   $Y_{ij}$ ($i \neq j$): Mutual admittance between element $i$ and element $j$. It represents the current induced at port $i$ due to a unit voltage at port $j$.

**Details:**

*   **Mutual Impedance ($Z_{ij}$):**
    *   $Z_{ij} = \frac{V_i}{I_j} \bigg|_{I_k=0, k \neq j}$
    *   The induced voltage at element $i$ due to a current $I_j$ at element $j$ is $V_i = Z_{ij} I_j$.
    *   The total voltage at element $i$ is $V_i = Z_{ii} I_i + \sum_{j \neq i} Z_{ij} I_j$.

*   **Mutual Admittance ($Y_{ij}$):**
    *   $Y_{ij} = \frac{I_i}{V_j} \bigg|_{V_k=0, k \neq j}$
    *   The induced current at element $i$ due to a voltage $V_j$ at element $j$ is $I_i = Y_{ij} V_j$.
    *   The total current at element $i$ is $I_i = Y_{ii} V_i + \sum_{j \neq i} Y_{ij} V_j$.

**Physical Interpretation:**
*   Mutual impedance is typically inductive for antennas radiating in phase, and capacitive for antennas radiating out of phase.
*   The sign and magnitude of $Z_{ij}$ (or $Y_{ij}$) depend on the distance, orientation, polarization, and frequency.

**Calculation Methods:**
*   **Electromagnetic Full-wave Simulations:** Software like HFSS, CST, FEKO can directly compute the impedance matrix of an array.
*   **Moment Method (MoM):** A numerical technique used to solve integral equations, often employed to calculate mutual coupling coefficients.
*   **Approximate Analytical Formulas:** Available for specific configurations (e.g., infinite arrays or closely spaced elements), often derived from physical optics or equivalent circuit models. Balanis provides some approximations.

**Highlight to Remember:** The off-diagonal terms of the $[Z]$ or $[Y]$ matrix are the key indicators of coupling strength. A smaller magnitude generally implies weaker coupling and better isolation.

**References:**
*   Balanis, 4th Ed., Chapter 12.
*   Garg, Chapter 6.
*   Collin, Chapter 5.

---

### 5. Techniques to Control or Enhance Coupling

Controlling coupling is essential for designing arrays with desired performance. Several techniques can be employed:

*   **Element Spacing:**
    *   **Increasing Spacing:** Reduces both surface wave and space wave coupling. However, in periodic arrays, increasing spacing beyond $\lambda/2$ (in the grating lobe direction) can lead to the formation of unwanted grating lobes.
    *   **Decreasing Spacing:** Increases coupling, which can be exploited for bandwidth enhancement or specific array excitations.

*   **Substrate Properties:**
    *   **Reducing Substrate Thickness (h):** Minimizes surface wave excitation and propagation, thus reducing surface wave coupling. This is a very common technique.
    *   **Using Low Dielectric Constant Substrates ($\epsilon_r$):** Lessens the confinement of fields and reduces surface wave coupling. However, lower $\epsilon_r$ generally leads to larger antenna dimensions.

*   **Element Design and Geometry:**
    *   **Slotting/Cutting Patches:** Introducing slots or making cuts in the radiating patches can modify their current distribution and radiation patterns, thereby affecting the mutual coupling.
    *   **Using Parasitic Elements:** Placing parasitic patches near the driven elements can be used to control the input impedance, bandwidth, and radiation characteristics, and can influence coupling.
    *   **Embedding Elements in Different Media:** For instance, placing elements in a dielectric slab with a lower dielectric constant can help isolate them.

*   **Coupling Elements/Mechanisms:**
    *   **Coupling Slots:** Creating slots between patches can facilitate controlled electromagnetic coupling, used for impedance matching or bandwidth enhancement.
    *   **Corporate Feed Networks:** Well-designed feed networks (e.g., using Wilkinson power dividers) can provide isolation between elements, but coupling still exists between the radiating elements themselves.
    *   **Defective Ground Structures (DGS):** DGS etched into the ground plane can modify the surface wave propagation characteristics, allowing for reduction of unwanted coupling.
    *   **Metamaterial Structures:** Can be used to manipulate electromagnetic fields and potentially enhance or suppress coupling between elements. (Refer to Metamaterials for Antenna Applications by Singh et al.)

*   **Shielding:**
    *   **Metallic Walls/Cavities:** Enclosing elements within metallic cavities or using partitioning walls can significantly reduce space wave coupling. This is a common practice in array design for isolation.

**Key Concepts:**
*   **Grating Lobes:** Undesired beams that appear in an array pattern when the inter-element spacing is too large.
*   **Slot Coupling:** Transfer of energy through a slot connecting two resonant structures.
*   **Defective Ground Structures (DGS):** Periodic or aperiodic patterns etched in the ground plane to control EM wave propagation.

**Example:**
*   **Wideband Operation:** In some wideband microstrip antenna arrays, controlled strong coupling between adjacent elements is intentionally used to broaden the operational bandwidth.
*   **Isolation:** To achieve high isolation between elements in an adaptive beamforming array, elements are often spaced further apart or shielded.

**Highlight to Remember:** The choice of technique depends on the specific application requirements (e.g., bandwidth, isolation, cost, complexity) and the dominant coupling mechanism at play.

**References:**
*   Balanis, 4th Ed., Chapter 12.
*   Garg, Chapter 6.
*   Singh, Abegaonkar, Koul, "Metamaterials for Antenna Applications," (relevant chapters on coupling manipulation).
*   Choudhury, "Reconfigurable Antennas," (may discuss coupling in the context of dynamic reconfigurations).

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual):**
What are the two primary mechanisms responsible for electromagnetic coupling between microstrip antenna elements? Briefly explain each.

**Question 2 (Analysis):**
Consider two identical microstrip patch antennas placed side-by-side. If the distance between their centers is increased, how would you expect the mutual coupling to change? Explain the reason for this change for both surface wave and space wave coupling.

**Question 3 (Design/Application):**
You are designing a 4-element linear microstrip array for radar applications. High isolation between elements is crucial for accurate target detection. What design considerations would you prioritize to minimize mutual coupling between the patches?

**Question 4 (Quantification):**
In a two-element microstrip array, the impedance matrix is given by:
$$
[Z] = \begin{bmatrix}
50 + j20 & 5 - j10 \\
5 - j10 & 50 + j20
\end{bmatrix} \Omega
$$
What is the value of mutual impedance between the two elements? What does the magnitude of the mutual impedance ($|Z_{12}|$) tell you about the coupling strength?

**Question 5 (Application - CO2/CO3):**
Describe how you would measure the mutual coupling between two microstrip patches in a laboratory setting. What parameters would you need to measure, and what equipment would be required?

---

### Answers to Practice Questions

**Answer 1:**
The two primary mechanisms are:
1.  **Surface Waves:** Electromagnetic energy propagating along the dielectric substrate interface. These are guided waves supported by the substrate.
2.  **Space Waves (Leaky Waves):** Electromagnetic energy radiating into the surrounding space and then being captured by another element, or radiating into the substrate and leaking out.

**Answer 2:**
*   **Surface Wave Coupling:** As the distance between the patches increases, the surface wave coupling strength decreases because the amplitude of the surface wave decays exponentially with distance from the source.
*   **Space Wave Coupling:** As the distance increases, the space wave coupling also decreases. For far-field coupling, it decreases with the square of the distance ($1/R^2$). For near-field coupling, the decay can be faster.

**Answer 3:**
To minimize mutual coupling for high isolation:
1.  **Increase Element Spacing:** Space the elements further apart (e.g., $> 0.75\lambda$ or even $1\lambda$, being mindful of grating lobes).
2.  **Use Thin Substrates:** Employ a thinner dielectric substrate to reduce surface wave excitation.
3.  **Use Low Dielectric Constant Substrates:** This further reduces surface wave effects.
4.  **Element Orientation/Polarization:** Ensure elements are oriented and polarized to minimize direct radiative coupling.
5.  **Shielding:** Consider incorporating metallic walls or cavities between elements if isolation requirements are very stringent.
6.  **Slotting/DGS:** Design patches with specific slots or use Defective Ground Structures (DGS) to disrupt surface wave propagation or modify radiating characteristics.

**Answer 4:**
The mutual impedance between the two elements is $Z_{12} = 5 - j10 \Omega$.
The magnitude of the mutual impedance is $|Z_{12}| = \sqrt{5^2 + (-10)^2} = \sqrt{25 + 100} = \sqrt{125} \approx 11.18 \Omega$.
A smaller magnitude of mutual impedance indicates weaker coupling and better isolation between the elements. The value $11.18 \Omega$ relative to the self-impedance (e.g., $|Z_{11}| = \sqrt{50^2 + 20^2} = \sqrt{2900} \approx 53.85 \Omega$) suggests moderate coupling.

**Answer 5:**
To measure mutual coupling between two microstrip patches (let's call them Patch 1 and Patch 2):
*   **Equipment:**
    *   Vector Network Analyzer (VNA)
    *   Two coaxial cables
    *   Two suitable microstrip launchers (e.g., SMA connectors with appropriate transition)
    *   Substrate with fabricated patches.

*   **Procedure:**
    1.  **Fabricate:** Fabricate the two microstrip patches on a substrate, along with the necessary feeding lines.
    2.  **Connect:** Connect one port of the VNA to the feed of Patch 1 and the other port to the feed of Patch 2.
    3.  **Calibrate:** Calibrate the VNA for accurate measurements.
    4.  **Measure S-parameters:**
        *   To measure $S_{21}$ (which represents coupling from Patch 1 to Patch 2): Terminate Patch 2 with its characteristic impedance (e.g., 50 $\Omega$) and measure the transmission coefficient from Patch 1 to Patch 2. This is essentially the $S_{21}$ parameter of the two-port network.
        *   To measure $S_{12}$ (coupling from Patch 2 to Patch 1): Terminate Patch 1 with 50 $\Omega$ and measure the transmission coefficient from Patch 2 to Patch 1. This is $S_{12}$. For passive antennas, $S_{21} = S_{12}$ due to reciprocity.
    5.  **Analyze:** The magnitude of $S_{21}$ (or $S_{12}$) in dB ($20 \log_{10} |S_{21}|$) directly indicates the coupling level. A value of -20 dB means the signal received at the terminated second port is 20 dB lower than the signal transmitted by the first port. High negative values (e.g., -40 dB, -50 dB) indicate low coupling (high isolation).

This directly allows for the measurement of the mutual coupling coefficients, which can then be used to derive mutual impedance or admittance values.

---

### 7. Important Points to Remember

*   Coupling in microstrip antennas is a phenomenon of energy transfer between adjacent elements or between feed and element.
*   The two primary coupling mechanisms are **surface waves** and **space waves**.
*   **Surface wave coupling** is often dominant, especially with thick, high dielectric constant substrates.
*   Coupling significantly affects **impedance matching**, **bandwidth**, **radiation pattern**, and **polarization purity**.
*   Mutual coupling is quantified by **mutual impedance** ($Z_{ij}$) or **mutual admittance** ($Y_{ij}$), which are the off-diagonal terms in the $[Z]$ or $[Y]$ matrix of the antenna array.
*   Techniques to **control coupling** include adjusting element spacing, substrate properties, element geometry, and using decoupling structures like slots or DGS.
*   **Increasing element spacing** and using **thinner, low-$\epsilon_r$ substrates** are common methods to reduce coupling.
*   Conversely, **controlled strong coupling** can be utilized for bandwidth enhancement.
*   Measuring coupling involves using a **Vector Network Analyzer (VNA)** to obtain S-parameters.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Analyze the radiation mechanism):** This module, by discussing coupling, directly aids in analyzing how energy is transferred and affects radiation patterns and overall antenna behavior.
*   **CO2 (Design and measure parameters):** Understanding coupling is fundamental for designing arrays with desired impedance matching and radiation characteristics. Measuring coupling is part of characterizing antenna performance.
*   **CO3 (Analyze and design advanced antennas):** Advanced antennas like phased arrays, adaptive antennas, and broadband arrays heavily rely on the precise control of mutual coupling between elements. This topic is crucial for their analysis and design.
*   **CO4 (Explain modes and parameters of radio wave propagation):** While not directly about wave propagation modes in the atmosphere, surface waves are a form of guided wave propagation along the substrate, which is a relevant aspect of wave propagation at a smaller scale.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
