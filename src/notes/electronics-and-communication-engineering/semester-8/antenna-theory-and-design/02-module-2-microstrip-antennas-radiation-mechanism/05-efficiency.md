---
title: "Efficiency"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7d7"
status: "completed"
scrapedAt: "2026-05-23T18:11:47.448Z"
---
# ANTENNA THEORY AND DESIGN

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Efficiency

---

**Objective:** To understand the various loss mechanisms that affect the efficiency of microstrip antennas and methods to improve it.

**Relevance to Course Outcomes:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):** Understanding efficiency is crucial as it quantifies how effectively the antenna converts input power into radiated power, a key aspect of the radiation mechanism.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** Efficiency is a critical design parameter that needs to be optimized and measured in microstrip antenna design.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):** The principles of efficiency discussed here are fundamental to designing and analyzing more complex and advanced antenna structures.

---

### 1. Introduction to Antenna Efficiency

Antenna efficiency is a measure of how well an antenna converts the power delivered to its terminals into radiated power. It is a dimensionless quantity, usually expressed as a percentage.

**Definition:**

*   **Radiation Efficiency ($\eta_r$)**: The ratio of power radiated ($P_{rad}$) to the power accepted by the antenna ($P_{in}$) after accounting for all non-radiative losses.

    $\eta_r = \frac{P_{rad}}{P_{in}}$

In practice, the total efficiency ($\eta_o$) of an antenna is the product of its radiation efficiency and its internal efficiency (related to impedance mismatch). However, in the context of loss mechanisms, we often focus on radiation efficiency.

**Importance:**

*   **Effective Power Transfer:** High efficiency ensures that a larger portion of the input power is radiated, leading to better performance in terms of range and signal strength.
*   **System Performance:** In communication systems, low efficiency means more power needs to be transmitted to achieve the desired signal level, which can lead to increased power consumption and heat dissipation.
*   **Design Optimization:** Understanding and minimizing loss mechanisms is vital for designing efficient microstrip antennas.

---

### 2. Loss Mechanisms in Microstrip Antennas

Microstrip antennas, due to their planar structure and reliance on dielectric substrates, are susceptible to several loss mechanisms. These can be broadly categorized into:

#### 2.1. Conductor Losses

*   **Description:** These losses occur due to the finite conductivity of the metallic conductors used to form the radiating patch and the ground plane. The current flowing through the conductors encounters resistance, dissipating power as heat.
*   **Origin:**
    *   **DC Resistance:** The bulk resistance of the conductor.
    *   **AC Resistance (Skin Effect):** At high frequencies (RF/microwave), the current tends to flow only on the surface of the conductor, reducing the effective cross-sectional area and increasing resistance. The depth to which the current penetrates is called the **skin depth ($\delta$)**, given by:

        $\delta = \sqrt{\frac{2}{\omega \mu \sigma}}$

        where:
        *   $\omega = 2\pi f$ (angular frequency)
        *   $\mu$ is the permeability of the conductor
        *   $\sigma$ is the conductivity of the conductor

*   **Impact on Microstrip Antennas:**
    *   The current distribution on the patch and feed lines is not uniform, especially near the edges and feed points, leading to increased localized losses.
    *   The conductors in microstrip antennas are typically thin and have a finite width, exacerbating the skin effect.
*   **Mitigation:**
    *   **Using High Conductivity Materials:** Copper and silver are preferred.
    *   **Increasing Conductor Thickness:** While thin conductors are characteristic, slightly increasing thickness can reduce DC resistance.
    *   **Using Plating:** Gold plating can reduce surface resistance, especially in humid environments.
    *   **Minimizing Current Density:** Careful design of the feed network and radiating element to avoid highly concentrated currents.

**Reference:** Balanis (4th Ed., Chapter 2.2.3) discusses conductor losses in general antennas. Garg (Chapter 3.3) specifically addresses conductor losses in microstrip transmission lines and antennas.

---

#### 2.2. Dielectric Losses

*   **Description:** These losses occur due to the finite conductivity and dielectric polarization losses within the dielectric substrate material. As the electromagnetic wave propagates through the dielectric, energy is dissipated as heat due to molecular friction.
*   **Origin:**
    *   **Conductivity of the Dielectric ($\sigma_d$):** Similar to conductor losses, if the dielectric has finite conductivity, current flows through it, dissipating power.
    *   **Dielectric Polarization Losses (Loss Tangent):** At high frequencies, the alternating electric field causes polarization of the dielectric molecules. This polarization process is not instantaneous and leads to energy dissipation. This is quantified by the **loss tangent ($\tan \delta$)**, which is the ratio of the imaginary part to the real part of the complex permittivity ($\epsilon_r = \epsilon'_r - j\epsilon''_r$):

        $\tan \delta = \frac{\epsilon''_r}{\epsilon'_r}$

        where $\epsilon''_r$ represents the dielectric loss.
*   **Impact on Microstrip Antennas:**
    *   The electromagnetic fields of the microstrip antenna are strongly coupled to the dielectric substrate.
    *   Low-loss dielectric materials are desirable for efficient operation.
*   **Mitigation:**
    *   **Selecting Low-Loss Dielectric Materials:** Materials like Rogers, RT/duroid, or Teflon-based substrates generally have lower loss tangents compared to ceramics or FR-4.
    *   **Minimizing Substrate Thickness:** Thinner substrates tend to reduce the overall dielectric loss, though this can also affect bandwidth.

**Reference:** Balanis (4th Ed., Chapter 2.2.3) discusses dielectric losses. Garg (Chapter 3.3) provides details on dielectric losses in microstrip lines. Collin (Chapter 7) covers dielectric losses in wave propagation.

---

#### 2.3. Surface Wave Losses

*   **Description:** In microstrip structures, especially with thicker substrates and lower dielectric constants, there's a tendency for electromagnetic energy to propagate as **surface waves** within the dielectric substrate, rather than radiating into free space. These surface waves are non-radiative modes.
*   **Origin:** The dielectric substrate acts as a dielectric slab waveguide. If the substrate thickness and dielectric constant are sufficiently large, certain modes can be guided along the interface between the conductor and the dielectric, and within the dielectric itself.
*   **Impact on Microstrip Antennas:**
    *   Surface waves carry energy away from the radiating element without contributing to the far-field radiation, effectively reducing the radiation efficiency.
    *   Surface waves can be coupled into the feed line, causing unwanted radiation or interference.
    *   Surface waves are more pronounced at lower frequencies and with thicker substrates.
*   **Mitigation:**
    *   **Using Thin Substrates:** This is the most effective method to suppress surface waves.
    *   **Using Dielectrics with Lower Dielectric Constants:** Lower $\epsilon_r$ reduces the guiding properties of the substrate.
    *   **Employing Ground Plane Slots or Notches:** Cutting slots or notches in the ground plane adjacent to the radiating element can help to disrupt surface wave propagation and re-radiate some of the surface wave energy. This technique is particularly useful for increasing radiation efficiency and achieving pattern control.
    *   **Using Absorbing Materials:** Placing absorbing materials around the antenna edges can absorb surface waves.

**Reference:** Garg (Chapter 3.4) provides a detailed discussion of surface wave losses in microstrip antennas and methods for their suppression. Pozar (4th Ed., Chapter 10) discusses substrate effects and surface waves in printed antennas.

---

#### 2.4. Radiation Efficiency vs. Total Efficiency

It's important to distinguish between different types of efficiencies:

*   **Radiation Efficiency ($\eta_r$)**: This is the ratio of radiated power to the power delivered to the antenna terminals *after* accounting for conductor and dielectric losses.

    $\eta_r = \frac{P_{rad}}{P_{rad} + P_{loss}}$

    where $P_{loss} = P_{conductor} + P_{dielectric} + P_{surface\_wave}$

*   **Efficiency considering Mismatch ($\eta_m$)**: This accounts for the power lost due to reflection at the antenna terminals because of impedance mismatch.

    $\eta_m = \frac{P_{transmitted}}{P_{accepted}}$

    where $P_{accepted}$ is the power delivered to the antenna terminals, and $P_{transmitted}$ is the power actually transferred to the antenna structure. This is related to the voltage standing wave ratio (VSWR) or return loss.

*   **Total Efficiency ($\eta_o$)**: This is the product of radiation efficiency and mismatch efficiency, representing the ratio of radiated power to the incident power at the antenna terminals.

    $\eta_o = \eta_r \times \eta_m$

When discussing loss mechanisms, we are primarily concerned with the factors contributing to the reduction of $\eta_r$.

---

### 3. Quantifying Efficiency

The efficiency of a microstrip antenna is often analyzed using lumped element equivalent circuits, where the losses are represented by resistive components.

*   **Radiation Resistance ($R_{rad}$):** Represents the power radiated by the antenna.
*   **Loss Resistance ($R_{loss}$):** Represents the power dissipated due to conductor, dielectric, and surface wave losses.

    $R_{loss} = R_{conductor} + R_{dielectric} + R_{surface\_wave}$

*   **Radiation Efficiency ($\eta_r$)** can be expressed as:

    $\eta_r = \frac{R_{rad}}{R_{rad} + R_{loss}}$

**Methods for Calculating/Estimating Losses:**

*   **Analytical Methods:** Based on current distribution analysis (e.g., Method of Moments) for conductor and dielectric losses. These methods can be complex for microstrip antennas.
*   **Numerical EM Solvers:** Software like HFSS, CST, or FEKO can accurately simulate the antenna structure and provide breakdown of losses.
*   **Empirical Formulas:** Formulas derived from experimental data for specific antenna types and substrate materials.

---

### 4. Factors Affecting Efficiency

*   **Substrate Properties:**
    *   **Dielectric Constant ($\epsilon_r$):** Higher $\epsilon_r$ generally leads to more field confinement in the dielectric, increasing dielectric and surface wave losses, but can also reduce the physical size.
    *   **Loss Tangent ($\tan \delta$):** Lower $\tan \delta$ is crucial for minimizing dielectric losses.
    *   **Substrate Thickness (h):** Thicker substrates increase surface wave excitation and can also increase conductor losses due to wider bandwidths and higher current densities. However, thicker substrates can also improve radiation efficiency by moving away from very thin substrate regimes where other losses might dominate.
*   **Conductor Properties:**
    *   **Conductivity ($\sigma$):** Higher conductivity reduces conductor losses.
    *   **Thickness:** Thicker conductors reduce DC resistance.
*   **Operating Frequency:** Conductor losses (skin effect) and dielectric losses increase with frequency.
*   **Antenna Geometry and Dimensions:** The shape of the radiating patch, its size relative to the wavelength, and the feed mechanism all influence current distribution and thus losses.
*   **Feed Network Design:** Losses in the feed lines and transitions.
*   **Environmental Factors:** Humidity can affect surface conductivity and dielectric losses.

---

### 5. Improving Efficiency of Microstrip Antennas

*   **Material Selection:** Choose substrates with low loss tangents (e.g., Rogers, Teflon-based materials).
*   **Substrate Thickness Optimization:** Avoid excessively thick substrates to minimize surface waves, but also consider that very thin substrates might not be optimal for all designs. The optimal thickness is often a trade-off.
*   **Conductor Optimization:** Use high-conductivity metals and ensure adequate conductor thickness. Consider plated surfaces for critical applications.
*   **Surface Wave Suppression Techniques:**
    *   **Ground Plane Modifications:** Introduce slots, notches, or metallic posts in the ground plane to scatter or absorb surface waves.
    *   **Using Artificial Magnetic Conductors (AMCs) / Electromagnetic Band Gap (EBG) Structures:** These periodic structures can be incorporated to suppress surface wave propagation while allowing desired radiation.
*   **Minimizing Mismatch:** Design impedance matching networks to ensure maximum power transfer to the antenna.
*   **Optimizing Feed Location:** Proper feed point selection minimizes current crowding and can reduce certain losses.
*   **Advanced Design Techniques:**
    *   **Stacked Patches:** Can improve bandwidth and efficiency.
    *   **Proximity-Coupled Feeds:** Often result in lower losses compared to direct probe feeds.
    *   **Slot Antennas:** While not strictly microstrip patches, slot antennas etched in the ground plane of a microstrip structure can offer different radiation characteristics and sometimes improved efficiency.

---

### 6. Examples and Applications

*   **High-Frequency Applications (e.g., mm-Wave):** Efficiency becomes paramount due to rapidly increasing losses. Careful selection of materials and designs is critical. For instance, in 5G and future communication systems operating at millimeter-wave frequencies, even small losses can significantly degrade system performance.
*   **Wearable Antennas:** Often designed on flexible substrates with proximity to the human body, leading to complex interactions and potential losses. Understanding and mitigating dielectric and absorption losses from the body is crucial.
*   **RFID Tags:** Efficiency directly impacts the read range. Low-loss design is essential for cost-effective and high-performance RFID systems.

---

### 7. Key Points to Remember

*   **Efficiency is crucial:** It dictates how much of the input power is radiated.
*   **Major loss mechanisms:** Conductor losses, dielectric losses, and surface wave losses.
*   **Conductor losses:** Due to skin effect and finite conductivity of metals.
*   **Dielectric losses:** Related to the loss tangent ($\tan \delta$) of the substrate material.
*   **Surface wave losses:** Occur when the substrate guides waves non-radiatively, significant for thicker substrates and higher dielectric constants.
*   **Mitigation strategies:** Involve careful material selection, geometrical optimization, and employing advanced techniques like ground plane modification or EBGs.
*   **Total efficiency:** Combines radiation efficiency and mismatch efficiency.

---

### 8. Practice Questions and Answers

**Question 1:** Define the radiation efficiency of an antenna and list the primary loss mechanisms in microstrip antennas.

**Answer 1:**
Radiation efficiency ($\eta_r$) is the ratio of power radiated ($P_{rad}$) to the power accepted by the antenna ($P_{in}$), accounting for non-radiative losses.
$\eta_r = \frac{P_{rad}}{P_{in}}$
The primary loss mechanisms in microstrip antennas are:
1.  **Conductor Losses:** Due to the finite conductivity and skin effect in metallic conductors.
2.  **Dielectric Losses:** Due to the finite conductivity and dielectric polarization losses in the substrate material (quantified by the loss tangent).
3.  **Surface Wave Losses:** Due to electromagnetic energy propagating as guided waves within the dielectric substrate.

**Question 2:** How does the loss tangent of the dielectric substrate affect the efficiency of a microstrip antenna?

**Answer 2:**
The loss tangent ($\tan \delta$) is a measure of the dielectric material's ability to dissipate energy as heat when subjected to an alternating electric field. A higher loss tangent indicates greater dielectric losses. Since the electromagnetic fields of a microstrip antenna are strongly coupled to the substrate, high dielectric losses (high $\tan \delta$) lead to a significant portion of the input power being dissipated within the dielectric, thus reducing the radiation efficiency. Therefore, low-loss dielectric materials with low $\tan \delta$ are preferred for efficient microstrip antenna design.

**Question 3:** Explain the phenomenon of surface waves in microstrip antennas and suggest two methods to suppress them.

**Answer 3:**
Surface waves are guided electromagnetic waves that propagate along the interface between the dielectric substrate and the surrounding medium, or within the dielectric itself. In microstrip antennas, the dielectric substrate can act as a waveguide, guiding energy away from the radiating element without radiating it into free space. This reduces the radiation efficiency. Surface waves are more prominent in thicker substrates and substrates with higher dielectric constants.

Two methods to suppress surface waves:
1.  **Using Thin Substrates:** Reducing the substrate thickness (h) significantly suppresses surface wave excitation.
2.  **Ground Plane Modification:** Introducing slots, notches, or conducting elements (like parasitic patches or posts) in the ground plane adjacent to the radiating element can scatter or absorb surface waves, or reradiate them in a controlled manner. Electromagnetic Band Gap (EBG) structures and Artificial Magnetic Conductors (AMCs) are advanced techniques that can create a "stop band" for surface waves.

**Question 4:** If an antenna has a radiation efficiency of 80% and a mismatch efficiency of 90%, what is its total efficiency?

**Answer 4:**
Total efficiency ($\eta_o$) is the product of radiation efficiency ($\eta_r$) and mismatch efficiency ($\eta_m$).
$\eta_o = \eta_r \times \eta_m$
$\eta_o = 0.80 \times 0.90$
$\eta_o = 0.72$ or 72%

**Question 5:** Which type of loss mechanism is most significantly affected by the operating frequency (assuming other parameters are constant)? Explain why.

**Answer 5:**
**Conductor losses**, specifically those due to the **skin effect**, are most significantly affected by the operating frequency. The skin depth ($\delta$) is inversely proportional to the square root of the frequency: $\delta \propto 1/\sqrt{f}$. As the frequency increases, the skin depth decreases, meaning the current is confined to a thinner layer on the conductor surface. This effectively reduces the cross-sectional area available for current flow, increasing the conductor's resistance and, consequently, the power dissipated as heat. Dielectric losses also increase with frequency, but the skin effect typically becomes dominant for conductor losses at microwave and millimeter-wave frequencies.

---

This comprehensive set of notes covers the efficiency topic for microstrip antennas, aligning with the learning outcomes and course objectives. The inclusion of definitions, mechanisms, mitigation strategies, and practice questions should provide a solid understanding of this critical parameter.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
