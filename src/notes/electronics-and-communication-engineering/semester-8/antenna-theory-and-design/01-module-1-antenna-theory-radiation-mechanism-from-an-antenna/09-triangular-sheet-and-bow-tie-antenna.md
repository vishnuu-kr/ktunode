---
title: "Triangular sheet and Bow-tie antenna"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7cb"
status: "completed"
scrapedAt: "2026-05-23T18:11:37.904Z"
---
# ANTENNA THEORY AND DESIGN - Module 1: Antenna Theory: Radiation Mechanism from an Antenna

## Topic: Triangular Sheet and Bow-tie Antenna

---

### 1. Introduction to Radiation and Antenna Fundamentals

This section provides a foundational understanding of how antennas radiate electromagnetic waves, setting the stage for understanding the behavior of triangular sheet and bow-tie antennas. This aligns with **CO1: Analyse the radiation mechanism of antennas (K3)**.

*   **What is an Antenna?**
    *   A transducer that converts guided electromagnetic waves (e.g., from a transmission line) into free-space electromagnetic waves and vice-versa.
    *   Essentially a part of a transmission line that is "opened" to interact with the electromagnetic field.

*   **Fundamental Principle of Radiation:**
    *   **Accelerating charges** are the source of electromagnetic radiation.
    *   In an antenna, time-varying currents are driven by a source, leading to accelerating charges.
    *   These accelerating charges create oscillating electric and magnetic fields that propagate away from the antenna as electromagnetic waves.

*   **Near Field vs. Far Field:**
    *   **Near Field (Reactive Near Field):** Close to the antenna. Dominated by reactive components, energy is stored rather than radiated. Varies rapidly with distance.
    *   **Far Field (Radiation Field):** Far from the antenna. Dominated by radiated waves. Fields vary inversely with distance ($1/R$). This is where directional patterns and power density are typically defined. The boundary is often considered at $R > 2D^2/\lambda$, where $D$ is the largest dimension of the antenna and $\lambda$ is the wavelength.

*   **Key Radiation Concepts:**
    *   **Radiation Resistance ($R_r$):** The equivalent resistance that would dissipate the same amount of power as radiated by the antenna, when the same current flows through it.
    *   **Radiation Pattern:** A graphical representation of the spatial distribution of radiated power or field intensity from an antenna.
    *   **Directivity ($D$):** A measure of how concentrated the radiated power is in a particular direction, compared to an isotropic radiator.
    *   **Gain ($G$):** Directivity multiplied by antenna efficiency. $G = \eta_r D$, where $\eta_r$ is the radiation efficiency.

*   **Sources of Radiation (according to Balanis, Chapter 2):**
    *   **Current Elements (e.g., short dipole):** A small segment of wire with a uniform current.
    *   **Wire Antennas (e.g., dipoles):** Lengths of wire where current varies sinusoidally or otherwise along the length.
    *   **Aperture Antennas (e.g., horns, slots):** Openings in a conducting surface through which electromagnetic waves are radiated or received.
    *   **Loop Antennas:** Closed loops of conductors carrying current.
    *   **Reflector Antennas:** Use a reflecting surface to focus electromagnetic waves.

*(Self-reflection: How do these fundamental concepts apply to the specific structures of triangular sheet and bow-tie antennas?)*

---

### 2. The Triangular Sheet Antenna

This section delves into the radiation mechanism and characteristics of a triangular sheet antenna, connecting to **CO1: Analyse the radiation mechanism of antennas (K3)**.

*   **Description:**
    *   A planar structure in the shape of a triangle, typically made of a conducting material.
    *   It can be a solid sheet or a wireframe structure.
    *   Can be fed at various points, often at one vertex or along an edge.

*   **Radiation Mechanism:**
    *   When a time-varying voltage is applied, currents flow across the surface of the triangular sheet.
    *   These currents are accelerating charges, which generate outward-propagating electromagnetic waves.
    *   The distribution of current on the sheet is complex and depends on the feed location, the dimensions of the triangle, and the surrounding environment.

*   **Key Characteristics and Design Considerations:**
    *   **Shape and Dimensions:** The angles of the triangle and its overall size (especially relative to the wavelength) significantly influence the radiation pattern and impedance.
    *   **Feed Point:** The location of the feed point determines how the current is excited and can affect impedance matching and the polarization of the radiated wave. Feeding at a vertex typically excites currents that propagate outwards.
    *   **Polarization:** The orientation of the electric field vector of the radiated wave. A flat triangular sheet can be designed to produce linear or even circular polarization depending on its geometry and excitation.
    *   **Impedance:** The input impedance of the antenna needs to be matched to the transmission line for maximum power transfer.
    *   **Bandwidth:** The range of frequencies over which the antenna operates efficiently.

*   **Examples and Applications:**
    *   Can be used as a basic building block in more complex antenna arrays.
    *   Can be designed for specific directional properties.
    *   Related to V-antennas and rhombic antennas, which are also wire structures with directional properties.

*   **Comparison to Dipole (Balanis, Chapter 4):**
    *   Similar to a dipole in that it involves current flow on a conductor, but the geometry is planar rather than linear.
    *   The current distribution on a triangular sheet is more complex than a simple dipole due to the two-dimensional nature of the structure.

*(Self-reflection: How does the continuous surface of a triangular sheet affect current distribution compared to a wire antenna?)*

---

### 3. The Bow-tie Antenna

This section focuses on the bow-tie antenna, detailing its structure, radiation, and applications, and connecting to **CO1: Analyse the radiation mechanism of antennas (K3)** and potentially **CO3: Analyse and design advanced antennas (K4)**.

*   **Description:**
    *   The bow-tie antenna is a type of planar dipole antenna.
    *   It consists of two triangular (or sometimes trapezoidal) conducting elements that are shaped like the wings of a bow tie.
    *   These elements are typically fed at the center where their vertices meet.
    *   The two elements form a V-shape with an included angle, effectively creating a broad, flat radiating surface.

*   **Radiation Mechanism:**
    *   The antenna is fed at the center with an RF signal, causing currents to flow in opposite directions on the two triangular elements.
    *   These currents accelerate charges across the surface of the "wings."
    *   The outward-pointing edges of the triangles are particularly effective in radiating energy.
    *   The shape of the bow tie helps to broaden the radiation beam and improve impedance matching over a wider frequency range compared to a simple thin dipole.

*   **Key Characteristics and Design Considerations:**
    *   **Geometry:**
        *   **Element Shape:** Typically isosceles triangles, but can be trapezoidal.
        *   **Included Angle ($\alpha$):** The angle between the two elements. This angle significantly affects the antenna's impedance and radiation pattern. A common angle is 90 degrees.
        *   **Element Length ($L$):** Determines the resonant frequency, usually designed to be around half a wavelength.
        *   **Element Width ($W$):** Affects the impedance and bandwidth. Wider elements generally lead to lower impedance and broader bandwidth.
    *   **Impedance:** Bow-tie antennas tend to have a lower input impedance than a thin dipole. For example, a thin dipole has an impedance of around 73 ohms in free space, whereas a bow-tie antenna with a 90-degree angle and reasonable width might have an impedance around 40-50 ohms. This makes them easier to match to common transmission lines like 50-ohm coaxial cables, especially when the elements are wide.
    *   **Bandwidth:** Generally exhibits wider bandwidth than a simple thin dipole due to the capacitive loading effect of the broader elements and the distribution of currents over a larger surface area.
    *   **Radiation Pattern:**
        *   Typically exhibits a broad, omnidirectional or nearly omnidirectional pattern in the plane containing the bow tie.
        *   In the perpendicular plane, it has a figure-eight pattern, similar to a dipole.
        *   The pattern can be influenced by the included angle and the element width.
    *   **Polarization:** Primarily linearly polarized, with the electric field vector aligned along the direction of current flow on the elements. The polarization can be oriented by rotating the antenna.

*   **Design Formulae (Approximations/Guidelines from literature, e.g., Milligan, Chapter 6):**
    *   The resonant length ($L$) is approximately $\lambda/4$ for each element, where $\lambda$ is the free-space wavelength.
    *   The input impedance is influenced by the included angle and the width of the elements. Wider elements and larger included angles generally lead to lower impedance.

*   **Examples and Applications:**
    *   **UHF/VHF Reception:** Commonly used as terrestrial TV antennas due to their wide bandwidth and good performance across these frequency bands.
    *   **Broadband Dipole:** Serves as a more broadband alternative to a simple dipole.
    *   **Element in Arrays:** Can be used as radiating elements in more complex antenna arrays.
    *   **Pulsed Power Measurements:** Used in some high-speed impulse applications.

*(Refer to Garg, Chapter 6 for microstrip implementations of bow-tie like structures and Milligan, Chapter 6 for general planar antenna design including bow-tie variants.)*

*(Self-reflection: How does the "flattened" structure of the bow-tie antenna contribute to its broader bandwidth and lower impedance compared to a cylindrical dipole?)*

---

### 4. Relating to Course Outcomes

This section explicitly links the covered topics to the stated Course Outcomes (COs).

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   **Triangular Sheet Antenna:** Covered by understanding that accelerating currents on its surface generate EM waves. The geometry dictates the complexity of the current distribution.
    *   **Bow-tie Antenna:** Covered by explaining how currents on the V-shaped elements, especially at the edges, radiate EM waves. The shape influences the radiation pattern and impedance.
    *   **Fundamental Concepts:** Radiation from accelerating charges, near/far fields, and radiation resistance are foundational for this CO.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   While this topic doesn't directly cover microstrip antennas, the principles of planar radiating structures (like the bow-tie) are relevant. Microstrip bow-tie antennas exist and their design involves similar geometric considerations (element shape, size, feed) but adapted to the microstrip technology. Garg's handbook would be highly relevant here.

*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   **Bow-tie Antenna:** Can be considered an "advanced" version of a dipole due to its modified geometry for broadband performance. Understanding its design principles (geometry, impedance, pattern) contributes to this CO.
    *   **Triangular Sheet Antenna:** Can be a component in more complex, advanced antenna designs (e.g., arrays, conformal antennas).

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While this module focuses on radiation *from* the antenna, the generated EM waves propagate according to the principles covered in CO4. The radiation pattern, directivity, and gain discussed here are key parameters that describe the characteristics of the propagating wave in specific directions.

---

### 5. Important Points to Remember

*   **Radiation is caused by accelerating charges.**
*   **Antenna geometry dictates current distribution, impedance, radiation pattern, and bandwidth.**
*   **Triangular sheet antennas:** Planar structures with complex current distributions.
*   **Bow-tie antennas:** A broadband dipole variant with V-shaped elements.
*   **Bow-tie characteristics:** Wider bandwidth and lower impedance than thin dipoles due to wider, planar elements.
*   **Included angle and element width** are critical design parameters for bow-tie antennas.

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the fundamental physical principle that causes an antenna to radiate electromagnetic waves. How does the *acceleration* of charges relate to radiation?

**Answer:**
Antennas radiate electromagnetic waves because they are designed to support time-varying currents. These currents imply that charges are not stationary but are in motion and, importantly, are accelerating. According to Maxwell's equations and the theory of electromagnetism, accelerating charges produce time-varying electric and magnetic fields that detach from the antenna and propagate outwards as electromagnetic waves. The rate of acceleration directly influences the strength and frequency of the radiated waves.

**Question 2 (Application - Bow-tie):**
A designer is creating a broadband antenna for UHF television reception. They are considering a bow-tie antenna.
a) What are the main advantages of using a bow-tie antenna over a simple thin dipole for this application?
b) What geometric parameters of the bow-tie antenna would the designer most likely adjust to achieve a lower input impedance and a wider operating bandwidth?

**Answer:**
a) Advantages of a bow-tie antenna over a thin dipole for broadband applications include:
    *   **Wider Bandwidth:** The wider, planar elements and the resulting current distribution allow the antenna to operate efficiently over a broader range of frequencies.
    *   **Lower Input Impedance:** Bow-tie antennas typically have lower input impedance (e.g., 40-50 ohms) compared to a thin dipole (around 73 ohms). This makes them easier to match to standard 50-ohm coaxial cables, improving power transfer.

b) To achieve a lower input impedance and a wider operating bandwidth, the designer would most likely adjust:
    *   **Element Width (W):** Increasing the width of the triangular elements generally lowers the input impedance and increases the bandwidth.
    *   **Included Angle ($\alpha$):** Increasing the angle between the two elements (e.g., from a very acute angle towards 90 degrees or slightly more) can also contribute to a lower input impedance and broader bandwidth.

**Question 3 (Comparison):**
Compare and contrast the current distribution on a short dipole antenna and a bow-tie antenna. How does this difference in current distribution lead to different antenna characteristics?

**Answer:**
*   **Short Dipole:** Assumes a relatively uniform current along its short length (when $\lambda \gg L$). The current is primarily along the axis of the wire.
*   **Bow-tie Antenna:** The current flows on the surface of the planar triangular elements. The current distribution is more complex, spreading out over the surface and being particularly strong at the edges of the triangles. The current is distributed over a larger area, effectively creating a more distributed radiating surface.

This difference leads to:
*   **Bandwidth:** The distributed current on the bow-tie allows it to resonate over a wider range of frequencies, hence wider bandwidth.
*   **Impedance:** The larger radiating surface and the geometry of the bow-tie result in a lower characteristic impedance compared to the thinner, more concentrated current of a dipole.

**Question 4 (True/False):**
The resonant frequency of a bow-tie antenna is primarily determined by the length of its V-shaped elements.

**Answer:**
**True**. Similar to other dipole-based antennas, the overall length of the radiating elements (from the feed point to the outer edge) is the primary factor determining the resonant frequency. For a bow-tie, each element is typically designed to be approximately a quarter-wavelength long.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.** (Chapters on fundamental radiation principles and wire antennas).
*   **Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). Wiley-IEEE Press.** (Likely has sections on planar antennas and broad-band designs like the bow-tie).
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.** (Provides background on transmission lines and impedance matching, relevant for feeding antennas).

*(Note: Specific chapter references within the textbooks would be ideal if available, but these general references cover the relevant concepts.)*