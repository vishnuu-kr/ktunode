---
title: "Triangular sheet and Bow-tie antenna"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 1: Antenna theory : Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff767"
status: "completed"
scrapedAt: "2026-05-23T18:12:23.376Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Triangular Sheet and Bow-tie Antenna

---

### **Introduction to Radiating Elements and their Structures**

Antennas are transducers that convert electrical energy into electromagnetic waves and vice-versa. The fundamental element of any antenna is a **radiating element**, which is the physical structure that generates or intercepts the electromagnetic waves. The shape and configuration of these radiating elements significantly influence the antenna's performance characteristics such as radiation pattern, impedance, bandwidth, and polarization.

This module delves into the radiation mechanism of specific antenna structures, focusing on the **Triangular Sheet Antenna** and the **Bow-tie Antenna**. Understanding how these simple yet effective structures radiate electromagnetic waves is crucial for comprehending more complex antenna designs.

---

### **1. Triangular Sheet Antenna**

#### 1.1 Concept and Structure

A triangular sheet antenna is a planar antenna where the radiating element is in the shape of a triangle. This can be a solid triangular sheet or a wire loop in a triangular configuration. For simplicity and to illustrate basic principles, we often consider a **thin wire loop in a triangular shape**.

*   **Structure:** A triangular sheet antenna typically consists of a triangular conductor, often made of metal, excited by an RF source. The excitation can be achieved through a coaxial feed line, a microstrip line, or other suitable feeding mechanisms.
*   **Radiation Mechanism:** The radiation occurs due to the acceleration of charges along the conductor surfaces. When an AC voltage is applied, electrons oscillate along the triangular structure, creating oscillating electric and magnetic dipoles. These oscillating dipoles radiate electromagnetic energy into space.

#### 1.2 Radiation Characteristics (Qualitative)

*   **Radiation Pattern:** The radiation pattern of a triangular loop antenna is generally broadside, meaning the maximum radiation is perpendicular to the plane of the loop. However, the exact pattern depends on the size of the triangle relative to the wavelength and the mode of excitation.
    *   For a **small triangular loop** (circumference much smaller than wavelength), it radiates similarly to a small magnetic dipole.
    *   For a **resonant triangular loop** (circumference approximately equal to a wavelength or its multiples), it exhibits a more directional broadside pattern.
*   **Polarization:** The polarization of the radiated wave depends on the orientation of the electric current distribution on the triangular sheet.
*   **Impedance:** The input impedance of a triangular sheet antenna is influenced by its geometry, size, and the feeding method. It can be matched to transmission lines by adjusting these parameters.

#### 1.3 Key Concepts and Principles

*   **Induced EMF and Current Distribution:** The applied voltage at the feed point induces an electromotive force (EMF) that drives currents along the triangular conductor. The distribution of these currents is critical for determining the radiation.
*   **Radiation from Oscillating Dipoles:** The accelerated charges on the conductor surfaces generate oscillating electric and magnetic dipoles, which are the fundamental radiators of electromagnetic energy.
*   **Near-Field and Far-Field:** Close to the antenna (near-field), the electric and magnetic fields are complex and depend on the source distribution. Far from the antenna (far-field), the fields simplify into propagating plane waves.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


#### 1.4 Textual References

*   **Balanis, "Antenna Theory: Analysis and Design":** Chapter 4, "Wire Antennas," discusses the fundamental radiation principles of linear and loop antennas, which can be extended to understand triangular structures. The concepts of current distribution and induced EMF are well-covered.
*   **Collin, "Antennas and Radio Wave Propagation":** Chapter 3, "Radiation from Elementary Antennas," provides the theoretical framework for understanding how oscillating currents generate electromagnetic fields.

#### 1.5 Learning Outcome Alignment

*   **CO1 (Analyze the radiation mechanism):** Understanding the current distribution and dipole radiation on a triangular loop directly contributes to analyzing the radiation mechanism. (Knowledge Level: K3)

#### 1.6 Important Points to Remember

*   The shape and size of the triangular sheet are crucial for its radiation characteristics.
*   Current distribution on the conductor is the primary driver of radiation.
*   Triangular loops can be designed to operate as resonant structures.

---

### **2. Bow-tie Antenna**

#### 2.1 Concept and Structure

The Bow-tie antenna, also known as a **bow-tie dipole antenna**, is a two-dimensional planar antenna consisting of two triangular conductive surfaces extending from a central feed point. It is essentially an extension of the dipole concept into a two-dimensional plane.

*   **Structure:** The antenna consists of two isosceles triangles, usually with an apex angle of 90 degrees, joined at their apexes. These triangles are typically made of conductive material. The two halves are fed in a push-pull manner, usually by a coaxial cable whose inner conductor connects to one triangle and the outer conductor connects to the other.
*   **Radiation Mechanism:** Similar to a dipole, the bow-tie antenna radiates due to the oscillating currents flowing on its conductive surfaces. The triangular shape allows for a wider bandwidth compared to a simple dipole. The broadside radiation occurs perpendicular to the plane of the bow-tie.

#### 2.2 Radiation Characteristics

*   **Radiation Pattern:** The bow-tie antenna typically exhibits a broadside radiation pattern, with maximum radiation in the direction perpendicular to the plane of the bow-tie. The pattern is generally omnidirectional in the plane containing the bow-tie (H-plane) and has a figure-eight shape in the plane perpendicular to the bow-tie (E-plane), similar to a dipole. However, the planar nature and wider aperture can modify these patterns, leading to broader beams in certain directions.
*   **Polarization:** The antenna radiates linearly polarized waves, with the polarization aligned with the direction of the electric field across the aperture of the bow-tie.
*   **Impedance:** The bow-tie antenna has a lower characteristic impedance compared to a thin-wire dipole of the same length. This is because of its wider conducting surfaces. For example, a typical bow-tie antenna can have an impedance around 50-100 ohms, making it easier to match to common transmission lines like 50-ohm coaxial cables.
*   **Bandwidth:** A significant advantage of the bow-tie antenna is its wide bandwidth. The wider conducting surfaces allow for a wider range of frequencies to be efficiently radiated or received without significant degradation in performance. This is because the wider conductors support higher-order modes or a more distributed current, making it less sensitive to the exact resonant frequency.

#### 2.3 Key Concepts and Principles

*   **Two-Dimensional Dipole:** It can be thought of as a 2D extension of a dipole, where the current flows outwards from the feed point along the conductive surfaces.
*   **Current Distribution:** The current distribution on the triangular elements is more complex than that on a thin wire but generally flows radially outwards from the feed point.
*   **Aperture Excitation:** The wide conductive surfaces act like a radiating aperture, contributing to its broadband characteristics.
*   **Input Impedance Matching:** The inherent lower impedance of the bow-tie makes it easier to match to standard transmission lines, improving power transfer efficiency.

#### 2.4 Textual References

*   **Balanis, "Antenna Theory: Analysis and Design":** While a dedicated section on bow-tie antennas might be limited in introductory chapters, the principles of aperture antennas and the modification of dipole radiation by geometric structures are relevant. Balanis covers various dipole variations and their impedance characteristics, which provide a foundation.
*   **Milligan, "Modern Antenna Design":** Chapter 3, "Dipoles and Monopoles," and Chapter 6, "Planar Antennas," are likely to discuss variations of dipoles, including planar structures like the bow-tie, and their design considerations for broadband operation.
*   **Kraus, "Antennas for all applications":** Kraus often provides practical insights into antenna designs and their applications. He may discuss bow-tie antennas as examples of broadband elements.

#### 2.5 Learning Outcome Alignment

*   **CO1 (Analyze the radiation mechanism):** The radiation from the bow-tie can be analyzed by considering it as a form of dipole radiation enhanced by the planar conducting surfaces. Understanding how currents flow on these surfaces and generate fields is key. (Knowledge Level: K3)
*   **CO3 (Analyze and design advanced antennas):** The bow-tie antenna is a foundational element for more complex planar antennas and arrays. Understanding its broadband nature and radiation mechanism helps in analyzing and designing such advanced structures. (Knowledge Level: K4)

#### 2.6 Important Points to Remember

*   Bow-tie antennas are known for their wide bandwidth due to their planar, wide-aperture structure.
*   They offer a lower input impedance than thin-wire dipoles, facilitating matching.
*   The radiation pattern is similar to a dipole but can be broader.
*   They are commonly used in applications requiring broadband reception or transmission, such as TV antennas and radar systems.

---

### **3. Comparison and Applications**

| Feature             | Triangular Sheet Antenna (Loop)                       | Bow-tie Antenna                                       |
| :------------------ | :---------------------------------------------------- | :---------------------------------------------------- |
| **Structure**       | Conductive triangle, often a loop                     | Two triangular conductive surfaces fed at the apex    |
| **Radiation**       | Primarily broadside (depends on size/mode)            | Broadside, omnidirectional in H-plane                 |
| **Polarization**    | Depends on current distribution                       | Linear                                                |
| **Bandwidth**       | Generally narrower than bow-tie                       | Wide bandwidth                                        |
| **Impedance**       | Variable, can be matched                                | Lower impedance (e.g., 50-100 $\Omega$), easier matching |
| **Complexity**      | Simpler                                               | Slightly more complex structure                       |
| **Typical Use**     | Resonant frequency applications, simple radiators     | Broadband reception (TV), radar, RFID               |

---

### **Practice Questions and Exercises**

**Question 1:**
Explain the primary mechanism by which a triangular sheet antenna radiates electromagnetic waves. (CO1, K3)

**Answer:**
A triangular sheet antenna radiates due to the acceleration of electric charges along its conductive surface when an RF voltage is applied. This creates oscillating electric and magnetic dipoles. These oscillating dipoles generate time-varying electric and magnetic fields that propagate away from the antenna as electromagnetic waves. The distribution and amplitude of the current on the triangular structure determine the characteristics of the radiated field, such as the radiation pattern and polarization.

**Question 2:**
What is the main advantage of a bow-tie antenna over a simple thin-wire dipole of comparable size, and why is this the case? (CO3, K4)

**Answer:**
The main advantage of a bow-tie antenna over a simple thin-wire dipole is its **significantly wider bandwidth**. This is because the bow-tie antenna consists of wider conductive surfaces (triangles) compared to the thin wires of a dipole. These wider surfaces allow for a more distributed current distribution and support higher-order modes or travelling waves more effectively across a broader frequency range. The effective aperture created by the planar triangular elements also contributes to this broadband characteristic, making the antenna less sensitive to frequency variations compared to a thin-wire structure which is highly resonant.

**Question 3:**
A triangular loop antenna has a circumference significantly smaller than the wavelength of the operating signal. How would you qualitatively describe its radiation pattern and polarization? (CO1, K3)

**Answer:**
When the circumference of a triangular loop antenna is much smaller than the wavelength (electrically small loop), it behaves similarly to a small magnetic dipole.
*   **Radiation Pattern:** It radiates with maximum intensity perpendicular to the plane of the loop (broadside). In the plane of the loop, the radiation intensity is zero. This is analogous to the figure-eight pattern of a magnetic dipole in its E-plane.
*   **Polarization:** The polarization of the radiated wave will be circular or elliptical, depending on the exact current distribution, which is influenced by the feeding mechanism and the symmetry of the triangle. However, for a uniformly excited loop, it would be linearly polarized in the direction of the induced electric field if the loop was broken and fed.

**Question 4:**
Design a conceptual bow-tie antenna for receiving FM radio signals (88-108 MHz). Briefly describe its structure and why it might be suitable for this application. (CO3, K4)

**Answer:**
**Structure:** The bow-tie antenna would consist of two isosceles triangles, each with an apex angle of approximately 90 degrees. The two triangles would be joined at their apexes and fed by a coaxial cable, with the center conductor connecting to one triangle and the outer shield connecting to the other. The size of the triangles would be chosen to operate efficiently within the 88-108 MHz range. For resonance, the length of the triangular sides from the apex to the base might be on the order of $\lambda/4$ or $\lambda/2$ at the center frequency of the band.

**Suitability:** The bow-tie antenna is suitable for FM radio reception because of its wide bandwidth. This allows it to efficiently receive signals across the entire FM broadcast band without requiring frequent retuning or the use of multiple antennas. Its directional nature in one plane can also help in nullifying interference from undesired directions, although its omnidirectional characteristic in the other plane is beneficial for receiving signals from various directions. The lower impedance also makes it easier to connect to standard coaxial cables and receiver inputs, ensuring good signal transfer.

---

### **Conclusion**

The triangular sheet and bow-tie antennas serve as foundational examples in understanding how geometric structures translate electrical currents into electromagnetic radiation. While the triangular loop demonstrates basic loop radiator principles, the bow-tie antenna highlights the benefits of planar, wide-aperture designs for achieving broadband operation and impedance matching. These concepts are crucial building blocks for analyzing and designing more complex antenna systems used in modern communication technologies.