---
title: "Microstrip antennas : Radiation mechanism"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff76b"
status: "completed"
scrapedAt: "2026-05-23T18:12:25.800Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas

### Topic: Microstrip Antennas: Radiation Mechanism

---

### **1. Introduction to Microstrip Antennas**

Microstrip antennas, also known as patch antennas, are a type of printed antennas that are planar and lightweight. They consist of a radiating patch on one side of a dielectric substrate and a ground plane on the other.

**Key Concepts:**

*   **Planar Structure:** Unlike traditional antennas, microstrip antennas are fabricated on a flat substrate, making them ideal for integration into electronic systems.
*   **Substrate:** The dielectric material between the radiating patch and the ground plane. Its properties (permittivity $\epsilon_r$ and thickness $h$) significantly influence the antenna's performance.
*   **Radiating Patch:** The conductive element responsible for radiation. Common shapes include rectangles, squares, circles, and triangles.
*   **Ground Plane:** A conductive plane below the dielectric substrate that acts as a reflector and contributes to the antenna's radiation pattern.
*   **Feed Line:** The mechanism used to deliver RF power to the radiating patch. Common methods include microstrip line, coaxial probe, aperture coupling, and proximity coupling.

**Textbook References:**
*   Balanis (4th Ed.): Chapter 12 (Planar Antennas, including Microstrip Antennas)
*   Garg (2001): Chapter 1 (Introduction to Microstrip Antennas)
*   Pozar (4th Ed.): Chapter 6 (Printed Antennas)

---

### **2. Radiation Mechanism of Microstrip Antennas**

The radiation from microstrip antennas is primarily due to the **fringing fields** at the open edges of the radiating patch.

**Key Concepts:**

*   **Transmission Line Model:** A common method to analyze microstrip antennas, particularly the rectangular patch. The patch is modeled as a section of a uniform transmission line.
    *   The radiating patch is treated as a resonant structure.
    *   The dielectric substrate and ground plane form the transmission line.
    *   The open edges of the patch are modeled as radiating slots or infinite slots.
*   **Equivalent Magnetic Current Model (Slot Model):** This model considers the edges of the patch as slots and represents their radiation using equivalent magnetic currents.
    *   For a rectangular patch, there are two pairs of slots at the edges along the length and two pairs along the width.
    *   The primary radiation comes from the slots at the edges that are approximately a half-wavelength long (or effectively a half-wavelength considering fringing). These are often called the "radiating edges."
    *   The slots at the other two edges, which are shorter, contribute less to the main radiation and primarily affect the beamwidth and polarization.
*   **Equivalent Electric Current Model:** This model views the patch as a radiating element with electric currents flowing on its surface. The radiation is then attributed to these surface currents and the fringing electric fields.
    *   For a rectangular patch, the dominant surface currents flow along the length dimension, and fringing fields exist at the edges.
*   **Resonance:** Microstrip antennas are resonant structures. They radiate most efficiently when the length of the radiating element is approximately a half-wavelength ($\lambda/2$) in the effective dielectric medium.
    *   **Effective Dielectric Constant ($\epsilon_{eff}$):** Since the electromagnetic fields are not confined solely within the dielectric, an effective dielectric constant is used, which is less than the actual substrate permittivity ($\epsilon_r$). $\epsilon_{eff}$ depends on $\epsilon_r$, substrate thickness $h$, and patch dimensions.
    *   **Effective Length:** The physical length of the patch is extended by "effective lengths" at its edges due to the fringing fields.
*   **Modal Expansion:** The fields within the microstrip patch can be represented as a sum of modes. The dominant radiation is usually associated with the **Transverse Magnetic (TM$_{mn}$)** modes.
    *   For a rectangular patch, the dominant mode is the **TM$_{10}$ mode**. This mode has a zero component of the electric field in the direction of propagation (perpendicular to the patch) and non-zero components in the plane of the patch.
    *   The radiation occurs due to the fringing fields extending beyond the physical edges of the patch. These fringing fields can be visualized as radiating dipoles or slots.

**Detailed Explanation of Radiation Mechanism (Rectangular Patch):**

1.  **Transmission Line Analogy:** Imagine a uniform transmission line of length $L$ (the length of the patch) and characteristic impedance $Z_0$. The line is terminated by open circuits at both ends. This creates standing waves of voltage and current.
2.  **Radiating Edges:** For the dominant TM$_{10}$ mode, the length of the patch ($L$) is typically designed to be approximately $\lambda_0/2$, where $\lambda_0$ is the free-space wavelength. More precisely, it's related to $\lambda_g/2$, where $\lambda_g$ is the wavelength in the dielectric medium. The effective length, including fringing, becomes approximately $\lambda_0/2$.
3.  **Fringing Fields:** At the edges of the patch that are excited by the dominant mode (along the length), there are strong fringing electric fields that extend into the air and towards the ground plane. These fields fringe outwards from the edges.
4.  **Equivalent Magnetic Current:** These fringing electric fields can be represented as equivalent magnetic currents flowing along the edges. For the TM$_{10}$ mode, the magnetic currents at the two radiating edges (along the width) are equal in magnitude and opposite in direction, creating a broadside radiation pattern.
5.  **Radiation Pattern:** The radiation from these two magnetic current sheets approximates that of two slots, or effectively two resonant dipoles, placed at the ends of the patch. This results in a broadside radiation pattern with maximum radiation perpendicular to the patch surface. The nulls occur broadside to the edges of the patch.
6.  **Polarization:** The polarization of the radiation is determined by the orientation of the dominant electric field across the patch and the resulting fringing fields. For a TM$_{10}$ mode in a rectangular patch, the electric field is primarily along the length direction, leading to linear polarization.

**Example:**

Consider a rectangular microstrip patch antenna fed by a microstrip line along its length. The dominant TM$_{10}$ mode will have its electric field primarily oriented along the length of the patch. The fringing fields will extend outwards from the edges of length $L$. These fringing fields, when viewed as equivalent magnetic currents, will radiate in a broadside direction.

**Reference Books Insights:**

*   **Collin (2001):** Discusses the slot-line and microstrip line radiation characteristics, which are fundamental to understanding the fringing field radiation of microstrip patches.
*   **Milligan (2005):** Provides detailed explanations of aperture-coupled antennas and probe-fed antennas, which involve understanding how the feed mechanism couples energy to the radiating patch and how fringing fields are excited.

---

### **3. Factors Affecting Radiation Mechanism**

Several parameters influence the radiation characteristics of microstrip antennas:

**Key Concepts:**

*   **Dielectric Constant ($\epsilon_r$):**
    *   Higher $\epsilon_r$ leads to smaller antenna dimensions for a given frequency.
    *   It also increases the fringing field extent and can affect the radiation pattern and efficiency.
    *   High $\epsilon_r$ substrates can lead to surface waves, which can be undesirable as they reduce radiation efficiency and can couple to adjacent structures.
*   **Substrate Thickness ($h$):**
    *   Thicker substrates lead to wider bandwidth and higher radiation efficiency.
    *   However, thicker substrates also increase the excitation of surface waves and can degrade the radiation pattern (e.g., cross-polarization).
    *   The fringing field extent increases with $h$.
*   **Patch Dimensions:**
    *   The length ($L$) primarily determines the resonant frequency.
    *   The width ($W$) influences the impedance and radiation pattern.
    *   The shape of the patch affects the radiation characteristics and polarization.
*   **Feed Mechanism:**
    *   **Microstrip Line Feed:** Offers a simple and integrated feed but has limited bandwidth and can introduce spurious radiation from the feed line itself.
    *   **Coaxial Probe Feed:** Provides a good impedance match and is easy to implement, but the probe placement affects the radiation pattern and can excite unwanted modes.
    *   **Aperture Coupling:** Uses a slot in the ground plane to couple energy from a microstrip line on a separate substrate to the patch. This offers good isolation between the feed and the radiating element and allows for independent optimization of the feed and radiating structures.
    *   **Proximity Coupling:** Uses a separate microstrip line below the substrate of the patch, with coupling through the fringing fields of the patch. This offers good bandwidth and efficiency.
*   **Dielectric Losses:** Losses in the substrate material reduce radiation efficiency.
*   **Conductor Losses:** Resistive losses in the patch and ground plane also reduce efficiency.

**Example:**

A thinner substrate with a lower dielectric constant will generally have less surface wave excitation and cleaner radiation patterns, but will result in larger antenna dimensions. Conversely, a thicker substrate with a higher dielectric constant will lead to smaller antennas but may suffer from increased surface waves and potential pattern degradation.

---

### **4. Different Radiating Modes in Microstrip Antennas**

Microstrip antennas can support various TM modes, each with a different radiation mechanism and pattern.

**Key Concepts:**

*   **TM$_{mn}$ Modes:** The modes are characterized by the number of half-wavelength variations of the electric field along the length ($m$) and width ($n$) of the patch.
    *   **TM$_{10}$ Mode:** Dominant mode for a rectangular patch. One half-wavelength variation along the length. Radiates broadside.
    *   **TM$_{01}$ Mode:** Dominant mode for a square patch if excited appropriately. One half-wavelength variation along the width. Radiates broadside.
    *   **TM$_{11}$ Mode:** Excites radiation in directions other than broadside. Can be used for specific applications like circular polarization or wide beamwidths.
    *   **Higher Order Modes (TM$_{20}$, TM$_{02}$, TM$_{21}$, etc.):** These modes have different radiation patterns, often with multiple lobes and nulls. They are typically used for specialized applications like broadband operation or pattern shaping.
*   **Excitation of Modes:** The feeding mechanism and the physical dimensions of the patch determine which modes are excited. For instance, a feed placed at the center of a radiating edge will primarily excite the TM$_{10}$ mode.

**Example:**

A rectangular patch with length $L$ is designed to resonate at the TM$_{10}$ mode when $L \approx \lambda_0 / (2\sqrt{\epsilon_{eff}})$. If the width $W$ is also designed to resonate at a TM$_{01}$ mode (when $W \approx \lambda_0 / (2\sqrt{\epsilon_{eff}})$), and both modes are excited equally and in phase, a square patch can radiate in multiple directions, leading to a different radiation pattern compared to a single-mode patch.

**Textbook Reference:**

*   Balanis (4th Ed.): Chapter 12.2 (Microstrip Antennas - Radiation mechanism)

---

### **5. Learning Outcomes Coverage**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):** This topic directly addresses the radiation mechanism of microstrip antennas using transmission line models, equivalent magnetic currents, and the role of fringing fields and resonant modes. Students are expected to analyze how these elements contribute to radiation.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** Understanding the radiation mechanism is fundamental to designing a microstrip antenna. By knowing how dimensions, substrate properties, and feed types affect radiation, students can proceed to design for specific radiation patterns, resonant frequencies, and impedance matching. Measurement techniques would follow this design understanding.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):** The principles of radiation from microstrip patches form the basis for designing more complex arrays, reconfigurable antennas, and metamaterial-enhanced antennas. Understanding the fundamental radiation mechanism is crucial for analyzing and designing these advanced structures.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** While this module focuses on the antenna itself, the radiation from the antenna is the source of the propagating wave. Understanding how the antenna radiates (e.g., polarization, beamwidth) is the first step in understanding how those waves propagate through space.

---

### **6. Important Points to Remember**

*   **Fringing Fields are Key:** Radiation from microstrip antennas is primarily due to the fringing electric fields at the open edges of the radiating patch.
*   **Transmission Line Model:** A powerful analogy for understanding the resonance and radiation of rectangular patches.
*   **Effective Wavelength:** The operating frequency is determined by the effective length and effective dielectric constant, which account for fringing fields and the dielectric medium.
*   **TM$_{10}$ Mode Dominance:** For rectangular patches, the TM$_{10}$ mode is usually the dominant radiating mode, leading to broadside radiation.
*   **Substrate Properties Matter:** $\epsilon_r$ and $h$ significantly influence antenna size, bandwidth, efficiency, and radiation pattern.
*   **Feed Location is Crucial:** The feed point determines the excited modes and the resulting radiation pattern.

---

### **7. Practice Questions and Answers**

**Question 1:** Explain the primary source of radiation for a microstrip patch antenna.
**Answer:** The primary source of radiation for a microstrip patch antenna is the fringing electric fields that extend beyond the open edges of the radiating patch. These fringing fields can be modeled as equivalent magnetic currents, which radiate energy into space.

**Question 2:** What is the role of the transmission line model in analyzing microstrip antennas?
**Answer:** The transmission line model treats the microstrip patch as a section of a uniform transmission line of effective length, terminated by open circuits at its edges. This model helps in understanding the resonant frequency of the antenna, which is determined by the half-wavelength resonance of the structure, considering the effective dielectric constant and effective length due to fringing fields.

**Question 3:** How do substrate thickness and dielectric constant affect the radiation mechanism?
**Answer:**
*   **Substrate Thickness ($h$):** A thicker substrate generally increases the extent of fringing fields, leading to wider bandwidth and potentially higher radiation efficiency. However, it can also increase surface wave excitation, which can degrade the radiation pattern and efficiency.
*   **Dielectric Constant ($\epsilon_r$):** A higher dielectric constant reduces the antenna's physical dimensions for a given frequency. It also influences the effective dielectric constant and the distribution of fringing fields. High $\epsilon_r$ can increase surface wave effects.

**Question 4:** What are the dominant modes of radiation for a rectangular microstrip patch antenna, and what kind of radiation pattern do they produce?
**Answer:** The dominant mode for a rectangular microstrip patch antenna is typically the **TM$_{10}$ mode**. This mode has its electric field oriented along the length of the patch. The radiation from this mode is primarily **broadside**, meaning the maximum radiation occurs perpendicular to the surface of the patch. The shorter edges of the patch (along the width) also have fringing fields, but these contribute less to the main lobe and can affect the side lobes and beamwidth.

**Question 5:** Briefly describe two common feed methods and how they relate to the radiation mechanism.
**Answer:**
*   **Coaxial Probe Feed:** A coaxial probe extends through the ground plane and connects to the underside of the patch. The position of the probe determines the excitation of modes. Placing it at a point of high electric field for the TM$_{10}$ mode excites it efficiently for broadside radiation.
*   **Microstrip Line Feed:** The patch is directly connected to a microstrip transmission line. This method is simple but can lead to spurious radiation from the feed line. The impedance matching and radiation characteristics are influenced by the length and position of the feed line relative to the patch.

---

### **8. Further Study and Advanced Concepts**

*   **Surface Waves:** Understanding how surface waves are generated and how they affect radiation efficiency and pattern. (Refer to Balanis Ch. 12 and Garg Ch. 3)
*   **Bandwidth Enhancement Techniques:** Exploring methods like using thicker substrates, lower dielectric constants, aperture coupling, or parasitic elements to increase bandwidth. (Refer to Garg Ch. 5)
*   **Polarization Control:** Techniques for achieving linear, circular, or dual polarization by modifying the patch shape, feeding, or using slots. (Refer to Balanis Ch. 12.5)
*   **Arrays of Microstrip Antennas:** Discussing how multiple patches can be combined to achieve higher gain and directive patterns. (Refer to Balanis Ch. 11)
*   **Metamaterial-Loaded Microstrip Antennas:** How metamaterials can be used to enhance performance characteristics like miniaturization or bandwidth. (Refer to Singh et al. Ch. 4)
*   **Reconfigurable Antennas:** Integrating active components (like diodes or MEMS) to change the antenna's operating frequency or radiation pattern. (Refer to Choudhury Ch. 5)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
