---
title: "Microstrip antennas: Radiation mechanism"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7d3"
status: "completed"
scrapedAt: "2026-05-23T18:11:44.152Z"
---
# ANTENNA THEORY AND DESIGN

## Module 2: Microstrip Antennas

### Topic: Radiation Mechanism of Microstrip Antennas

---

### **1. Introduction to Microstrip Antennas**

Microstrip antennas, also known as patch antennas, are planar antennas consisting of a radiating patch on one side of a dielectric substrate and a ground plane on the other side. They are widely used due to their low profile, conformability, ease of integration with microwave circuits, and cost-effectiveness.

*   **Key Components:**
    *   **Radiating Patch:** A metallic element, typically rectangular or circular, that radiates electromagnetic waves.
    *   **Dielectric Substrate:** The insulating material separating the patch from the ground plane. Its dielectric constant ($\epsilon_r$) and thickness ($h$) significantly influence antenna performance.
    *   **Ground Plane:** A conductive layer on the bottom of the substrate that reflects waves and forms part of the antenna structure.
    *   **Feed Line:** A transmission line (e.g., microstrip line or coaxial probe) used to excite the antenna.

*   **Historical Context:** Microstrip antennas gained prominence in the 1970s with the advent of printed circuit board (PCB) technology, making them amenable to mass production. (Ref: Balanis, 4th Ed., Chapter 13; Garg, Chapter 1)

---

### **2. Radiation Mechanism**

The radiation from microstrip antennas is primarily due to the **fringing fields** that exist at the edges of the radiating patch. These fringing fields, which extend beyond the physical boundaries of the patch, are effectively radiating slots.

*   **Two Main Perspectives for Understanding Radiation:**

    *   **Slot-Antenna Model:** This model considers the microstrip antenna as equivalent to two radiating slots separated by a distance approximately equal to the length of the patch ($L$). The radiation occurs from these slots due to the currents flowing along the edges of the patch.
    *   **Equivalent Magnetic Current Model:** This model treats the radiating edges of the patch as regions of magnetic current density ($\mathbf{M}$). The radiation is then calculated by integrating these magnetic currents over the edges of the patch.

*   **Primary Sources of Radiation:**

    *   **The radiating patch edges:** These are the most significant contributors to radiation. For a rectangular patch, the radiating edges are typically the ones along the length ($L$).
    *   **The feed point:** While the feed line itself can radiate, its contribution is usually considered negligible compared to the patch edges, especially for well-designed feed structures.

*   **Mode of Operation:** Microstrip antennas are resonant structures. They radiate most efficiently when operated in a dominant mode, typically the **TM$_{10}$ mode** for a rectangular patch or the **TM$_{01}$ mode** for a circular patch. The resonant frequency depends on the dimensions of the patch and the dielectric properties of the substrate.

    *   **Example (Rectangular Patch):** For a rectangular patch of length $L$ and width $W$ on a substrate of thickness $h$ and dielectric constant $\epsilon_r$, the dominant TM$_{10}$ mode resonates when the length $L$ is approximately half a wavelength in the dielectric medium ($\lambda_g/2$).

        *   $\lambda_g = \frac{\lambda_0}{\sqrt{\epsilon_{eff}}}$
        *   $\epsilon_{eff}$ is the effective dielectric constant, which is typically between the dielectric constant of the substrate ($\epsilon_r$) and that of free space (1). It depends on $\epsilon_r$, $h$, and the patch width $W$.
        *   The effective length of the patch, including the fringing fields, is slightly larger than $L$. This leads to the concept of **effective dielectric constant** and **effective length**.

    *   **For the TM$_{10}$ mode, the approximate resonant frequency is given by:**
        $f_{10} = \frac{c}{2L_{eff}\sqrt{\epsilon_{eff}}}$
        where $c$ is the speed of light in vacuum and $L_{eff} = L + 2\Delta L$ is the effective length, with $\Delta L$ being the fringe-field extension.

*   **Radiation from the Edges as Slots:**

    *   **Two-Slot Model:** The patch edges along the length ($L$) are considered as radiating slots of length $L$ and width $w_s$. The electric fields at these edges are primarily transverse to the direction of propagation and fringing out into space. These fringing fields are modeled as magnetic currents.
    *   **Electric Field Distribution:** The electric field between the patch and the ground plane is concentrated along the length dimension for the TM$_{10}$ mode. This field fringes at the edges, creating radiation.
    *   **Bandwidth:** The narrow bandwidth of microstrip antennas is attributed to the stored energy in the fringing fields and the equivalent radiating slots. (Ref: Balanis, 4th Ed., Chapter 13; Garg, Chapter 2)

*   **Effective Dielectric Constant ($\epsilon_{eff}$):**

    *   The fringing fields extend slightly beyond the physical boundaries of the patch. This makes the electromagnetic wave "see" an effective dielectric constant that is higher than that of the substrate material but lower than that of free space.
    *   $\epsilon_{eff}$ depends on $\epsilon_r$, $h/W$ ratio, and the mode.
    *   A common approximation for $\epsilon_{eff}$ for the TM$_{10}$ mode is:
        $\epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left(1 + 12\frac{h}{W}\right)^{-\frac{1}{2}}$ (This is a simplified form, more complex formulas exist).
    *   The effective length $L_{eff}$ is then calculated using $\epsilon_{eff}$ as if the patch were on a substrate with $\epsilon_{eff}$ and no fringing.

*   **Fringing Field Extension ($\Delta L$):**

    *   The fringing fields extend beyond the physical edges of the patch. This extension can be approximated by an additional length $\Delta L$ on each end of the patch.
    *   A common approximation for $\Delta L$ is:
        $\Delta L \approx 0.412h \frac{(\epsilon_{eff} + 0.3)(\frac{W}{h} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{W}{h} + 0.8)} $ (Balanis approximation)
    *   The effective length becomes $L_{eff} = L + 2\Delta L$.

*   **Polarization:** The polarization of the radiated wave is determined by the orientation of the dominant electric field lines at the radiating edges. For a basic rectangular patch, the dominant polarization is linear, aligned with the longer dimension.

---

### **3. Radiation Mechanism using Slot-Antenna Model (Detailed)**

*   **Equivalence:** The radiating patch can be viewed as a radiating aperture between two parallel plate waveguides (the patch and the ground plane). The TM$_{10}$ mode in the patch represents a dominant field distribution.
*   **Slots:** The radiation is primarily from the open ends of this waveguide structure, which are the edges of the patch. These edges can be modeled as slots.
*   **Dimensions of Slots:** For a rectangular patch, the two main radiating slots are along the edges of length $L$. The width of these slots is effectively the width of the patch, $W$.
*   **Current Distribution:** The surface currents on the patch are primarily along the length dimension for the TM$_{10}$ mode. These currents terminate at the edges, and due to the fringing fields, effectively create radiating slots.
*   **Radiation from Slots:** The radiation from these slots can be analyzed using concepts from aperture theory. The fields at the edges can be approximated by equivalent magnetic currents.

    *   **Magnetic Current Density ($\mathbf{M}$):**
        The electric field $\mathbf{E}$ and magnetic field $\mathbf{H}$ at the radiating edge can be used to define an equivalent magnetic current density:
        $\mathbf{M} = -2 (\mathbf{E} \times \hat{\mathbf{n}})$
        where $\hat{\mathbf{n}}$ is the outward normal vector from the radiating surface (the edge).
        For the TM$_{10}$ mode, the electric field is primarily in the z-direction (across the substrate thickness) and the magnetic field is in the y-direction (along the width $W$). The fringing electric field at the edge (say, x=L) will have a component in the y-direction, and the magnetic field will have a component in the z-direction. The equivalent magnetic current will be oriented along the width of the patch.

*   **Radiation Integral:** The radiated far-field can be calculated by integrating the contributions from these equivalent magnetic currents over the radiating edges.

    *   **Far-field from a slot:** For a rectangular slot of length $L$ and width $w_s$ oriented along the y-axis and radiating in the x-z plane, the far-field components depend on the electric field distribution within the slot.
    *   For the microstrip patch, the electric field at the edges has a dominant component that creates a magnetic current. The direction of this magnetic current is typically along the width ($W$) of the patch.

*   **Polarization:** The polarization is determined by the orientation of the magnetic current. For a rectangular patch with length $L$ and width $W$, if the TM$_{10}$ mode is dominant, the magnetic current is along the $W$ dimension, resulting in linear polarization along the $L$ dimension.

---

### **4. Radiation Mechanism using Equivalent Magnetic Current Model (Detailed)**

This approach is more rigorous and directly uses the electric and magnetic fields at the radiating edges.

*   **Fields at the Edges:** The fields in the microstrip transmission line (patch and substrate) are predominantly transverse electric (TE) with respect to the direction of propagation (along the length $L$). However, at the open edges, these fields fringe out and contribute to radiation. The dominant field configuration within the patch is a TM mode.
*   **Electric Field at the Edges:** The electric field between the patch and the ground plane is primarily normal to the patch surface (along the z-direction). This electric field fringes out at the edges.
*   **Magnetic Current Formulation:** The radiation from an aperture (in this case, the edges of the patch) can be described using equivalent magnetic currents $\mathbf{M}$ and electric currents $\mathbf{J}$. For open circuits (like the edges of the patch), the magnetic current is often more convenient to use.
    *   $\mathbf{M} = \mathbf{E} \times \hat{\mathbf{n}}$ (where $\mathbf{E}$ is the tangential electric field at the aperture and $\hat{\mathbf{n}}$ is the outward normal to the aperture surface).
    *   For the radiating edges of the microstrip patch, the tangential electric field is predominantly perpendicular to the edge. The direction of $\mathbf{M}$ will be parallel to the edge.
    *   For the TM$_{10}$ mode on a rectangular patch, the dominant electric field is along the z-axis. At the edges along the length $L$, the fringing electric field has a component in the y-direction. This results in an equivalent magnetic current density $\mathbf{M}$ along the y-direction (width $W$).

*   **Calculating Radiation:**
    The far-field radiated by these magnetic currents can be calculated using the radiation integrals:

    $H_{\theta} = \frac{j\omega}{4\pi r} e^{-jkr} \int_{S'} (\mathbf{M} \times \hat{\mathbf{r}}) \cdot \hat{\boldsymbol{\theta}} e^{jk\mathbf{r'} \cdot \hat{\mathbf{r}}} dS'$
    $E_{\phi} = -\eta_0 H_{\theta}$

    (And similar expressions for other components, using electric currents and their relation to magnetic currents).

    *   For the two radiating edges of length $L$ and width $W$, these integrals are evaluated. The dominant contribution often comes from the two edges, and their fields interfere to produce the overall radiation pattern.

*   **Example (Rectangular Patch - TM$_{10}$ mode):**
    Consider a rectangular patch of dimensions $L \times W$. The TM$_{10}$ mode has electric field varying along the length $L$ and uniform along the width $W$.
    The primary radiating edges are the ones along the length $L$.
    At these edges, the electric field component tangential to the edge is primarily in the y-direction (along $W$).
    This leads to an equivalent magnetic current $\mathbf{M}$ along the y-direction.
    The two edges can be modeled as current sheets $\mathbf{M}_1$ and $\mathbf{M}_2$ at $x = -L_{eff}/2$ and $x = +L_{eff}/2$.
    The relative phase between the currents on these two edges determines the radiation pattern (broadside vs. null). For resonant operation, the phase difference leads to constructive interference in the broadside direction.

*   **Bandwidth:** The bandwidth of microstrip antennas is generally narrow (typically 1-5%) because the radiation is primarily due to the fringing fields at the edges, which act like narrow slots. The stored energy in these fringing fields is significant, leading to high Q-factor and thus narrow bandwidth. (Ref: Balanis, 4th Ed., Chapter 13; Garg, Chapter 2)

---

### **5. Factors Affecting Radiation Mechanism and Performance**

*   **Substrate Thickness ($h$):**
    *   **Thicker substrate:** Increases bandwidth, but also increases surface waves, spurious radiation from the feed line, and cross-polarization. The radiation mechanism becomes more complex with higher-order modes becoming significant.
    *   **Thinner substrate:** Results in narrow bandwidth and lower radiation efficiency due to dielectric losses.
*   **Dielectric Constant ($\epsilon_r$):**
    *   **High $\epsilon_r$:** Reduces antenna size, but leads to narrower bandwidth, increased surface wave excitation, and potential dielectric loss issues.
    *   **Low $\epsilon_r$:** Increases antenna size, provides wider bandwidth, and reduces surface wave excitation.
*   **Patch Dimensions ($L, W$):** Determine the resonant frequency and the radiation pattern.
*   **Feed Method:**
    *   **Probe Feed:** Excitation by a coaxial probe usually introduces a vertical electric field component at the feed point, coupling to the TM modes. The probe position affects impedance matching.
    *   **Microstrip Line Feed:** Excitation by a microstrip line coupled to the patch via aperture coupling or edge coupling. The length of the stub of the microstrip line affects impedance matching. The coupling aperture's position and size are crucial for efficient radiation.
    *   **Impedance Matching:** The feed point impedance needs to match the characteristic impedance of the feed line for maximum power transfer. This is achieved by adjusting the feed position or using matching networks.
*   **Excitation of Higher-Order Modes:** For wider bandwidth or specific radiation patterns, higher-order TM modes (e.g., TM$_{20}$, TM$_{11}$) can be excited. These modes have different field distributions and radiation characteristics.
    *   **TM$_{20}$ Mode:** Resonates at approximately twice the TM$_{10}$ frequency. Has two half-wavelength variations along the length.
    *   **TM$_{11}$ Mode:** Resonates at a frequency dependent on both $L$ and $W$. Has one half-wavelength variation along the length and one along the width. This mode can be used for circular polarization.

---

### **6. Polarisation and Radiation Pattern**

*   **Linear Polarisation:** For a standard rectangular patch fed by a single probe or microstrip line, the dominant mode (TM$_{10}$) results in linear polarisation, aligned with the longer dimension of the patch. The radiation pattern is broadside, typically a half-broadside pattern, with maximum radiation broadside to the patch.
*   **Circular Polarisation (CP):**
    *   Achieved by exciting two orthogonal modes (e.g., TM$_{10}$ and TM$_{01}$ or TM$_{11}$) with equal amplitudes and a 90-degree phase difference.
    *   **Methods for CP:**
        *   **Perturbing the patch geometry:** Cutting a notch (e.g., a square or triangular notch) at the corners of the patch to make the resonant frequencies of two orthogonal modes coincide.
        *   **Using a circular patch with a single feed:** Feeding the circular patch at a point offset from the center can excite orthogonal TM$_{01}$ modes.
        *   **Hybrid couplers:** Using external hybrid couplers (e.g., quadrature hybrid) to provide the required 90-degree phase shift.
        *   **Slanted feeding of a rectangular patch:** Feeding a rectangular patch at a specific point (e.g., on the diagonal) can also excite two modes with a phase difference.
    *   **Radiation Pattern for CP:** The radiation pattern for CP antennas is similar to linear antennas, but the polarisation is circular across the main beam.

---

### **7. Radiation Efficiency**

Radiation efficiency is a measure of how effectively the power delivered to the antenna is radiated.

$\eta_{rad} = \frac{R_r}{R_r + R_{loss}}$

Where:
*   $R_r$ is the radiation resistance.
*   $R_{loss}$ is the total loss resistance, which includes:
    *   **Conduction losses ($R_{cu}$):** Due to finite conductivity of the conductors (patch and ground plane).
    *   **Dielectric losses ($R_d$):** Due to losses in the substrate material (proportional to $\tan \delta$).
    *   **Surface wave losses ($R_{sw}$):** For thicker substrates with higher dielectric constants, surface waves can be excited, propagating along the substrate and radiating away or being absorbed.

*   **Factors Affecting Radiation Efficiency:**
    *   **Substrate material:** Low loss tangent ($\tan \delta$) materials are preferred.
    *   **Substrate thickness and dielectric constant:** Thicker substrates with higher $\epsilon_r$ increase the risk of surface wave losses.
    *   **Conductor losses:** Can be significant at lower frequencies or for very thin substrates.

---

### **8. Summary of Key Radiation Mechanism Concepts**

*   **Fringing Fields:** The primary source of radiation is the fringing electric fields at the edges of the patch.
*   **Slot-Antenna Model:** Edges are modeled as radiating slots.
*   **Magnetic Current Model:** Edges are modeled with equivalent magnetic currents.
*   **Dominant Modes:** TM$_{10}$ (rectangular) or TM$_{01}$ (circular) are the main modes.
*   **Effective Length/Dielectric Constant:** Account for fringing fields.
*   **Bandwidth:** Narrow due to stored energy in fringing fields.
*   **Polarization:** Linear for basic patches, circular by exciting orthogonal modes.
*   **Efficiency:** Affected by conductor, dielectric, and surface wave losses.

---

### **9. Learning Outcomes Coverage**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic provides a detailed explanation of how microstrip antennas radiate using the slot-antenna and magnetic current models, covering the role of fringing fields and dominant modes. The analysis of factors affecting radiation and efficiency directly addresses this outcome.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   While this topic focuses on the mechanism, understanding it is foundational for design. Knowledge of resonant frequencies (related to effective length/dielectric constant), polarization (related to mode excitation), and bandwidth (related to fringing fields) is crucial for designing antennas with specific parameters. Measurements of radiation patterns and impedance matching are direct applications of understanding the radiation mechanism.

*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   Understanding the basic radiation mechanism of a microstrip patch is essential for analyzing and designing more advanced configurations like arrays, circularly polarized antennas, broadband microstrip antennas, and antennas using metamaterials (mentioned in reference books). The principles of mode excitation and field manipulation discussed here apply to these advanced designs.

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While not the primary focus, the discussion of surface waves relates to wave propagation characteristics within the dielectric substrate, which can affect the overall antenna performance and interaction with the propagation environment.

---

### **10. Practice Questions and Answers**

**Question 1:** Describe the primary mechanism responsible for radiation from a microstrip patch antenna.
**Answer:** The primary mechanism is the radiation from the fringing electric fields that exist at the open edges of the radiating patch. These fringing fields can be modeled as equivalent radiating slots or magnetic currents.

**Question 2:** What are the two common models used to explain the radiation from microstrip antennas?
**Answer:** The two common models are:
1.  The Slot-Antenna Model (treating edges as radiating slots).
2.  The Equivalent Magnetic Current Model (using magnetic current densities derived from tangential electric fields at the edges).

**Question 3:** How is circular polarization achieved with a microstrip patch antenna?
**Answer:** Circular polarization is achieved by exciting two orthogonal resonant modes (e.g., TM$_{10}$ and TM$_{01}$ or TM$_{11}$) of the patch with equal amplitudes and a 90-degree phase difference. This can be done by modifying the patch geometry, using specific feed techniques, or employing external hybrid couplers.

**Question 4:** List the three main types of losses that affect the radiation efficiency of a microstrip antenna.
**Answer:** The three main types of losses are:
1.  Conduction losses (in the conductors).
2.  Dielectric losses (in the substrate material).
3.  Surface wave losses (due to guided waves propagating along the substrate).

**Question 5:** A rectangular microstrip patch antenna has a length $L$. Approximately, at what effective length does it resonate for the dominant TM$_{10}$ mode?
**Answer:** The dominant TM$_{10}$ mode resonates when the effective length ($L_{eff}$, which accounts for fringing fields) is approximately half a wavelength in the effective dielectric medium ($\lambda_g/2$). So, $L_{eff} \approx \lambda_g/2$.

---

### **11. Important Points to Remember**

*   **Fringing fields are key:** They are the source of radiation.
*   **Edges act as radiating slots/magnetic currents.**
*   **Dominant modes (TM$_{10}$ for rectangular, TM$_{01}$ for circular) dictate the basic radiation pattern and polarization.**
*   **Effective length and dielectric constant are crucial for resonant frequency calculations.**
*   **Substrate thickness and dielectric constant heavily influence bandwidth and efficiency.**
*   **Bandwidth is inherently narrow for basic microstrip patches.**
*   **Circular polarization requires simultaneous excitation of orthogonal modes with proper phase and amplitude.**
*   **Surface waves are a significant loss mechanism for thicker substrates with high $\epsilon_r$.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **12. Textbook and Reference Material Integration**

*   **Balanis (4th Ed.):** Chapter 13 provides a comprehensive treatment of microstrip antennas, including detailed derivations of the radiation mechanism using both slot and magnetic current models, calculations of effective length, and discussion of various patch shapes and feed methods. This is a primary reference for the core concepts.
*   **Garg (Microstrip Antenna Design Handbook):** Chapters 1 and 2 are highly relevant. Chapter 1 introduces microstrip antennas and their basic structure. Chapter 2 delves into the radiation mechanism, equivalent circuits, and analysis techniques, often providing practical design insights.
*   **Pozar (Microwave Engineering):** While not solely focused on antennas, Pozar's book offers excellent foundational material on transmission line theory, electromagnetics, and mode analysis, which are essential for understanding the behavior of fields within the microstrip structure and their radiation.
*   **Collin (Antennas and Radio Wave Propagation):** Collin's work provides rigorous electromagnetic theory that underpins antenna analysis, including aperture theory and method of moments, which can be used for more detailed analysis of radiation mechanisms.
*   **Metamaterials for Antenna Applications & Reconfigurable Antennas:** These reference books would be relevant for advanced topics and future modules, but the core radiation mechanism of basic microstrip antennas discussed here forms the foundation upon which these advanced designs are built.

---