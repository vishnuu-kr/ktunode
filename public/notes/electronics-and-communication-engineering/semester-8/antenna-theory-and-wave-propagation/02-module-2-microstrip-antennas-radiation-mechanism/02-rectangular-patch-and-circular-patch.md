---
title: "Rectangular Patch and Circular Patch"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff76c"
status: "completed"
scrapedAt: "2026-05-23T18:12:26.617Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas - Radiation Mechanism

### Topic: Rectangular Patch and Circular Patch

---

### **1. Introduction to Microstrip Antennas**

Microstrip antennas, also known as patch antennas, are a class of planar antennas consisting of a radiating patch on one side of a dielectric substrate and a ground plane on the other. They are popular for their low profile, light weight, conformability, and ease of integration with microwave circuits.

**Key Concepts:**

*   **Radiating Patch:** The metallic element that radiates electromagnetic energy. It can be of various shapes, such as rectangular, circular, triangular, or annular.
*   **Dielectric Substrate:** The insulating material between the radiating patch and the ground plane. The permittivity and thickness of the substrate significantly influence the antenna's performance.
*   **Ground Plane:** A conductive plane that acts as a reflector and is essential for the radiation mechanism.
*   **Feed Line:** The mechanism used to excite the antenna, typically a microstrip line, coaxial probe, or aperture coupling.

**Learning Outcome Alignment:**

*   This section introduces microstrip antennas, which are the primary subject of this module, thereby supporting the understanding of their radiation mechanisms. (CO1: K3)

**Important Points to Remember:**

*   Microstrip antennas are resonant structures.
*   Their performance is highly dependent on the substrate material and dimensions.

---

### **2. Rectangular Microstrip Patch Antenna**

The rectangular patch is the most fundamental and widely studied microstrip antenna. It consists of a rectangular metallic patch etched on a dielectric substrate above a ground plane.

#### **2.1 Structure and Dimensions**

*   **Patch Dimensions:** Length ($L$) and width ($W$).
*   **Substrate Thickness:** $h$.
*   **Substrate Dielectric Constant:** $\epsilon_r$.
*   **Feed Point:** Typically located at a distance $x$ from the edge of the patch.

**Key Concepts:**

*   **Effective Dielectric Constant ($\epsilon_{eff}$):** The dielectric constant experienced by the electromagnetic wave propagating along the patch. It is always less than the actual dielectric constant ($\epsilon_r$) because the wave also propagates in the airgap above the patch.
    $$ \epsilon_{eff} = \frac{\epsilon_r + 1}{2} + \frac{\epsilon_r - 1}{2} \left(1 + 12 \frac{h}{W}\right)^{-1/2} $$
    *(Balanis, 4th Ed., Chapter 13)*
*   **Effective Length ($L_{eff}$):** The actual length of the patch ($L$) is extended by fringe fields at both ends by an amount $2 \Delta L$. This effective length accounts for the radiation from the edges.
    $$ L_{eff} = L + 2 \Delta L $$
    $$ \Delta L \approx 0.412 h \frac{(\epsilon_{eff} + 0.3)(\frac{W}{h} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{W}{h} + 0.8)} $$
    *(Balanis, 4th Ed., Chapter 13)*
*   **Resonant Frequency:** The fundamental resonant frequency is determined by the effective length of the patch.
    $$ f_r = \frac{c}{2 L_{eff} \sqrt{\epsilon_{eff}}} $$
    where $c$ is the speed of light in vacuum.

#### **2.2 Radiation Mechanism**

The radiation from a rectangular patch can be modeled by considering it as two radiating slots or dipoles at its edges. The dominant mode in a rectangular patch is the Transverse Magnetic (TM$_{01}$) mode, where the magnetic field is transverse to the propagation direction along the patch, and there is a component of electric field parallel to the length of the patch.

**Key Concepts:**

*   **Open-Circuit Ends:** The edges of the patch parallel to the width ($W$) are considered open-circuited due to the absence of surface currents on these edges. This leads to the existence of fringing electric fields, which radiate.
*   **Fringing Fields:** The electric fields that extend beyond the metallic edges of the patch. These fringing fields are responsible for the radiation.
*   **Slot Model:** The radiating patch can be visualized as two slots of width $h$ and length $W$ separated by a distance $L$. These slots radiate in phase for the TM$_{01}$ mode.
*   **Dominant Mode (TM$_{01}$):** For a typical rectangular patch, the dominant mode is TM$_{01\delta}$ where the last subscript indicates the mode on the surface of the patch. The radiation is primarily from the edges of length $W$. The electric field is tangential to the edges and has a sinusoidal distribution along the length.
*   **Higher-Order Modes:** Other modes like TM$_{11}$, TM$_{02}$, etc., can also exist and contribute to radiation, leading to multi-band operation or different radiation patterns.

**Visual Representation (Conceptual):**

Imagine the rectangular patch. The longest dimension ($L$) is usually designed to be close to half a wavelength in the dielectric medium to achieve resonance. The electric field is strongest at the center and goes to zero at the edges. The current flows along the length of the patch. The radiation originates from the fringing electric fields at the edges of length $W$.

#### **2.3 Radiation Pattern**

*   **Broadside Radiation:** The TM$_{01}$ mode typically produces a broadside radiation pattern, meaning the main beam is perpendicular to the plane of the antenna.
*   **Polarization:** The polarization of the radiated wave is determined by the orientation of the electric field at the radiating edges. For a simple rectangular patch, it is linearly polarized.
*   **Beamwidth:** The beamwidth is generally wide, but can be controlled by the patch dimensions and substrate properties.

#### **2.4 Feed Methods**

*   **Microstrip Line Feed:** A narrow strip of metal is extended from the edge of the patch and connected to a transmission line. The feed point position determines the impedance matching.
*   **Coaxial Probe Feed:** A coaxial cable's inner conductor is connected to the patch, and the outer conductor is connected to the ground plane. The position of the probe affects impedance matching and polarization.
*   **Aperture Coupled Feed:** A slot is cut in the ground plane beneath the patch, and the feed line is located below the ground plane. This decouples the feed from the radiating element.
*   **Edge Feed:** The patch is fed directly at its edge.

#### **2.5 Design Considerations**

*   **Bandwidth:** Microstrip patch antennas generally have narrow bandwidths (typically 1-5%). This can be improved by using thick substrates with low dielectric constants, parasitic elements, or advanced feeding techniques.
*   **Efficiency:** Radiation efficiency can be limited by dielectric and conductor losses.
*   **Gain:** The gain is typically low (5-9 dBi) due to the narrow bandwidth and inherent losses.
*   **Polarization:** Linear polarization is inherent. Dual-polarization or circular polarization can be achieved with specific patch geometries and feeding schemes (e.g., perturbing the patch shape).

**Example:**

Consider a rectangular patch antenna designed to operate at 2 GHz. Given a substrate with $\epsilon_r = 2.32$ and $h = 1.57$ mm, and assuming a patch width $W = 30$ mm, we can calculate the required length $L$. First, we would estimate $\epsilon_{eff}$ and then use it to find $\Delta L$. The effective length $L_{eff}$ would be determined from the resonant frequency equation, and then the actual length $L$ would be calculated. The feed point would be chosen to match the input impedance (e.g., 50 Ohms).

**Reference Integration:**

*   Balanis (4th Ed., Chapter 13) provides detailed analysis of the rectangular patch, including the calculation of effective dielectric constant, effective length, and resonant frequency.
*   Garg's handbook (Chapter 3) offers practical design aspects and performance analysis of rectangular microstrip antennas.

**Learning Outcome Alignment:**

*   Detailed understanding of the rectangular patch's structure, dimensions, and resonance supports analysis of its radiation mechanism. (CO1: K3)
*   The design considerations and feed methods are crucial for understanding how to design and measure the parameters of a microstrip antenna. (CO2: K4)
*   The fundamental principles discussed are foundational for analyzing more complex antenna designs. (CO3: K4)

**Important Points to Remember:**

*   The dominant radiation comes from the edges parallel to the width ($W$).
*   The resonant frequency is primarily determined by the length ($L$) and substrate properties.
*   Bandwidth is a major limitation of simple patch antennas.

---

### **3. Circular Microstrip Patch Antenna**

The circular patch antenna is another common configuration consisting of a circular metallic patch on a dielectric substrate above a ground plane.

#### **3.1 Structure and Dimensions**

*   **Patch Radius:** $a$.
*   **Substrate Thickness:** $h$.
*   **Substrate Dielectric Constant:** $\epsilon_r$.

**Key Concepts:**

*   **Effective Radius ($a_{eff}$):** Similar to the effective length in a rectangular patch, the radius of the circular patch is extended by fringe fields.
    $$ a_{eff} = a + \Delta a $$
    The formula for $\Delta a$ is similar in form to $\Delta L$, accounting for fringing.
    $$ \Delta a \approx 0.412 h \frac{(\epsilon_{eff} + 0.3)(\frac{a}{h} + 0.264)}{(\epsilon_{eff} - 0.258)(\frac{a}{h} + 0.8)} $$
    where $\epsilon_{eff}$ is calculated using the effective radius and dielectric constant.
*   **Resonant Frequency:** The fundamental resonant frequency for the dominant TM$_{11}$ mode (which is degenerate with TM$_{11}$ mode in cylindrical coordinates) is given by:
    $$ f_r = \frac{1.841 c}{2 \pi a_{eff} \sqrt{\epsilon_{eff}}} $$
    *(Balanis, 4th Ed., Chapter 13)*

#### **3.2 Radiation Mechanism**

The dominant mode in a circular patch is the TM$_{11}$ mode. In this mode, the electric field distribution is similar to the $\text{TM}_{01}$ mode of a circular waveguide, with zero axial electric field at the center and maximum at the edge.

**Key Concepts:**

*   **TM$_{11}$ Mode:** This mode is characterized by two nulls of electric field along a diameter and a maximum at the edge. The radiation is essentially from two diametrically opposite points on the edge where the electric field tangential to the edge is maximum.
*   **Slot Model:** The circular patch can be modeled as two slots placed diametrically opposite each other on the edge of a circular disk. These slots radiate in phase for the TM$_{11}$ mode.
*   **Fringing Fields:** Similar to the rectangular patch, fringing electric fields at the circumference of the circular patch are responsible for radiation.
*   **Higher-Order Modes:** TM$_{01}$, TM$_{21}$, TE$_{11}$, etc., modes can also exist and contribute to radiation at higher frequencies. The TM$_{01}$ mode has a null at the edge, so it doesn't radiate effectively in the fundamental sense, but it has a ring of current.

**Visual Representation (Conceptual):**

Imagine a circular disk. The TM$_{11}$ mode has a pattern of electric field lines originating from the circumference, peaking at two opposite points, and terminating on the ground plane. This is akin to two dipole elements oriented radially.

#### **3.3 Radiation Pattern**

*   **Broadside Radiation:** The TM$_{11}$ mode produces a broadside radiation pattern.
*   **Polarization:** The polarization of the radiated wave depends on the feed location and mode excited. For the TM$_{11}$ mode, feeding at a single point can produce linearly polarized waves. Feeding at two points with a 90-degree phase difference can produce circularly polarized waves.

#### **3.4 Feed Methods**

*   **Coaxial Probe Feed:** The most common feed method. The probe is inserted at a position that provides impedance matching. For linear polarization, the probe is placed off-center. For circular polarization, two probes are used, spaced 90 degrees apart.
*   **Microstrip Line Feed:** Similar to the rectangular patch, a microstrip line can be extended to feed the circular patch.
*   **Aperture Coupled Feed:** Similar to the rectangular patch, a slot in the ground plane can be used for feeding.

#### **3.5 Design Considerations**

*   **Bandwidth:** Similar to rectangular patches, circular patches have narrow bandwidth.
*   **Gain:** Typically in the same range as rectangular patches.
*   **Polarization:** A significant advantage is the ease of achieving circular polarization by appropriate feeding, making them suitable for satellite communication and GPS applications.

**Example:**

Design a circular patch antenna for GPS applications (around 1.575 GHz) using a substrate with $\epsilon_r = 4.4$ and $h = 1.6$ mm. The goal is to achieve circular polarization. We would first calculate the effective radius $a_{eff}$ for a target frequency, then determine the physical radius $a$. For circular polarization, two feed points would be chosen diametrically opposite on the patch, excited with a 90-degree phase difference, typically using two coaxial probes.

**Reference Integration:**

*   Balanis (4th Ed., Chapter 13) provides the analysis for circular patch antennas, including the calculation of resonant frequencies for different modes and effective radius.
*   Collin's book (Chapter 7) may offer more in-depth analysis of the field distributions and radiation from circular structures.
*   Pozar's "Microwave Engineering" (Chapter 12) discusses the design and analysis of microstrip antennas, including circular patches.

**Learning Outcome Alignment:**

*   Understanding the structure, dimensions, and dominant mode (TM$_{11}$) of the circular patch is key to analyzing its radiation mechanism. (CO1: K3)
*   The discussion on feed methods, particularly for achieving circular polarization, directly relates to designing and measuring parameters. (CO2: K4)
*   The ability to achieve circular polarization highlights the design versatility of microstrip antennas. (CO3: K4)

**Important Points to Remember:**

*   The dominant resonant mode is TM$_{11}$.
*   Circular polarization can be readily achieved.
*   The resonant frequency is determined by the effective radius and substrate properties.

---

### **4. Comparison: Rectangular vs. Circular Patch**

| Feature          | Rectangular Patch                                  | Circular Patch                                     |
| :--------------- | :------------------------------------------------- | :------------------------------------------------- |
| **Dominant Mode** | TM$_{01}$                                          | TM$_{11}$                                          |
| **Radiation**    | Primarily from edges of length $W$.                | From two diametrically opposite points on edge.    |
| **Polarization** | Inherently linearly polarized.                     | Can be linearly or circularly polarized.           |
| **Design Ease**  | Relatively simple for linear polarization.       | Slightly more complex for circular polarization.   |
| **Bandwidth**    | Generally narrow.                                  | Generally narrow.                                  |
| **Manufacturing**| Easier to manufacture complex shapes.              | Simple geometry.                                   |
| **Applications** | General purpose, wide range of applications.       | GPS, satellite communications, radar.              |

**Important Points to Remember:**

*   The choice between rectangular and circular patches often depends on the polarization requirements and design simplicity.

---

### **5. Practice Questions and Answers**

**Question 1:** Explain the primary radiation mechanism for a rectangular microstrip patch antenna. (CO1: K3)

**Answer:** The radiation from a rectangular microstrip patch antenna is primarily due to the fringing electric fields that exist at the open-circuited edges of the patch (the edges parallel to the width, $W$). These fringing fields can be visualized as two slots or dipoles radiating energy. For the dominant TM$_{01}$ mode, these radiating slots are in phase, resulting in broadside radiation.

**Question 2:** What is the dominant resonant mode in a circular microstrip patch antenna, and how does it contribute to radiation? (CO1: K3)

**Answer:** The dominant resonant mode in a circular microstrip patch antenna is the TM$_{11}$ mode. In this mode, the electric field is strongest at the circumference and has a distribution similar to that of a dipole along a diameter. This radiation is effectively from two diametrically opposite points on the edge of the patch where the tangential electric field is maximum, leading to broadside radiation.

**Question 3:** For a given substrate material and thickness, which dimension primarily dictates the resonant frequency of a rectangular patch antenna? (CO1: K3)

**Answer:** The length ($L$) of the rectangular patch antenna primarily dictates the resonant frequency. The effective length ($L_{eff} = L + 2\Delta L$), which includes the extension due to fringing fields, is used in the resonant frequency formula: $f_r = \frac{c}{2 L_{eff} \sqrt{\epsilon_{eff}}}$.

**Question 4:** How can circular polarization be achieved with a circular microstrip patch antenna? (CO2: K4)

**Answer:** Circular polarization can be achieved with a circular microstrip patch antenna by feeding it at two points located diametrically opposite on the patch and exciting these feeds with signals that are 90 degrees out of phase. This is typically accomplished using two coaxial probe feeds or specific microstrip line feed configurations.

**Question 5:** List three common feed methods for microstrip patch antennas. (CO2: K4)

**Answer:**
1.  Microstrip line feed
2.  Coaxial probe feed
3.  Aperture coupled feed

**Question 6:** What are the main advantages and disadvantages of microstrip patch antennas compared to other antenna types like dipoles? (CO1: K3)

**Answer:**
**Advantages:**
*   Low profile and light weight.
*   Conformable to curved surfaces.
*   Easy integration with microwave integrated circuits (MMICs).
*   Cost-effective to manufacture in large arrays.
*   Can be easily made dual-polarized or circularly polarized.

**Disadvantages:**
*   Narrow bandwidth.
*   Low radiation efficiency (due to dielectric and conductor losses).
*   Low gain (typically 5-9 dBi).
*   Lower power handling capability.

**Question 7 (Design Exercise):** Design a rectangular microstrip patch antenna for a resonant frequency of 10 GHz, using a substrate with $\epsilon_r = 4.4$ and thickness $h = 0.8$ mm. Assume a microstrip line feed with characteristic impedance $Z_0 = 50 \Omega$. Determine the approximate dimensions of the patch and the feed point location for impedance matching. *(This question requires calculations using formulas from textbooks and is more involved than a simple recall question. It directly addresses CO2.)*

**Answer (Conceptual Outline):**

1.  **Estimate Effective Dielectric Constant ($\epsilon_{eff}$):**
    *   Assume a width-to-length ratio, e.g., $W/h = 2$. Calculate $W$.
    *   Use the formula for $\epsilon_{eff}$ with an initial guess for $W/h$.
2.  **Calculate Effective Length ($L_{eff}$):**
    *   Using the target frequency $f_r = 10$ GHz, calculate $L_{eff} = \frac{c}{2 f_r \sqrt{\epsilon_{eff}}}$.
3.  **Calculate Fringing Length ($\Delta L$):**
    *   Use the formula for $\Delta L$ based on $h$, $W/h$, and $\epsilon_{eff}$.
4.  **Calculate Actual Patch Length ($L$):**
    *   $L = L_{eff} - 2 \Delta L$.
5.  **Calculate Patch Width ($W$):**
    *   Determine $W$ such that the input impedance at the edge is 50 $\Omega$. For a microstrip line feed, the feed point is usually positioned at a distance $x$ from the edge parallel to the length, such that the input impedance $Z_{in}$ at that point is equal to the feed line impedance (e.g., 50 $\Omega$). The input impedance varies sinusoidally along the length of the patch for the TM$_{01}$ mode.
    *   $Z_{in}(x) = R_{in} \cos^2(k_y x)$, where $R_{in}$ is the input impedance at the edge (e.g., around 300-400 $\Omega$ for TM$_{01}$ mode), and $k_y = \frac{2\pi}{\lambda_g}$ is the propagation wavenumber along the length.
    *   $x \approx \frac{\lambda_g}{2\pi} \cos^{-1} \left( \frac{Z_0}{R_{in}} \right)^{1/2}$.
    *   The width $W$ is typically chosen to resonate at a slightly higher frequency than $L$ for broader bandwidth or to achieve a desired impedance matching. A common choice is $W \approx \frac{\lambda_0}{2\sqrt{\epsilon_r}}$ for a TM$_{01}$ mode, adjusted by substrate effects.

*(Detailed numerical calculations involve iterative steps and are best performed using antenna design software or more detailed analytical methods as found in Balanis or Garg.)*

---

### **6. Alignment with Course Outcomes**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This entire module focuses on the radiation mechanism of microstrip antennas (rectangular and circular patches). The concepts of fringing fields, equivalent slot models, and dominant modes are explained to facilitate this analysis.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   The discussion on patch dimensions, effective dielectric constant, effective length/radius, resonant frequency formulas, and feed methods directly supports the design aspect. While measurements are not detailed here, understanding the design parameters is the prerequisite for measuring them.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   The fundamental understanding of rectangular and circular patches serves as the basis for analyzing and designing more complex microstrip antenna configurations, such as arrays, circularly polarized antennas, and wideband antennas, which are covered in subsequent modules.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While this topic is primarily about antenna radiation, understanding the interaction of the radiated wave with the medium is implicitly related to wave propagation. The polarization characteristics discussed for circular patches have direct implications for communication systems that rely on specific propagation modes.

---

This comprehensive study note covers the radiation mechanism of rectangular and circular microstrip patch antennas, incorporating key concepts, formulas, design considerations, and examples, while aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
